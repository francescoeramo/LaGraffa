#!/usr/bin/env python3
"""
fetch_news.py
-------------
Scarica i feed RSS configurati in RSS_SOURCES, classifica gli articoli
per categoria, genera i riassunti e sovrascrive news.js.
"""

import feedparser
import json
import re
import textwrap
from datetime import datetime, timezone
from pathlib import Path

# ---------------------------------------------------------------------------
# Configurazione fonti
# ---------------------------------------------------------------------------
RSS_SOURCES = [
    # Politica italiana
    {"name": "ANSA",           "url": "https://www.ansa.it/sito/ansait_rss.xml",                    "cat": "politica-italiana"},
    {"name": "Corriere",       "url": "https://xml2.corrieredellasera.it/rss/homepage.xml",          "cat": "politica-italiana"},
    # Geopolitica
    {"name": "BBC World",      "url": "https://feeds.bbci.co.uk/news/world/rss.xml",                 "cat": "geopolitica"},
    {"name": "AP News",        "url": "https://apnews.com/hub/world-news?output=rss",                "cat": "geopolitica"},
    # Conflitti
    {"name": "Reuters",        "url": "https://feeds.reuters.com/reuters/worldNews",                 "cat": "conflitti"},
    {"name": "Al Jazeera",     "url": "https://www.aljazeera.com/xml/rss/all.xml",                   "cat": "conflitti"},
    # AI & Tech
    {"name": "The Verge",      "url": "https://www.theverge.com/rss/index.xml",                      "cat": "ai"},
    {"name": "Wired IT",       "url": "https://www.wired.it/feed/rss",                               "cat": "ai"},
    {"name": "TechCrunch",     "url": "https://techcrunch.com/feed/",                                "cat": "ai"},
    # Economia tech
    {"name": "Il Sole 24 Ore", "url": "https://www.ilsole24ore.com/rss/economia.xml",                "cat": "economia-tech"},
    {"name": "Bloomberg Tech", "url": "https://feeds.bloomberg.com/technology/news.rss",             "cat": "economia-tech"},
    {"name": "Financial Times","url": "https://www.ft.com/rss/home",                                 "cat": "economia-tech"},
]

# Parole chiave per filtrare solo notizie rilevanti per categoria
KEYWORDS = {
    "politica-italiana": [
        "italia", "governo", "meloni", "parlamento", "senato", "camera", "ministro",
        "pd", "fdi", "lega", "forza italia", "m5s", "decreto", "riforma", "quirinale",
        "premier", "elezioni", "regione", "comune", "sindaco", "fisco",
    ],
    "geopolitica": [
        "nato", "geopolitics", "geopolitica", "summit", "diplomacy", "diplomazia",
        "us", "usa", "china", "cina", "russia", "europe", "europa", "trump", "xi",
        "un ", "onu", "g7", "g20", "sanctions", "sanzioni", "treaty", "trattato",
        "election", "elezioni", "president", "presidente",
    ],
    "conflitti": [
        "war", "guerra", "conflict", "conflitto", "ukraine", "ucraina", "russia",
        "gaza", "israel", "israele", "hamas", "attack", "attacco", "missile",
        "troops", "truppe", "ceasefire", "cessate il fuoco", "military", "militare",
        "nato", "bombing", "refugee", "profughi", "iran", "syria", "siria",
    ],
    "ai": [
        "artificial intelligence", "intelligenza artificiale", "ai ", " ai,", "machine learning",
        "openai", "chatgpt", "gpt", "gemini", "claude", "anthropic", "deepmind",
        "llm", "neural", "model", "modello", "robot", "automation", "chip",
        "nvidia", "tech", "technology", "software", "algorithm", "algoritmo",
    ],
    "economia-tech": [
        "economia", "economy", "market", "mercato", "stock", "borsa", "bce", "fed",
        "inflation", "inflazione", "rate", "tasso", "startup", "investment", "investimento",
        "gdp", "pil", "trade", "commercio", "semiconductor", "semiconduttori",
        "energy", "energia", "crypto", "bitcoin", "fintech", "ipo",
    ],
}

MAX_PER_CAT = 5  # Massimo articoli per categoria
ROOT = Path(__file__).parent.parent

# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------

def clean_html(text: str) -> str:
    """Rimuove tag HTML e normalizza spazi."""
    text = re.sub(r"<[^>]+>", " ", text or "")
    text = re.sub(r"\s+", " ", text).strip()
    return text


def truncate(text: str, max_chars: int = 300) -> str:
    if len(text) <= max_chars:
        return text
    return text[:max_chars].rsplit(" ", 1)[0] + "…"


def relative_time(entry) -> str:
    """Restituisce un tempo relativo leggibile dall'entry del feed."""
    try:
        import time
        published = entry.get("published_parsed") or entry.get("updated_parsed")
        if not published:
            return "poco fa"
        ts = datetime(*published[:6], tzinfo=timezone.utc)
        delta = datetime.now(timezone.utc) - ts
        minutes = int(delta.total_seconds() / 60)
        if minutes < 2:   return "poco fa"
        if minutes < 60:  return f"{minutes} min fa"
        hours = minutes // 60
        if hours < 24:    return f"{hours} {'ora' if hours == 1 else 'ore'} fa"
        days = hours // 24
        return f"{days} {'giorno' if days == 1 else 'giorni'} fa"
    except Exception:
        return "recente"


def score_entry(entry, cat: str) -> int:
    """Punteggio di rilevanza basato su keyword matching."""
    text = (entry.get("title", "") + " " + clean_html(entry.get("summary", ""))).lower()
    return sum(1 for kw in KEYWORDS.get(cat, []) if kw in text)


def build_body(entry) -> str:
    """Costruisce il corpo esteso dell'articolo."""
    title   = clean_html(entry.get("title", ""))
    summary = clean_html(entry.get("summary", "") or entry.get("description", ""))
    content_list = entry.get("content", [])
    full = ""
    if content_list:
        full = clean_html(content_list[0].get("value", ""))
    # Se abbiamo contenuto esteso, lo usiamo; altrimenti facciamo wrapping del summary
    body_text = full if len(full) > len(summary) + 100 else summary
    # Dividi in paragrafi leggibili (ogni ~400 caratteri)
    words = body_text.split()
    paragraphs = []
    current = []
    count = 0
    for w in words:
        current.append(w)
        count += len(w) + 1
        if count >= 380 and w.endswith("."):
            paragraphs.append(" ".join(current))
            current, count = [], 0
    if current:
        paragraphs.append(" ".join(current))
    return "\n\n".join(paragraphs) if paragraphs else summary


# ---------------------------------------------------------------------------
# Fetch
# ---------------------------------------------------------------------------

def fetch_all() -> dict[str, list]:
    buckets: dict[str, list] = {cat: [] for cat in KEYWORDS}

    for source in RSS_SOURCES:
        cat = source["cat"]
        print(f"  Fetching {source['name']} ({source['url'][:60]}…)")
        try:
            feed = feedparser.parse(source["url"])
            entries = feed.entries[:20]  # prendi i 20 più recenti
        except Exception as e:
            print(f"    ERRORE: {e}")
            continue

        for entry in entries:
            score = score_entry(entry, cat)
            if score == 0 and cat not in ("ai", "economia-tech"):
                # Per categorie specifiche filtriamo; per quelle più ampie includiamo comunque
                continue
            title   = clean_html(entry.get("title", "")).strip()
            summary = clean_html(entry.get("summary", "") or entry.get("description", ""))
            if not title or len(summary) < 40:
                continue
            buckets[cat].append({
                "title":   title,
                "summary": truncate(summary, 280),
                "body":    build_body(entry),
                "source":  source["name"],
                "url":     entry.get("link", source["url"]),
                "time":    relative_time(entry),
                "score":   score,
            })

    # Dedup per titolo e prendi i migliori per categoria
    result: dict[str, list] = {}
    for cat, items in buckets.items():
        seen_titles: set[str] = set()
        unique = []
        for item in sorted(items, key=lambda x: -x["score"]):
            norm = re.sub(r"[^a-z0-9]", "", item["title"].lower())[:60]
            if norm not in seen_titles:
                seen_titles.add(norm)
                unique.append(item)
        result[cat] = unique[:MAX_PER_CAT]
    return result


# ---------------------------------------------------------------------------
# Genera news.js
# ---------------------------------------------------------------------------

def generate_news_js(buckets: dict[str, list]) -> str:
    now = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M UTC")
    all_news = []
    news_id = 1
    for cat, items in buckets.items():
        for item in items:
            body_escaped = item["body"].replace("`", "\\`").replace("${", "\\${") 
            all_news.append({
                "id":      news_id,
                "cat":     cat,
                "title":   item["title"],
                "summary": item["summary"],
                "body":    item["body"],
                "source":  item["source"],
                "url":     item["url"],
                "time":    item["time"],
                "tags":    [],
            })
            news_id += 1

    # Genera il JS manualmente per preservare i template literal nel body
    lines = []
    lines.append(f"// Generato automaticamente il {now} da scripts/fetch_news.py")
    lines.append("// NON modificare manualmente: viene sovrascritto ogni ora dalla GitHub Action.")
    lines.append("")
    lines.append("const RSS_SOURCES = " + json.dumps(
        [{"name": s["name"], "url": s["url"], "cat": s["cat"]} for s in RSS_SOURCES],
        ensure_ascii=False, indent=2
    ) + ";")
    lines.append("")
    lines.append("const NEWS = [")
    for n in all_news:
        body_js = n["body"].replace("\\", "\\\\").replace("`", "\\`").replace("${", "\\${")
        lines.append("  {")
        lines.append(f"    id: {n['id']},")
        lines.append(f"    cat: {json.dumps(n['cat'])},")
        lines.append(f"    title: {json.dumps(n['title'], ensure_ascii=False)},")
        lines.append(f"    summary: {json.dumps(n['summary'], ensure_ascii=False)},")
        lines.append(f"    body: `{body_js}`,")
        lines.append(f"    source: {json.dumps(n['source'])},")
        lines.append(f"    url: {json.dumps(n['url'])},")
        lines.append(f"    time: {json.dumps(n['time'])},")
        lines.append(f"    tags: [],")
        lines.append("  },")
    lines.append("];")    
    return "\n".join(lines) + "\n"


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

if __name__ == "__main__":
    print("=== fetch_news.py ===")
    print(f"Avviato: {datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M UTC')}")
    print("Scaricamento feed RSS...")
    buckets = fetch_all()
    total = sum(len(v) for v in buckets.values())
    print(f"Articoli raccolti: {total}")
    for cat, items in buckets.items():
        print(f"  {cat}: {len(items)} articoli")
    js = generate_news_js(buckets)
    out_path = ROOT / "news.js"
    out_path.write_text(js, encoding="utf-8")
    print(f"news.js aggiornato ({len(js)} byte) -> {out_path}")
    print("Done.")
