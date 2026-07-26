// Generato automaticamente il 2026-07-26 10:06 UTC da scripts/fetch_news.py
// NON modificare manualmente: viene sovrascritto ogni ora dalla GitHub Action.
var NEWS_TIMESTAMP = 1785060401;

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
    title: "Guerriglia No Tav, in centinaia assaltano i cantieri. Oltre un centinaio di feriti tra le forze dell'ordine",
    summary: "Lanci di bombe carta e lacrimogeni. Mattarella chiama il ministro dell'Interno. Meloni: 'La violenza non piegherà lo Stato'",
    body: "Lanci di bombe carta e lacrimogeni. Mattarella chiama il ministro dell'Interno. Meloni: 'La violenza non piegherà lo Stato'",
    source: "ANSA",
    url: "https://www.ansa.it/sito/notizie/cronaca/2026/07/26/guerriglia-no-tav-in-centinaia-assaltano-i-cantieri.-oltre-un-centinaio-di-feriti-tra-le-forze_87a82f4b-3fcc-48bf-8d24-b8b4bbdf5454.html",
    time: "20 min fa",
    pub_ts: 1785059166,
    tags: [],
  },
  {
    id: 2,
    cat: "politica-italiana",
    title: "Katy Perry contro la Casa Bianca: 'Non usate la mia musica per celebrare la guerra'",
    summary: "Il governo americano ha utilizzato 'Firework' in un video su attacchi militari",
    body: "Il governo americano ha utilizzato 'Firework' in un video su attacchi militari",
    source: "ANSA",
    url: "https://www.ansa.it/sito/notizie/mondo/nordamerica/2026/07/26/katy-perry-contro-la-casa-bianca-non-usate-la-mia-musica-per_356a2fc2-a432-448d-9878-1681d2b0fcd2.html",
    time: "59 min fa",
    pub_ts: 1785056831,
    tags: [],
  },
  {
    id: 3,
    cat: "politica-italiana",
    title: "Minacce social, assegnata la scorta al sindaco di Bologna Lepore",
    summary: "La protezione sarà attivata nei prossimi giorni",
    body: "La protezione sarà attivata nei prossimi giorni",
    source: "ANSA",
    url: "https://www.ansa.it/sito/notizie/cronaca/2026/07/26/minacce-social-assegnata-la-scorta-al-sindaco-di-bologna-lepore-_bdd19b9e-2c31-450b-8c34-ab215277a2c7.html",
    time: "2 ore fa",
    pub_ts: 1785050631,
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
    time: "1 giorno fa",
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
    time: "1 giorno fa",
    pub_ts: 1784906576,
    tags: [],
  },
  {
    id: 6,
    cat: "geopolitica",
    title: "Trump encuentra en Irán su guerra interminable",
    summary: "La vuelta al enfrentamiento directo con Teherán evidencia la dificultad de EE UU de cerrar un acuerdo de paz y coloca al presidente ante uno de esos conflictos sin salida que prometió abandonar para siempre",
    body: "El sueño de cerrar un acuerdo más o menos presentable y pasar página se ha esfumado. El presidente de Estados Unidos, Donald Trump, dio por muerto el pasado 8 de julio el frágil alto el fuego con Irán. “Ya no quiero tratar con ellos. Son escoria”, aseguró de las mismas personas que días antes definía como “muy racionales, fuertes, inteligentes”. La noche del viernes ha sido la primera en calma tras 13 días consecutivos de ataques después de que la Casa Blanca barajara elevar el nivel de castigo.\n\nSeguir leyendo",
    source: "El Pais",
    url: "https://elpais.com/internacional/2026-07-26/trump-encuentra-en-iran-su-guerra-interminable.html",
    time: "6 ore fa",
    pub_ts: 1785036601,
    tags: [],
  },
  {
    id: 7,
    cat: "geopolitica",
    title: "India's 'cockroach' protest called off after education minister quits",
    summary: "The CJP protest has been the most visible expression of public anger against PM Narendra Modi's government in recent years.",
    body: "The CJP protest has been the most visible expression of public anger against PM Narendra Modi's government in recent years.",
    source: "BBC World",
    url: "https://www.bbc.co.uk/news/articles/cdx828gj5xko?at_medium=RSS&at_campaign=rss",
    time: "16 ore fa",
    pub_ts: 1785001486,
    tags: [],
  },
  {
    id: 8,
    cat: "conflitti",
    title: "New front in US-Iran war escalates as Houthis fire at Saudi oil facilities",
    summary: "Conflict also spreads to Caspian Sea as Tehran accuses Ukraine of a deadly attack on an Iranian vessel.",
    body: "Conflict also spreads to Caspian Sea as Tehran accuses Ukraine of a deadly attack on an Iranian vessel.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/news/2026/7/26/new-front-in-us-iran-war-escalates-as-houthis-fire-at-saudi-oil-facilities?traffic_source=rss",
    time: "5 ore fa",
    pub_ts: 1785040817,
    tags: [],
  },
  {
    id: 9,
    cat: "conflitti",
    title: "Iran war live: Baghaei says progress made in Oman talks on Strait of Hormuz",
    summary: "Tehran says the Ukrainian attack killed at least one sailor and wounded another.",
    body: "Tehran says the Ukrainian attack killed at least one sailor and wounded another.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/news/liveblog/2026/7/26/iran-war-live-tehran-summons-ukraine-diplomats-over-caspian-sea-attack?traffic_source=rss",
    time: "10 ore fa",
    pub_ts: 1785024025,
    tags: [],
  },
  {
    id: 10,
    cat: "conflitti",
    title: "Iran accuses Ukraine of deadly attack on Caspian commercial vessel",
    summary: "Iran accuses Ukraine of attacking a Caspian vessel, killing one sailor and injuring another, calling it a criminal act.",
    body: "Iran accuses Ukraine of attacking a Caspian vessel, killing one sailor and injuring another, calling it a criminal act.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/news/2026/7/25/iran-accuses-ukraine-of-deadly-attack-on-caspian-commercial-vessel?traffic_source=rss",
    time: "10 ore fa",
    pub_ts: 1785021405,
    tags: [],
  },
  {
    id: 11,
    cat: "ai",
    title: "Elon Musk’s Boring Company reportedly raising funding at a $20 billion valuation",
    summary: "Elon Musk's tunneling startup is reportedly in talks for a major new funding round.",
    body: "Elon Musk's tunneling startup is reportedly in talks for a major new funding round.",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/25/elon-musks-boring-company-reportedly-raising-funding-at-a-20-billion-valuation/",
    time: "14 ore fa",
    pub_ts: 1785007412,
    tags: [],
  },
  {
    id: 12,
    cat: "ai",
    title: "One fallen power line exposed a growing AI data center problem. Here’s how to fix it.",
    summary: "A close call in Northern Virginia revealed just how poorly data centers respond to grid disruptions. Here's how to fix the problem.",
    body: "A close call in Northern Virginia revealed just how poorly data centers respond to grid disruptions. Here's how to fix the problem.",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/25/one-fallen-power-line-exposed-a-growing-ai-data-center-problem-heres-how-to-fix-it/",
    time: "21 ore fa",
    pub_ts: 1784984700,
    tags: [],
  },
  {
    id: 13,
    cat: "ai",
    title: "I tried out OpenAI’s new AI keypad — which will be fun for some coders and slightly mystifying to everyone else",
    summary: "OpenAI's fancy new AI keypad will be a lot of fun for some, while many others are probably not going to touch it.",
    body: "OpenAI's fancy new AI keypad will be a lot of fun for some, while many others are probably not going to touch it.",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/24/i-tried-out-openais-new-ai-keypad-which-will-be-fun-for-coders-and-slightly-mystifying-to-everyone-else/",
    time: "1 giorno fa",
    pub_ts: 1784938991,
    tags: [],
  },
  {
    id: 14,
    cat: "ai",
    title: "Meta just created a moderation nightmare for its smart glasses",
    summary: "Meta's smart glasses have been a PR headache for the company. Public backlash has been swift, and fierce; people are concerned about the erosion of privacy and expansion of surveillance. Some especially bad actors are using the glasses to film themselves \"pranking\" random strangers. Women have become unsuspecting social media content for men filming themselves",
    body: "Meta's smart glasses have been a PR headache for the company. Public backlash has been swift, and fierce; people are concerned about the erosion of privacy and expansion of surveillance. Some especially bad actors are using the glasses to film themselves \"pranking\" random strangers . Women have become unsuspecting social media content for men filming themselves hitting on them without their knowledge.\n\nWhen your product is being referred to as \"pervert glasses,\" you have a problem on your hands. On Thursday, Business Insider reported that Meta was taking the fairly extraordinary step of banning some content filmed with Meta glasses from the c …",
    source: "The Verge",
    url: "https://www.theverge.com/report/970901/instagram-meta-glasses-prank-harassment-ban",
    time: "1 giorno fa",
    pub_ts: 1784921024,
    tags: [],
  },
  {
    id: 15,
    cat: "economia-tech",
    title: "La filiera del tessile di Como si unisce per comprare energia rinnovabile a costi ridotti",
    summary: "Oltre 100 aziende del gruppo Filiera Tessile di Confindustria Como si riuniscono per l’acquisto collettivo di energia rinnovabile. L’energia incide per circa il 40% sui...",
    body: "Oltre 100 aziende del gruppo Filiera Tessile di Confindustria Como si riuniscono per l’acquisto collettivo di energia rinnovabile. L’energia incide per circa il 40% sui...",
    source: "Il Sole 24 Ore",
    url: "https://www.ilsole24ore.com/art/la-filiera-tessile-como-si-unisce-comprare-energia-rinnovabile-costi-ridotti-AJuNwlV",
    time: "3 ore fa",
    pub_ts: 1785049200,
    tags: [],
  },
  {
    id: 16,
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
    id: 17,
    cat: "economia-tech",
    title: "China pours funding into green energy deals as Iran war hits oil demand",
    summary: "Beijing’s Belt and Road Initiative takes advantage of rise in appetite for renewables as Middle East conflict drags on",
    body: "Beijing’s Belt and Road Initiative takes advantage of rise in appetite for renewables as Middle East conflict drags on",
    source: "Financial Times",
    url: "https://www.ft.com/content/221aac60-807e-4bdd-b76d-dd451255e685?syn-25a6b1a6=1",
    time: "6 ore fa",
    pub_ts: 1785038407,
    tags: [],
  },
  {
    id: 18,
    cat: "economia-tech",
    title: "Memory Frenzy Primes China Champion CXMT for Historic Debut",
    summary: "Investor excitement over the memory chip trade is setting outsize expectations for the Shanghai debut of CXMT Corp., which is on the brink of making history after a near-record initial public offering.",
    body: "Investor excitement over the memory chip trade is setting outsize expectations for the Shanghai debut of CXMT Corp., which is on the brink of making history after a near-record initial public offering.",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/articles/2026-07-26/memory-frenzy-primes-china-champion-cxmt-for-historic-debut",
    time: "10 ore fa",
    pub_ts: 1785024000,
    tags: [],
  },
  {
    id: 19,
    cat: "economia-tech",
    title: "Saudi Arabia strikes Houthis after Iran-backed rebels target energy sites",
    summary: "Tit-for-tat attacks risk expanding the regional war in the Middle East",
    body: "Tit-for-tat attacks risk expanding the regional war in the Middle East",
    source: "Financial Times",
    url: "https://www.ft.com/content/14ee6049-87bf-4aac-b684-c9937374fdcc?syn-25a6b1a6=1",
    time: "21 ore fa",
    pub_ts: 1784984560,
    tags: [],
  },
];
