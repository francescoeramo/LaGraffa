// Generato automaticamente il 2026-07-24 23:07 UTC da scripts/fetch_news.py
// NON modificare manualmente: viene sovrascritto ogni ora dalla GitHub Action.
var NEWS_TIMESTAMP = 1784934439;

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
    title: "Governo al lavoro sui carburanti, allo studio anche accise mobili",
    summary: "Meloni vede Giorgetti. Ue: 'Ora nessun problema di forniture, ma l'impatto potrebbe arrivare'",
    body: "Meloni vede Giorgetti. Ue: 'Ora nessun problema di forniture, ma l'impatto potrebbe arrivare'",
    source: "ANSA",
    url: "https://www.ansa.it/sito/notizie/economia/2026/07/24/governo-al-lavoro-su-carburanti-allo-studio-anche-accise-mobili_52a71d7e-633f-4fd1-a27f-3bdb30492e1f.html",
    time: "3 ore fa",
    pub_ts: 1784921611,
    tags: [],
  },
  {
    id: 2,
    cat: "politica-italiana",
    title: "Niente dispositivi digitali sotto i 3 anni, al Senato la prima proposta di legge",
    summary: "Presentata insieme alla Società di pediatria: \"Informazione e sostegno alle famiglie\"",
    body: "Presentata insieme alla Società di pediatria: \"Informazione e sostegno alle famiglie\"",
    source: "ANSA",
    url: "https://www.ansa.it/canale_saluteebenessere/notizie/salute_bambini/notizie_dai_pediatri/2026/07/23/niente-dispositivi-digitali-sotto-i-3-anni-al-senato-la-prima-proposta-di-legge_f1c6d7a7-7f41-4aea-aea5-a17ea618f624.html",
    time: "11 ore fa",
    pub_ts: 1784891528,
    tags: [],
  },
  {
    id: 3,
    cat: "politica-italiana",
    title: "Ilaria Cucchi: 'Da anni denunciamo fatti gravi nella scuola della GdF dell'Aquila'",
    summary: "La parlamentare: 'Segnalate violenze, ma dal governo mai una risposta'",
    body: "La parlamentare: 'Segnalate violenze, ma dal governo mai una risposta'",
    source: "ANSA",
    url: "https://www.ansa.it/sito/notizie/cronaca/2026/07/24/ilaria-cucchi-da-anni-denunciamo-fatti-gravi-nella-scuola-della-gdf_73bf495c-f33a-47d0-af68-eabecf463767.html",
    time: "3 ore fa",
    pub_ts: 1784921856,
    tags: [],
  },
  {
    id: 4,
    cat: "geopolitica",
    title: "World chess chief faces endgame after EU announces Russia war sanctions",
    summary: "Arkady Dvorkovich, a former Russian deputy prime minister, now faces an EU travel ban and asset freeze.",
    body: "Arkady Dvorkovich, a former Russian deputy prime minister, now faces an EU travel ban and asset freeze.",
    source: "BBC World",
    url: "https://www.bbc.co.uk/news/articles/cewrk58k2k4o?at_medium=RSS&at_campaign=rss",
    time: "6 ore fa",
    pub_ts: 1784909331,
    tags: [],
  },
  {
    id: 5,
    cat: "geopolitica",
    title: "Nigeria's president approves largest military expansion in recent times",
    summary: "The government is under intense pressure to tackle a slew of armed groups, many of whom attack civilians.",
    body: "The government is under intense pressure to tackle a slew of armed groups, many of whom attack civilians.",
    source: "BBC World",
    url: "https://www.bbc.co.uk/news/articles/cwymjx3nrxvo?at_medium=RSS&at_campaign=rss",
    time: "7 ore fa",
    pub_ts: 1784906576,
    tags: [],
  },
  {
    id: 6,
    cat: "geopolitica",
    title: "Dimiten el presidente y el CEO de Plus Ultra, investigados por el rescate de la aerolínea en 2021",
    summary: "El accionista minoritario Hugo Castaño toma las riendas a la espera de ser ratificado como nuevo presidente por la SEPI",
    body: "Giro inesperado en el caso del rescate de Plus Ultra, instruido en la Audiencia Nacional por el juez José Luis Calama y en el que está imputado el expresidente del Gobierno José Luis Rodríguez Zapatero ante indicios de tráfico de influencias para obtener la financiación de 53 millones de euros firmada en marzo de 2021 por la aerolínea. Los dos máximos responsables de la empresa, el presidente Julio Martínez Sola y el consejero delegado Roberto Roselli, también investigados en esta causa, han presentado la dimisión de sus respectivos cargos.\n\nSeguir leyendo",
    source: "El Pais",
    url: "https://elpais.com/economia/2026-07-24/dimiten-el-presidente-y-el-ceo-de-plus-ultra-investigados-por-el-rescate-de-la-aerolinea-en-2021.html",
    time: "2 ore fa",
    pub_ts: 1784926993,
    tags: [],
  },
  {
    id: 7,
    cat: "geopolitica",
    title: "Trump vows to investigate EU over fining of US tech companies",
    summary: "The US president says fines against Google, as well as Apple, Meta and Amazon, should be \"entirely reversed.\"",
    body: "The US president says fines against Google, as well as Apple, Meta and Amazon, should be \"entirely reversed.\"",
    source: "BBC World",
    url: "https://www.bbc.co.uk/news/articles/cvgjenp4680o?at_medium=RSS&at_campaign=rss",
    time: "2 ore fa",
    pub_ts: 1784924638,
    tags: [],
  },
  {
    id: 8,
    cat: "geopolitica",
    title: "Trump amenaza a Europa con nuevos aranceles tras la multa de la UE a Google",
    summary: "El presidente estadounidense avisa de que empleará la misma vía que ha usado para fijar gravámenes comerciales por incumplimiento de las normas de trabajo forzoso",
    body: "Ahora que ha encontrado un nuevo artefacto comercial, Donald Trump vuelve a disparar a diestro y siniestro. El presidente de Estados Unidos ha amenazado este viernes a la Unión Europea con imponer nuevos aranceles por la multa que Bruselas ha anunciado esta semana a Google por vulnerar las leyes de competencia. Seguir leyendo",
    source: "El Pais",
    url: "https://elpais.com/economia/2026-07-24/trump-amenaza-a-europa-con-nuevos-aranceles-tras-la-multa-de-la-ue-a-google.html",
    time: "5 ore fa",
    pub_ts: 1784915209,
    tags: [],
  },
  {
    id: 9,
    cat: "conflitti",
    title: "Saudi Arabia strikes Houthi-held Hodeidah, Yemeni group says",
    summary: "Houthi-controlled foreign ministry warns that the attack will spark further escalation in the Yemeni conflict.",
    body: "Houthi-controlled foreign ministry warns that the attack will spark further escalation in the Yemeni conflict.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/news/2026/7/24/saudis-strike-yemens-houthi-held-hodeida-rebel-media?traffic_source=rss",
    time: "2 ore fa",
    pub_ts: 1784924836,
    tags: [],
  },
  {
    id: 10,
    cat: "conflitti",
    title: "Oman talking with Tehran on Hormuz as US and Iran continue strikes",
    summary: "Omani delegation in Iran to discuss managing traffic in the strait, which has become the main focus of the US conflict.",
    body: "Omani delegation in Iran to discuss managing traffic in the strait, which has become the main focus of the US conflict.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/news/2026/7/24/oman-talking-with-tehran-on-hormuz-as-us-and-iran-continue-strikes?traffic_source=rss",
    time: "4 ore fa",
    pub_ts: 1784916901,
    tags: [],
  },
  {
    id: 11,
    cat: "conflitti",
    title: "Israel raids hospital, shuts off Nablus following deadly settler attack",
    summary: "Israel has arrested wounded Palestinians in a hospital as it shuts off Nablus following Friday’s deadly settler attack",
    body: "Israel has arrested wounded Palestinians in a hospital as it shuts off Nablus following Friday’s deadly settler attack",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/video/newsfeed/2026/7/24/israel-raids-hospital-shuts-off-nablus-following-deadly-settler-attack?traffic_source=rss",
    time: "5 ore fa",
    pub_ts: 1784915983,
    tags: [],
  },
  {
    id: 12,
    cat: "ai",
    title: "Anthropic releases Opus 5 with ‘close’ to Fable 5’s capabilities",
    summary: "Weeks after Anthropic's latest toe-to-toe with the US government, and days after an OpenAI security incident that dominated tech industry discussions, Anthropic on Thursday released its newest model, Claude Opus 5. The company said in a release that Opus 5 \"comes close to the capabilities of Claude Fable 5 in many domains\" and is much",
    body: "Weeks after Anthropic's latest toe-to-toe with the US government, and days after an OpenAI security incident that dominated tech industry discussions, Anthropic on Thursday released its newest model, Claude Opus 5. The company said in a release that Opus 5 \"comes close to the capabilities of Claude Fable 5 in many domains\" and is much better at complex coding tasks. (Fable 5 is the public-facing Mythos-class model that drew the government's ire, was taken offline for a few weeks along with Mythos 5, and then brought back with even stronger cyber safeguards than before.) The Fable 5 concerns - and the ensuing weeks of negotiations between …",
    source: "The Verge",
    url: "https://www.theverge.com/ai-artificial-intelligence/970105/claude-opus-5-announced-anthropic-ai-model-release",
    time: "6 ore fa",
    pub_ts: 1784912400,
    tags: [],
  },
  {
    id: 13,
    cat: "ai",
    title: "How AI guardrails are impeding the work of offensive cybersecurity researchers",
    summary: "We spoke with several cybersecurity researchers, who look for unknown vulnerabilities and develop tools to exploit them, about how OpenAI’s and Anthropic’s guardrails affect their work.",
    body: "We spoke with several cybersecurity researchers, who look for unknown vulnerabilities and develop tools to exploit them, about how OpenAI’s and Anthropic’s guardrails affect their work.",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/23/how-ai-guardrails-are-impeding-the-work-of-offensive-cybersecurity-researchers/",
    time: "22 ore fa",
    pub_ts: 1784854800,
    tags: [],
  },
  {
    id: 14,
    cat: "ai",
    title: "OpenAI’s new voice mode makes it to the ChatGPT desktop app",
    summary: "ChatGPT Voice on desktop can work with both ChatGPT Work and Codex to complete tasks and control agents.",
    body: "ChatGPT Voice on desktop can work with both ChatGPT Work and Codex to complete tasks and control agents.",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/24/openais-new-voice-mode-makes-it-to-the-chatgpt-desktop-app/",
    time: "9 ore fa",
    pub_ts: 1784900202,
    tags: [],
  },
  {
    id: 15,
    cat: "ai",
    title: "Meta just created a moderation nightmare for its smart glasses",
    summary: "Meta's smart glasses have been a PR headache for the company. Public backlash has been swift, and fierce; people are concerned about the erosion of privacy and expansion of surveillance. Some especially bad actors are using the glasses to film themselves \"pranking\" random strangers. Women have become unsuspecting social media content for men filming themselves",
    body: "Meta's smart glasses have been a PR headache for the company. Public backlash has been swift, and fierce; people are concerned about the erosion of privacy and expansion of surveillance. Some especially bad actors are using the glasses to film themselves \"pranking\" random strangers . Women have become unsuspecting social media content for men filming themselves hitting on them without their knowledge.\n\nWhen your product is being referred to as \"pervert glasses,\" you have a problem on your hands. On Thursday, Business Insider reported that Meta was taking the fairly extraordinary step of banning some content filmed with Meta glasses from the c …",
    source: "The Verge",
    url: "https://www.theverge.com/report/970901/instagram-meta-glasses-prank-harassment-ban",
    time: "3 ore fa",
    pub_ts: 1784921024,
    tags: [],
  },
  {
    id: 16,
    cat: "ai",
    title: "Midjourney bought the astrology app Co-Star",
    summary: "Midjourney, which has gone from generating AI cat images to full-body ultrasound scans, is getting into a new field: astrology. The AI startup announced on Thursday that it has acquired the personalized astrology app Co-Star, as reported earlier by Bloomberg. Co-Star is a free app that offers daily horoscopes and allows you to check your",
    body: "Midjourney, which has gone from generating AI cat images to full-body ultrasound scans , is getting into a new field: astrology. The AI startup announced on Thursday that it has acquired the personalized astrology app Co-Star, as reported earlier by Bloomberg . Co-Star is a free app that offers daily horoscopes and allows you to check your compatibility with friends. As noted on the app's FAQ page , it combines human insight, data from NASA, and AI to deliver personalized advice for users each day.\n\nThe terms of Midjourney's deal, which reportedly closed in spring, haven't been disclosed. Midjourney founder David Holz says Co-Star founder Banu …",
    source: "The Verge",
    url: "https://www.theverge.com/ai-artificial-intelligence/970894/midjourney-co-star-acquisition",
    time: "4 ore fa",
    pub_ts: 1784920018,
    tags: [],
  },
  {
    id: 17,
    cat: "ai",
    title: "Anthropic launches Opus 5",
    summary: "Opus 5 will be both cheaper and less restrictive than Fable, likely making it preferable in most use cases.",
    body: "Opus 5 will be both cheaper and less restrictive than Fable, likely making it preferable in most use cases.",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/24/anthropic-launches-opus-5/",
    time: "6 ore fa",
    pub_ts: 1784912400,
    tags: [],
  },
  {
    id: 18,
    cat: "economia-tech",
    title: "Panini, vestiti e serie tv: per i brand torna di moda l’identità globale",
    summary: "Dopo anni in cui le marche hanno puntato su strategie locali, il mercato riscopre la dimensione senza confini: secondo McCann-Economist tre consumatori su quattro si definiscono cittadini del mondo",
    body: "Dopo anni in cui le marche hanno puntato su strategie locali, il mercato riscopre la dimensione senza confini: secondo McCann-Economist tre consumatori su quattro si definiscono cittadini del mondo",
    source: "Il Sole 24 Ore",
    url: "https://www.ilsole24ore.com/art/panini-vestiti-e-serie-tv-i-brand-torna-moda-l-identita-globale-AJjC0nK",
    time: "4 ore fa",
    pub_ts: 1784918929,
    tags: [],
  },
  {
    id: 19,
    cat: "economia-tech",
    title: "CFTC Warns Prediction Markets Over Blanket Self-Certifications",
    summary: "The Commodity Futures Trading Commission is tapping the brakes on prediction markets’ practice of “self-certifying” boilerplate contracts that could apply to myriad events.",
    body: "The Commodity Futures Trading Commission is tapping the brakes on prediction markets’ practice of “self-certifying” boilerplate contracts that could apply to myriad events.",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/articles/2026-07-24/cftc-warns-prediction-markets-over-blanket-self-certifications",
    time: "2 ore fa",
    pub_ts: 1784925918,
    tags: [],
  },
  {
    id: 20,
    cat: "economia-tech",
    title: "US tech groups cut 140,000 jobs despite AI spending boom",
    summary: "Investment spree is reshaping Silicon Valley while wider US jobs market holds steady",
    body: "Investment spree is reshaping Silicon Valley while wider US jobs market holds steady",
    source: "Financial Times",
    url: "https://www.ft.com/content/96a33881-27fd-42cf-8cff-4cbc87fc835f?syn-25a6b1a6=1",
    time: "3 ore fa",
    pub_ts: 1784923204,
    tags: [],
  },
  {
    id: 21,
    cat: "economia-tech",
    title: "AI Startup Midjourney Buys Astrology App Co-Star and is Building Its Own Apps",
    summary: "Artificial intelligence lab Midjourney Inc. has bought the popular astrology app Co-Star and is building its first standalone image-generation app, the startup’s latest moves to push into new business areas after promising an ambitious expansion last month.",
    body: "Artificial intelligence lab Midjourney Inc. has bought the popular astrology app Co-Star and is building its first standalone image-generation app, the startup’s latest moves to push into new business areas after promising an ambitious expansion last month.",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/articles/2026-07-24/ai-startup-midjourney-buys-astrology-app-co-star-and-is-building-its-own-apps",
    time: "8 ore fa",
    pub_ts: 1784903420,
    tags: [],
  },
  {
    id: 22,
    cat: "economia-tech",
    title: "CATL First-Half Profit Jumps 42% on Energy Storage Tailwind",
    summary: "Contemporary Amperex Technology Co. Ltd. posted a 42% increase in first-half profit as the world’s largest electric-vehicle battery maker benefited from robust demand for energy-storage systems.",
    body: "Contemporary Amperex Technology Co. Ltd. posted a 42% increase in first-half profit as the world’s largest electric-vehicle battery maker benefited from robust demand for energy-storage systems.",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/articles/2026-07-24/catl-s-first-half-profit-jumps-42-on-energy-storage-tailwind",
    time: "11 ore fa",
    pub_ts: 1784893640,
    tags: [],
  },
];
