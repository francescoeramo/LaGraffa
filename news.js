// Generato automaticamente il 2026-07-24 17:43 UTC da scripts/fetch_news.py
// NON modificare manualmente: viene sovrascritto ogni ora dalla GitHub Action.
var NEWS_TIMESTAMP = 1784915004;

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
    time: "6 ore fa",
    pub_ts: 1784891528,
    tags: [],
  },
  {
    id: 2,
    cat: "politica-italiana",
    title: "Teheran minaccia: per ogni iraniano morto nei raid uccideremo un soldato Usa",
    summary: "Axios: 'Washington e Londra lavorano a un vertice su una coalizione internazionale per Hormuz'",
    body: "Axios: 'Washington e Londra lavorano a un vertice su una coalizione internazionale per Hormuz'",
    source: "ANSA",
    url: "https://www.ansa.it/sito/notizie/mondo/2026/07/24/il-wall-street-journal-trump-sta-perdendo-la-pazienza-con-la-guerra-in-iran_7d284c5f-0296-4f09-94e4-fc6b9921cad5.html",
    time: "45 min fa",
    pub_ts: 1784912295,
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
    time: "7 ore fa",
    pub_ts: 1784887101,
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
    time: "1 ora fa",
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
    time: "2 ore fa",
    pub_ts: 1784906576,
    tags: [],
  },
  {
    id: 6,
    cat: "geopolitica",
    title: "US and Iran trade more strikes in Gulf as fears of escalation mount",
    summary: "It comes as Iran condemned the US plan to use frozen Iranian assets to pay for war damages.",
    body: "It comes as Iran condemned the US plan to use frozen Iranian assets to pay for war damages.",
    source: "BBC World",
    url: "https://www.bbc.co.uk/news/articles/c05ql5llj4do?at_medium=RSS&at_campaign=rss",
    time: "2 ore fa",
    pub_ts: 1784906560,
    tags: [],
  },
  {
    id: 7,
    cat: "conflitti",
    title: "Netanyahu to meet Trump at White House next week amid Iran war escalation",
    summary: "Visit will be Netanyahu's seventh to White House, underscoring US commitment during war with Iran, genocide in Gaza.",
    body: "Visit will be Netanyahu's seventh to White House, underscoring US commitment during war with Iran, genocide in Gaza.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/news/2026/7/24/netanyahu-to-meet-trump-at-white-house-next-week-amid-iran-war-escalation?traffic_source=rss",
    time: "1 ora fa",
    pub_ts: 1784908878,
    tags: [],
  },
  {
    id: 8,
    cat: "conflitti",
    title: "Romanian jet fighter shoots down suspected Russian drone",
    summary: "The incident adds to concern that Moscow’s war on Ukraine risks spilling over to entangle neighbouring NATO states.",
    body: "The incident adds to concern that Moscow’s war on Ukraine risks spilling over to entangle neighbouring NATO states.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/news/2026/7/24/romanian-jet-fighter-shoots-down-suspected-russian-drone?traffic_source=rss",
    time: "49 min fa",
    pub_ts: 1784912035,
    tags: [],
  },
  {
    id: 9,
    cat: "conflitti",
    title: "Israel builds Gaza barrier as politicians push for settlements",
    summary: "Recent satellite images reveal the construction of a huge earthen barrier dividing Gaza as Israelis discuss settlements.",
    body: "Recent satellite images reveal the construction of a huge earthen barrier dividing Gaza as Israelis discuss settlements.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/video/newsfeed/2026/7/24/israel-builds-gaza-barrier-as-politicians-push-for-settlements?traffic_source=rss",
    time: "2 ore fa",
    pub_ts: 1784906855,
    tags: [],
  },
  {
    id: 10,
    cat: "ai",
    title: "Meta is making its AI chatbot more like an assistant",
    summary: "Meta is upgrading its AI chatbot with new productivity features in a bid to compete with rivals like Gemini, ChatGPT, and Claude. The update will allow Meta AI to tap into your calendar to help you plan events and generate daily briefings, as well as perform in-depth research that you can steer as it progresses.",
    body: "Meta says its AI chatbot is going beyond just answering questions and generating images. | Image: Meta Meta is upgrading its AI chatbot with new productivity features in a bid to compete with rivals like Gemini, ChatGPT, and Claude. The update will allow Meta AI to tap into your calendar to help you plan events and generate daily briefings, as well as perform in-depth research that you can steer as it progresses.\n\nIn a blog post, Meta says this update marks its \"next step toward personal superintelligence,\" something CEO Mark Zuckerberg has touted as the future of AI . Meta is powering the update with its newly released Muse Spark 1.1 model , which the company says will allow its chatbot to go beyond its current capabilities of answering questi …",
    source: "The Verge",
    url: "https://www.theverge.com/tech/970570/meta-ai-chatbot-productivity-update",
    time: "43 min fa",
    pub_ts: 1784912400,
    tags: [],
  },
  {
    id: 11,
    cat: "ai",
    title: "Anthropic releases Opus 5 with ‘close’ to Fable 5’s capabilities",
    summary: "Weeks after Anthropic's latest toe-to-toe with the US government, and days after an OpenAI security incident that dominated tech industry discussions, Anthropic on Thursday released its newest model, Claude Opus 5. The company said in a release that Opus 5 \"comes close to the capabilities of Claude Fable 5 in many domains\" and is much",
    body: "Weeks after Anthropic's latest toe-to-toe with the US government, and days after an OpenAI security incident that dominated tech industry discussions, Anthropic on Thursday released its newest model, Claude Opus 5. The company said in a release that Opus 5 \"comes close to the capabilities of Claude Fable 5 in many domains\" and is much better at complex coding tasks. (Fable 5 is the public-facing Mythos-class model that drew the government's ire, was taken offline for a few weeks along with Mythos 5, and then brought back with even stronger cyber safeguards than before.) The Fable 5 concerns - and the ensuing weeks of negotiations between …",
    source: "The Verge",
    url: "https://www.theverge.com/ai-artificial-intelligence/970105/claude-opus-5-announced-anthropic-ai-model-release",
    time: "43 min fa",
    pub_ts: 1784912400,
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
    time: "16 ore fa",
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
    time: "4 ore fa",
    pub_ts: 1784900202,
    tags: [],
  },
  {
    id: 14,
    cat: "ai",
    title: "Anthropic launches Opus 5",
    summary: "Opus 5 will be both cheaper and less restrictive than Fable, likely making it preferable in most use cases",
    body: "Opus 5 will be both cheaper and less restrictive than Fable, likely making it preferable in most use cases",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/24/anthropic-launches-opus-5/",
    time: "43 min fa",
    pub_ts: 1784912400,
    tags: [],
  },
  {
    id: 15,
    cat: "economia-tech",
    title: "AI Startup Midjourney Buys Astrology App Co-Star and is Building Its Own Apps",
    summary: "Artificial intelligence lab Midjourney Inc. has bought the popular astrology app Co-Star and is building its first standalone image-generation app, the startup’s latest moves to push into new business areas after promising an ambitious expansion last month.",
    body: "Artificial intelligence lab Midjourney Inc. has bought the popular astrology app Co-Star and is building its first standalone image-generation app, the startup’s latest moves to push into new business areas after promising an ambitious expansion last month.",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/articles/2026-07-24/ai-startup-midjourney-buys-astrology-app-co-star-and-is-building-its-own-apps",
    time: "3 ore fa",
    pub_ts: 1784903420,
    tags: [],
  },
  {
    id: 16,
    cat: "economia-tech",
    title: "Trump’s trade war shifts from shakedown to lock-in",
    summary: "The administration wants to ensure the US ‘gets paid’ for the superpower services it provides to the world",
    body: "The administration wants to ensure the US ‘gets paid’ for the superpower services it provides to the world",
    source: "Financial Times",
    url: "https://www.ft.com/content/38341bcb-0c45-432a-bd04-fa0b9f2b790a",
    time: "4 ore fa",
    pub_ts: 1784897636,
    tags: [],
  },
  {
    id: 17,
    cat: "economia-tech",
    title: "CATL First-Half Profit Jumps 42% on Energy Storage Tailwind",
    summary: "Contemporary Amperex Technology Co. Ltd. posted a 42% increase in first-half profit as the world’s largest electric-vehicle battery maker benefited from robust demand for energy-storage systems.",
    body: "Contemporary Amperex Technology Co. Ltd. posted a 42% increase in first-half profit as the world’s largest electric-vehicle battery maker benefited from robust demand for energy-storage systems.",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/articles/2026-07-24/catl-s-first-half-profit-jumps-42-on-energy-storage-tailwind",
    time: "5 ore fa",
    pub_ts: 1784893640,
    tags: [],
  },
  {
    id: 18,
    cat: "economia-tech",
    title: "SoftBank Weighs Deal for Robotics Startup Gravis",
    summary: "SoftBank Group Corp. is considering an acquisition of Gravis Robotics AG, people familiar with the matter said, as the Japanese investor targets the artificial intelligence technologies underpinning robotics.",
    body: "SoftBank Group Corp. is considering an acquisition of Gravis Robotics AG, people familiar with the matter said, as the Japanese investor targets the artificial intelligence technologies underpinning robotics.",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/articles/2026-07-24/softbank-weighs-deal-for-robotics-startup-gravis",
    time: "8 ore fa",
    pub_ts: 1784882739,
    tags: [],
  },
];
