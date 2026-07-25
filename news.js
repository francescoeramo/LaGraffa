// Generato automaticamente il 2026-07-25 19:17 UTC da scripts/fetch_news.py
// NON modificare manualmente: viene sovrascritto ogni ora dalla GitHub Action.
var NEWS_TIMESTAMP = 1785007052;

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
    title: "Il 'fattore V' agita maggioranza, video fake con Mattarella su grazia a Roggero",
    summary: "Ipsos, centrodestra vince solo con FnV.Tajani: 'Accordi? È lui che è uscito da coalizione'",
    body: "Ipsos, centrodestra vince solo con FnV.Tajani: 'Accordi? È lui che è uscito da coalizione'",
    source: "ANSA",
    url: "https://www.ansa.it/sito/notizie/politica/2026/07/25/nuovo-video-ai-di-vannacci-generaleintercede-con-finto-mattarella-su-grazia-a-roggero_5800233c-7065-4878-bad0-955f6047f639.html",
    time: "27 min fa",
    pub_ts: 1785005391,
    tags: [],
  },
  {
    id: 2,
    cat: "politica-italiana",
    title: "Guerriglia No Tav, centinaia di incappucciati assaltano i cantieri. Mattarella chiama Piantedosi: 'Grato e vicino agli agenti feriti'",
    summary: "Lanci di bombe carta e lacrimogeni. Meloni: 'La violenza non piegherà lo Stato'",
    body: "Lanci di bombe carta e lacrimogeni. Meloni: 'La violenza non piegherà lo Stato'",
    source: "ANSA",
    url: "https://www.ansa.it/sito/notizie/cronaca/2026/07/25/guerriglia-no-tav-centinaia-di-incappucciati-assaltano-i-cantieri.-mattarella-chiama-piantedosi-grato_87a82f4b-3fcc-48bf-8d24-b8b4bbdf5454.html",
    time: "31 min fa",
    pub_ts: 1785005156,
    tags: [],
  },
  {
    id: 3,
    cat: "geopolitica",
    title: "World chess chief faces endgame after EU announces Russia war sanctions",
    summary: "Arkady Dvorkovich, a former Russian deputy prime minister, now faces an EU travel ban and asset freeze.",
    body: "Arkady Dvorkovich, a former Russian deputy prime minister, now faces an EU travel ban and asset freeze.",
    source: "BBC World",
    url: "https://www.bbc.co.uk/news/articles/cewrk58k2k4o?at_medium=RSS&at_campaign=rss",
    time: "1 giorno fa",
    pub_ts: 1784909331,
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
    time: "1 giorno fa",
    pub_ts: 1784906576,
    tags: [],
  },
  {
    id: 5,
    cat: "geopolitica",
    title: "India's 'cockroach' protest called off after education minister quits",
    summary: "The CJP protest has been the most visible expression of public anger against PM Narendra Modi's government in recent years.",
    body: "The CJP protest has been the most visible expression of public anger against PM Narendra Modi's government in recent years.",
    source: "BBC World",
    url: "https://www.bbc.co.uk/news/articles/cdx828gj5xko?at_medium=RSS&at_campaign=rss",
    time: "1 ora fa",
    pub_ts: 1785001486,
    tags: [],
  },
  {
    id: 6,
    cat: "geopolitica",
    title: "Trump bromea en la repetición de la cena de corresponsales con que será presidente por tercera vez",
    summary: "El republicano, al que la Constitución prohíbe aspirar a un nuevo mandato, da un discurso soporífero y lleno de insultos tres meses después de la celebración que interrumpieron los disparos",
    body: "Donald Trump completó este viernes una tarea que dejó a medias el pasado 25 de abril, cuando un tipo llamado Cole Allen —con planes para, presuntamente, matarlo— trató de irrumpir a tiros en la cena de corresponsales de la Casa Blanca. Seguir leyendo",
    source: "El Pais",
    url: "https://elpais.com/internacional/2026-07-25/trump-bromea-en-la-repeticion-de-la-cena-de-corresponsales-con-su-opcion-de-ser-presidente-por-tercera-vez.html",
    time: "16 ore fa",
    pub_ts: 1784947932,
    tags: [],
  },
  {
    id: 7,
    cat: "geopolitica",
    title: "Dimiten el presidente y el CEO de Plus Ultra, investigados por el rescate de la aerolínea en 2021",
    summary: "El accionista minoritario Hugo Castaño toma las riendas a la espera de ser ratificado como nuevo presidente por la SEPI",
    body: "Giro inesperado en el caso del rescate de Plus Ultra, instruido en la Audiencia Nacional por el juez José Luis Calama y en el que está imputado el expresidente del Gobierno José Luis Rodríguez Zapatero ante indicios de tráfico de influencias para obtener la financiación de 53 millones de euros firmada en marzo de 2021 por la aerolínea. Los dos máximos responsables de la empresa, el presidente Julio Martínez Sola y el consejero delegado Roberto Roselli, también investigados en esta causa, han presentado la dimisión de sus respectivos cargos.\n\nSeguir leyendo",
    source: "El Pais",
    url: "https://elpais.com/economia/2026-07-24/dimiten-el-presidente-y-el-ceo-de-plus-ultra-investigados-por-el-rescate-de-la-aerolinea-en-2021.html",
    time: "22 ore fa",
    pub_ts: 1784926993,
    tags: [],
  },
  {
    id: 8,
    cat: "conflitti",
    title: "Syrian FM calls for Israeli withdrawal in meeting with UN chief",
    summary: "Syrian Foreign Minister Asaad al-Shaibani called for Israel to withdraw immediately and unconditionally from Syria",
    body: "Syrian Foreign Minister Asaad al-Shaibani called for Israel to withdraw immediately and unconditionally from Syria",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/video/newsfeed/2026/7/25/syrian-fm-calls-for-israeli-withdrawal-in-meeting-with-un-chief?traffic_source=rss",
    time: "3 ore fa",
    pub_ts: 1784994739,
    tags: [],
  },
  {
    id: 9,
    cat: "conflitti",
    title: "War on Iran: Phase II: Day 14",
    summary: "War on Iran: Phase II: Day 14",
    body: "War on Iran: Phase II: Day 14",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/video/newsfeed/2026/7/25/war-on-iran-phase-ii-day-14?traffic_source=rss",
    time: "5 ore fa",
    pub_ts: 1784987352,
    tags: [],
  },
  {
    id: 10,
    cat: "conflitti",
    title: "Israel arrests dozens of Palestinians in West Bank amid settler attacks",
    summary: "Military crackdown follows a shooting that killed four Palestinians and two Israeli soldiers.",
    body: "Military crackdown follows a shooting that killed four Palestinians and two Israeli soldiers.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/news/2026/7/25/israel-arrests-dozens-of-palestinians-in-west-bank-amid-settler-attacks?traffic_source=rss",
    time: "10 ore fa",
    pub_ts: 1784970601,
    tags: [],
  },
  {
    id: 11,
    cat: "ai",
    title: "One fallen power line exposed a growing AI data center problem. Here’s how to fix it.",
    summary: "A close call in Northern Virginia revealed just how poorly data centers respond to grid disruptions. Here's how to fix the problem.",
    body: "A close call in Northern Virginia revealed just how poorly data centers respond to grid disruptions. Here's how to fix the problem.",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/25/one-fallen-power-line-exposed-a-growing-ai-data-center-problem-heres-how-to-fix-it/",
    time: "6 ore fa",
    pub_ts: 1784984700,
    tags: [],
  },
  {
    id: 12,
    cat: "ai",
    title: "I tried out OpenAI’s new AI keypad — which will be fun for some coders and slightly mystifying to everyone else",
    summary: "OpenAI's fancy new AI keypad will be a lot of fun for some, while many others are probably not going to touch it.",
    body: "OpenAI's fancy new AI keypad will be a lot of fun for some, while many others are probably not going to touch it.",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/24/i-tried-out-openais-new-ai-keypad-which-will-be-fun-for-coders-and-slightly-mystifying-to-everyone-else/",
    time: "18 ore fa",
    pub_ts: 1784938991,
    tags: [],
  },
  {
    id: 13,
    cat: "ai",
    title: "Meta just created a moderation nightmare for its smart glasses",
    summary: "Meta's smart glasses have been a PR headache for the company. Public backlash has been swift, and fierce; people are concerned about the erosion of privacy and expansion of surveillance. Some especially bad actors are using the glasses to film themselves \"pranking\" random strangers. Women have become unsuspecting social media content for men filming themselves",
    body: "Meta's smart glasses have been a PR headache for the company. Public backlash has been swift, and fierce; people are concerned about the erosion of privacy and expansion of surveillance. Some especially bad actors are using the glasses to film themselves \"pranking\" random strangers . Women have become unsuspecting social media content for men filming themselves hitting on them without their knowledge.\n\nWhen your product is being referred to as \"pervert glasses,\" you have a problem on your hands. On Thursday, Business Insider reported that Meta was taking the fairly extraordinary step of banning some content filmed with Meta glasses from the c …",
    source: "The Verge",
    url: "https://www.theverge.com/report/970901/instagram-meta-glasses-prank-harassment-ban",
    time: "23 ore fa",
    pub_ts: 1784921024,
    tags: [],
  },
  {
    id: 14,
    cat: "ai",
    title: "Anthropic launches Opus 5",
    summary: "Opus 5 will be both cheaper and less restrictive than Fable, likely making it preferable in most use cases.",
    body: "Opus 5 will be both cheaper and less restrictive than Fable, likely making it preferable in most use cases.",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/24/anthropic-launches-opus-5/",
    time: "1 giorno fa",
    pub_ts: 1784912400,
    tags: [],
  },
  {
    id: 15,
    cat: "economia-tech",
    title: "Panini, vestiti e serie tv: per i brand torna di moda l’identità globale",
    summary: "Dopo anni in cui le marche hanno puntato su strategie locali, il mercato riscopre la dimensione senza confini: secondo McCann-Economist tre consumatori su quattro si definiscono cittadini del mondo",
    body: "Dopo anni in cui le marche hanno puntato su strategie locali, il mercato riscopre la dimensione senza confini: secondo McCann-Economist tre consumatori su quattro si definiscono cittadini del mondo",
    source: "Il Sole 24 Ore",
    url: "https://www.ilsole24ore.com/art/panini-vestiti-e-serie-tv-i-brand-torna-moda-l-identita-globale-AJjC0nK",
    time: "1 giorno fa",
    pub_ts: 1784918929,
    tags: [],
  },
  {
    id: 16,
    cat: "economia-tech",
    title: "Investors increase bets on Federal Reserve rate rise after oil price surge",
    summary: "Sharp increase in energy prices means next week’s US central bank meeting is ‘live’, investors say",
    body: "Sharp increase in energy prices means next week’s US central bank meeting is ‘live’, investors say",
    source: "Financial Times",
    url: "https://www.ft.com/content/5019e030-796d-47e8-9f13-bee34de1d374?syn-25a6b1a6=1",
    time: "9 ore fa",
    pub_ts: 1784973609,
    tags: [],
  },
  {
    id: 17,
    cat: "economia-tech",
    title: "SK Chair Says Anthropic Asked for Supplies to Make Its Own Chips",
    summary: "AI developer Anthropic PBC has asked SK Hynix Inc., one of the world’s biggest manufacturers of memory chips, for supplies to make its own semiconductors, SK Group Chairman Chey Tae Won said.",
    body: "AI developer Anthropic PBC has asked SK Hynix Inc., one of the world’s biggest manufacturers of memory chips, for supplies to make its own semiconductors, SK Group Chairman Chey Tae Won said.",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/articles/2026-07-25/sk-chair-says-anthropic-asked-for-supplies-to-make-its-own-chips",
    time: "18 ore fa",
    pub_ts: 1784940249,
    tags: [],
  },
  {
    id: 18,
    cat: "economia-tech",
    title: "SpaceX Starship Deploys Starlink Craft During Post-IPO Test",
    summary: "SpaceX’s Starship deployed upgraded Starlink satellites and returned to Earth largely unscathed, advancing Elon Musk’s IPO-fueled plans to scale his dominant rocket business into an artificial intelligence and satellite communications empire.",
    body: "SpaceX’s Starship deployed upgraded Starlink satellites and returned to Earth largely unscathed, advancing Elon Musk’s IPO-fueled plans to scale his dominant rocket business into an artificial intelligence and satellite communications empire.",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/articles/2026-07-24/spacex-launches-major-starship-flight-test-in-post-ipo-spotlight",
    time: "20 ore fa",
    pub_ts: 1784933498,
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
    time: "22 ore fa",
    pub_ts: 1784925918,
    tags: [],
  },
];
