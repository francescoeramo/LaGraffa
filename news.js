// Generato automaticamente il 2026-08-02 12:08 UTC da scripts/fetch_news.py
// NON modificare manualmente: viene sovrascritto ogni ora dalla GitHub Action.
var NEWS_TIMESTAMP = 1785672473;

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
    title: "Bologna ricorda la strage, Mattarella: 'Strategia neofascista'. Meloni: 'Fu terrorismo feroce'",
    summary: "Corteo nel capoluogo emiliano, sfilano anche i parenti di Fakir insieme al sindaco Lepore e ai migliaia di persone",
    body: "Corteo nel capoluogo emiliano, sfilano anche i parenti di Fakir insieme al sindaco Lepore e ai migliaia di persone",
    source: "ANSA",
    url: "https://www.ansa.it/sito/notizie/cronaca/2026/08/02/bologna-ricorda-la-strage-mattarella-strategia-neofascista.-meloni-fu-terrorismo-feroce_d040c4ef-2d4e-429b-beee-e39cc1efe837.html",
    time: "53 min fa",
    pub_ts: 1785669283,
    tags: [],
  },
  {
    id: 2,
    cat: "politica-italiana",
    title: "AI Act, Garante Privacy 'rafforzare le tutele per i dati biometrici'",
    summary: "L'Autorità individua alcuni profili da integrare nello schema di decreto legislativo",
    body: "L'Autorità individua alcuni profili da integrare nello schema di decreto legislativo",
    source: "ANSA",
    url: "https://www.ansa.it/canale_tecnologia/notizie/tecnologia/2026/07/29/ai-act-garante-privacy-rafforzare-le-tutele-per-i-dati-biometrici_ca1f12b2-63fd-4948-b992-1f5e154752a1.html",
    time: "2 ore fa",
    pub_ts: 1785662451,
    tags: [],
  },
  {
    id: 3,
    cat: "politica-italiana",
    title: "Aperta la camera ardente per don Mazzi nella sede di Exodus",
    summary: "Allestita nella mensa dove pranzava con i ragazzi",
    body: "Allestita nella mensa dove pranzava con i ragazzi",
    source: "ANSA",
    url: "https://www.ansa.it/sito/notizie/cronaca/2026/08/01/aperta-la-camera-ardente-di-don-mazzi-nella-sede-di-exodus_ac5fcd28-454f-400d-a83f-3bc9a51c3f14.html",
    time: "17 ore fa",
    pub_ts: 1785610739,
    tags: [],
  },
  {
    id: 4,
    cat: "geopolitica",
    title: "Trump cancels Iran strikes subject to deal being made 'rapidly'",
    summary: "The US president claims Iran and other Middle Eastern countries asked Washington to hold off on any attack as the \"perimeters\" of a deal had been agreed.",
    body: "The US president claims Iran and other Middle Eastern countries asked Washington to hold off on any attack as the \"perimeters\" of a deal had been agreed.",
    source: "BBC World",
    url: "https://www.bbc.co.uk/news/articles/cjwx74qgld2o?at_medium=RSS&at_campaign=rss",
    time: "56 min fa",
    pub_ts: 1785669120,
    tags: [],
  },
  {
    id: 5,
    cat: "geopolitica",
    title: "Trump dice que suspende los ataques contra Irán a la espera de un acuerdo rápido",
    summary: "El presidente de EE UU asegura haber tomado la decisión a petición de Teherán y de otros países de Oriente Próximo",
    body: "Nuevo bandazo en la guerra de Irán. Tras unos días en los que Washington había vuelto a golpear con fuerza a la República Islámica, el presidente de Estados Unidos, Donald Trump, ha anunciado que congela los ataques para tratar de buscar un acuerdo. En esta ocasión, asegura que lo hace a petición de Teherán y de otros países de la región que no especifica. Y que cuenta con el beneplácito de Israel.\n\nSeguir leyendo",
    source: "El Pais",
    url: "https://elpais.com/internacional/2026-08-02/donald-trump-dice-que-suspende-los-ataques-contra-iran-a-la-espera-de-un-acuerdo-rapido.html",
    time: "2 ore fa",
    pub_ts: 1785662090,
    tags: [],
  },
  {
    id: 6,
    cat: "geopolitica",
    title: "La crisis de Ceuta alinea a la derecha europea contra Sánchez",
    summary: "El presidente español, cada vez más solo en Europa, acusa a sus socios de falta de solidaridad, mientras PP y Vox avivan la batalla por la inmigración",
    body: "Un nuevo fantasma recorre Europa y esta vez se llama inmigración. Sobre él cabalga la rampante derechización del continente. Y ante él, Pedro Sánchez, el único socialdemócrata al mando de uno de los grandes países de los 27, se ve cada vez más solo, como ha evidenciado la crisis de Ceuta con sus imágenes de una oleada humana que han impresionado a todo el planeta . Pero, muy en su estilo, el presidente español no rehúye la batalla.\n\nComo prueba, la carta que envió este sábado a Bruselas denunciando el “egoísmo” de algunos de sus socios europeos. Seguir leyendo",
    source: "El Pais",
    url: "https://elpais.com/espana/2026-08-02/la-crisis-de-ceuta-alinea-a-la-derecha-europea-contra-sanchez.html",
    time: "8 ore fa",
    pub_ts: 1785641401,
    tags: [],
  },
  {
    id: 7,
    cat: "geopolitica",
    title: "La doble vara de medir de Trump: de la complacencia con Marruecos a la incomodidad con España",
    summary: "El presidente estadounidense alaba al rey Mohamed VI, con quien ha estrechado la relación tras el reconocimiento del Sáhara Occidental",
    body: "Lo primero que se ve cuando se visita la cuenta de Donald Trump en su red social, Truth, es una publicación fija en la que agradece al rey de Marruecos, Mohamed VI, que le haya puesto su nombre a una autopista kilométrica que conecta el sur del país con el Sáhara Occidental. No es un mensaje más. Lleva una semana encabezando el resto de publicaciones del presidente estadounidense en la plataforma social que creó para dar rienda suelta a sus pensamientos verborreicos.\n\nSeguir leyendo",
    source: "El Pais",
    url: "https://elpais.com/espana/2026-08-02/la-doble-vara-de-medir-de-trump-de-la-complacencia-con-marruecos-a-la-incomodidad-con-espana.html",
    time: "8 ore fa",
    pub_ts: 1785641401,
    tags: [],
  },
  {
    id: 8,
    cat: "geopolitica",
    title: "A bruising 24 hours - what next for Fifa and under-pressure Infantino?",
    summary: "Pressure is building on Gianni Infantino. Can he survive as Fifa president after the implosion of the controversial World Cup investment plan?",
    body: "Pressure is building on Gianni Infantino. Can he survive as Fifa president after the implosion of the controversial World Cup investment plan?",
    source: "BBC World",
    url: "https://www.bbc.co.uk/sport/football/articles/c9w0djx2g92o?at_medium=RSS&at_campaign=rss",
    time: "13 ore fa",
    pub_ts: 1785623000,
    tags: [],
  },
  {
    id: 9,
    cat: "geopolitica",
    title: "Infantino on the brink? Who might replace him if he goes?",
    summary: "Fifa president Gianni Infantino is in the eye of a storm after scrapping his attempt to sell stakes in the World Cup. If he goes, who comes in?",
    body: "Fifa president Gianni Infantino is in the eye of a storm after scrapping his attempt to sell stakes in the World Cup. If he goes, who comes in?",
    source: "BBC World",
    url: "https://www.bbc.co.uk/sport/football/articles/c998m4ve0rpo?at_medium=RSS&at_campaign=rss",
    time: "1 giorno fa",
    pub_ts: 1785578563,
    tags: [],
  },
  {
    id: 10,
    cat: "conflitti",
    title: "Trump ‘cancels attack on Iran’ saying deal is near",
    summary: "US President Trump announced he was cancelling a planned attack on Iran with the ‘perimeters of a deal’ agreed to.",
    body: "US President Trump announced he was cancelling a planned attack on Iran with the ‘perimeters of a deal’ agreed to.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/video/newsfeed/2026/8/2/trump-cancels-attack-on-iran-saying-deal-is-near?traffic_source=rss",
    time: "3 ore fa",
    pub_ts: 1785660195,
    tags: [],
  },
  {
    id: 11,
    cat: "conflitti",
    title: "Gaza students overcome Israel’s genocide to mark Tawjihi results",
    summary: "Students in Gaza overcome distressing conditions amid Israel's genocide to finish their Tawjihi high school exams.",
    body: "Students in Gaza overcome distressing conditions amid Israel's genocide to finish their Tawjihi high school exams.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/features/2026/8/2/gaza-students-overcome-israels-genocide-to-celebrate-tawjihi-results?traffic_source=rss",
    time: "6 ore fa",
    pub_ts: 1785648424,
    tags: [],
  },
  {
    id: 12,
    cat: "conflitti",
    title: "Trump cancels Iran strike, says ‘deal perimeters’ reached",
    summary: "The US president announced that he has cancelled a planned military strike on Iran, claiming progress in talks.",
    body: "The US president announced that he has cancelled a planned military strike on Iran, claiming progress in talks.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/news/2026/8/2/trump-cancels-iran-strike-says-deal-perimeters-reached?traffic_source=rss",
    time: "8 ore fa",
    pub_ts: 1785641803,
    tags: [],
  },
  {
    id: 13,
    cat: "ai",
    title: "Sam Altman is still making the case for parenting via ChatGPT",
    summary: "OpenAI's CEO seemed excited to share a \"cool use case\" for parents.",
    body: "OpenAI's CEO seemed excited to share a \"cool use case\" for parents.",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/08/01/sam-altman-is-still-making-the-case-for-parenting-via-chatgpt/",
    time: "19 ore fa",
    pub_ts: 1785604054,
    tags: [],
  },
  {
    id: 14,
    cat: "ai",
    title: "Trump blames Tim Walz for water hacks even though it’s probably Iran",
    summary: "The FBI, the EPA, and the Cybersecurity and Infrastructure Security Agency (CISA) have stopped short of officially blaming Iran for a spate of cyberattacks on Minnesota's water systems, but consensus is that Iran is likely behind them. That, of course, hasn't stopped Donald Trump from sharing his own theory - that Governor Tim Walz is",
    body: "Donald Trump speaks during the House Republican Party member retreat. | Image: Mandel NGAN / AFP via Getty Images The FBI, the EPA, and the Cybersecurity and Infrastructure Security Agency ( CISA ) have stopped short of officially blaming Iran for a spate of cyberattacks on Minnesota's water systems, but consensus is that Iran is likely behind them. That, of course, hasn't stopped Donald Trump from sharing his own theory - that Governor Tim Walz is to blame and telling reporters that \"I don't think there was an Iranian cyberattack.\" Trump's comments come shortly after the FBI issued a warning that the cyberattacks on American infrastructure were spreading to other states.\n\nIn Minnesota alone, at least 30 community water systems had been targeted in what a …",
    source: "The Verge",
    url: "https://www.theverge.com/policy/974197/trump-tim-walz-minnesota-water-hacks-iran",
    time: "20 ore fa",
    pub_ts: 1785597815,
    tags: [],
  },
  {
    id: 15,
    cat: "ai",
    title: "OpenAI reportedly finds evidence that more of its agents ran amok",
    summary: "OpenAI has reportedly found evidence of additional agent misbehavior as it looks into the incident that occurred with Hugging Face.",
    body: "OpenAI has reportedly found evidence of additional agent misbehavior as it looks into the incident that occurred with Hugging Face.",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/31/openai-reportedly-finds-evidence-that-more-of-its-agents-ran-amok/",
    time: "1 giorno fa",
    pub_ts: 1785538046,
    tags: [],
  },
  {
    id: 16,
    cat: "ai",
    title: "Rivian spinoff Also to start delivering e-bikes after months of delays",
    summary: "Also has big plans beyond the TM-B. The startup mostly refers to itself as a \"vehicle\" company and has plans to make four-wheel pedal-assist cargo vehicles for Amazon.",
    body: "Also has big plans beyond the TM-B. The startup mostly refers to itself as a \"vehicle\" company and has plans to make four-wheel pedal-assist cargo vehicles for Amazon.",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/31/rivian-spinoff-also-to-start-delivering-e-bikes-after-months-of-delays/",
    time: "1 giorno fa",
    pub_ts: 1785535208,
    tags: [],
  },
  {
    id: 17,
    cat: "economia-tech",
    title: "Stellantis, il mercato italiano guida la ripresa, corre il marchio Fiat",
    summary: "Sul mercato domestico, un quarto delle immatricolazioni in più registrate in Europa nel primo semestre dell’anno - I nuovi modelli Fiat Grande Panda e Citroen C3 trainano i volumi",
    body: "Sul mercato domestico, un quarto delle immatricolazioni in più registrate in Europa nel primo semestre dell’anno - I nuovi modelli Fiat Grande Panda e Citroen C3 trainano i volumi",
    source: "Il Sole 24 Ore",
    url: "https://www.ilsole24ore.com/art/stellantis-mercato-italiano-guida-ripresa-corre-marchio-fiat-AJ1T7DY",
    time: "1 giorno fa",
    pub_ts: 1785556921,
    tags: [],
  },
  {
    id: 18,
    cat: "economia-tech",
    title: "Morgan Stanley’s IPO after-party: a wealth management bonanza",
    summary: "Bank’s underwriting of SpaceX and other new issues generates $74bn second-quarter haul in wealth management assets",
    body: "Bank’s underwriting of SpaceX and other new issues generates $74bn second-quarter haul in wealth management assets",
    source: "Financial Times",
    url: "https://www.ft.com/content/3f651fa0-3362-4a16-9ac1-992291c5f68a?syn-25a6b1a6=1",
    time: "2 ore fa",
    pub_ts: 1785664805,
    tags: [],
  },
  {
    id: 19,
    cat: "economia-tech",
    title: "Zepto Turns to Private Funding With IPO Plans on Hold for Now",
    summary: "Zepto Ltd said it agreed on a private share sale to major investors as the Indian quick-commerce firm pushed back plans for an initial public offering after failing to secure its anticipated valuation.",
    body: "Zepto Ltd said it agreed on a private share sale to major investors as the Indian quick-commerce firm pushed back plans for an initial public offering after failing to secure its anticipated valuation.",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/articles/2026-08-01/zepto-turns-to-private-funding-with-ipo-plans-on-hold-for-now",
    time: "20 ore fa",
    pub_ts: 1785597455,
    tags: [],
  },
];
