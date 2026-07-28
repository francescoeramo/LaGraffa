// Generato automaticamente il 2026-07-28 06:32 UTC da scripts/fetch_news.py
// NON modificare manualmente: viene sovrascritto ogni ora dalla GitHub Action.
var NEWS_TIMESTAMP = 1785220350;

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
    title: "Media, attacco ucraino a Mosca con centinaia di droni",
    summary: "Il sindaco: 'La maggior parte neutralizzata prima di raggiungere la città'. Colpito un centro logistico dell'azienda Wildberries",
    body: "Il sindaco: 'La maggior parte neutralizzata prima di raggiungere la città'. Colpito un centro logistico dell'azienda Wildberries",
    source: "ANSA",
    url: "https://www.ansa.it/sito/notizie/mondo/2026/07/28/media-attacco-ucraino-a-mosca-con-un-centinaio-di-droni_f7af86ab-2e98-4bd2-8871-5af1806d9932.html",
    time: "1 ora fa",
    pub_ts: 1785216596,
    tags: [],
  },
  {
    id: 2,
    cat: "politica-italiana",
    title: "Macron nei luoghi devastati dagli incendi: 'Nelle Lande è sotto controllo, in Gironda si continua a combattere'",
    summary: "Macron atteso nella regione",
    body: "Macron atteso nella regione",
    source: "ANSA",
    url: "https://www.ansa.it/sito/notizie/mondo/2026/07/27/incendi-in-francia-e-spagna-a-gironda-incendio-non-domato-e-la-ue-pensa-ad-una-flotta_57b629da-ec0b-4e38-bcf3-edd2862fc93b.html",
    time: "11 ore fa",
    pub_ts: 1785179996,
    tags: [],
  },
  {
    id: 3,
    cat: "politica-italiana",
    title: "Meloni nei cantieri Tav, ' i magistrati facciano il massimo'",
    summary: "Premier a Chiomonte: 'Violenza organizzata', con lei Piantedosi: 'Serve unità'",
    body: "Premier a Chiomonte: 'Violenza organizzata', con lei Piantedosi: 'Serve unità'",
    source: "ANSA",
    url: "https://www.ansa.it/sito/notizie/cronaca/2026/07/27/guerriglia-no-tav-meloni-in-val-di-susa-violenza-organizzata.-i-no-tav-siamo-tutti_6aeee38f-44bd-40ef-afaf-9b3a940a47ca.html",
    time: "11 ore fa",
    pub_ts: 1785179485,
    tags: [],
  },
  {
    id: 4,
    cat: "geopolitica",
    title: "Trump says Iran war talks taking place during lull in strikes",
    summary: "The US president says \"there is a good chance that something could happen\", as Iran denies direct talks are taking place.",
    body: "The US president says \"there is a good chance that something could happen\", as Iran denies direct talks are taking place.",
    source: "BBC World",
    url: "https://www.bbc.co.uk/news/articles/c62xn4vzmnpo?at_medium=RSS&at_campaign=rss",
    time: "9 ore fa",
    pub_ts: 1785186656,
    tags: [],
  },
  {
    id: 5,
    cat: "geopolitica",
    title: "Los insultos de Milei a Lula llevan a Argentina y Brasil al peor choque diplomático en años",
    summary: "Los ataques del presidente ultra al izquierdista, que han motivado la llamada a consultas del embajador brasileño, conviven con una fuerte relación económica entre ambos países",
    body: "Los insultos del presidente argentino Javier Milei a su homólogo brasileño Luiz Inácio Lula da Silva abrieron la mayor crisis diplomática de los últimos tiempos entre los dos países, un nuevo tropiezo que es una constante de los últimos años. No obstante, a pesar de la pésima o nula relación personal entre los dos, las principales economías de América del Sur han aprendido a convivir con esas diferencias.\n\nNo hay sintonía en los palacios, pero la rueda sigue girando. Seguir leyendo",
    source: "El Pais",
    url: "https://elpais.com/argentina/2026-07-28/los-insultos-de-milei-a-lula-llevan-a-argentina-y-brasil-al-peor-choque-diplomatico-en-anos.html",
    time: "2 ore fa",
    pub_ts: 1785211200,
    tags: [],
  },
  {
    id: 6,
    cat: "geopolitica",
    title: "China's new challenge as natural disasters strike - fake AI videos",
    summary: "Storms and flooding incidents over the last few months have seen fake videos inundating social media.",
    body: "Storms and flooding incidents over the last few months have seen fake videos inundating social media.",
    source: "BBC World",
    url: "https://www.bbc.co.uk/news/articles/cx27mjvxgg1o?at_medium=RSS&at_campaign=rss",
    time: "8 ore fa",
    pub_ts: 1785190043,
    tags: [],
  },
  {
    id: 7,
    cat: "geopolitica",
    title: "As the US pauses the war with Iran, is Trump really running out of weapons?",
    summary: "The US has fired thousands of hard-to-replace missiles during its war with Iran. We unpack whether its \"arsenal of freedom\" is perilously low.",
    body: "The US has fired thousands of hard-to-replace missiles during its war with Iran. We unpack whether its \"arsenal of freedom\" is perilously low.",
    source: "BBC World",
    url: "https://www.bbc.co.uk/news/articles/c0qvnk2ezp7o?at_medium=RSS&at_campaign=rss",
    time: "9 ore fa",
    pub_ts: 1785186402,
    tags: [],
  },
  {
    id: 8,
    cat: "geopolitica",
    title: "Netanyahu viaja a EE UU para reunirse con Trump tras los encontronazos mantenidos sobre la guerra en Irán",
    summary: "El primer ministro de Israel, descontento con el alto el fuego con Teherán, necesita el apoyo del presidente republicano de cara a las elecciones de octubre",
    body: "El primer ministro de Israel, Benjamín Netanyahu, vuela hacia Washington para reunirse con Donald Trump por primera vez desde que lanzaron juntos la guerra contra Irán, el pasado febrero. Aunque las entrevistas entre ambos no son excepcionales (el presidente de EE UU no se ha reunido tanto con ningún otro líder internacional, ocho veces desde que regresó al poder en 2025), sí lo es su impacto. Más aún al llegar un mes después de las nada secretas broncas (insultos incluidos) que Trump dedicó a Netanyahu cuando sintió que la ofensiva de Israel en Líbano ponía en peligro el alto el fuego con Irán.\n\nLas divergencias no parecen enteramente cosa del pasado, a tenor de las declaraciones del dirigente republicano de cara a la visita. Israel, ha dicho, “no sobreviviría” sin la ayuda de EE UU (“Bibi [Netanyahu] está viniendo, él os lo dirá”, agregó). Y dijo que “nadie” puede dictarle qué armamento vender a Turquía, en referencia a su oposición a la posible transferencia a Ankara de cazas F-35, que solo Israel tiene en la región.\n\nSeguir leyendo",
    source: "El Pais",
    url: "https://elpais.com/internacional/2026-07-27/netanyahu-viaja-a-ee-uu-para-reunirse-con-trump-tras-los-encontronazos-mantenidos-sobre-la-guerra-en-iran.html",
    time: "12 ore fa",
    pub_ts: 1785176029,
    tags: [],
  },
  {
    id: 9,
    cat: "conflitti",
    title: "Ukraine’s Zelenskyy set to meet Trump as Iran and Ukraine wars converge",
    summary: "The US Senate will vote Tuesday on Russian sanctions, days after Ukraine attacked an Iranian vessel in the Caspian Sea.",
    body: "The US Senate will vote Tuesday on Russian sanctions, days after Ukraine attacked an Iranian vessel in the Caspian Sea.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/news/2026/7/28/ukraines-zelenskyy-set-to-meet-trump-as-iran-and-ukraine-wars-converge?traffic_source=rss",
    time: "3 ore fa",
    pub_ts: 1785208590,
    tags: [],
  },
  {
    id: 10,
    cat: "conflitti",
    title: "Trump says Iran talks taking place during pause in US military strikes",
    summary: "US President Donald Trump says talks with Iran are continuing during a pause in US military strikes",
    body: "US President Donald Trump says talks with Iran are continuing during a pause in US military strikes",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/video/newsfeed/2026/7/28/trump-says-iran-talks-taking-place-during-pause-in-us-military-strikes?traffic_source=rss",
    time: "3 ore fa",
    pub_ts: 1785206875,
    tags: [],
  },
  {
    id: 11,
    cat: "conflitti",
    title: "Iran war live: Trump says US talking to Tehran, set to meet Netanyahu",
    summary: "Iran says US 'struggling' to end five-month-old war, as Netanyahu arrives in Washington, DC, for talks with Trump.",
    body: "Iran says US 'struggling' to end five-month-old war, as Netanyahu arrives in Washington, DC, for talks with Trump.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/news/liveblog/2026/7/28/iran-war-live-trump-touts-friendly-talks-netanyahu-arrives-in-us?traffic_source=rss",
    time: "6 ore fa",
    pub_ts: 1785196800,
    tags: [],
  },
  {
    id: 12,
    cat: "ai",
    title: "Ilya Sutskever’s Safe Superintelligence partners with Nvidia to scale its AI research",
    summary: "After two years in stealth, Safe Superintelligence has announced a long-term partnership with Nvidia as it prepares to scale to its next phase.",
    body: "After two years in stealth, Safe Superintelligence has announced a long-term partnership with Nvidia as it prepares to scale to its next phase.",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/27/ilya-sutskevers-safe-superintelligence-partners-with-nvidia-to-scale-its-ai-research/",
    time: "15 ore fa",
    pub_ts: 1785164510,
    tags: [],
  },
  {
    id: 13,
    cat: "ai",
    title: "Anthropic’s Dario Amodei responds: doesn’t oppose open-weight models, but fears Chinese AI",
    summary: "Anthropic founder and CEO Dario Amodei made his views clear about open-weight models and China's growing AI capabilities.",
    body: "Anthropic founder and CEO Dario Amodei made his views clear about open-weight models and China's growing AI capabilities.",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/27/anthropics-dario-amodei-responds-doesnt-oppose-open-weight-models-but-fears-chinese-ai/",
    time: "6 ore fa",
    pub_ts: 1785197613,
    tags: [],
  },
  {
    id: 14,
    cat: "ai",
    title: "Thea Energy lands $20M federal grant to build its magnets for fusion reactors",
    summary: "Fusion power startup Thea Energy snagged a $20 million award from ARPA-E to scale production of its high-temperature superconducting magnets.",
    body: "Fusion power startup Thea Energy snagged a $20 million award from ARPA-E to scale production of its high-temperature superconducting magnets.",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/27/thea-energy-lands-20m-federal-grant-to-build-its-magnets-for-fusion-reactors/",
    time: "9 ore fa",
    pub_ts: 1785184812,
    tags: [],
  },
  {
    id: 15,
    cat: "economia-tech",
    title: "Scorte e investimenti spingono la manifattura nei primi quattro mesi",
    summary: "Analisi trimestrale Prometeia-Intesa Sanpaolo: il fatturato cresce del 2,3%, l’estero del 2,2%. Stabile la produzione (+0,8%). Bene Elettrotecnica e meccanica, giù alimentare e trasporti",
    body: "Analisi trimestrale Prometeia-Intesa Sanpaolo: il fatturato cresce del 2,3%, l’estero del 2,2%. Stabile la produzione (+0,8%). Bene Elettrotecnica e meccanica, giù alimentare e trasporti",
    source: "Il Sole 24 Ore",
    url: "https://www.ilsole24ore.com/art/scorte-e-investimenti-spingono-manifattura-primi-quattro-mesi-AJUAt5W",
    time: "32 min fa",
    pub_ts: 1785218415,
    tags: [],
  },
  {
    id: 16,
    cat: "economia-tech",
    title: "La filiera del tessile di Como si unisce per comprare energia rinnovabile a costi ridotti",
    summary: "L’acquisto collettivo permetterà di avere prezzi migliori a partire dal 2027",
    body: "L’acquisto collettivo permetterà di avere prezzi migliori a partire dal 2027",
    source: "Il Sole 24 Ore",
    url: "https://www.ilsole24ore.com/art/la-filiera-tessile-como-si-unisce-comprare-energia-rinnovabile-costi-ridotti-AJuNwlV",
    time: "1 giorno fa",
    pub_ts: 1785049200,
    tags: [],
  },
  {
    id: 17,
    cat: "economia-tech",
    title: "The unexpected winners from China’s blockbuster chip IPO",
    summary: "Funds run by Hefei’s local government make gains of 5,000% from CXMT listing",
    body: "Funds run by Hefei’s local government make gains of 5,000% from CXMT listing",
    source: "Financial Times",
    url: "https://www.ft.com/content/d6439cb3-5a9e-4f6e-b5d6-b0e5621567c4?syn-25a6b1a6=1",
    time: "57 min fa",
    pub_ts: 1785216945,
    tags: [],
  },
  {
    id: 18,
    cat: "economia-tech",
    title: "Orange Raises Full-Year Estimates on Spain Deal, Africa Growth",
    summary: "Orange SA raised its profit outlook for the year, driven by growth in the French mobile carrier’s Africa and Middle East markets and the acquisition of a new business in Spain.",
    body: "Orange SA raised its profit outlook for the year, driven by growth in the French mobile carrier’s Africa and Middle East markets and the acquisition of a new business in Spain.",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/articles/2026-07-28/orange-raises-full-year-estimates-on-spain-deal-africa-growth",
    time: "1 ora fa",
    pub_ts: 1785216721,
    tags: [],
  },
  {
    id: 19,
    cat: "economia-tech",
    title: "TotalEnergies benefits from EU sanctions reprieve on Russian gas",
    summary: "French energy major can continue selling LNG from its Yamal project in Siberia to Asian customers",
    body: "French energy major can continue selling LNG from its Yamal project in Siberia to Asian customers",
    source: "Financial Times",
    url: "https://www.ft.com/content/0ee947e4-0b2a-48e4-93de-2c7985662f14?syn-25a6b1a6=1",
    time: "2 ore fa",
    pub_ts: 1785211223,
    tags: [],
  },
  {
    id: 20,
    cat: "economia-tech",
    title: "Origin Says About 900,000 Customers’ Data Accessed in Breach",
    summary: "About 900,000 current and former Origin Energy Ltd. customers had their data accessed in a security breach, the latest in a string of cyberattacks on major Australian companies and essential-service providers.",
    body: "About 900,000 current and former Origin Energy Ltd. customers had their data accessed in a security breach, the latest in a string of cyberattacks on major Australian companies and essential-service providers.",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/articles/2026-07-28/origin-says-about-900-000-customers-data-accessed-in-breach",
    time: "4 ore fa",
    pub_ts: 1785205043,
    tags: [],
  },
  {
    id: 21,
    cat: "economia-tech",
    title: "Anthropic’s Amodei Rejects Open Model Ban, Calls for Testing",
    summary: "Silicon Valley leaders from Anthropic PBC’s Dario Amodei to Nvidia Corp.’s Jensen Huang warned against a US crackdown on open-weight artificial intelligence systems, deepening a debate about how Washington should respond to a surprise breakthrough from Chinese startup Moonshot.",
    body: "Silicon Valley leaders from Anthropic PBC’s Dario Amodei to Nvidia Corp.’s Jensen Huang warned against a US crackdown on open-weight artificial intelligence systems, deepening a debate about how Washington should respond to a surprise breakthrough from Chinese startup Moonshot.",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/articles/2026-07-28/anthropic-s-amodei-rejects-open-model-ban-but-calls-for-testing",
    time: "4 ore fa",
    pub_ts: 1785203492,
    tags: [],
  },
];
