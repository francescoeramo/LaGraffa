// Generato automaticamente il 2026-07-24 13:59 UTC da scripts/fetch_news.py
// NON modificare manualmente: viene sovrascritto ogni ora dalla GitHub Action.
var NEWS_TIMESTAMP = 1784901524;

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
    time: "2 ore fa",
    pub_ts: 1784891528,
    tags: [],
  },
  {
    id: 2,
    cat: "politica-italiana",
    title: "Media: 'In fiamme l'Amazon russo di San Pietroburgo'. Raid su Kiev, 'sei morti'",
    summary: "Altre 'sei vittime' nella regione russa di Kirov",
    body: "Altre 'sei vittime' nella regione russa di Kirov",
    source: "ANSA",
    url: "https://www.ansa.it/sito/notizie/mondo/2026/07/24/media-in-fiamme-lamazon-russo-di-san-pietroburgo.-raid-su-kiev-sei-morti_8e3d0e08-deaf-448b-a260-c5815ed9a593.html",
    time: "2 ore fa",
    pub_ts: 1784892206,
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
    time: "4 ore fa",
    pub_ts: 1784887101,
    tags: [],
  },
  {
    id: 4,
    cat: "geopolitica",
    title: "Tanzanian lecturer arrested over anti-government protests charged with terrorism",
    summary: "He is among more than 130 people detained over planned protests calling for democratic reforms.",
    body: "He is among more than 130 people detained over planned protests calling for democratic reforms.",
    source: "BBC World",
    url: "https://www.bbc.co.uk/news/articles/cd9w2xnxe1qo?at_medium=RSS&at_campaign=rss",
    time: "1 ora fa",
    pub_ts: 1784897758,
    tags: [],
  },
  {
    id: 5,
    cat: "geopolitica",
    title: "South Africa's president wins bid to temporarily halt impeachment inquiry over 'Farmgate'",
    summary: "Ramaphosa has faced scrutiny following the theft of large sums of cash from his private farm in 2020.",
    body: "Ramaphosa has faced scrutiny following the theft of large sums of cash from his private farm in 2020.",
    source: "BBC World",
    url: "https://www.bbc.co.uk/news/articles/cwymj9lkx13o?at_medium=RSS&at_campaign=rss",
    time: "2 ore fa",
    pub_ts: 1784894029,
    tags: [],
  },
  {
    id: 6,
    cat: "geopolitica",
    title: "India's 'cockroach' protesters hold talks with government as stalemate continues",
    summary: "The meeting came hours after activist Sonam Wangchuk announced he was ending his 26-day hunger strike.",
    body: "The meeting came hours after activist Sonam Wangchuk announced he was ending his 26-day hunger strike.",
    source: "BBC World",
    url: "https://www.bbc.co.uk/news/articles/cjwx4x04yqzo?at_medium=RSS&at_campaign=rss",
    time: "3 ore fa",
    pub_ts: 1784889070,
    tags: [],
  },
  {
    id: 7,
    cat: "geopolitica",
    title: "Las explicaciones de Zapatero dejan un sabor “agridulce” en el PSOE a pesar del cierre de filas de Ferraz",
    summary: "La cúpula socialista se muestra “convencida” de la inocencia del ex presidente mientras dirigentes territoriales y cargos del Ejecutivo piensan que no fue “convincente” con las joyas",
    body: "El final del silencio de José Luis Rodríguez Zapatero le ha servido al PSOE para mitigar parcialmente el desasosiego que le carcome desde hace más de dos meses. El Gobierno y el PSOE han cerrado filas formalmente y aseguran que probará su inocencia, pero el sabor de boca que el expresidente ha dejado en su entrevista en RTVE, en la que ha negado su participación en el rescate de 53 millones de euros de la aerolínea Plus Ultra en la pandemia y no ha aclarado el origen de las joyas tasadas en 1,3 millones que guardaba en una caja fuerte en su oficina, empeora conforme se desciende en el escalafón socialista.\n\nSeguir leyendo",
    source: "El Pais",
    url: "https://elpais.com/espana/2026-07-24/las-explicaciones-de-zapatero-dejan-un-sabor-agridulce-en-el-psoe-a-pesar-del-cierre-de-filas-de-ferraz.html",
    time: "10 ore fa",
    pub_ts: 1784863801,
    tags: [],
  },
  {
    id: 8,
    cat: "conflitti",
    title: "At least 11 killed in Ukraine as Moscow and Kyiv continue to trade attacks",
    summary: "Six people also killed in Ukrainian attack on Russia’s Kirov, and Wildberries warehouses hit again.",
    body: "Six people also killed in Ukrainian attack on Russia’s Kirov, and Wildberries warehouses hit again.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/news/2026/7/24/at-least-11-killed-in-ukraine-as-moscow-and-kyiv-continue-to-trade-attacks?traffic_source=rss",
    time: "2 ore fa",
    pub_ts: 1784893504,
    tags: [],
  },
  {
    id: 9,
    cat: "conflitti",
    title: "US attacks Iran for 13th consecutive night",
    summary: "The US military says it has completed its 13th night of strikes against Iran.",
    body: "The US military says it has completed its 13th night of strikes against Iran.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/video/newsfeed/2026/7/24/us-attacks-iran-for-13th-consecutive-night?traffic_source=rss",
    time: "5 ore fa",
    pub_ts: 1784882393,
    tags: [],
  },
  {
    id: 10,
    cat: "conflitti",
    title: "Five killed in occupied West Bank after Israeli settlers attack",
    summary: "Four Palestinians and one Israeli were killed in a shooting in the occupied West Bank village of Till",
    body: "Four Palestinians and one Israeli were killed in a shooting in the occupied West Bank village of Till",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/video/newsfeed/2026/7/24/five-killed-in-occupied-west-bank-after-israeli-settlers-attack?traffic_source=rss",
    time: "39 min fa",
    pub_ts: 1784899157,
    tags: [],
  },
  {
    id: 11,
    cat: "ai",
    title: "Quanto possiamo fidarci delle AI che fanno da sole?",
    summary: "Per superare un test, due modelli di intelligenza artificiale di OpenAI hanno preso una strada imprevista: attaccare un’altra azienda",
    body: "Per superare un test, due modelli di intelligenza artificiale di OpenAI hanno preso una strada imprevista: attaccare un’altra azienda",
    source: "Il Post Tech",
    url: "https://www.ilpost.it/2026/07/22/agenti-intelligenza-artificiale-openai-hugging-face/",
    time: "1 giorno fa",
    pub_ts: 1784734397,
    tags: [],
  },
  {
    id: 12,
    cat: "ai",
    title: "How AI guardrails are impeding the work of offensive cybersecurity researchers",
    summary: "We spoke with several cybersecurity researchers, who look for unknown vulnerabilities and develop tools to exploit them, about how OpenAI’s and Anthropic’s guardrails affect their work.",
    body: "We spoke with several cybersecurity researchers, who look for unknown vulnerabilities and develop tools to exploit them, about how OpenAI’s and Anthropic’s guardrails affect their work.",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/23/how-ai-guardrails-are-impeding-the-work-of-offensive-cybersecurity-researchers/",
    time: "12 ore fa",
    pub_ts: 1784854800,
    tags: [],
  },
  {
    id: 13,
    cat: "ai",
    title: "OpenAI’s new voice mode makes it to the ChatGPT desktop app",
    summary: "ChatGPT Voice on desktop can work with both ChatGPT Work and Codex to complete tasks and control agents.",
    body: "ChatGPT Voice on desktop can work with both ChatGPT Work and Codex to complete tasks and control agents.",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/24/openais-new-voice-mode-makes-it-to-the-chatgpt-desktop-app/",
    time: "22 min fa",
    pub_ts: 1784900202,
    tags: [],
  },
  {
    id: 14,
    cat: "ai",
    title: "Claude’s voice mode is now available for Opus and Sonnet",
    summary: "Until now, voice mode has only been available on Claude Haiku, Anthropic's faster but less powerful model. Now the company is making its Opus and Sonnet models available in voice mode, and extending its reach into apps like Gmail, Slack, and Canva. When Anthropic launched voice mode last year, it was primarily focused on delivering",
    body: "Until now, voice mode has only been available on Claude Haiku , Anthropic's faster but less powerful model. Now the company is making its Opus and Sonnet models available in voice mode , and extending its reach into apps like Gmail, Slack, and Canva. When Anthropic launched voice mode last year, it was primarily focused on delivering answers to quick questions with minimal delay. But in a blog post, the company said people immediately started using voice mode for far more than casual queries.\n\nThey were using it to work \"through real business problems,\" which Haiku was not really designed for. That model \"kept conversations quick, but not alwa …",
    source: "The Verge",
    url: "https://www.theverge.com/ai-artificial-intelligence/970065/anthropic-voice-mode-claude-opus-sonnet-haiku-ai",
    time: "18 ore fa",
    pub_ts: 1784833200,
    tags: [],
  },
  {
    id: 15,
    cat: "ai",
    title: "Anthropic updates Claude voice mode with more capable models",
    summary: "Claude's new voice model will let you reschedule your meeting or draft an email.",
    body: "Claude's new voice model will let you reschedule your meeting or draft an email.",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/23/anthropic-updates-claude-voice-mode-with-more-capable-models/",
    time: "18 ore fa",
    pub_ts: 1784833200,
    tags: [],
  },
  {
    id: 16,
    cat: "economia-tech",
    title: "BP nears deal to sell solar business Lightsource to Kuwait-backed group",
    summary: "Qualitas Energy and investment arm of sovereign wealth fund in advanced talks to purchase renewables business",
    body: "Qualitas Energy and investment arm of sovereign wealth fund in advanced talks to purchase renewables business",
    source: "Financial Times",
    url: "https://www.ft.com/content/b49cffde-6610-4b20-b1fa-da1cdbca9d5c?syn-25a6b1a6=1",
    time: "1 ora fa",
    pub_ts: 1784896356,
    tags: [],
  },
  {
    id: 17,
    cat: "economia-tech",
    title: "Trump’s trade war shifts from a shakedown to a lock-in",
    summary: "The administration wants to ensure the US “gets paid” for the superpower services it provides to the world",
    body: "The administration wants to ensure the US “gets paid” for the superpower services it provides to the world",
    source: "Financial Times",
    url: "https://www.ft.com/content/38341bcb-0c45-432a-bd04-fa0b9f2b790a",
    time: "1 ora fa",
    pub_ts: 1784897636,
    tags: [],
  },
  {
    id: 18,
    cat: "economia-tech",
    title: "CATL First-Half Profit Jumps 42% on Energy Storage Tailwind",
    summary: "Contemporary Amperex Technology Co. Ltd. posted a 42% increase in first-half profit as the world’s largest electric-vehicle battery maker benefited from robust demand for energy-storage systems.",
    body: "Contemporary Amperex Technology Co. Ltd. posted a 42% increase in first-half profit as the world’s largest electric-vehicle battery maker benefited from robust demand for energy-storage systems.",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/articles/2026-07-24/catl-s-first-half-profit-jumps-42-on-energy-storage-tailwind",
    time: "2 ore fa",
    pub_ts: 1784893640,
    tags: [],
  },
  {
    id: 19,
    cat: "economia-tech",
    title: "SoftBank Weighs Deal for Robotics Startup Gravis",
    summary: "SoftBank Group Corp. is considering an acquisition of Gravis Robotics AG, people familiar with the matter said, as the Japanese investor targets the artificial intelligence technologies underpinning robotics.",
    body: "SoftBank Group Corp. is considering an acquisition of Gravis Robotics AG, people familiar with the matter said, as the Japanese investor targets the artificial intelligence technologies underpinning robotics.",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/articles/2026-07-24/softbank-weighs-deal-for-robotics-startup-gravis",
    time: "5 ore fa",
    pub_ts: 1784882739,
    tags: [],
  },
  {
    id: 20,
    cat: "economia-tech",
    title: "SK Hynix, Samsung and Kioxia Face Pivotal Earnings Test on AI Swings",
    summary: "SK Hynix Inc. and Samsung Electronics Co. are set to test investor appetite for memory chips as South Korea’s stock market — now a bellwether for global AI sentiment — grapples with violent swings driven by leveraged chip bets.",
    body: "SK Hynix Inc. and Samsung Electronics Co. are set to test investor appetite for memory chips as South Korea’s stock market — now a bellwether for global AI sentiment — grapples with violent swings driven by leveraged chip bets.",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/articles/2026-07-24/sk-hynix-samsung-and-kioxia-face-pivotal-earnings-test-on-ai-swings",
    time: "12 ore fa",
    pub_ts: 1784855907,
    tags: [],
  },
];
