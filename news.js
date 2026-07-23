// Generato automaticamente il 2026-07-23 10:30 UTC da scripts/fetch_news.py
// NON modificare manualmente: viene sovrascritto ogni ora dalla GitHub Action.
var NEWS_TIMESTAMP = 1784802580;

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
    title: "Dalla Camera via libera bipartisan alla stretta sulla sicurezza delle piscine",
    summary: "Nell'emendamento stop per impianti con bocchettoni non a norma e fondo da quasi 5 milioni",
    body: "Nell'emendamento stop per impianti con bocchettoni non a norma e fondo da quasi 5 milioni",
    source: "ANSA",
    url: "https://www.ansa.it/sito/notizie/politica/2026/07/23/dalla-camera-via-libera-bipartisan-alla-stretta-sulla-sicurezza-delle_a17e40c0-4100-4655-a21f-882d1275ac08.html",
    time: "48 min fa",
    pub_ts: 1784799669,
    tags: [],
  },
  {
    id: 2,
    cat: "politica-italiana",
    title: "Malore in volo per il comandante, atterraggio d'emergenza a Malpensa",
    summary: "Il Boeing 737 era partito da Palma di Maiorca ed era diretto a Varsavia, nessun ferito",
    body: "Il Boeing 737 era partito da Palma di Maiorca ed era diretto a Varsavia, nessun ferito",
    source: "ANSA",
    url: "https://www.ansa.it/sito/notizie/cronaca/2026/07/23/malore-in-volo-per-il-comandante-atterraggio-demergenza-a-malpensa_4527fd26-6ca7-4b21-9ce4-a9eb207b477b.html",
    time: "2 ore fa",
    pub_ts: 1784792174,
    tags: [],
  },
  {
    id: 3,
    cat: "politica-italiana",
    title: "'Tra Londra e Roma un vero feeling, proseguirà con Burnham'",
    summary: "L'ambasciatore Gb Hickey all'ANSA: 'Allineati su tutte le sfide, ottimi rapporti con Meloni'",
    body: "L'ambasciatore Gb Hickey all'ANSA: 'Allineati su tutte le sfide, ottimi rapporti con Meloni'",
    source: "ANSA",
    url: "https://www.ansa.it/sito/notizie/mondo/2026/07/22/tra-londra-e-roma-un-vero-feeling-proseguira-con-burnham_3cac47db-b500-4235-8c9b-c76df200c22e.html",
    time: "14 ore fa",
    pub_ts: 1784749025,
    tags: [],
  },
  {
    id: 4,
    cat: "geopolitica",
    title: "La alianza entre Ford y la china Geely fabricará cinco nuevos modelos y garantiza el futuro de la planta de Valencia",
    summary: "La nueva empresa conjunta, en la que la firma asiática tendrá un 34%, incrementará la actual plantilla de 4.200 trabajadores para llegar al máximo de la capacidad de la fábrica",
    body: "“Un equipo, dos marcas, cinco vehículos”. Así ha resumido este jueves Jim Baumbick, presidente de Ford Europa, el objetivo de la alianza con el grupo chino Geely , presentada en la planta valenciana que abrió la firma estadounidense en Almussafes hace 50 años. Se trata de una nueva empresa conjunta ( joint venture ) en la que Ford será titular de un 66% y el fabricante asiático, propietario también de marcas como Volvo o Smart, de un 34%.\n\nSeguir leyendo",
    source: "El Pais",
    url: "https://elpais.com/espana/comunidad-valenciana/2026-07-23/la-alianza-entre-ford-y-la-china-geely-fabricara-cinco-nuevos-modelos-y-garantiza-el-futuro-de-la-planta-de-valencia.html",
    time: "1 ora fa",
    pub_ts: 1784798844,
    tags: [],
  },
  {
    id: 5,
    cat: "geopolitica",
    title: "El Gobierno propone a Yolanda Díaz como directora general de la OIT, el organismo de la ONU dedicado al trabajo",
    summary: "La vicepresidenta segunda aspira a desplazar al togolés Gilbert F. Houngbo, acusado por los sindicatos de alinearse con Trump. De ganar, Díaz no tomaría posesión del cargo hasta noviembre de 2027",
    body: "El Gobierno propone a Yolanda Díaz como directora general de la Organización Internacional del Trabajo (OIT), según ha podido saber EL PAÍS por fuentes conocedoras de la decisión y ha confirmado La Moncloa este jueves. La vicepresidenta segunda y ministra de Trabajo plantará cara a Gilbert F. Houngbo , que dirige desde 2022 la agencia de la ONU dedicada a las relaciones laborales. Los sindicatos españoles vienen criticando la “ deriva trumpista ” del organismo bajo la dirección del togolés, mensaje en el que profundizó Díaz en su última intervención en la sede de la OIT, en Ginebra (Suiza).\n\n“La OIT está en crisis y es relevante porque lo que está en juego es su mandato. Si el trabajo no es una mercancía, tampoco puede serlo la organización que representa el trabajo”, dijo el 9 de junio la vicepresidenta segunda y ministra de Trabajo. Seguir leyendo",
    source: "El Pais",
    url: "https://elpais.com/economia/2026-07-23/el-gobierno-propone-a-yolanda-diaz-como-directora-general-de-la-oit-el-organismo-de-la-onu-dedicado-al-trabajo.html",
    time: "3 ore fa",
    pub_ts: 1784789174,
    tags: [],
  },
  {
    id: 6,
    cat: "geopolitica",
    title: "Russia's businesses under strain from Ukraine's attacks on Wildberries",
    summary: "Ukrainian drones have hit several retail warehouses belonging to Russia's biggest online retailer Wildberries in a matter of days.",
    body: "Ukrainian drones have hit several retail warehouses belonging to Russia's biggest online retailer Wildberries in a matter of days.",
    source: "BBC World",
    url: "https://www.bbc.co.uk/news/articles/cvg9n2y61w6o?at_medium=RSS&at_campaign=rss",
    time: "4 ore fa",
    pub_ts: 1784787335,
    tags: [],
  },
  {
    id: 7,
    cat: "geopolitica",
    title: "Blocked by censors, China's animal lovers take fight against abuse offline and overseas",
    summary: "The killing of a dog and her puppies in Guangdong has sparked outrage inside and outside the country.",
    body: "The killing of a dog and her puppies in Guangdong has sparked outrage inside and outside the country.",
    source: "BBC World",
    url: "https://www.bbc.co.uk/news/articles/cqx7wd3x420o?at_medium=RSS&at_campaign=rss",
    time: "4 ore fa",
    pub_ts: 1784785569,
    tags: [],
  },
  {
    id: 8,
    cat: "geopolitica",
    title: "Houthis claim attack on oil tankers as US launches more strikes on Iran",
    summary: "The Houthi attacks would be the first in the Red Sea since the Iran-backed group announced a \"maritime embargo\" against Saudi Arabia.",
    body: "The Houthi attacks would be the first in the Red Sea since the Iran-backed group announced a \"maritime embargo\" against Saudi Arabia.",
    source: "BBC World",
    url: "https://www.bbc.co.uk/news/articles/cpw9xzx9r4ko?at_medium=RSS&at_campaign=rss",
    time: "6 ore fa",
    pub_ts: 1784778507,
    tags: [],
  },
  {
    id: 9,
    cat: "geopolitica",
    title: "Así funciona Kimi K3, la IA china que asusta a Silicon Valley",
    summary: "En la última semana dos modelos del país asiático han acaparado titulares y comentarios: cómo son y qué impacto tendrán",
    body: "Cuando el nuevo modelo Kimi K3 lleva apenas una semana asustando a gente en Silicon Valley, llega ahora Qwen 3.8. Son dos modelos chinos abiertos y muy avanzados que han provocado una pregunta: ¿por qué pagar por una IA más cara si otra opción más barata ya funciona bien? Seguir leyendo",
    source: "El Pais",
    url: "https://elpais.com/tecnologia/2026-07-23/asi-funciona-kimi-k3-la-ia-china-que-asusta-a-silicon-valley.html",
    time: "6 ore fa",
    pub_ts: 1784777401,
    tags: [],
  },
  {
    id: 10,
    cat: "geopolitica",
    title: "The Iran war is consuming the Trump presidency",
    summary: "Donald Trump may hate to hear it, but Barack Obama was right about avoiding “stupid shit”",
    body: "Donald Trump may hate to hear it, but Barack Obama was right about avoiding “stupid shit”",
    source: "The Economist",
    url: "https://www.economist.com/international/2026/07/21/the-iran-war-is-consuming-the-trump-presidency",
    time: "1 giorno fa",
    pub_ts: 1784666552,
    tags: [],
  },
  {
    id: 11,
    cat: "conflitti",
    title: "Iran, Houthis strike tankers as US bombing continues: What’s the latest?",
    summary: "With the Houthi naval blockade, shipping disruptions now impact the Bab al-Mandeb strait in addition to Hormuz.",
    body: "With the Houthi naval blockade, shipping disruptions now impact the Bab al-Mandeb strait in addition to Hormuz.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/news/2026/7/23/iran-houthis-strike-tankers-as-us-bombing-continues-whats-the-latest?traffic_source=rss",
    time: "1 ora fa",
    pub_ts: 1784798446,
    tags: [],
  },
  {
    id: 12,
    cat: "conflitti",
    title: "Photos: Gaza’s shelter crisis",
    summary: "Gaza faces a deepening housing crisis as more than 92 percent of homes have been damaged or destroyed by Israel.",
    body: "Gaza faces a deepening housing crisis as more than 92 percent of homes have been damaged or destroyed by Israel.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/gallery/2026/7/23/photos-gazas-shelter-crisis?traffic_source=rss",
    time: "2 ore fa",
    pub_ts: 1784794366,
    tags: [],
  },
  {
    id: 13,
    cat: "conflitti",
    title: "Top US and Russian diplomats discuss Ukraine war in Manila",
    summary: "Russian Foreign Minister Lavrov 'reaffirmed ​readiness' for political ​and diplomatic settlement to Russia-Ukraine war.",
    body: "Russian Foreign Minister Lavrov 'reaffirmed ​readiness' for political ​and diplomatic settlement to Russia-Ukraine war.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/news/2026/7/23/top-us-and-russian-diplomats-discuss-ukraine-war-in-manila?traffic_source=rss",
    time: "3 ore fa",
    pub_ts: 1784791101,
    tags: [],
  },
  {
    id: 14,
    cat: "ai",
    title: "Quanto possiamo fidarci delle AI che fanno da sole?",
    summary: "Per superare un test, due modelli di intelligenza artificiale di OpenAI hanno preso una strada imprevista: attaccare un’altra azienda",
    body: "Per superare un test, due modelli di intelligenza artificiale di OpenAI hanno preso una strada imprevista: attaccare un’altra azienda",
    source: "Il Post Tech",
    url: "https://www.ilpost.it/2026/07/22/agenti-intelligenza-artificiale-openai-hugging-face/",
    time: "18 ore fa",
    pub_ts: 1784734397,
    tags: [],
  },
  {
    id: 15,
    cat: "ai",
    title: "How OpenAI’s human mistake led to the AI-powered hack on Hugging Face",
    summary: "OpenAI made a mistake setting up what it called a “highly isolated” testing environment and sandbox. According to cybersecurity experts, that human mistake is what made the AI-powered attack on Hugging Face possible.",
    body: "OpenAI made a mistake setting up what it called a “highly isolated” testing environment and sandbox. According to cybersecurity experts, that human mistake is what made the AI-powered attack on Hugging Face possible.",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/22/how-an-openais-human-mistake-led-to-the-ai-powered-hack-on-hugging-face/",
    time: "15 ore fa",
    pub_ts: 1784747506,
    tags: [],
  },
  {
    id: 16,
    cat: "ai",
    title: "Treasury threatens sanctions after White House claims Moonshot distilled Anthropic’s Fable",
    summary: "The episode has also intensified a broader debate in Washington over the influx of Chinese open models.",
    body: "The episode has also intensified a broader debate in Washington over the influx of Chinese open models.",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/22/treasury-threatens-sanctions-after-white-house-claims-moonshot-distilled-anthropics-fable/",
    time: "13 ore fa",
    pub_ts: 1784753343,
    tags: [],
  },
  {
    id: 17,
    cat: "ai",
    title: "SoundCloud acquires decentralized music platform Nina Protocol months after its shutdown",
    summary: "SoundCloud has acquired decentralized music platform Nina Protocol, months after the startup announced it would shut down. The deal brings Nina’s artists, editorial archive, and music discovery tools to SoundCloud as the company continues expanding its platform for independent musicians.",
    body: "SoundCloud has acquired decentralized music platform Nina Protocol, months after the startup announced it would shut down. The deal brings Nina’s artists, editorial archive, and music discovery tools to SoundCloud as the company continues expanding its platform for independent musicians.",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/22/soundcloud-acquires-decentralized-music-platform-nina-protocol-months-after-its-shutdown/",
    time: "14 ore fa",
    pub_ts: 1784749376,
    tags: [],
  },
  {
    id: 18,
    cat: "economia-tech",
    title: "R&S, La startup campana KforB produrrà nanocellulosa batterica",
    summary: "La società Knowledge for Business realizza investe 1,2 milioni in un nuovo impianto e in un nuovo progetto di ricerca",
    body: "La società Knowledge for Business realizza investe 1,2 milioni in un nuovo impianto e in un nuovo progetto di ricerca",
    source: "Il Sole 24 Ore",
    url: "https://www.ilsole24ore.com/art/rs-startup-campana-kforb-produrra-nanocellulosa-batterica-AJQOfQS",
    time: "1 ora fa",
    pub_ts: 1784797321,
    tags: [],
  },
  {
    id: 19,
    cat: "economia-tech",
    title: "Sardegna, corsa contro il tempo per salvare la Cermed",
    summary: "Corsa contro il tempo per salvare la fabbrica di ceramiche Cermed di Guspini in Sardegna. E rilanciare le produzioni di mattonelle, salvaguardando l’occupazione di oltre cento lavoratori. L’azienda, nata nel...",
    body: "Corsa contro il tempo per salvare la fabbrica di ceramiche Cermed di Guspini in Sardegna. E rilanciare le produzioni di mattonelle, salvaguardando l’occupazione di oltre cento lavoratori. L’azienda, nata nel...",
    source: "Il Sole 24 Ore",
    url: "https://www.ilsole24ore.com/art/sardegna-corsa-contro-tempo-salvare-cermed-AJbvVZS",
    time: "7 ore fa",
    pub_ts: 1784775960,
    tags: [],
  },
  {
    id: 20,
    cat: "economia-tech",
    title: "Singapore Core Inflation Quickens to 1.6% Ahead of MAS Decision",
    summary: "Singapore’s core inflation accelerated last month as higher global energy costs are beginning to filter through to consumer prices.",
    body: "Singapore’s core inflation accelerated last month as higher global energy costs are beginning to filter through to consumer prices.",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/articles/2026-07-23/singapore-core-inflation-accelerates-to-1-6-as-oil-risks-linger",
    time: "5 ore fa",
    pub_ts: 1784782800,
    tags: [],
  },
  {
    id: 21,
    cat: "economia-tech",
    title: "Google Fined €890 Million in EU Over Search, App Store Breaches",
    summary: "Alphabet Inc.’s Google was fined a total of €890 million ($1 billion) by the European Union for violating the bloc’s Digital Markets Act, in a decision that risks further inflaming tensions with US President Donald Trump.",
    body: "Alphabet Inc.’s Google was fined a total of €890 million ($1 billion) by the European Union for violating the bloc’s Digital Markets Act, in a decision that risks further inflaming tensions with US President Donald Trump.",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/articles/2026-07-23/google-fined-890-million-in-eu-over-search-app-store-breaches",
    time: "28 min fa",
    pub_ts: 1784800914,
    tags: [],
  },
  {
    id: 22,
    cat: "economia-tech",
    title: "SpaceX Attempts Major Flight Test Again in Post-IPO Spotlight",
    summary: "SpaceX will again attempt a major test of its massive Starship rocket on Thursday after abandoning takeoff last week, exposing investors to the risks of the company’s rocky development cycle and heightening the stakes for the critical milestone.",
    body: "SpaceX will again attempt a major test of its massive Starship rocket on Thursday after abandoning takeoff last week, exposing investors to the risks of the company’s rocky development cycle and heightening the stakes for the critical milestone.",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/articles/2026-07-23/spacex-attempts-major-flight-test-again-in-post-ipo-spotlight",
    time: "59 min fa",
    pub_ts: 1784799000,
    tags: [],
  },
  {
    id: 23,
    cat: "economia-tech",
    title: "Oil price surge drives global bond sell-off",
    summary: "Brent crude’s rise towards $100 is threatening a prolonged surge in inflation and resetting interest-rate expectations",
    body: "Brent crude’s rise towards $100 is threatening a prolonged surge in inflation and resetting interest-rate expectations",
    source: "Financial Times",
    url: "https://www.ft.com/content/66bf810f-c1c0-488d-bd02-f8eba3acd743?syn-25a6b1a6=1",
    time: "2 ore fa",
    pub_ts: 1784794970,
    tags: [],
  },
  {
    id: 24,
    cat: "economia-tech",
    title: "Japan awakes",
    summary: "Why 1 per cent interest rates could shake everything up after a generation of deflation",
    body: "Why 1 per cent interest rates could shake everything up after a generation of deflation",
    source: "Financial Times",
    url: "https://www.ft.com/content/397c04d8-db0f-4902-9ea0-269584f43697?syn-25a6b1a6=1",
    time: "6 ore fa",
    pub_ts: 1784779221,
    tags: [],
  },
];
