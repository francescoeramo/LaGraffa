// Generato automaticamente il 2026-07-31 18:24 UTC da scripts/fetch_news.py
// NON modificare manualmente: viene sovrascritto ogni ora dalla GitHub Action.
var NEWS_TIMESTAMP = 1785522229;

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
    title: "L'Italia sospende Schengen con la Spagna. Meloni: 'Tutelata la sicurezza nazionale'",
    summary: "A Ceuta 60mila migranti, rimpatriati oltre 48mila. Recuperati 57 cadaveri. Gli Usa attaccano: 'Sforzi deliberati per incoraggiare l'immigrazione illegale'. Von der Leyen: 'Immagini inaccettabili'",
    body: "A Ceuta 60mila migranti, rimpatriati oltre 48mila. Recuperati 57 cadaveri. Gli Usa attaccano: 'Sforzi deliberati per incoraggiare l'immigrazione illegale'. Von der Leyen: 'Immagini inaccettabili'",
    source: "ANSA",
    url: "https://www.ansa.it/sito/notizie/mondo/2026/07/31/litalia-sospende-schengen-con-la-spagna.-meloni-tutelata-la-sicurezza-nazionale_a2e6519a-5785-4646-8369-c6b28102df5e.html",
    time: "6 min fa",
    pub_ts: 1785521824,
    tags: [],
  },
  {
    id: 2,
    cat: "politica-italiana",
    title: "Umbria Balloon Festival, il colle di Todi sfondo per il volo all'alba delle mongolfiere",
    summary: "Il sindaco, Ruggiano: \"Esperimento riuscito\". L'ideatore, Briziarelli: \"Già richieste per il prossimo anno\"",
    body: "Il sindaco, Ruggiano: \"Esperimento riuscito\". L'ideatore, Briziarelli: \"Già richieste per il prossimo anno\"",
    source: "ANSA",
    url: "https://www.ansa.it/sito/videogallery/italia/2026/07/31/umbria-balloon-festival-il-colle-di-todi-sfondo-per-il-volo-allalba-delle_69b9794b-ca8c-4615-b29b-580d79710546.html",
    time: "7 ore fa",
    pub_ts: 1785496824,
    tags: [],
  },
  {
    id: 3,
    cat: "geopolitica",
    title: "La policía de Brasil investigará a un hijo de Lula por presunta corrupción y tráfico de influencias",
    summary: "El presidente afirma que ´Lulinha´ tendrá que probar que es inocente y que no usará el cargo para protegerlo",
    body: "Uno de los cinco hijos del presidente brasileño Luiz Inácio Lula da Silva será investigado para aclarar si usó el peso de su apellido para facilitar negociaciones de empresarios amigos en los despachos de Brasilia. El Tribunal Supremo Federal autorizó a la Policía Federal a abrir una investigación por indicios de delitos de corrupción y tráfico de influencias contra Fábio Luís da Silva, de 51 años, más conocido como Lulinha .\n\nSeguir leyendo",
    source: "El Pais",
    url: "https://elpais.com/america/2026-07-31/la-policia-de-brasil-investigara-a-un-hijo-de-lula-por-presunta-corrupcion-y-trafico-de-influencias.html",
    time: "2 ore fa",
    pub_ts: 1785514807,
    tags: [],
  },
  {
    id: 4,
    cat: "geopolitica",
    title: "Perfil bajo de Mañueco pese a otro incendio histórico en Castilla y León",
    summary: "El presidente autonómico, nuevamente afectado por el fuego y con los bomberos denunciando precariedad, adopta un rol secundario durante la crisis",
    body: "Castilla y León ha sufrido en los últimos años los incendios más graves de su historia , todos bajo la presidencia de Alfonso Fernández Mañueco, de un PP que lleva gobernando allí desde 1987. El fuego de Burgohondo (Ávila), con unas 50.000 hectáreas afectadas , se une a una larga secuencia cuya extensión ha ido aumentando. En 2021, en Navalacruz, también Ávila, ardieron 22.000 hectáreas , mucho menos que las casi 60.000 abrasadas al año siguiente en sendos focos en la sierra de la Culebra (Zamora) , con cuatro muertos.\n\nEn 2025, otra crisis: más de 100.000 hectáreas carbonizadas , la mayoría entre León y Zamora, y cinco víctimas mortales. En todas ellas Mañueco prometió “reflexión” mientras en este episodio ha asumido un perfil bajo, con las miradas políticas y mediáticas globales puestas en Isabel Díaz Ayuso, presidenta de la Comunidad de Madrid (PP), y el presidente del Gobierno, Pedro Sánchez (PSOE), al pedir esta la emergencia nacional por los incendios en su región, algo que Mañueco nunca ha demandado.\n\nEste también ha cambiado de consejero de Medio Ambiente, enviando a Industria al polémico Juan Carlos Suárez-Quiñones, y su reemplazo, María González Corral, tampoco ha entrado en controversias. Seguir leyendo",
    source: "El Pais",
    url: "https://elpais.com/espana/2026-07-31/el-perfil-bajo-de-manueco-pese-a-otro-incendio-historico-en-castilla-y-leon-entre-la-emergencia-nacional.html",
    time: "4 ore fa",
    pub_ts: 1785505983,
    tags: [],
  },
  {
    id: 5,
    cat: "geopolitica",
    title: "Sánchez denuncia una “violación de la integridad territorial de España” tras la llegada de miles de inmigrantes irregulares a Ceuta",
    summary: "El presidente valora la “cooperación reiterada, constante y fluida” de Marruecos en la crisis fronteriza “a diferencia de lo que pasó en 2021″ y destaca la reducción de la inmigración irregular un 36% este año y un 40% en 2025",
    body: "Pedro Sánchez ha denunciado este viernes una “violación de la integridad territorial de España”, después de que en las últimas horas hayan entrado 50.000 personas en Ceuta desde Marruecos en una crisis migratoria que supera con creces a la de 2021. El presidente del Gobierno ha responsabilizado “a las mafias que trafican con seres humanos” y ha defendido la respuesta de Marruecos, al que se ha referido como “un aliado” en una comparecencia que ha realizado en la Asamblea de la ciudad autónoma, en su quinta visita desde que llegó a La Moncloa.\n\nSeguir leyendo",
    source: "El Pais",
    url: "https://elpais.com/espana/2026-07-31/sanchez-denuncia-una-violacion-de-la-integridad-territorial-de-espana-tras-la-llegada-de-miles-de-inmigrantes-irregulares-a-ceuta.html",
    time: "6 ore fa",
    pub_ts: 1785497983,
    tags: [],
  },
  {
    id: 6,
    cat: "geopolitica",
    title: "Peru's ex-president has 15-year jail sentence for corruption charges overturned",
    summary: "Ollanta Humala had been convicted of money laundering offences alongside his wife in 2025.",
    body: "Ollanta Humala had been convicted of money laundering offences alongside his wife in 2025.",
    source: "BBC World",
    url: "https://www.bbc.co.uk/news/articles/cx2j9nj88rro?at_medium=RSS&at_campaign=rss",
    time: "7 ore fa",
    pub_ts: 1785493937,
    tags: [],
  },
  {
    id: 7,
    cat: "geopolitica",
    title: "What could happen to Fifa if Uefa boycotts World Cup?",
    summary: "It's been a seismic 48 hours for football after Uefa threatened to boycott the World Cup and Concacaf rejected Gianni Infantino's funding plan - what happens now, and can Fifa's president survive?",
    body: "It's been a seismic 48 hours for football after Uefa threatened to boycott the World Cup and Concacaf rejected Gianni Infantino's funding plan - what happens now, and can Fifa's president survive?",
    source: "BBC World",
    url: "https://www.bbc.co.uk/sport/football/articles/c9984d9x1eyo?at_medium=RSS&at_campaign=rss",
    time: "13 ore fa",
    pub_ts: 1785474857,
    tags: [],
  },
  {
    id: 8,
    cat: "geopolitica",
    title: "Why limited war with the US may suit Iran better than peace",
    summary: "Iran may believe it can control its conflict carefully enough to keep pressure on the US while avoiding an all-out war.",
    body: "Iran may believe it can control its conflict carefully enough to keep pressure on the US while avoiding an all-out war.",
    source: "BBC World",
    url: "https://www.bbc.co.uk/news/articles/c78gnyq3wvdo?at_medium=RSS&at_campaign=rss",
    time: "1 giorno fa",
    pub_ts: 1785432361,
    tags: [],
  },
  {
    id: 9,
    cat: "conflitti",
    title: "Three-year roadmap proposed for Hamas disarmament in Gaza",
    summary: "Under a US-backed proposal, Hamas and Israel would have 14 days to finalise Gaza's political transition",
    body: "Under a US-backed proposal, Hamas and Israel would have 14 days to finalise Gaza's political transition",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/video/newsfeed/2026/7/31/three-year-roadmap-proposed-for-hamas-disarmament-in-gaza?traffic_source=rss",
    time: "1 ora fa",
    pub_ts: 1785515717,
    tags: [],
  },
  {
    id: 10,
    cat: "conflitti",
    title: "Palestinians in Gaza react to latest ceasefire deal",
    summary: "‘Enough is enough’, Palestinians in Gaza express little hope that the latest ceasefire deal will end the war.",
    body: "‘Enough is enough’, Palestinians in Gaza express little hope that the latest ceasefire deal will end the war.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/video/newsfeed/2026/7/31/31-07-sv-gazans-react-to-latest-deal-ps?traffic_source=rss",
    time: "5 ore fa",
    pub_ts: 1785502788,
    tags: [],
  },
  {
    id: 11,
    cat: "conflitti",
    title: "The promise I made to Ismail al-Ghoul",
    summary: "He asked me to keep telling Gaza’s story. Two years after Israel killed him, I have not stopped.",
    body: "He asked me to keep telling Gaza’s story. Two years after Israel killed him, I have not stopped.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/opinions/2026/7/31/the-promise-i-made-to-ismail-al-ghoul?traffic_source=rss",
    time: "2 ore fa",
    pub_ts: 1785511815,
    tags: [],
  },
  {
    id: 12,
    cat: "ai",
    title: "Anthropic says Claude accidentally hacked real companies too",
    summary: "Anthropic just realized several of its Claude AI models hacked into the systems of three different organizations during testing, acting on their own and without the company noticing. The revelation comes days after rival OpenAI said one of its own models had breached developer platform Hugging Face, adding to growing unease over whether frontier AI",
    body: "Anthropic just realized several of its Claude AI models hacked into the systems of three different organizations during testing, acting on their own and without the company noticing. The revelation comes days after rival OpenAI said one of its own models had breached developer platform Hugging Face, adding to growing unease over whether frontier AI labs are doing enough to control the increasingly capable systems they are building.\n\nIn a blog post describing the incidents, Anthropic said Claude gained unauthorized access to the systems during cybersecurity evaluations. All of the attacks happened during \"capture-the-flag\" exercises, a commo …",
    source: "The Verge",
    url: "https://www.theverge.com/ai-artificial-intelligence/973670/anthropic-claude-hacked-organizations-during-cyber-tests",
    time: "4 ore fa",
    pub_ts: 1785505277,
    tags: [],
  },
  {
    id: 13,
    cat: "ai",
    title: "Samsung expects memory shortage to worsen through 2027 and last until 2028",
    summary: "AI data center demand is fueling a multi-year chip shortage, pushing up component costs and retail device prices.",
    body: "AI data center demand is fueling a multi-year chip shortage, pushing up component costs and retail device prices.",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/31/samsung-expects-memory-shortage-to-worsen-through-2027-and-last-until-2028/",
    time: "2 ore fa",
    pub_ts: 1785512278,
    tags: [],
  },
  {
    id: 14,
    cat: "ai",
    title: "Anthropic says its own AI models breached three companies during security tests",
    summary: "After OpenAI's models broke into Hugging Face, Anthropic checked its own history and found three similar incidents.",
    body: "After OpenAI's models broke into Hugging Face, Anthropic checked its own history and found three similar incidents.",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/30/anthropic-says-its-own-ai-models-breached-three-companies-during-security-tests/",
    time: "17 ore fa",
    pub_ts: 1785460014,
    tags: [],
  },
  {
    id: 15,
    cat: "ai",
    title: "AI hedge fund Situational Awareness may have sold its public portfolio, but it still has its Anthropic shares",
    summary: "The former OpenAI researcher’s fund was forced to unwind public equities after leveraged public bets plummeted. But he still has cards to play.",
    body: "The former OpenAI researcher’s fund was forced to unwind public equities after leveraged public bets plummeted. But he still has cards to play.",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/30/ai-hedge-fund-situational-awareness-may-have-sold-its-public-portfolio-but-it-still-has-its-anthropic-shares/",
    time: "18 ore fa",
    pub_ts: 1785453958,
    tags: [],
  },
  {
    id: 16,
    cat: "ai",
    title: "The ban on robot vacuums won’t make them safer, only worse",
    summary: "No other gadget knows as much about your home as a robot vacuum. They map your space, learn your routines, and many now carry a camera and microphone into every room in your house. As AI gives them a better understanding of what they see, the privacy and security risks these autonomous robots pose are",
    body: "All future robot vacuums manufactured outside the USA (i.e., all of them) have been banned by the FCC. | Photo by Jennifer Pattison Tuohy / The Verge No other gadget knows as much about your home as a robot vacuum . They map your space, learn your routines, and many now carry a camera and microphone into every room in your house. As AI gives them a better understanding of what they see, the privacy and security risks these autonomous robots pose are only growing.\n\nThat's why greater scrutiny makes sense, but the ban on foreign-made mobile robots issued by the Federal Communications Commission earlier this week - implemented to address \"unacceptable risks to the national security of the United States or the safety and security of United States persons\" - doesn't actually judge products by h …",
    source: "The Verge",
    url: "https://www.theverge.com/tech/973738/robot-vacuum-ban-fewer-choices-higher-prices",
    time: "53 min fa",
    pub_ts: 1785519049,
    tags: [],
  },
  {
    id: 17,
    cat: "ai",
    title: "It’s time to panic about AI safety",
    summary: "When the phrase \"OpenAI hacked Hugging Face\" has more or less entered mainstream culture, you know we have an AI problem. This week, we learned more about exactly how OpenAI's agent broke out of a sandbox and autonomously traversed the web, including a bunch of other supposedly secure web services, all in the name of",
    body: "When the phrase \"OpenAI hacked Hugging Face\" has more or less entered mainstream culture, you know we have an AI problem . This week, we learned more about exactly how OpenAI's agent broke out of a sandbox and autonomously traversed the web, including a bunch of other supposedly secure web services, all in the name of cheating on a benchmark tests. The fact that this hack happened is a problem. So is the fact that it took a while for anyone to notice.\n\nAnd the fact that it seems no one is willing or able to do much to stop it. (And lest you think it's just an OpenAI problem, since we recorded this episode Anthropic acknowledged its models ha …",
    source: "The Verge",
    url: "https://www.theverge.com/podcast/973668/ai-safety-openai-hugging-face-vergecast",
    time: "4 ore fa",
    pub_ts: 1785506584,
    tags: [],
  },
  {
    id: 18,
    cat: "economia-tech",
    title: "Commercio di legname, le sfide di un sistema che vale 3,3 miliardi",
    summary: "Stefano Corà eletto alla presidenza di Fedecomlegno di FederlegnoArredo",
    body: "Stefano Corà eletto alla presidenza di Fedecomlegno di FederlegnoArredo",
    source: "Il Sole 24 Ore",
    url: "https://www.ilsole24ore.com/art/commercio-legname-sfide-un-sistema-che-vale-33-miliardi-AJpd5ea",
    time: "12 ore fa",
    pub_ts: 1785477721,
    tags: [],
  },
  {
    id: 19,
    cat: "economia-tech",
    title: "Combining Tesla and SpaceX Makes 'A Ton of Sense' Says Munster",
    summary: "Tesla Inc. is weighing a potential separation of its China business to pave the way for a possible merger with SpaceX, according to the Wall Street Journal. Separating Tesla's China operations would be a complex undertaking due to the auto factory's deep embedding in China's electric vehicle supply chain and its role in supplying vehicles to markets worldwide. Gene Munster, Managing Partner at…",
    body: "Tesla Inc. is weighing a potential separation of its China business to pave the way for a possible merger with SpaceX, according to the Wall Street Journal. Separating Tesla's China operations would be a complex undertaking due to the auto factory's deep embedding in China's electric vehicle supply chain and its role in supplying vehicles to markets worldwide. Gene Munster, Managing Partner at Deepwater Asset Management, joins Bloomberg Intelligence to discuss Tesla as well as to break down Apple's earnings.\n\n(Source: Bloomberg)",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/videos/2026-07-31/combining-tesla-spacex-makes-a-ton-of-sense-munster-video",
    time: "1 ora fa",
    pub_ts: 1785515339,
    tags: [],
  },
  {
    id: 20,
    cat: "economia-tech",
    title: "AI Has Reached an Inflection Point",
    summary: "Lei Qiu, chief investment officer of thematic innovation equities at AllianceBernstein, says AI has reached an inflection point as the focus shifts from infrastructure investment to revenue generation. \"We see revenue accelerating,\" she says, adding that continued adoption is critical. \"As long as we see that, I think the ecosystem remains healthy.\" She speaks on \"Bloomberg Surveillance.\"…",
    body: "Lei Qiu, chief investment officer of thematic innovation equities at AllianceBernstein, says AI has reached an inflection point as the focus shifts from infrastructure investment to revenue generation. \"We see revenue accelerating,\" she says, adding that continued adoption is critical. \"As long as we see that, I think the ecosystem remains healthy.\" She speaks on \"Bloomberg Surveillance.\" (Source: Bloomberg)",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/videos/2026-07-31/ai-has-reached-an-inflection-point-video",
    time: "2 ore fa",
    pub_ts: 1785513959,
    tags: [],
  },
  {
    id: 21,
    cat: "economia-tech",
    title: "Index Ventures, Firm Behind Wiz, Revolut, Raises $2 Billion for Trio of Funds",
    summary: "Index Ventures, an investor in cybersecurity firm Wiz and fintech Revolut, has raised $2 billion in new capital to back startups across multiple stages of development.",
    body: "Index Ventures, an investor in cybersecurity firm Wiz and fintech Revolut, has raised $2 billion in new capital to back startups across multiple stages of development.",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/articles/2026-07-31/index-ventures-firm-behind-wiz-revolut-raises-2-billion-for-trio-of-funds",
    time: "2 ore fa",
    pub_ts: 1785513533,
    tags: [],
  },
  {
    id: 22,
    cat: "economia-tech",
    title: "Markets are getting AI right",
    summary: "Recent volatility reflects economic reality",
    body: "Recent volatility reflects economic reality",
    source: "Financial Times",
    url: "https://www.ft.com/content/c167fb1b-69c3-4df0-9126-1e0af678f924?syn-25a6b1a6=1",
    time: "5 ore fa",
    pub_ts: 1785502807,
    tags: [],
  },
  {
    id: 23,
    cat: "economia-tech",
    title: "How Leopold Aschenbrenner, the ‘golden child’ of the AI trade, was laid low",
    summary: "The $20bn hedge fund manager’s wild ride ended with a call to Ken Griffin",
    body: "The $20bn hedge fund manager’s wild ride ended with a call to Ken Griffin",
    source: "Financial Times",
    url: "https://www.ft.com/content/620bd668-d112-412d-aa52-22489b128d55?syn-25a6b1a6=1",
    time: "17 ore fa",
    pub_ts: 1785459479,
    tags: [],
  },
];
