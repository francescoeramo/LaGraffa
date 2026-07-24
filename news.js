// Generato automaticamente il 2026-07-24 15:38 UTC da scripts/fetch_news.py
// NON modificare manualmente: viene sovrascritto ogni ora dalla GitHub Action.
var NEWS_TIMESTAMP = 1784907493;

const RSS_SOURCES = [
  {
    "name": "ANSA",
    "url": "https://www.ansa.it/sito/ansait_rss.xml",
    "cat": "politica-italiana"
  },
  {
    "name": "Corriere",
    "url": "https://xml2.corrieredellasera.it/rss/homepage.xml",
    "cat": "politica-italiana"
  },
  {
    "name": "Il Post",
    "url": "https://www.ilpost.it/feed/",
    "cat": "politica-italiana"
  },
  {
    "name": "Sky TG24",
    "url": "https://tg24.sky.it/feed/rss.xml",
    "cat": "politica-italiana"
  },
  {
    "name": "AGI",
    "url": "https://www.agi.it/feed/rss.xml",
    "cat": "politica-italiana"
  },
  {
    "name": "Pagella Politica",
    "url": "https://pagellapolitica.it/feed",
    "cat": "politica-italiana"
  },
  {
    "name": "Facta",
    "url": "https://facta.news/feed/",
    "cat": "politica-italiana"
  },
  {
    "name": "Valigia Blu",
    "url": "https://www.valigiablu.it/feed/",
    "cat": "politica-italiana"
  },
  {
    "name": "Limes",
    "url": "https://www.limesonline.com/feed",
    "cat": "geopolitica"
  },
  {
    "name": "Internazionale",
    "url": "https://www.internazionale.it/feed/tutto",
    "cat": "geopolitica"
  },
  {
    "name": "BBC World",
    "url": "https://feeds.bbci.co.uk/news/world/rss.xml",
    "cat": "geopolitica"
  },
  {
    "name": "AP",
    "url": "https://apnews.com/hub/world-news?output=rss",
    "cat": "geopolitica"
  },
  {
    "name": "The Economist",
    "url": "https://www.economist.com/international/rss.xml",
    "cat": "geopolitica"
  },
  {
    "name": "El Pais",
    "url": "https://feeds.elpais.com/mrss-s/pages/ep/site/elpais.com/portada",
    "cat": "geopolitica"
  },
  {
    "name": "Reuters",
    "url": "https://feeds.reuters.com/reuters/worldNews",
    "cat": "conflitti"
  },
  {
    "name": "Al Jazeera",
    "url": "https://www.aljazeera.com/xml/rss/all.xml",
    "cat": "conflitti"
  },
  {
    "name": "AP conflitti",
    "url": "https://apnews.com/hub/wars-and-conflicts?output=rss",
    "cat": "conflitti"
  },
  {
    "name": "The Verge",
    "url": "https://www.theverge.com/rss/index.xml",
    "cat": "ai"
  },
  {
    "name": "Wired IT",
    "url": "https://www.wired.it/feed/rss",
    "cat": "ai"
  },
  {
    "name": "TechCrunch",
    "url": "https://techcrunch.com/feed/",
    "cat": "ai"
  },
  {
    "name": "Il Post Tech",
    "url": "https://www.ilpost.it/tecnologia/feed/",
    "cat": "ai"
  },
  {
    "name": "Il Sole 24 Ore",
    "url": "https://www.ilsole24ore.com/rss/economia.xml",
    "cat": "economia-tech"
  },
  {
    "name": "Bloomberg Tech",
    "url": "https://feeds.bloomberg.com/technology/news.rss",
    "cat": "economia-tech"
  },
  {
    "name": "Financial Times",
    "url": "https://www.ft.com/rss/home",
    "cat": "economia-tech"
  },
  {
    "name": "The Economist Ec",
    "url": "https://www.economist.com/business/rss.xml",
    "cat": "economia-tech"
  }
];

const NEWS = [
  {
    id: 1,
    cat: "politica-italiana",
    title: "Niente dispositivi digitali sotto i 3 anni, al Senato la prima proposta di legge",
    summary: "Presentata insieme alla Società di pediatria: \"Informazione e sostegno alle famiglie\"",
    body: "Presentata insieme alla Società di pediatria: \"Informazione e sostegno alle famiglie\"",
    source: "ANSA",
    url: "https://www.ansa.it/canale_saluteebenessere/notizie/salute_bambini/notizie_dai_pediatri/2026/07/23/niente-dispositivi-digitali-sotto-i-3-anni-al-senato-la-prima-proposta-di-legge_f1c6d7a7-7f41-4aea-aea5-a17ea618f624.html",
    time: "4 ore fa",
    pub_ts: 1784891528,
    tags: [],
  },
  {
    id: 2,
    cat: "politica-italiana",
    title: "I penalisti: 'Dubbi di incostituzionalità sull'imputabilità dei minorenni'",
    summary: "L'Unione delle camere penali: 'Dal ddl del governo una preoccupante regressione culturale'",
    body: "L'Unione delle camere penali: 'Dal ddl del governo una preoccupante regressione culturale'",
    source: "ANSA",
    url: "https://www.ansa.it/sito/notizie/politica/2026/07/24/i-penalisti-dubbi-di-incostituzionalita-sullimputabilita-dei-minorenni_31b52b21-f112-4d94-ac09-e911abc22d71.html",
    time: "23 min fa",
    pub_ts: 1784906098,
    tags: [],
  },
  {
    id: 3,
    cat: "politica-italiana",
    title: "La Cina: 'Contrari ai nuovi dazi Usa, le guerre commerciali non favoriscono nessuno'. Il governo Burnham minimizza",
    summary: "L'Ue: 'Le tariffe in linea con l'accordo di Turnberry, rispettare gli impegni'",
    body: "L'Ue: 'Le tariffe in linea con l'accordo di Turnberry, rispettare gli impegni'",
    source: "ANSA",
    url: "https://www.ansa.it/sito/notizie/mondo/2026/07/24/la-cina-contrari-ai-nuovi-dazi-usa-le-guerre-commerciali-non-favoriscono-nessuno._8c6edea0-fcdf-4f3e-94fb-d259badf4414.html",
    time: "5 ore fa",
    pub_ts: 1784887101,
    tags: [],
  },
  {
    id: 4,
    cat: "geopolitica",
    title: "Nigeria's president approves largest military expansion in recent times",
    summary: "The government is under intense pressure to tackle a slew of armed groups, many of whom attack civilians.",
    body: "The government is under intense pressure to tackle a slew of armed groups, many of whom attack civilians.",
    source: "BBC World",
    url: "https://www.bbc.co.uk/news/articles/cwymjx3nrxvo?at_medium=RSS&at_campaign=rss",
    time: "15 min fa",
    pub_ts: 1784906576,
    tags: [],
  },
  {
    id: 5,
    cat: "geopolitica",
    title: "US and Iran trade more strikes in Gulf as fears of escalation mount",
    summary: "It comes as Iran condemned the US plan to use frozen Iranian assets to pay for war damages.",
    body: "It comes as Iran condemned the US plan to use frozen Iranian assets to pay for war damages.",
    source: "BBC World",
    url: "https://www.bbc.co.uk/news/articles/c05ql5llj4do?at_medium=RSS&at_campaign=rss",
    time: "15 min fa",
    pub_ts: 1784906560,
    tags: [],
  },
  {
    id: 6,
    cat: "geopolitica",
    title: "Watch: Wildfires rage across Spain and France",
    summary: "Spain's government declares national emergency as French authorities order evacuations in tourist hot spot.",
    body: "Spain's government declares national emergency as French authorities order evacuations in tourist hot spot.",
    source: "BBC World",
    url: "https://www.bbc.co.uk/news/videos/cz641jd4p4lo?at_medium=RSS&at_campaign=rss",
    time: "24 min fa",
    pub_ts: 1784906026,
    tags: [],
  },
  {
    id: 7,
    cat: "conflitti",
    title: "US attacks Iran for 13th consecutive night",
    summary: "The US military says it has completed its 13th night of strikes against Iran.",
    body: "The US military says it has completed its 13th night of strikes against Iran.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/video/newsfeed/2026/7/24/us-attacks-iran-for-13th-consecutive-night?traffic_source=rss",
    time: "6 ore fa",
    pub_ts: 1784882393,
    tags: [],
  },
  {
    id: 8,
    cat: "conflitti",
    title: "‘I lost my home twice’: Sudanese mothers caught between two wars",
    summary: "Sudanese mothers who fled one war now face another, struggling to rebuild their lives after displacement in Lebanon.",
    body: "Sudanese mothers who fled one war now face another, struggling to rebuild their lives after displacement in Lebanon.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/features/longform/2026/7/24/i-lost-my-home-twice-sudanese-mothers-caught-between-two-wars?traffic_source=rss",
    time: "21 min fa",
    pub_ts: 1784906193,
    tags: [],
  },
  {
    id: 9,
    cat: "conflitti",
    title: "Five killed in occupied West Bank after Israeli settlers attack",
    summary: "Four Palestinians and one Israeli were killed in a shooting in the occupied West Bank village of Tal",
    body: "Four Palestinians and one Israeli were killed in a shooting in the occupied West Bank village of Tal",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/video/newsfeed/2026/7/24/five-killed-in-occupied-west-bank-after-israeli-settlers-attack?traffic_source=rss",
    time: "2 ore fa",
    pub_ts: 1784899157,
    tags: [],
  },
  {
    id: 10,
    cat: "ai",
    title: "How AI guardrails are impeding the work of offensive cybersecurity researchers",
    summary: "We spoke with several cybersecurity researchers, who look for unknown vulnerabilities and develop tools to exploit them, about how OpenAI’s and Anthropic’s guardrails affect their work.",
    body: "We spoke with several cybersecurity researchers, who look for unknown vulnerabilities and develop tools to exploit them, about how OpenAI’s and Anthropic’s guardrails affect their work.",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/23/how-ai-guardrails-are-impeding-the-work-of-offensive-cybersecurity-researchers/",
    time: "14 ore fa",
    pub_ts: 1784854800,
    tags: [],
  },
  {
    id: 11,
    cat: "ai",
    title: "OpenAI’s new voice mode makes it to the ChatGPT desktop app",
    summary: "ChatGPT Voice on desktop can work with both ChatGPT Work and Codex to complete tasks and control agents.",
    body: "ChatGPT Voice on desktop can work with both ChatGPT Work and Codex to complete tasks and control agents.",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/24/openais-new-voice-mode-makes-it-to-the-chatgpt-desktop-app/",
    time: "2 ore fa",
    pub_ts: 1784900202,
    tags: [],
  },
  {
    id: 12,
    cat: "ai",
    title: "Anthropic updates Claude voice mode with more capable models",
    summary: "Claude's new voice model will let you reschedule your meeting or draft an email.",
    body: "Claude's new voice model will let you reschedule your meeting or draft an email.",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/23/anthropic-updates-claude-voice-mode-with-more-capable-models/",
    time: "20 ore fa",
    pub_ts: 1784833200,
    tags: [],
  },
  {
    id: 13,
    cat: "economia-tech",
    title: "AI Startup Midjourney Buys Astrology App Co-Star and is Building Its Own Apps",
    summary: "Artificial intelligence lab Midjourney Inc. has bought the popular astrology app Co-Star and is building its first standalone image-generation app, the startup’s latest moves to push into new business areas after promising an ambitious expansion last month.",
    body: "Artificial intelligence lab Midjourney Inc. has bought the popular astrology app Co-Star and is building its first standalone image-generation app, the startup’s latest moves to push into new business areas after promising an ambitious expansion last month.",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/articles/2026-07-24/ai-startup-midjourney-buys-astrology-app-co-star-and-is-building-its-own-apps",
    time: "1 ora fa",
    pub_ts: 1784903420,
    tags: [],
  },
  {
    id: 14,
    cat: "economia-tech",
    title: "Trump’s trade war shifts from shakedown to lock-in",
    summary: "The administration wants to ensure the US ‘gets paid’ for the superpower services it provides to the world",
    body: "The administration wants to ensure the US ‘gets paid’ for the superpower services it provides to the world",
    source: "Financial Times",
    url: "https://www.ft.com/content/38341bcb-0c45-432a-bd04-fa0b9f2b790a",
    time: "2 ore fa",
    pub_ts: 1784897636,
    tags: [],
  },
  {
    id: 15,
    cat: "economia-tech",
    title: "CATL First-Half Profit Jumps 42% on Energy Storage Tailwind",
    summary: "Contemporary Amperex Technology Co. Ltd. posted a 42% increase in first-half profit as the world’s largest electric-vehicle battery maker benefited from robust demand for energy-storage systems.",
    body: "Contemporary Amperex Technology Co. Ltd. posted a 42% increase in first-half profit as the world’s largest electric-vehicle battery maker benefited from robust demand for energy-storage systems.",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/articles/2026-07-24/catl-s-first-half-profit-jumps-42-on-energy-storage-tailwind",
    time: "3 ore fa",
    pub_ts: 1784893640,
    tags: [],
  },
  {
    id: 16,
    cat: "economia-tech",
    title: "SoftBank Weighs Deal for Robotics Startup Gravis",
    summary: "SoftBank Group Corp. is considering an acquisition of Gravis Robotics AG, people familiar with the matter said, as the Japanese investor targets the artificial intelligence technologies underpinning robotics.",
    body: "SoftBank Group Corp. is considering an acquisition of Gravis Robotics AG, people familiar with the matter said, as the Japanese investor targets the artificial intelligence technologies underpinning robotics.",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/articles/2026-07-24/softbank-weighs-deal-for-robotics-startup-gravis",
    time: "6 ore fa",
    pub_ts: 1784882739,
    tags: [],
  },
];
