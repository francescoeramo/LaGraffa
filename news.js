// Generato automaticamente il 2026-07-31 13:01 UTC da scripts/fetch_news.py
// NON modificare manualmente: viene sovrascritto ogni ora dalla GitHub Action.
var NEWS_TIMESTAMP = 1785502839;

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
    title: "'In poche ore entrati in 60mila a Ceuta', 24 morti. Madrid contro Roma: 'Crisi slegata dalla riforma sui migranti'",
    summary: "Chiusa la frontiera a Melilla dopo l'entrata di 400 migranti",
    body: "Chiusa la frontiera a Melilla dopo l'entrata di 400 migranti",
    source: "ANSA",
    url: "https://www.ansa.it/sito/notizie/mondo/2026/07/31/in-poche-ora-entrati-in-60mila-a-ceuta-24-morti.-madrid-contro-roma-crisi_a2e6519a-5785-4646-8369-c6b28102df5e.html",
    time: "13 min fa",
    pub_ts: 1785502019,
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
    time: "1 ora fa",
    pub_ts: 1785496824,
    tags: [],
  },
  {
    id: 3,
    cat: "politica-italiana",
    title: "Trasparenza nei concorsi universitari, Mur e Anac firmano protocollo",
    summary: "Per accompagnare l'attuazione della riforma con strumenti di prevenzione della corruzione",
    body: "Per accompagnare l'attuazione della riforma con strumenti di prevenzione della corruzione",
    source: "ANSA",
    url: "https://www.ansa.it/canale_legalita_scuola/notizie/mur/2026/07/30/trasparenza-nei-concorsi-universitari-mur-e-anac-firmano-protocollo_09d7d9e5-b8ec-4c99-b21a-c2827d84f078.html",
    time: "20 ore fa",
    pub_ts: 1785428886,
    tags: [],
  },
  {
    id: 4,
    cat: "geopolitica",
    title: "Última hora de la entrada de inmigrantes a Ceuta, en directo | Interior cifra en 50.000 los inmigrantes que han entrado irregularmente a Ceuta y destaca que la mitad ha regresado ya a Marruecos",
    summary: "Sánchez denuncia “una violación de la integridad territorial de España” | El presidente del Gobierno agradece la cooperación con Marruecos para que se materialice “cuanto antes” la repatriación de los inmigrantes y anuncia el despliegue de boyas en el espigón para crear una barrera de contención | El número de muertos en la entrada masiva asciende a 41",
    body: "El Ministerio del Interior ha informado este viernes de que finalmente han sido 50.000 personas las que han entrado de manera ilegal en España desde que se inició la crisis migratoria. La cifra es sensiblemente inferior a la que ha facilitado poco antes el presidente de la ciudad autónoma, Juan Jesús Vivas, que ha elevado el número a 60.000. El departamento de Fernando Grande-Marlaska añade que, de ellas, aproximadamente la mitad, cerca de 25.000, han retornado de manera voluntaria a Marruecos.\n\nEl presidente del Gobierno, Pedro Sánchez, se ha desplazado a Ceuta, mientras el balance de migrantes muertos al intentar entrar a nado en el enclave se ha elevado a 41. “Lo que ha sucedido en el día de ayer como un ataque, una violación de la integridad territorial de España”, ha dicho. El jefe del Ejecutivo ha agradecido la cooperación con Marruecos para que se materialice “cuanto antes” la repatriación de los inmigrantes y ha anunciado el despliegue de boyas en el espigón para crear una barrera de contención.\n\nSeguir leyendo",
    source: "El Pais",
    url: "https://elpais.com/espana/2026-07-31/ultima-hora-de-la-entrada-de-inmigrantes-a-ceuta-en-directo.html",
    time: "12 min fa",
    pub_ts: 1785502096,
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
    time: "1 ora fa",
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
    time: "2 ore fa",
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
    time: "7 ore fa",
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
    time: "19 ore fa",
    pub_ts: 1785432361,
    tags: [],
  },
  {
    id: 9,
    cat: "conflitti",
    title: "Iran war live: IRGC claims attack on Kuwait; Gaza peace deal announced",
    summary: "Iran says attacks in response to US strikes; Hamas says any deal is conditional on Israel's full withdrawal from Gaza.",
    body: "Iran says attacks in response to US strikes; Hamas says any deal is conditional on Israel's full withdrawal from Gaza.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/news/liveblog/2026/7/31/iran-war-live-irgc-claims-retaliatory-attack-on-kuwait?traffic_source=rss",
    time: "6 ore fa",
    pub_ts: 1785480578,
    tags: [],
  },
  {
    id: 10,
    cat: "conflitti",
    title: "Gaza Board of Peace announces Hamas disarmament agreement: What we know",
    summary: "Under the agreement, Israel would have to withdraw from Gaza. But Palestinians remain sceptical.",
    body: "Under the agreement, Israel would have to withdraw from Gaza. But Palestinians remain sceptical.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/news/2026/7/31/gaza-board-of-peace-announces-hamas-disarmament-agreement-what-we-know?traffic_source=rss",
    time: "1 ora fa",
    pub_ts: 1785496989,
    tags: [],
  },
  {
    id: 11,
    cat: "conflitti",
    title: "Hamas agrees to phased disarmament in Gaza",
    summary: "Hamas has agreed to gradually disarm in Gaza as part of Donald Trump’s 20-point peace plan.",
    body: "Hamas has agreed to gradually disarm in Gaza as part of Donald Trump’s 20-point peace plan.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/video/newsfeed/2026/7/31/hamas-agrees-to-phased-disarmament-in-gaza?traffic_source=rss",
    time: "4 ore fa",
    pub_ts: 1785487997,
    tags: [],
  },
  {
    id: 12,
    cat: "ai",
    title: "Anthropic says its own AI models breached three companies during security tests",
    summary: "After OpenAI's models broke into Hugging Face, Anthropic checked its own history and found three similar incidents",
    body: "After OpenAI's models broke into Hugging Face, Anthropic checked its own history and found three similar incidents",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/30/anthropic-says-its-own-ai-models-breached-three-companies-during-security-tests/",
    time: "11 ore fa",
    pub_ts: 1785460014,
    tags: [],
  },
  {
    id: 13,
    cat: "ai",
    title: "AI hedge fund Situational Awareness may have sold its public portfolio, but it still has its Anthropic shares",
    summary: "The former OpenAI researcher’s fund was forced to unwind public equities after leveraged public bets plummeted. But he still has cards to play.",
    body: "The former OpenAI researcher’s fund was forced to unwind public equities after leveraged public bets plummeted. But he still has cards to play.",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/30/ai-hedge-fund-situational-awareness-may-have-sold-its-public-portfolio-but-it-still-has-its-anthropic-shares/",
    time: "13 ore fa",
    pub_ts: 1785453958,
    tags: [],
  },
  {
    id: 14,
    cat: "ai",
    title: "Repeat founder Ryan Williams raises $10M seed for an AI startup for private credit managers",
    summary: "Ellis AI announced Thursday its emergence from stealth with $10 million in seed funding.",
    body: "Ellis AI announced Thursday its emergence from stealth with $10 million in seed funding.",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/31/repeat-founder-ryan-williams-raises-10m-seed-for-an-ai-startup-for-private-credit-managers/",
    time: "1 ora fa",
    pub_ts: 1785499200,
    tags: [],
  },
  {
    id: 15,
    cat: "economia-tech",
    title: "Commercio di legname, le sfide di un sistema che vale 3,3 miliardi",
    summary: "Stefano Corà eletto alla presidenza di Fedecomlegno di FederlegnoArredo",
    body: "Stefano Corà eletto alla presidenza di Fedecomlegno di FederlegnoArredo",
    source: "Il Sole 24 Ore",
    url: "https://www.ilsole24ore.com/art/commercio-legname-sfide-un-sistema-che-vale-33-miliardi-AJpd5ea",
    time: "6 ore fa",
    pub_ts: 1785477721,
    tags: [],
  },
  {
    id: 16,
    cat: "economia-tech",
    title: "«Capitali per crescere», consulenza finanziaria al servizio delle imprese toscane",
    summary: "Un consulente finanziario per facilitare l’accesso delle imprese al mercato dei capitali. È il progetto lanciato da Confindustria Toscana Centro e Costa (Firenze, Livorno, Massa-Carrara) e chiamato “Capitali per...",
    body: "Un consulente finanziario per facilitare l’accesso delle imprese al mercato dei capitali. È il progetto lanciato da Confindustria Toscana Centro e Costa (Firenze, Livorno, Massa-Carrara) e chiamato “Capitali per...",
    source: "Il Sole 24 Ore",
    url: "https://www.ilsole24ore.com/art/capitali-crescere-consulenza-finanziaria-servizio-imprese-toscane-AJaWmZZ",
    time: "1 giorno fa",
    pub_ts: 1785394921,
    tags: [],
  },
  {
    id: 17,
    cat: "economia-tech",
    title: "Fed dissenters warn of challenges in taming inflation",
    summary: "Three rate-setters rebelled against US central bank’s majority decision to hold rates steady this week",
    body: "Three rate-setters rebelled against US central bank’s majority decision to hold rates steady this week",
    source: "Financial Times",
    url: "https://www.ft.com/content/395afe31-3c86-4911-af05-54ca5aa2d41b?syn-25a6b1a6=1",
    time: "35 min fa",
    pub_ts: 1785500714,
    tags: [],
  },
  {
    id: 18,
    cat: "economia-tech",
    title: "European Execs Show AI Optimism: Markets Snapshot",
    summary: "A big week of earnings results for some of the world's most influential companies has been underscored by the global AI infrastructure buildout, tightening supply chains and ongoing geopolitical uncertainty. The Opening Trade spoke to CEOs and corporate heavy weights to get clarity on their second-half outlook and whether they remain optimistic on returns from their AI investments. (Source:…",
    body: "A big week of earnings results for some of the world's most influential companies has been underscored by the global AI infrastructure buildout, tightening supply chains and ongoing geopolitical uncertainty. The Opening Trade spoke to CEOs and corporate heavy weights to get clarity on their second-half outlook and whether they remain optimistic on returns from their AI investments. (Source: Bloomberg)",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/videos/2026-07-31/european-execs-show-ai-optimism-markets-snapshot-video",
    time: "4 ore fa",
    pub_ts: 1785486553,
    tags: [],
  },
  {
    id: 19,
    cat: "economia-tech",
    title: "Moonshot’s Kimi Built on 20,000 Nvidia Chip Cluster From Alibaba",
    summary: "Chinese AI champion Moonshot has a computing power agreement with Alibaba Group Holding Ltd. for the use of around 20,000 Nvidia Corp. chips, underscoring China’s continued reliance on Western semiconductors to fuel its AI development, according to people with knowledge of the companies’ operations.",
    body: "Chinese AI champion Moonshot has a computing power agreement with Alibaba Group Holding Ltd. for the use of around 20,000 Nvidia Corp. chips, underscoring China’s continued reliance on Western semiconductors to fuel its AI development, according to people with knowledge of the companies’ operations.",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/articles/2026-07-31/moonshot-s-kimi-built-on-20-000-nvidia-chip-cluster-from-alibaba",
    time: "41 min fa",
    pub_ts: 1785500363,
    tags: [],
  },
  {
    id: 20,
    cat: "economia-tech",
    title: "Hong Kong’s Economy Slows More Than Forecast Despite AI Boom",
    summary: "Hong Kong’s economic growth slowed more than forecast last quarter, even as a global rush to invest in artificial intelligence turbocharges the city’s exports.",
    body: "Hong Kong’s economic growth slowed more than forecast last quarter, even as a global rush to invest in artificial intelligence turbocharges the city’s exports.",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/articles/2026-07-31/hong-kong-s-economy-slows-more-than-forecast-despite-export-boom",
    time: "4 ore fa",
    pub_ts: 1785487166,
    tags: [],
  },
  {
    id: 21,
    cat: "economia-tech",
    title: "What Warsh is (probably) up to",
    summary: "The pro-volatility Fed chair",
    body: "The pro-volatility Fed chair",
    source: "Financial Times",
    url: "https://www.ft.com/content/b1267def-3590-4482-9833-d09f0b1230b8?syn-25a6b1a6=1",
    time: "7 ore fa",
    pub_ts: 1785475806,
    tags: [],
  },
  {
    id: 22,
    cat: "economia-tech",
    title: "How Leopold Aschenbrenner, the ‘golden child’ of the AI trade, was laid low",
    summary: "The $20bn hedge fund manager’s wild ride ended with a call to Ken Griffin",
    body: "The $20bn hedge fund manager’s wild ride ended with a call to Ken Griffin",
    source: "Financial Times",
    url: "https://www.ft.com/content/620bd668-d112-412d-aa52-22489b128d55?syn-25a6b1a6=1",
    time: "12 ore fa",
    pub_ts: 1785459479,
    tags: [],
  },
];
