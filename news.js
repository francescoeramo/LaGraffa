// Generato automaticamente il 2026-07-30 18:21 UTC da scripts/fetch_news.py
// NON modificare manualmente: viene sovrascritto ogni ora dalla GitHub Action.
var NEWS_TIMESTAMP = 1785435680;

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
    time: "48 min fa",
    pub_ts: 1785432776,
    tags: [],
  },
  {
    id: 2,
    cat: "politica-italiana",
    title: "Pil oltre le attese al +0,2%, già una dote dello 0,8% per il 2026",
    summary: "Il governo: 'Cresciamo nonostante il contesto'. La disoccupazione sale di più tra i giovani",
    body: "Il governo: 'Cresciamo nonostante il contesto'. La disoccupazione sale di più tra i giovani",
    source: "ANSA",
    url: "https://www.ansa.it/sito/notizie/economia/pmi/2026/07/30/istat-il-pil-cresce-dello-02-nel-secondo-trimestre-2_b518eadf-f462-4793-994b-0f19712c167e.html",
    time: "28 min fa",
    pub_ts: 1785433987,
    tags: [],
  },
  {
    id: 3,
    cat: "politica-italiana",
    title: "Musk in campo per le midterm, fino a 120 milioni per i repubblicani",
    summary: "Contatti con lo staff di Trump. Il presidente sfida gli oppositori in Senato per Blanche",
    body: "Contatti con lo staff di Trump. Il presidente sfida gli oppositori in Senato per Blanche",
    source: "ANSA",
    url: "https://www.ansa.it/sito/notizie/mondo/2026/07/30/musk-in-campo-per-le-midterm-fino-a-120-milioni-per-i-repubblicani_7aff10d6-8092-4dea-aeac-6da5ed01dca1.html",
    time: "34 min fa",
    pub_ts: 1785433623,
    tags: [],
  },
  {
    id: 4,
    cat: "geopolitica",
    title: "Why limited war with the US may suit Iran better than peace",
    summary: "Iran may believe it can control its conflict carefully enough to keep pressure on the US while avoiding an all-out war.",
    body: "Iran may believe it can control its conflict carefully enough to keep pressure on the US while avoiding an all-out war.",
    source: "BBC World",
    url: "https://www.bbc.co.uk/news/articles/c78gnyq3wvdo?at_medium=RSS&at_campaign=rss",
    time: "55 min fa",
    pub_ts: 1785432361,
    tags: [],
  },
  {
    id: 5,
    cat: "geopolitica",
    title: "Hundreds of migrants swim from Morocco to Spanish enclave of Ceuta",
    summary: "The territory's leader said the influx is overwhelming resources and urged the Spanish government to intervene.",
    body: "The territory's leader said the influx is overwhelming resources and urged the Spanish government to intervene.",
    source: "BBC World",
    url: "https://www.bbc.co.uk/news/articles/cg4drwzkrkxo?at_medium=RSS&at_campaign=rss",
    time: "1 ora fa",
    pub_ts: 1785431967,
    tags: [],
  },
  {
    id: 6,
    cat: "geopolitica",
    title: "Máxima alerta en Ceuta tras el cruce descontrolado de miles de personas desde Marruecos",
    summary: "La Guardia Civil y los medios de emergencia, superados, solo se ocupan de los heridos. El presidente Sánchez viaja a la ciudad autónoma este viernes",
    body: "Miles de personas han cruzado sin control de Marruecos a Ceuta el mediodía de este jueves, caminando en tierra firme primero y sorteando a nado el espigón que marca la frontera. La madrugada, que había sido tranquila, con decenas de entradas a nado, se ha desbordado a mediodía. Los marroquíes eran una manifestación de miles de personas que entraban mojados y victoriosos como si celebraran un mundial.\n\nSe abrazan, piden ropa limpia para secar el móvil, gritan de alborozo, los unos. Otros, con los niños en brazos, siguen el camino buscando quizá el centro de acogida. La Guardia Civil y los medios de emergencia, superados, solo intentan ocuparse de los heridos. El Gobierno ha movilizado a última hora de la tarde a las unidades del Ejército de Tierra desplegadas en Ceuta para apoyar a los efectivos del instituto armado y el presidente Pedro Sánchez viajará este viernes a la ciudad autónoma.\n\nSeguir leyendo",
    source: "El Pais",
    url: "https://elpais.com/espana/2026-07-30/otra-manana-de-centenares-de-entradas-de-inmigrantes-a-ceuta-pone-en-jaque-a-la-ciudad-autonoma.html",
    time: "6 ore fa",
    pub_ts: 1785413787,
    tags: [],
  },
  {
    id: 7,
    cat: "geopolitica",
    title: "US launches 'heavy' strikes on Iran after attempted attack on American troops",
    summary: "After a short period of relative calm when hostilities were paused, both sides have now restarted missile attacks.",
    body: "After a short period of relative calm when hostilities were paused, both sides have now restarted missile attacks.",
    source: "BBC World",
    url: "https://www.bbc.co.uk/news/articles/c74gwdzywmeo?at_medium=RSS&at_campaign=rss",
    time: "7 ore fa",
    pub_ts: 1785408554,
    tags: [],
  },
  {
    id: 8,
    cat: "geopolitica",
    title: "Begoña Gómez recupera el pasaporte tras retirárselo el juez Peinado",
    summary: "El magistrado autorizó finalmente que otra persona recogiera la documentación en su nombre, según fuentes cercanas a la esposa del presidente del Gobierno",
    body: "Begoña Gómez ya ha podido recuperar su pasaporte, según informan fuentes cercanas a la esposa de Pedro Sánchez. El juez Juan Carlos Peinado, a quien la Audiencia Provincial de Madrid ha obligado a retirar las medidas cautelares que impuso a la pareja del presidente y a su asistente en La Moncloa, autorizó finalmente a que la procuradora de la pareja del presidente del Gobierno acudiese a recoger la documentación en su nombre y, según detallan estas fuentes, así se ha hecho.\n\nEsta devolución se produce después de que la defensa de la asistente de Gómez, Cristina Álvarez, denunciase que Peinado estaba “reteniendo” su pasaporte al obligar a ambas a acudir en persona al juzgado para conseguir tenerlos de vuelta. Seguir leyendo",
    source: "El Pais",
    url: "https://elpais.com/espana/2026-07-30/begona-gomez-recupera-el-pasaporte-tras-retirarselo-el-juez-peinado.html",
    time: "8 ore fa",
    pub_ts: 1785406400,
    tags: [],
  },
  {
    id: 9,
    cat: "geopolitica",
    title: "El Gobierno moviliza al Ejército de Tierra desplegado en Ceuta ante la magnitud de la crisis",
    summary: "España y Marruecos acuerdan “reforzar la coordinación”. Feijóo se suma a la petición del presidente de la ciudad autónoma y presiona al Gobierno central para que declare la “emergencia”",
    body: "La situación de máxima tensión que se vive en Ceuta por la crisis migratoria ha desbordado este jueves todas las previsiones del Gobierno. La entrada de miles de inmigrantes ha provocado que España y Marruecos acuerden “reforzar la coordinación” y los esfuerzos para hacer frente a la cruce descontrolado en la ciudad autónoma, donde han llegado entre 1.500 y 2.000 personas en los últimos 10 días, y se han comprometido a revisar e implementar medidas para la entrega, “lo antes posible, de todas las que han entrado ilegalmente”, según ha informado Interior en un comunicado y han confirmado también fuentes marroquíes a la Agencia Efe.\n\nDesde La Moncloa, además, se ha movilizado a última hora de la tarde a las unidades del Ejército de Tierra desplegadas en Ceuta para apoyar a los efectivos de la Guardia Civil que se encuentran desbordados, como ya ocurrió en 2021. Seguir leyendo",
    source: "El Pais",
    url: "https://elpais.com/espana/2026-07-30/el-presidente-de-ceuta-pide-al-gobierno-la-emergencia-nacional-y-mando-unico-por-la-presion-migratoria.html",
    time: "10 ore fa",
    pub_ts: 1785398003,
    tags: [],
  },
  {
    id: 10,
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
    id: 11,
    cat: "conflitti",
    title: "NATO jets scramble as Russian missile detonates in Poland",
    summary: "The growing series of NATO airspace violations is raising concern that Russia's war on Ukraine could escalate.",
    body: "The growing series of NATO airspace violations is raising concern that Russia's war on Ukraine could escalate.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/news/2026/7/30/nato-jets-scramble-as-russian-missile-detonates-in-poland?traffic_source=rss",
    time: "1 ora fa",
    pub_ts: 1785428931,
    tags: [],
  },
  {
    id: 12,
    cat: "conflitti",
    title: "War on Iran: Phase II: Day 19",
    summary: "The US resumes bombing Iran, with a family of three killed in Qeshm Island.",
    body: "The US resumes bombing Iran, with a family of three killed in Qeshm Island.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/video/newsfeed/2026/7/30/war-on-iran-phase-ii-day-19?traffic_source=rss",
    time: "3 ore fa",
    pub_ts: 1785423419,
    tags: [],
  },
  {
    id: 13,
    cat: "conflitti",
    title: "Israeli strikes kill at least four, including children, across Gaza Strip",
    summary: "Bombings take place as Hamas officials meet with Qatari, Egyptian and Turkish mediators in Cairo to discuss truce.",
    body: "Bombings take place as Hamas officials meet with Qatari, Egyptian and Turkish mediators in Cairo to discuss truce.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/news/2026/7/30/israeli-strikes-kill-at-least-four-including-children-across-gaza-strip?traffic_source=rss",
    time: "6 ore fa",
    pub_ts: 1785411150,
    tags: [],
  },
  {
    id: 14,
    cat: "ai",
    title: "Google DeepMind’s new AI model can control a robot’s entire body",
    summary: "Google DeepMind says the latest version of its Gemini Robotics AI model can \"control entire humanoid robots.\" While the previous model focused on controlling a humanoid robot's upper body, Gemini Robotics 2 now supports \"whole-body motions\" ranging from its feet to fingertips, according to an announcement on Thursday. The new model will allow humanoid robots",
    body: "Apptronik’s Apollo 2 robot takes a baseball glove off of a shelf. | Image: Google Google DeepMind says the latest version of its Gemini Robotics AI model can \"control entire humanoid robots.\" While the previous model focused on controlling a humanoid robot's upper body, Gemini Robotics 2 now supports \"whole-body motions\" ranging from its feet to fingertips, according to an announcement on Thursday .\n\nThe new model will allow humanoid robots to perform a wider range of actions, as it allows them to walk, crouch, stretch, and manipulate objects. Videos shared by Google show how Apptronik's Apollo 2 robot can bend over to pick up a watering can, as well as find and take specific items off a shelf. Though Google DeepMind not …",
    source: "The Verge",
    url: "https://www.theverge.com/tech/973276/google-deepmind-gemini-robotics-2-whole-body",
    time: "1 ora fa",
    pub_ts: 1785431925,
    tags: [],
  },
  {
    id: 15,
    cat: "ai",
    title: "In the Hugging Face breach, OpenAI’s hacker was noisy and fast — but not unstoppable",
    summary: "Cybersecurity experts told TechCrunch that one of the biggest lessons to be taken from the OpenAI hack against Hugging Face has nothing to do with AI, but traditional cybersecurity defense.",
    body: "Cybersecurity experts told TechCrunch that one of the biggest lessons to be taken from the OpenAI hack against Hugging Face has nothing to do with AI, but traditional cybersecurity defense.",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/30/in-the-hugging-face-breach-openais-hacker-was-noisy-and-fast-but-not-unstoppable/",
    time: "3 ore fa",
    pub_ts: 1785422912,
    tags: [],
  },
  {
    id: 16,
    cat: "ai",
    title: "Microsoft is openly competing with OpenAI, Anthropic more than ever",
    summary: "Microsoft pitched its own homegrown AI models, harnesses, and even a Mythos competitor on Wednesday, telling Wall Street it plans for continued growth.",
    body: "Microsoft pitched its own homegrown AI models, harnesses, and even a Mythos competitor on Wednesday, telling Wall Street it plans for continued growth.",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/29/microsoft-is-openly-competing-with-openai-anthropic-more-than-ever/",
    time: "18 ore fa",
    pub_ts: 1785370866,
    tags: [],
  },
  {
    id: 17,
    cat: "ai",
    title: "Synthetic-user startup Simile raises $200M at $2B valuation 5 months after $100M Series A",
    summary: "Add another member to the fast-and-furious AI unicorn club: Simile",
    body: "Add another member to the fast-and-furious AI unicorn club: Simile",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/30/synthetic-user-startup-simile-raises-200m-at-2b-valuation-5-months-after-100m-series-a/",
    time: "31 min fa",
    pub_ts: 1785433811,
    tags: [],
  },
  {
    id: 18,
    cat: "economia-tech",
    title: "«Capitali per crescere», consulenza finanziaria al servizio delle imprese toscane",
    summary: "Un consulente finanziario per facilitare l’accesso delle imprese al mercato dei capitali. È il progetto lanciato da Confindustria Toscana Centro e Costa (Firenze, Livorno, Massa-Carrara) e chiamato “Capitali per...",
    body: "Un consulente finanziario per facilitare l’accesso delle imprese al mercato dei capitali. È il progetto lanciato da Confindustria Toscana Centro e Costa (Firenze, Livorno, Massa-Carrara) e chiamato “Capitali per...",
    source: "Il Sole 24 Ore",
    url: "https://www.ilsole24ore.com/art/capitali-crescere-consulenza-finanziaria-servizio-imprese-toscane-AJaWmZZ",
    time: "11 ore fa",
    pub_ts: 1785394921,
    tags: [],
  },
  {
    id: 19,
    cat: "economia-tech",
    title: "Microsoft Surges, Meta Slides | Open Interest 7/30/2026",
    summary: "Get a jump start on the US trading day with Dani Burger on \"Bloomberg Open Interest.\" Microsoft powers higher after a blockbuster quarter while Meta stumbles as investors demand proof its AI spending will pay off. Apple and Amazon are up next as markets brace for two more tech giants. We'll hear from Kevin Hassett on the Fed and inflation, Starbucks CEO Brian Niccol on the consumer comeback, plus…",
    body: "Get a jump start on the US trading day with Dani Burger on \"Bloomberg Open Interest.\" Microsoft powers higher after a blockbuster quarter while Meta stumbles as investors demand proof its AI spending will pay off. Apple and Amazon are up next as markets brace for two more tech giants. We'll hear from Kevin Hassett on the Fed and inflation, Starbucks CEO Brian Niccol on the consumer comeback, plus exclusive insights from Microsoft, Meta, and Kendra Scott on what's driving the next wave of AI and retail growth.\n\nCorrection: This video has been edited to update a graphic with correct analyst disclosures. (Source: Bloomberg)",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/videos/2026-07-30/open-interest-7-30-2026-video",
    time: "37 min fa",
    pub_ts: 1785433417,
    tags: [],
  },
  {
    id: 20,
    cat: "economia-tech",
    title: "Are investors really getting cold feet about the AI boom?",
    summary: "It is not clear whether there has been a serious change of heart about the trade underpinning the stock market",
    body: "It is not clear whether there has been a serious change of heart about the trade underpinning the stock market",
    source: "Financial Times",
    url: "https://www.ft.com/content/00d91e68-9508-42bd-b1e3-124bf7dd390b?syn-25a6b1a6=1",
    time: "1 ora fa",
    pub_ts: 1785431754,
    tags: [],
  },
  {
    id: 21,
    cat: "economia-tech",
    title: "Warsh’s stripped-back Fed communication ‘already backfiring’, say investors",
    summary: "Traders warn lack of guidance on interest rates erodes US central bank’s influence on Treasury market",
    body: "Traders warn lack of guidance on interest rates erodes US central bank’s influence on Treasury market",
    source: "Financial Times",
    url: "https://www.ft.com/content/57aac838-baee-406d-b4ac-c0ffda351aee?syn-25a6b1a6=1",
    time: "1 ora fa",
    pub_ts: 1785430317,
    tags: [],
  },
  {
    id: 22,
    cat: "economia-tech",
    title: "K2 Space Lands $500 Million to Scale Satellite Production",
    summary: "K2 Space has raised $500 million at a $6.8 billion valuation as investors continue pouring money into the fast-growing space industry. The startup, founded by former SpaceX engineer Neel Kunjur and his brother Karan, builds low-cost, high-power satellites for commercial and defense customers including the US Space Force, and says it has more than $1 billion in signed contracts. CEO Karan Kunjur…",
    body: "K2 Space has raised $500 million at a $6.8 billion valuation as investors continue pouring money into the fast-growing space industry. The startup, founded by former SpaceX engineer Neel Kunjur and his brother Karan, builds low-cost, high-power satellites for commercial and defense customers including the US Space Force, and says it has more than $1 billion in signed contracts. CEO Karan Kunjur explains how the new funding will help expand production as the company eyes future applications ranging from military missions to space-based AI data centers.\n\nHe joins Ed Ludlow on \"Bloomberg Tech.\" (Source: Bloomberg)",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/videos/2026-07-30/spacex-alum-s-startup-hits-6-8-billion-valuation-video",
    time: "19 min fa",
    pub_ts: 1785434510,
    tags: [],
  },
  {
    id: 23,
    cat: "economia-tech",
    title: "Goldman Says Microsoft Shows Wall Street How AI Bet Pays Off",
    summary: "Microsoft Corp. is giving investors clearer signs that it has multiple ways to turn its artificial-intelligence investment into revenue, Goldman Sachs Group Inc. analyst Gabriela Borges said, as the shares surged the most in almost 18 years.",
    body: "Microsoft Corp. is giving investors clearer signs that it has multiple ways to turn its artificial-intelligence investment into revenue, Goldman Sachs Group Inc. analyst Gabriela Borges said, as the shares surged the most in almost 18 years.",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/articles/2026-07-30/goldman-says-microsoft-shows-wall-street-how-its-ai-bet-pays-off",
    time: "53 min fa",
    pub_ts: 1785432501,
    tags: [],
  },
  {
    id: 24,
    cat: "economia-tech",
    title: "Citadel buys Situational Awareness equity holdings after steep AI losses",
    summary: "Deal comes after Leopold Aschenbrenner’s investment firm held overnight crunch talks with investors",
    body: "Deal comes after Leopold Aschenbrenner’s investment firm held overnight crunch talks with investors",
    source: "Financial Times",
    url: "https://www.ft.com/content/5fb44089-ecdf-4b48-bc14-1e8b4682b142?syn-25a6b1a6=1",
    time: "2 ore fa",
    pub_ts: 1785427136,
    tags: [],
  },
];
