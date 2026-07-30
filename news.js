// Generato automaticamente il 2026-07-30 16:40 UTC da scripts/fetch_news.py
// NON modificare manualmente: viene sovrascritto ogni ora dalla GitHub Action.
var NEWS_TIMESTAMP = 1785429626;

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
    title: "Rinviato il voto sul riconoscimento facciale. L'Ue: 'Il riconoscimento facciale in spazi pubblici è vietato dall'AI Act'",
    summary: "Slitta il parere. Il provvedimento è approdato anche all'esame delle commissioni Affari costituzionali e Giustizia di Camera e Senato",
    body: "Slitta il parere. Il provvedimento è approdato anche all'esame delle commissioni Affari costituzionali e Giustizia di Camera e Senato",
    source: "ANSA",
    url: "https://www.ansa.it/sito/notizie/politica/2026/07/30/rinviato-il-voto-sul-riconoscimento-facciale-alla-commissione-affari-ue-alla-camera_b0e5a2b0-364a-4f19-9a3f-021b114ccf5a.html",
    time: "4 ore fa",
    pub_ts: 1785413301,
    tags: [],
  },
  {
    id: 2,
    cat: "politica-italiana",
    title: "Anche George Clooney e famiglia evacuati per gli incendi nel sud della Francia",
    summary: "Divo scrive al sindaco di Brignoles: 'Noi parte di questa comunità. Pronti a ricostruire'",
    body: "Divo scrive al sindaco di Brignoles: 'Noi parte di questa comunità. Pronti a ricostruire'",
    source: "ANSA",
    url: "https://www.ansa.it/sito/notizie/mondo/europa/2026/07/30/anche-george-clooney-e-famiglia-evacuati-per-gli-incendi-nel-sud_c109a35e-ffb0-4f41-b28e-3e194bee0f26.html",
    time: "5 ore fa",
    pub_ts: 1785411561,
    tags: [],
  },
  {
    id: 3,
    cat: "geopolitica",
    title: "US launches 'heavy' strikes on Iran after attempted attack on American troops",
    summary: "After a short period of relative calm when hostilities were paused, both sides have now restarted missile attacks.",
    body: "After a short period of relative calm when hostilities were paused, both sides have now restarted missile attacks.",
    source: "BBC World",
    url: "https://www.bbc.co.uk/news/articles/c74gwdzywmeo?at_medium=RSS&at_campaign=rss",
    time: "5 ore fa",
    pub_ts: 1785408554,
    tags: [],
  },
  {
    id: 4,
    cat: "geopolitica",
    title: "Begoña Gómez recupera el pasaporte tras retirárselo el juez Peinado",
    summary: "El magistrado autorizó finalmente que otra persona recogiera la documentación en su nombre, según fuentes cercanas a la esposa del presidente del Gobierno",
    body: "Begoña Gómez ya ha podido recuperar su pasaporte, según informan fuentes cercanas a la esposa de Pedro Sánchez. El juez Juan Carlos Peinado, a quien la Audiencia Provincial de Madrid ha obligado a retirar las medidas cautelares que impuso a la pareja del presidente y a su asistente en La Moncloa, autorizó finalmente a que la procuradora de la pareja del presidente del Gobierno acudiese a recoger la documentación en su nombre y, según detallan estas fuentes, así se ha hecho.\n\nEsta devolución se produce después de que la defensa de la asistente de Gómez, Cristina Álvarez, denunciase que Peinado estaba “reteniendo” su pasaporte al obligar a ambas a acudir en persona al juzgado para conseguir tenerlos de vuelta. Seguir leyendo",
    source: "El Pais",
    url: "https://elpais.com/espana/2026-07-30/begona-gomez-recupera-el-pasaporte-tras-retirarselo-el-juez-peinado.html",
    time: "6 ore fa",
    pub_ts: 1785406400,
    tags: [],
  },
  {
    id: 5,
    cat: "geopolitica",
    title: "España y Marruecos acuerdan “agilizar los trámites” para devolver a las personas que han ingresado ilegalmente en Ceuta",
    summary: "Feijóo se suma a la petición del presidente de la ciudad autónoma y presiona al Gobierno central para que declare la “emergencia” por una cuestión de seguridad nacional",
    body: "España y Marruecos han acordado este jueves “reforzar la coordinación” y los esfuerzos para hacer frente a la crisis migratoria que afecta a Ceuta, donde han llegado entre 1.500 y 2.000 personas en los últimos 10 días, y se han comprometido a revisar e implementar medidas para la entrega, “lo antes posible, de todas las que han entrado ilegalmente”, según ha informado Interior en un comunicado y han confirmado también fuentes marroquíes a la Agencia Efe.\n\n“Ambos países acordaron reforzar la coordinación y los esfuerzos para hacer frente a estos flujos y se comprometieron a revisar y aplicar medidas para la repatriación, a la mayor brevedad posible, de todas las personas que hayan entrado ilegalmente en Ceuta”, aseguraron dichas fuentes. Seguir leyendo",
    source: "El Pais",
    url: "https://elpais.com/espana/2026-07-30/el-presidente-de-ceuta-pide-al-gobierno-la-emergencia-nacional-y-mando-unico-por-la-presion-migratoria.html",
    time: "8 ore fa",
    pub_ts: 1785398003,
    tags: [],
  },
  {
    id: 6,
    cat: "geopolitica",
    title: "The Chinese robot army transforming the UK's retail industry",
    summary: "Britain's weak productivity growth and labour shortages are creating an opportunity for China's robotics firms.",
    body: "Britain's weak productivity growth and labour shortages are creating an opportunity for China's robotics firms.",
    source: "BBC World",
    url: "https://www.bbc.co.uk/news/articles/c0jl8v23qwgo?at_medium=RSS&at_campaign=rss",
    time: "18 ore fa",
    pub_ts: 1785362909,
    tags: [],
  },
  {
    id: 7,
    cat: "geopolitica",
    title: "Saudi Arabia's dilemma as it tries to stay out of US-Iran war",
    summary: "The kingdom faces a choice of whether to keep hitting back as a deterrent or to try to de-escalate the situation.",
    body: "The kingdom faces a choice of whether to keep hitting back as a deterrent or to try to de-escalate the situation.",
    source: "BBC World",
    url: "https://www.bbc.co.uk/news/articles/clyx83l8jv8o?at_medium=RSS&at_campaign=rss",
    time: "21 ore fa",
    pub_ts: 1785350491,
    tags: [],
  },
  {
    id: 8,
    cat: "geopolitica",
    title: "Can French nukes protect Europe if Donald Trump walks away?",
    summary: "Europeans are keen on nuclear collaboration with Emmanuel Macron. What if Marine Le Pen becomes president?",
    body: "Europeans are keen on nuclear collaboration with Emmanuel Macron. What if Marine Le Pen becomes president?",
    source: "The Economist",
    url: "https://www.economist.com/international/2026/07/28/can-french-nukes-protect-europe-if-donald-trump-walks-away",
    time: "1 giorno fa",
    pub_ts: 1785276787,
    tags: [],
  },
  {
    id: 9,
    cat: "conflitti",
    title: "War on Iran: Phase II: Day 19",
    summary: "The US resumes bombing Iran, with a family of three killed in Qeshm Island.",
    body: "The US resumes bombing Iran, with a family of three killed in Qeshm Island.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/video/newsfeed/2026/7/30/war-on-iran-phase-ii-day-19?traffic_source=rss",
    time: "1 ora fa",
    pub_ts: 1785423419,
    tags: [],
  },
  {
    id: 10,
    cat: "conflitti",
    title: "Poland says Russian missile breaches NATO airspace",
    summary: "Poland says a Russian missile landed inside Polish territory, breaching NATO airspace during a Russian attack on Ukraine",
    body: "Poland says a Russian missile landed inside Polish territory, breaching NATO airspace during a Russian attack on Ukraine",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/video/newsfeed/2026/7/30/30-07-sv-lublin-air-sirens-pl?traffic_source=rss",
    time: "6 ore fa",
    pub_ts: 1785406432,
    tags: [],
  },
  {
    id: 11,
    cat: "conflitti",
    title: "Israeli strikes kill at least four, including children, across Gaza Strip",
    summary: "Bombings take place as Hamas officials meet with Qatari, Egyptian and Turkish mediators in Cairo to discuss truce.",
    body: "Bombings take place as Hamas officials meet with Qatari, Egyptian and Turkish mediators in Cairo to discuss truce.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/news/2026/7/30/israeli-strikes-kill-at-least-four-including-children-across-gaza-strip?traffic_source=rss",
    time: "5 ore fa",
    pub_ts: 1785411150,
    tags: [],
  },
  {
    id: 12,
    cat: "ai",
    title: "In the Hugging Face breach, OpenAI’s hacker was noisy and fast — but not unstoppable",
    summary: "Cybersecurity experts told TechCrunch that one of the biggest lessons to be taken from the OpenAI hack against Hugging Face has nothing to do with AI, but traditional cybersecurity defense.",
    body: "Cybersecurity experts told TechCrunch that one of the biggest lessons to be taken from the OpenAI hack against Hugging Face has nothing to do with AI, but traditional cybersecurity defense.",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/30/in-the-hugging-face-breach-openais-hacker-was-noisy-and-fast-but-not-unstoppable/",
    time: "1 ora fa",
    pub_ts: 1785422912,
    tags: [],
  },
  {
    id: 13,
    cat: "ai",
    title: "Microsoft is openly competing with OpenAI, Anthropic more than ever",
    summary: "Microsoft pitched its own homegrown AI models, harnesses, and even a Mythos competitor on Wednesday, telling Wall Street it plans for continued growth.",
    body: "Microsoft pitched its own homegrown AI models, harnesses, and even a Mythos competitor on Wednesday, telling Wall Street it plans for continued growth.",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/29/microsoft-is-openly-competing-with-openai-anthropic-more-than-ever/",
    time: "16 ore fa",
    pub_ts: 1785370866,
    tags: [],
  },
  {
    id: 14,
    cat: "ai",
    title: "Microsoft logs $3.2B from Anthropic investment, but OpenAI was a mixed bag",
    summary: "When Microsoft reported killer fourth-quarter earnings for its fiscal 2026 year (which ended June 30), it tucked in an interesting little tidbit about how its investments in the two biggest, and competing, AI labs are doing.",
    body: "When Microsoft reported killer fourth-quarter earnings for its fiscal 2026 year (which ended June 30), it tucked in an interesting little tidbit about how its investments in the two biggest, and competing, AI labs are doing.",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/29/microsoft-logs-3-2b-from-anthropic-investment-but-openai-was-a-mixed-bag/",
    time: "17 ore fa",
    pub_ts: 1785365163,
    tags: [],
  },
  {
    id: 15,
    cat: "economia-tech",
    title: "«Capitali per crescere», consulenza finanziaria al servizio delle imprese toscane",
    summary: "Un consulente finanziario per facilitare l’accesso delle imprese al mercato dei capitali. È il progetto lanciato da Confindustria Toscana Centro e Costa (Firenze, Livorno, Massa-Carrara) e chiamato “Capitali per...",
    body: "Un consulente finanziario per facilitare l’accesso delle imprese al mercato dei capitali. È il progetto lanciato da Confindustria Toscana Centro e Costa (Firenze, Livorno, Massa-Carrara) e chiamato “Capitali per...",
    source: "Il Sole 24 Ore",
    url: "https://www.ilsole24ore.com/art/capitali-crescere-consulenza-finanziaria-servizio-imprese-toscane-AJaWmZZ",
    time: "9 ore fa",
    pub_ts: 1785394921,
    tags: [],
  },
  {
    id: 16,
    cat: "economia-tech",
    title: "Warsh’s stripped-back Fed communication ‘already backfiring’, say investors",
    summary: "Traders warn lack of guidance on interest rates erodes US central bank’s influence on Treasury market",
    body: "Traders warn lack of guidance on interest rates erodes US central bank’s influence on Treasury market",
    source: "Financial Times",
    url: "https://www.ft.com/content/57aac838-baee-406d-b4ac-c0ffda351aee?syn-25a6b1a6=1",
    time: "6 ore fa",
    pub_ts: 1785407066,
    tags: [],
  },
  {
    id: 17,
    cat: "economia-tech",
    title: "Citadel buys Situational Awareness equity holdings after steep AI losses",
    summary: "Deal comes after Leopold Aschenbrenner’s investment firm held overnight crunch talks with investors",
    body: "Deal comes after Leopold Aschenbrenner’s investment firm held overnight crunch talks with investors",
    source: "Financial Times",
    url: "https://www.ft.com/content/5fb44089-ecdf-4b48-bc14-1e8b4682b142?syn-25a6b1a6=1",
    time: "41 min fa",
    pub_ts: 1785427136,
    tags: [],
  },
  {
    id: 18,
    cat: "economia-tech",
    title: "Scale AI Names Google Cloud Executive Francis deSouza as New CEO",
    summary: "Scale AI Inc. has appointed an executive from Alphabet Inc.’s Google to be its first permanent chief executive officer in more than a year since Meta Platforms Inc. invested $14.3 billion in the data-labeling startup and hired away its CEO.",
    body: "Scale AI Inc. has appointed an executive from Alphabet Inc.’s Google to be its first permanent chief executive officer in more than a year since Meta Platforms Inc. invested $14.3 billion in the data-labeling startup and hired away its CEO.",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/articles/2026-07-30/scale-ai-names-google-cloud-executive-francis-desouza-as-new-ceo",
    time: "2 ore fa",
    pub_ts: 1785419100,
    tags: [],
  },
  {
    id: 19,
    cat: "economia-tech",
    title: "Iconiq Backs Satellite Startup K2 Space at $6.8 Billion Value",
    summary: "Startup K2 Space, which builds large satellites for high-power tasks like data-heavy communications and defense missions, has raised $500 million in a new round of funding, the company plans to announce Thursday.",
    body: "Startup K2 Space, which builds large satellites for high-power tasks like data-heavy communications and defense missions, has raised $500 million in a new round of funding, the company plans to announce Thursday.",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/articles/2026-07-30/iconiq-backs-satellite-startup-k2-space-at-6-8-billion-value",
    time: "3 ore fa",
    pub_ts: 1785416400,
    tags: [],
  },
  {
    id: 20,
    cat: "economia-tech",
    title: "Trying to make sense of Warsh",
    summary: "Abdicating responsibility or fortifying the markets with anti-fragility serum?",
    body: "Abdicating responsibility or fortifying the markets with anti-fragility serum?",
    source: "Financial Times",
    url: "https://www.ft.com/content/17bcdc30-a59f-4a1f-afa7-f2c759fe588b",
    time: "4 ore fa",
    pub_ts: 1785413918,
    tags: [],
  },
  {
    id: 21,
    cat: "economia-tech",
    title: "Apple’s Earnings Will Test Stock’s Status as the AI Safety Play",
    summary: "Wall Street’s sudden aversion to AI spending has made Apple Inc. this year’s Big Tech stock market star. But the iPhone maker’s earnings after the close Thursday could remind investors of the hurdles it still faces.",
    body: "Wall Street’s sudden aversion to AI spending has made Apple Inc. this year’s Big Tech stock market star. But the iPhone maker’s earnings after the close Thursday could remind investors of the hurdles it still faces.",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/articles/2026-07-30/apple-s-earnings-will-test-stock-s-status-as-the-ai-safety-play",
    time: "7 ore fa",
    pub_ts: 1785401457,
    tags: [],
  },
];
