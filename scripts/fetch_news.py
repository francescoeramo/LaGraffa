#!/usr/bin/env python3
"""
fetch_news.py - scarica RSS, genera news.js (ordinato per data decrescente)
e aggiorna index.html con cache-bust timestamp.
"""

import feedparser
import hashlib
import html
import json
import re
import unicodedata
from concurrent.futures import ThreadPoolExecutor, as_completed
from datetime import datetime, timezone, timedelta
from pathlib import Path
from urllib.parse import parse_qsl, urlencode, urlsplit, urlunsplit

import requests
from trafilatura import extract

RSS_SOURCES = [
    {"name": "ANSA",             "url": "https://www.ansa.it/sito/ansait_rss.xml",                          "cat": "politica-italiana"},
    {"name": "AGI",              "url": "https://www.agi.it/politica/rss",                                   "cat": "politica-italiana"},
    {"name": "Facta",            "url": "https://www.facta.news/feed.xml",                                  "cat": "politica-italiana"},
    {"name": "Pagella Politica", "url": "https://pagellapolitica.it/feed.xml",                              "cat": "politica-italiana"},
    {"name": "Valigia Blu",      "url": "https://www.valigiablu.it/feed/",                                   "cat": "politica-italiana"},
    {"name": "Internazionale",   "url": "https://www.internazionale.it/subscribe/opinioni/",                  "cat": "geopolitica"},
    {"name": "Limes",            "url": "https://www.limesonline.com/rss",                                  "cat": "geopolitica"},
    {"name": "BBC World",        "url": "https://feeds.bbci.co.uk/news/world/rss.xml",                       "cat": "geopolitica"},
    {"name": "The Economist",    "url": "https://www.economist.com/international/rss.xml",                   "cat": "geopolitica"},
    {"name": "El Pais",          "url": "https://feeds.elpais.com/mrss-s/pages/ep/site/elpais.com/portada",  "cat": "geopolitica"},
    {"name": "Al Jazeera",       "url": "https://www.aljazeera.com/xml/rss/all.xml",                         "cat": "conflitti"},
    {"name": "The Verge",        "url": "https://www.theverge.com/rss/index.xml",                            "cat": "ai"},
    {"name": "Wired IT",         "url": "https://www.wired.it/feed/rss",                                     "cat": "ai"},
    {"name": "TechCrunch",       "url": "https://techcrunch.com/feed/",                                      "cat": "ai"},
    {"name": "Il Post Tech",     "url": "https://www.ilpost.it/tecnologia/feed/",                            "cat": "ai"},
    {"name": "Il Sole 24 Ore",   "url": "https://www.ilsole24ore.com/rss/economia.xml",                      "cat": "economia-tech"},
    {"name": "Bloomberg Tech",   "url": "https://feeds.bloomberg.com/technology/news.rss",                   "cat": "economia-tech"},
    {"name": "Financial Times",  "url": "https://www.ft.com/rss/home",                                       "cat": "economia-tech"},
    {"name": "The Economist Ec", "url": "https://www.economist.com/business/rss.xml",                        "cat": "economia-tech"},
]

# Le fonti italiane restano il punto di partenza: la priorità interviene solo
# a parità di freschezza e rilevanza, senza nascondere il necessario contesto estero.
ITALIAN_SOURCES = {"ANSA", "AGI", "Facta", "Pagella Politica", "Valigia Blu", "Internazionale", "Limes", "Wired IT", "Il Post Tech", "Il Sole 24 Ore"}
BROAD_SOURCES = {"ANSA", "AGI", "Facta", "Pagella Politica", "Internazionale", "BBC World", "El Pais"}
REQUESTED_PUBLISHERS = {"Facta", "Internazionale", "Limes", "Pagella Politica"}

KEYWORDS = {
    "politica-italiana": ["governo", "parlamento", "senato", "camera", "ministro", "ministero", "meloni", "quirinale", "presidente della repubblica", "elezioni", "referendum", "decreto", "riforma", "legge", "bilancio", "partito", "coalizione", "regione", "comune", "sindaco", "politica italiana", "terremoto", "alluvione", "protezione civile", "strage", "mafia", "tribunale", "scuola", "sanità"],
    "geopolitica": ["geopolitica", "diplomazia", "diplomacy", "nato", "onu", "united nations", "unione europea", "european union", "g7", "g20", "sanzioni", "sanctions", "trattato", "treaty", "summit", "elezioni", "election", "presidente", "president", "governo", "government", "cina", "china", "russia", "usa", "iran"],
    "conflitti": ["guerra", "war", "conflitto", "conflict", "ucraina", "ukraine", "gaza", "israele", "israel", "hamas", "iran", "siria", "syria", "attacco", "attack", "missile", "truppe", "troops", "cessate il fuoco", "ceasefire", "militare", "military", "bombardamento", "bombing", "rifugiati", "refugees"],
    "ai": ["intelligenza artificiale", "artificial intelligence", "machine learning", "generative ai", "openai", "chatgpt", "gpt", "gemini", "claude", "anthropic", "deepmind", "deepseek", "llm", "modello linguistico", "language model", "robotica", "robotics", "semiconduttori", "semiconductors", "chip", "nvidia", "cybersecurity", "sicurezza informatica", "privacy", "antitrust", "algoritmo", "algorithm", "data center", "startup", "ricerca", "research"],
    "economia-tech": ["economia", "economy", "mercato", "markets", "borsa", "stock market", "bce", "ecb", "fed", "inflazione", "inflation", "tassi", "interest rates", "startup", "investimenti", "investment", "pil", "gdp", "commercio", "trade", "semiconduttori", "semiconductors", "energia", "energy", "fintech", "ipo", "occupazione", "employment"],
}

STRONG_CATEGORY_PATTERNS = {
    "geopolitica": r"\b(nato|onu|g7|g20|sanzioni|sanctions|diplomazia|diplomacy|trattato|treaty)\b",
    "conflitti": r"\b(guerra|war|conflitto|conflict|ucraina|ukraine|gaza|israele|israel|hamas|missile|raid|attacco|attacchi|bombardamento|bombing|ceasefire)\b",
    "ai": r"\b(ai act|intelligenza artificiale|artificial intelligence|openai|chatgpt|anthropic|claude|deepmind|deepseek|cybersecurity|cyberattack|hacker|hackers)\b",
    "economia-tech": r"\b(inflazione|inflation|tassi d.interesse|interest rates|borsa|stock market|bce|ecb|federal reserve|ipo|pil|gdp)\b",
}

# Contenuti promozionali, gossip e consumer news non coerenti con la linea editoriale.
LOW_VALUE_PATTERNS = [
    r"\b(sconto|sconti|offerta|offerte|coupon|codice sconto|in saldo|prezzo più basso)\b",
    r"\b(discount|discounts|coupon|price drop|percent off|where to buy|buy now)\b",
    r"\b(gossip|vip|celebrity|red carpet|oroscopo|royal family|reality show)\b",
    r"\b(bundle|accessori per smartphone|phone accessories|fight stick|gaming controller)\b",
    r"\b(deal|deals|starter kit|lowest price|low price|prime day|black friday)\b",
    r"\b(fifa|world cup|champions league|football|soccer|serie a)\b",
    r"\b(recensione|review)\b.{0,80}\b(cuffie|earbuds|smartwatch|smart ring|console|smartphone)\b",
]

# Frasi boilerplate da rimuovere dal corpo degli articoli
BOILERPLATE_PATTERNS = [
    r"(?i)continua\s+a\s+leggere[^.]{0,60}[.…]?",
    r"(?i)leggi\s+(l.articolo|tutto|di\s+pi\u00f9)[^.]{0,60}[.…]?",
    r"(?i)in\s+continuo\s+aggiornamento[^.]{0,60}[.…]?",
    r"(?i)notizia\s+in\s+aggiornamento[^.]{0,60}[.…]?",
    r"(?i)articolo\s+in\s+aggiornamento[^.]{0,60}[.…]?",
    r"(?i)seguono\s+aggiornamenti[^.]{0,60}[.…]?",
    r"(?i)aggiornamento\s+in\s+corso[^.]{0,60}[.…]?",
    r"(?i)this\s+story\s+is\s+(being\s+)?updated[^.]{0,60}[.…]?",
    r"(?i)this\s+is\s+a\s+developing\s+story[^.]{0,60}[.…]?",
    r"(?i)developing\s+story[^.]{0,60}[.…]?",
    r"(?i)this\s+article\s+will\s+be\s+updated[^.]{0,60}[.…]?",
    r"(?i)read\s+(more|the\s+full\s+(story|article))[^.]{0,60}[.…]?",
    r"(?i)click\s+here\s+to\s+read[^.]{0,60}[.…]?",
    r"(?i)subscribe\s+to\s+read[^.]{0,80}[.…]?",
    r"(?i)per\s+leggere\s+l.articolo\s+completo[^.]{0,60}[.…]?",
    r"(?i)\s*\bleggi\s*$",
    r"(?i)\[\s*\u2026\s*\]",
    r"(?i)\(\s*segue\s*\)",
    r"(?i)\(\s*ansa\s*\)",
    r"(?i)—\s*reuters\.?$",
    r"(?i)reporting\s+by[^.]{0,80}[.…]?",
    r"(?i)editing\s+by[^.]{0,80}[.…]?",
    r"(?i)compiled\s+by[^.]{0,80}[.…]?",
    r"(?i)riproduzione\s+riservata(?:\s+©)?(?:\s+copyright)?[^.\n]{0,80}$",
    r"(?i)published\s+on\s+\d{1,2}\s+\w+\s+\d{4}\s*$",
]

MAX_PER_CAT    = 20
MAX_PER_SOURCE = 3
MAX_AGE_HOURS  = 48
ANALYSIS_MAX_AGE_HOURS = 168
MAX_EMBEDDED_SUMMARY_CHARS = 2000
PREVIEW_MIN_CHARS = 280
PREVIEW_MAX_CHARS = 560
MIN_USABLE_PREVIEW_CHARS = 220
MAX_ARTICLE_CHARS = 50000
ARTICLE_FETCH_WORKERS = 6
MIN_TOTAL_ARTICLES = 10
REQUEST_TIMEOUT = (5, 20)
ROOT = Path(__file__).parent.parent

TRACKING_QUERY_KEYS = {"fbclid", "gclid", "mc_cid", "mc_eid", "ref", "ref_src"}
STOPWORDS = {
    "alla", "alle", "anche", "come", "con", "dalla", "delle", "dello", "dopo", "into",
    "nella", "nelle", "sono", "sulla", "sulle", "the", "that", "this", "with", "from",
    "have", "will", "your", "about", "over", "under", "para", "como", "esta", "este",
}


def clean_html(text):
    text = str(text or "")
    # Alcuni feed annidano le entità (es. &amp;#039;): due passaggi le risolvono.
    text = html.unescape(html.unescape(text))
    text = re.sub(r"<[^>]+>", " ", text)
    text = unicodedata.normalize("NFC", text)
    # Ripara il mojibake UTF-8 interpretato come latin-1, senza alterare testo valido.
    if any(marker in text for marker in ("Ã", "Â", "â€", "â€™", "â€œ", "â€")):
        try:
            repaired = text.encode("latin-1").decode("utf-8")
            if sum(text.count(m) for m in ("Ã", "Â", "â")) > sum(repaired.count(m) for m in ("Ã", "Â", "â")):
                text = repaired
        except (UnicodeEncodeError, UnicodeDecodeError):
            pass
    return re.sub(r"\s+", " ", text).strip()

def remove_boilerplate(text):
    for pattern in BOILERPLATE_PATTERNS:
        text = re.sub(pattern, "", text)
    # Rimuovi righe vuote multiple lasciate dalla rimozione
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text.strip()

def truncate(text, max_chars=400):
    if len(text) <= max_chars:
        return text
    return text[:max_chars].rsplit(" ", 1)[0] + "\u2026"

def truncate_at_sentence(text, max_chars):
    """Accorcia senza spezzare una frase quando è disponibile un confine utile."""
    text = re.sub(r"\s+", " ", str(text or "")).strip()
    if len(text) <= max_chars:
        return text
    window = text[:max_chars + 1]
    boundaries = [match.end() for match in re.finditer(r"[.!?](?=\s|$)", window)]
    useful = [position for position in boundaries if position >= int(max_chars * 0.6)]
    if useful:
        return window[:useful[-1]].strip()
    return window[:max_chars].rsplit(" ", 1)[0].rstrip(" ,;:") + "…"

def get_pub_dt(entry):
    parsed = entry.get("published_parsed") or entry.get("updated_parsed")
    if not parsed:
        return None
    try:
        return datetime(*parsed[:6], tzinfo=timezone.utc)
    except Exception:
        return None

def relative_time(dt):
    if dt is None:
        return "poco fa"
    delta = datetime.now(timezone.utc) - dt
    minutes = int(delta.total_seconds() / 60)
    if minutes < 2:   return "poco fa"
    if minutes < 60:  return f"{minutes} min fa"
    hours = minutes // 60
    if hours < 24:    return f"{hours} {'ora' if hours == 1 else 'ore'} fa"
    days = hours // 24
    return f"{days} {'giorno' if days == 1 else 'giorni'} fa"

def score_entry(entry, cat):
    text = (clean_html(entry.get("title", "")) + " " + clean_html(entry.get("summary", ""))).lower()
    return sum(1 for kw in KEYWORDS.get(cat, []) if re.search(rf"(?<!\w){re.escape(kw)}(?!\w)", text))

def classify_entry(entry, source):
    """Classifica i feed generalisti dal contenuto; conserva la sezione dei feed verticali."""
    default_cat = source["cat"]
    scores = {cat: score_entry(entry, cat) for cat in KEYWORDS}
    if source["name"] not in BROAD_SOURCES:
        return default_cat, scores[default_cat]
    text = f"{clean_html(entry.get('title', ''))} {clean_html(entry.get('summary', ''))}".casefold()
    strong_candidates = [cat for cat, pattern in STRONG_CATEGORY_PATTERNS.items() if re.search(pattern, text, re.IGNORECASE)]
    if strong_candidates:
        specificity = {"conflitti": 5, "ai": 4, "economia-tech": 3, "geopolitica": 2}
        selected = max(strong_candidates, key=lambda cat: (scores[cat], specificity[cat]))
        return selected, max(1, scores[selected])
    score = scores[default_cat]
    return default_cat, max(1, score) if source["name"] in REQUESTED_PUBLISHERS else score

def canonical_url(value):
    try:
        parts = urlsplit(str(value or "").strip())
        query = urlencode([
            (key, val) for key, val in parse_qsl(parts.query, keep_blank_values=True)
            if not key.lower().startswith("utm_") and key.lower() not in TRACKING_QUERY_KEYS
        ])
        path = parts.path.rstrip("/") or "/"
        return urlunsplit((parts.scheme.lower(), parts.netloc.lower(), path, query, ""))
    except ValueError:
        return str(value or "").strip()

def stable_id(source_name, entry, url, title):
    identity = canonical_url(entry.get("id") or entry.get("guid") or url)
    if not identity:
        identity = f"{source_name}|{title.casefold()}"
    return hashlib.sha256(identity.encode("utf-8")).hexdigest()[:20]

def detect_language(text):
    words = re.findall(r"[a-zà-ÿ]+", text.casefold())
    italian = sum(word in {"il", "lo", "la", "gli", "le", "di", "del", "della", "che", "per", "con", "sono", "nel", "nella", "alla"} for word in words)
    spanish = sum(word in {"el", "la", "los", "las", "de", "del", "que", "para", "con", "según", "una", "un", "en"} for word in words)
    english = sum(word in {"the", "of", "and", "to", "in", "for", "with", "is", "are", "from", "that", "on"} for word in words)
    scores = {"it": italian, "es": spanish, "en": english}
    language = max(scores, key=scores.get)
    return language if scores[language] else "en"

def content_tokens(item):
    text = f"{item['title']} {item['summary']}".casefold()
    return {
        token for token in re.findall(r"[a-zà-ÿ0-9]{4,}", text)
        if token not in STOPWORDS
    }

def is_duplicate(item, selected):
    item_url = canonical_url(item["url"])
    item_tokens = content_tokens(item)
    for existing in selected:
        if item_url and item_url == canonical_url(existing["url"]):
            return True
        other_tokens = content_tokens(existing)
        union = item_tokens | other_tokens
        similarity = len(item_tokens & other_tokens) / len(union) if union else 0
        threshold = 0.55 if item["source"] == existing["source"] else 0.72
        if similarity >= threshold:
            return True
    return False

def is_low_value(title, summary):
    text = f"{title} {summary}".lower()
    return any(re.search(pattern, text, re.IGNORECASE) for pattern in LOW_VALUE_PATTERNS)

def has_complete_excerpt(summary, source_name):
    """Esclude le mere etichette che non spiegano davvero la notizia."""
    if source_name not in REQUESTED_PUBLISHERS:
        return len(summary) >= 20
    generic = r"(?i)^(il |la )?(riassunto|rassegna)\b.{0,80}(giorni|settimana)[.!]?$"
    return len(summary) >= 90 and len(summary.split()) >= 12 and not re.search(generic, summary)

def build_body(entry):
    """Preserva integralmente la sintesi più completa fornita dal feed."""
    summary = clean_html(entry.get("summary", "") or entry.get("description", ""))

    # Cerca il contenuto piu' lungo disponibile nell'RSS
    content_list = entry.get("content", [])
    full = ""
    for c in content_list:
        candidate = clean_html(c.get("value", ""))
        if len(candidate) > len(full):
            full = candidate

    # Alcuni feed duplicano qui l'intero articolo: in quel caso conserviamo la
    # sintesi editoriale completa invece di ripubblicare il testo. Usiamo il
    # contenuto embedded solo quando è chiaramente una sinossi più dettagliata.
    use_embedded = full and len(full) > len(summary) + 50 and len(full) <= MAX_EMBEDDED_SUMMARY_CHARS
    body = full if use_embedded else summary

    # Rimuovi frasi boilerplate
    body = remove_boilerplate(body)

    # Se il corpo e' gia' diviso in paragrafi, rispetta la struttura
    if "\n\n" in body:
        paragraphs = [p.strip() for p in body.split("\n\n") if p.strip()]
        return "\n\n".join(paragraphs)

    # Altrimenti, spezza in paragrafi ogni ~400 caratteri al punto fermo
    words = body.split()
    paragraphs, current, count = [], [], 0
    for w in words:
        current.append(w)
        count += len(w) + 1
        if count >= 400 and w.endswith("."):
            paragraphs.append(" ".join(current))
            current, count = [], 0
    if current:
        paragraphs.append(" ".join(current))

    return "\n\n".join(paragraphs)

def clean_article_text(value):
    """Normalizza il testo estratto conservando una struttura leggibile."""
    paragraphs = []
    for raw_line in re.split(r"\n+", str(value or "")):
        line = remove_boilerplate(clean_html(raw_line))
        if line and (not paragraphs or line != paragraphs[-1]):
            paragraphs.append(line)
    return "\n\n".join(paragraphs)

def build_preview(summary, body):
    """Crea una preview omogenea usando anche l'incipit quando il feed è scarno."""
    summary = remove_boilerplate(clean_html(summary))
    body_flat = re.sub(r"\s+", " ", str(body or "")).strip()
    candidate = summary
    if len(candidate) < PREVIEW_MIN_CHARS and len(body_flat) > len(candidate):
        candidate = body_flat
    return truncate_at_sentence(candidate, PREVIEW_MAX_CHARS)

def fetch_public_article(item):
    """Estrae il testo leggibile della pagina pubblica senza aggirare blocchi o paywall."""
    try:
        response = requests.get(
            item["url"], timeout=REQUEST_TIMEOUT, allow_redirects=True,
            headers={"User-Agent": "LaGraffa/1.0 (+https://la-graffa.vercel.app)"},
        )
        response.raise_for_status()
        if "text/html" not in response.headers.get("content-type", "").lower():
            return None
        content_length = int(response.headers.get("content-length") or 0)
        if content_length > 5_000_000 or len(response.content) > 5_000_000:
            return None
        extracted = extract(
            response.text, url=response.url, output_format="txt",
            include_comments=False, include_tables=False, favor_recall=True,
        )
        article_text = clean_article_text(extracted)
        is_short_video = "/video/" in response.url and len(article_text) >= 250 and len(article_text.split()) >= 40
        if not is_short_video and (len(article_text) < max(600, len(item["summary"]) + 200) or len(article_text.split()) < 100):
            return None
        if len(article_text) <= MAX_ARTICLE_CHARS:
            return article_text
        return truncate_at_sentence(article_text, MAX_ARTICLE_CHARS)
    except Exception:
        return None

def enrich_selected_articles(result):
    """Arricchisce solo gli articoli selezionati, in parallelo e con fallback al feed."""
    items = [item for category_items in result.values() for item in category_items]
    full_count = 0
    with ThreadPoolExecutor(max_workers=ARTICLE_FETCH_WORKERS) as executor:
        futures = {executor.submit(fetch_public_article, item): item for item in items}
        for future in as_completed(futures):
            item = futures[future]
            article_text = future.result()
            if article_text:
                item["body"] = article_text
                item["content_status"] = "full"
                full_count += 1
            else:
                item["content_status"] = "feed"
            item["preview"] = build_preview(item["summary"], item["body"])
    for category, category_items in result.items():
        result[category] = [
            item for item in category_items
            if item["content_status"] == "full" or len(item["preview"]) >= MIN_USABLE_PREVIEW_CHARS
        ]
    return full_count

def fetch_all():
    buckets = {cat: [] for cat in KEYWORDS}
    successful_sources, failed_sources = [], []
    session = requests.Session()
    session.headers.update({"User-Agent": "LaGraffa/1.0 (+https://la-graffa.vercel.app)"})

    for source in RSS_SOURCES:
        print(f"  Fetching {source['name']}...")
        max_age = ANALYSIS_MAX_AGE_HOURS if source["name"] in REQUESTED_PUBLISHERS else MAX_AGE_HOURS
        cutoff = datetime.now(timezone.utc) - timedelta(hours=max_age)
        try:
            response = session.get(source["url"], timeout=REQUEST_TIMEOUT)
            response.raise_for_status()
            feed = feedparser.parse(response.content)
            entries = feed.entries[:40]  # leggi piu' voci per avere piu' scelta
            if not entries:
                raise ValueError("feed senza articoli")
            successful_sources.append(source["name"])
        except Exception as e:
            print(f"    ERRORE: {e}")
            failed_sources.append(source["name"])
            continue

        for entry in entries:
            pub_dt = get_pub_dt(entry)
            if pub_dt and pub_dt < cutoff:
                continue

            title   = clean_html(entry.get("title", "")).strip()
            summary = remove_boilerplate(clean_html(entry.get("summary", "") or entry.get("description", "")))
            if not title or not has_complete_excerpt(summary, source["name"]):
                continue

            cat, score = classify_entry(entry, source)
            if score == 0 or is_low_value(title, summary):
                continue

            pub_ts = int(pub_dt.timestamp()) if pub_dt else 0
            body   = build_body(entry)
            url = canonical_url(entry.get("link", source["url"]))

            buckets[cat].append({
                "id":      stable_id(source["name"], entry, url, title),
                "title":   title,
                "summary": summary,
                "body":    body,
                "source":  source["name"],
                "url":     url,
                "time":    relative_time(pub_dt),
                "pub_ts":  pub_ts,
                "published_at": pub_dt.isoformat() if pub_dt else None,
                "language": detect_language(f"{title} {summary}"),
                "score":   score,
                "italian_priority": source["name"] in ITALIAN_SOURCES,
            })

    result = {}
    for cat, items in buckets.items():
        seen = set()
        unique = []
        source_counts = {}
        # Ordiniamo per freschezza, pertinenza e priorità italiana, mantenendo un
        # limite per testata per non trasformare la rassegna nel feed di un editore.
        for item in sorted(items, key=lambda x: (x["pub_ts"], x["score"], x["italian_priority"]), reverse=True):
            source = item["source"]
            if item["id"] not in seen and not is_duplicate(item, unique) and source_counts.get(source, 0) < MAX_PER_SOURCE:
                seen.add(item["id"])
                unique.append(item)
                source_counts[source] = source_counts.get(source, 0) + 1
            if len(unique) >= MAX_PER_CAT:
                break
        result[cat] = unique
    total = sum(len(items) for items in result.values())
    if total < MIN_TOTAL_ARTICLES:
        raise RuntimeError(f"raccolti solo {total} articoli: news.js esistente preservato")
    full_text_articles = enrich_selected_articles(result)
    total = sum(len(items) for items in result.values())
    if total < MIN_TOTAL_ARTICLES:
        raise RuntimeError(f"rimasti solo {total} articoli con un estratto adeguato: news.js esistente preservato")
    meta = {
        "successful_sources": len(successful_sources),
        "failed_sources": failed_sources,
        "total_sources": len(RSS_SOURCES),
        "total_articles": total,
        "full_text_articles": full_text_articles,
    }
    return result, meta

def js_string(s):
    return json.dumps(s, ensure_ascii=False)

def generate_news_js(buckets, ts, meta):
    now = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M UTC")
    lines = []
    lines.append(f"// Generato automaticamente il {now} da scripts/fetch_news.py")
    lines.append("// NON modificare manualmente: viene sovrascritto ogni ora dalla GitHub Action.")
    lines.append(f"var NEWS_TIMESTAMP = {ts};")
    lines.append("const FEED_META = " + json.dumps(meta, ensure_ascii=False) + ";")
    lines.append("")
    lines.append("const RSS_SOURCES = " + json.dumps(
        [{"name": s["name"], "url": s["url"], "cat": s["cat"]} for s in RSS_SOURCES],
        ensure_ascii=False, indent=2
    ) + ";")
    lines.append("")
    lines.append("const NEWS = [")
    for cat, items in buckets.items():
        for item in items:
            lines.append("  {")
            lines.append(f"    id: {js_string(item['id'])},")
            lines.append(f"    cat: {js_string(cat)},")
            lines.append(f"    title: {js_string(item['title'])},")
            lines.append(f"    summary: {js_string(item['summary'])},")
            lines.append(f"    preview: {js_string(item['preview'])},")
            lines.append(f"    body: {js_string(item['body'])},")
            lines.append(f"    content_status: {js_string(item['content_status'])},")
            lines.append(f"    source: {js_string(item['source'])},")
            lines.append(f"    url: {js_string(item['url'])},")
            lines.append(f"    time: {js_string(item['time'])},")
            lines.append(f"    pub_ts: {item['pub_ts']},")
            lines.append(f"    published_at: {js_string(item['published_at'])},")
            lines.append(f"    language: {js_string(item['language'])},")
            lines.append(f"    score: {item['score']},")
            lines.append("  },")
    lines.append("];")    
    return "\n".join(lines) + "\n"

def update_index_html(ts):
    index_path = ROOT / "index.html"
    html = index_path.read_text(encoding="utf-8")
    html = re.sub(
        r'(<script src="news\.js)(?:\?t=\d+)?(">)',
        rf'\g<1>?t={ts}\2',
        html
    )
    index_path.write_text(html, encoding="utf-8")
    print(f"index.html aggiornato con ?t={ts}")

if __name__ == "__main__":
    print("=== fetch_news.py ===")
    ts = int(datetime.now(timezone.utc).timestamp())
    print(f"Avviato: {datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M UTC')} (ts={ts})")
    buckets, meta = fetch_all()
    total = sum(len(v) for v in buckets.values())
    print(f"Articoli raccolti: {total}")
    for cat, items in buckets.items():
        print(f"  {cat}: {len(items)}")
    js = generate_news_js(buckets, ts, meta)
    out_path = ROOT / "news.js"
    out_path.write_text(js, encoding="utf-8")
    print(f"news.js aggiornato ({len(js)} byte)")
    update_index_html(ts)
