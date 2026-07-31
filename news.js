// Generato automaticamente il 2026-07-31 00:09 UTC da scripts/fetch_news.py
// NON modificare manualmente: viene sovrascritto ogni ora dalla GitHub Action.
var NEWS_TIMESTAMP = 1785456525;

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
    title: "Battaglia alla Camera sulle chat di Delmastro, Fontana 'congela' l'accesso",
    summary: "L'ex sottosegretario: 'Le ho inviate alla Procura, nulla da nascondere'. Slitta il voto in Aula",
    body: "L'ex sottosegretario: 'Le ho inviate alla Procura, nulla da nascondere'. Slitta il voto in Aula",
    source: "ANSA",
    url: "https://www.ansa.it/sito/notizie/cronaca/2026/07/30/il-caso-delle-chat-di-delmastro-rinviato-in-giunta-delle-autorizzazioni_4d606650-2e0e-4faa-b2cf-825a590cd4f8.html",
    time: "3 ore fa",
    pub_ts: 1785442446,
    tags: [],
  },
  {
    id: 2,
    cat: "politica-italiana",
    title: "Nordio invia alla Procura generale le carte sul caso Almasri",
    summary: "A pochi giorni dalla sentenza della Consulta. L'opposizione: 'Il ministro si dimetta'",
    body: "A pochi giorni dalla sentenza della Consulta. L'opposizione: 'Il ministro si dimetta'",
    source: "ANSA",
    url: "https://www.ansa.it/sito/notizie/cronaca/2026/07/30/caso-almasri-nordio-invia-alla-procura-generale-le-carte_6d20c447-a7e8-431b-95d1-b9ac14f3b38a.html",
    time: "5 ore fa",
    pub_ts: 1785437059,
    tags: [],
  },
  {
    id: 3,
    cat: "politica-italiana",
    title: "Pil oltre le attese al +0,2%, già una dote dello 0,8% per il 2026",
    summary: "Il governo: 'Cresciamo nonostante il contesto'. La disoccupazione sale di più tra i giovani",
    body: "Il governo: 'Cresciamo nonostante il contesto'. La disoccupazione sale di più tra i giovani",
    source: "ANSA",
    url: "https://www.ansa.it/sito/notizie/economia/pmi/2026/07/30/istat-il-pil-cresce-dello-02-nel-secondo-trimestre-2_b518eadf-f462-4793-994b-0f19712c167e.html",
    time: "6 ore fa",
    pub_ts: 1785433987,
    tags: [],
  },
  {
    id: 4,
    cat: "geopolitica",
    title: "Hundreds of migrants swim from Morocco to Spanish enclave of Ceuta",
    summary: "The territory's leader said the influx is overwhelming resources and urged the Spanish government to intervene.",
    body: "The territory's leader said the influx is overwhelming resources and urged the Spanish government to intervene.",
    source: "BBC World",
    url: "https://www.bbc.co.uk/news/articles/cg4drwzkrkxo?at_medium=RSS&at_campaign=rss",
    time: "2 ore fa",
    pub_ts: 1785446671,
    tags: [],
  },
  {
    id: 5,
    cat: "geopolitica",
    title: "La costarricense Grynspan encabeza la primera votación informal para elegir nuevo líder de la ONU",
    summary: "Los 15 miembros del Consejo de Seguridad comienzan el proceso para sustituir a António Guterres. En segundo y tercer puesto quedan la guyanesa Rodrigues-Birkett y el argentino Grossi",
    body: "La batalla acaba de empezar y el resultado está aún muy abierto. Pero la primera escaramuza para elegir a la mujer o al hombre que liderará Naciones Unidas a partir de 2027 ha dejado una ganadora: la costarricense Rebeca Grynspan. Seguir leyendo",
    source: "El Pais",
    url: "https://elpais.com/internacional/2026-07-30/la-costarricense-grynspan-encabeza-la-primera-votacion-informal-para-elegir-nuevo-lider-de-la-onu.html",
    time: "5 ore fa",
    pub_ts: 1785436677,
    tags: [],
  },
  {
    id: 6,
    cat: "geopolitica",
    title: "Milei ordena por decreto expulsar a los extranjeros que agravien a los argentinos",
    summary: "El presidente ultra firma la medida en el marco de su denuncia sobre “una campaña antiargentina” originada durante el Mundial de Fútbol",
    body: "El presidente de Argentina, Javier Milei , ha prohibido la entrada en el país y ha habilitado la expulsión de extranjeros que hayan agraviado a los argentinos. El mandatario ultraderechista ha puesto en marcha esa medida con un decreto de necesidad y urgencia publicado este jueves en el Boletín Oficial , cuando aún se escuchan los ecos de lo que él considera “una campaña antiargentina”, orquestada durante el Mundial de Fútbol por los gobiernos de Brasil y de México junto al Partido Demócrata de Estados Unidos, según ha dicho y repetido Milei.\n\nEl decreto presidencial ha sido duramente cuestionado por juristas, dirigentes sociales y políticos. Muchos señalaron que, si una norma similar rigiera en otras naciones, el propio Milei tendría prohibido el ingreso en numerosos países a cuyos gobiernos, ciudadanos o culturas ha denostado e insultado. Seguir leyendo",
    source: "El Pais",
    url: "https://elpais.com/argentina/2026-07-30/milei-ordena-por-decreto-expulsar-a-los-extranjeros-que-agravien-a-los-argentinos.html",
    time: "5 ore fa",
    pub_ts: 1785435882,
    tags: [],
  },
  {
    id: 7,
    cat: "geopolitica",
    title: "Why limited war with the US may suit Iran better than peace",
    summary: "Iran may believe it can control its conflict carefully enough to keep pressure on the US while avoiding an all-out war.",
    body: "Iran may believe it can control its conflict carefully enough to keep pressure on the US while avoiding an all-out war.",
    source: "BBC World",
    url: "https://www.bbc.co.uk/news/articles/c78gnyq3wvdo?at_medium=RSS&at_campaign=rss",
    time: "6 ore fa",
    pub_ts: 1785432361,
    tags: [],
  },
  {
    id: 8,
    cat: "geopolitica",
    title: "Uefa to boycott World Cups if Fifa plans approved",
    summary: "Uefa says \"the World Cup is not for sale\" after its 55 member associations vote to boycott future tournaments if Fifa and its president, Gianni Infantino, do not back down on their investment proposals.",
    body: "Uefa says \"the World Cup is not for sale\" after its 55 member associations vote to boycott future tournaments if Fifa and its president, Gianni Infantino, do not back down on their investment proposals.",
    source: "BBC World",
    url: "https://www.bbc.co.uk/sport/football/articles/c5y67zrrdddo?at_medium=RSS&at_campaign=rss",
    time: "7 ore fa",
    pub_ts: 1785430060,
    tags: [],
  },
  {
    id: 9,
    cat: "geopolitica",
    title: "Begoña Gómez recupera el pasaporte tras retirárselo el juez Peinado",
    summary: "El magistrado autorizó finalmente que otra persona recogiera la documentación en su nombre, según fuentes cercanas a la esposa del presidente del Gobierno",
    body: "Begoña Gómez ya ha podido recuperar su pasaporte, según informan fuentes cercanas a la esposa de Pedro Sánchez. El juez Juan Carlos Peinado, a quien la Audiencia Provincial de Madrid ha obligado a retirar las medidas cautelares que impuso a la pareja del presidente y a su asistente en La Moncloa, autorizó finalmente a que la procuradora de la pareja del presidente del Gobierno acudiese a recoger la documentación en su nombre y, según detallan estas fuentes, así se ha hecho.\n\nEsta devolución se produce después de que la defensa de la asistente de Gómez, Cristina Álvarez, denunciase que Peinado estaba “reteniendo” su pasaporte al obligar a ambas a acudir en persona al juzgado para conseguir tenerlos de vuelta. Seguir leyendo",
    source: "El Pais",
    url: "https://elpais.com/espana/2026-07-30/begona-gomez-recupera-el-pasaporte-tras-retirarselo-el-juez-peinado.html",
    time: "13 ore fa",
    pub_ts: 1785406400,
    tags: [],
  },
  {
    id: 10,
    cat: "conflitti",
    title: "Trump announces Hamas to disarm paving way for Israel to withdraw from Gaza",
    summary: "US President Donald Trump said on TruthSocial that an agreement has been reached for Hamas to fully disarm.",
    body: "US President Donald Trump said on TruthSocial that an agreement has been reached for Hamas to fully disarm.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/video/newsfeed/2026/7/30/trump-announces-hamas-to-disarm-paving-way-for-israel-to-withdraw-from-gaza?traffic_source=rss",
    time: "17 min fa",
    pub_ts: 1785455500,
    tags: [],
  },
  {
    id: 11,
    cat: "conflitti",
    title: "Trump says Board of Peace reaches agreement on disarmament of Hamas in Gaza",
    summary: "US president says Israel will withdraw from Gaza following the disarmament of Hamas.",
    body: "US president says Israel will withdraw from Gaza following the disarmament of Hamas.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/news/2026/7/30/trump-says-board-of-peace-reaches-agreement-on-disarmament-of-hamas-in-gaza?traffic_source=rss",
    time: "1 ora fa",
    pub_ts: 1785450859,
    tags: [],
  },
  {
    id: 12,
    cat: "conflitti",
    title: "Will Saudi Arabia be dragged further into the war in Iran?",
    summary: "Anger in Iraq after US-Saudi strikes on paramilitary group with ties to Tehran.",
    body: "Anger in Iraq after US-Saudi strikes on paramilitary group with ties to Tehran.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/video/inside-story/2026/7/30/will-saudi-arabia-be-dragged-further-into-the-war-in-iran?traffic_source=rss",
    time: "3 ore fa",
    pub_ts: 1785445228,
    tags: [],
  },
  {
    id: 13,
    cat: "ai",
    title: "Google DeepMind’s new AI model can control a robot’s entire body",
    summary: "Google DeepMind says the latest version of its Gemini Robotics AI model can \"control entire humanoid robots.\" While the previous model focused on controlling a humanoid robot's upper body, Gemini Robotics 2 now supports \"whole-body motions\" ranging from its feet to fingertips, according to an announcement on Thursday. The new model will allow humanoid robots",
    body: "Apptronik’s Apollo 2 robot takes a baseball glove off of a shelf. | Image: Google Google DeepMind says the latest version of its Gemini Robotics AI model can \"control entire humanoid robots.\" While the previous model focused on controlling a humanoid robot's upper body, Gemini Robotics 2 now supports \"whole-body motions\" ranging from its feet to fingertips, according to an announcement on Thursday .\n\nThe new model will allow humanoid robots to perform a wider range of actions, as it allows them to walk, crouch, stretch, and manipulate objects. Videos shared by Google show how Apptronik's Apollo 2 robot can bend over to pick up a watering can, as well as find and take specific items off a shelf. Though Google DeepMind not …",
    source: "The Verge",
    url: "https://www.theverge.com/tech/973276/google-deepmind-gemini-robotics-2-whole-body",
    time: "6 ore fa",
    pub_ts: 1785431925,
    tags: [],
  },
  {
    id: 14,
    cat: "ai",
    title: "AI hedge fund Situational Awareness may have sold its public portfolio, but it still has its Anthropic shares",
    summary: "The former OpenAI researcher’s fund was forced to unwind public equities after leveraged public bets plummeted. But he still has cards to play.",
    body: "The former OpenAI researcher’s fund was forced to unwind public equities after leveraged public bets plummeted. But he still has cards to play.",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/30/ai-hedge-fund-situational-awareness-may-have-sold-its-public-portfolio-but-it-still-has-its-anthropic-shares/",
    time: "43 min fa",
    pub_ts: 1785453958,
    tags: [],
  },
  {
    id: 15,
    cat: "ai",
    title: "Investors love AI, as long as you’re a cloud host",
    summary: "Amazon isn't slowing down on data center spending — but investors don't seem to mind.",
    body: "Amazon isn't slowing down on data center spending — but investors don't seem to mind.",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/30/investors-love-ai-as-long-as-youre-a-cloud-host/",
    time: "1 ora fa",
    pub_ts: 1785451301,
    tags: [],
  },
  {
    id: 16,
    cat: "ai",
    title: "Judge says Trump admin still lacks evidence for Anthropic ‘supply-chain risk’ label",
    summary: "A federal judge said the Trump administration has not presented enough evidence to justify labeling Anthropic a supply-chain risk, casting doubt on the government's ban on its AI technology.",
    body: "A federal judge said the Trump administration has not presented enough evidence to justify labeling Anthropic a supply-chain risk, casting doubt on the government's ban on its AI technology.",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/30/judge-says-trump-admin-still-lacks-evidence-for-anthropic-supply-chain-risk-label/",
    time: "3 ore fa",
    pub_ts: 1785443198,
    tags: [],
  },
  {
    id: 17,
    cat: "economia-tech",
    title: "«Capitali per crescere», consulenza finanziaria al servizio delle imprese toscane",
    summary: "Un consulente finanziario per facilitare l’accesso delle imprese al mercato dei capitali. È il progetto lanciato da Confindustria Toscana Centro e Costa (Firenze, Livorno, Massa-Carrara) e chiamato “Capitali per...",
    body: "Un consulente finanziario per facilitare l’accesso delle imprese al mercato dei capitali. È il progetto lanciato da Confindustria Toscana Centro e Costa (Firenze, Livorno, Massa-Carrara) e chiamato “Capitali per...",
    source: "Il Sole 24 Ore",
    url: "https://www.ilsole24ore.com/art/capitali-crescere-consulenza-finanziaria-servizio-imprese-toscane-AJaWmZZ",
    time: "17 ore fa",
    pub_ts: 1785394921,
    tags: [],
  },
  {
    id: 18,
    cat: "economia-tech",
    title: "Are investors really getting cold feet about the AI boom?",
    summary: "It is not clear whether there has been a serious change of heart about the trade underpinning the stock market",
    body: "It is not clear whether there has been a serious change of heart about the trade underpinning the stock market",
    source: "Financial Times",
    url: "https://www.ft.com/content/00d91e68-9508-42bd-b1e3-124bf7dd390b?syn-25a6b1a6=1",
    time: "6 ore fa",
    pub_ts: 1785431754,
    tags: [],
  },
  {
    id: 19,
    cat: "economia-tech",
    title: "Warsh’s stripped-back Fed communication ‘already backfiring’, say investors",
    summary: "Traders warn lack of guidance on interest rates erodes US central bank’s influence on Treasury market",
    body: "Traders warn lack of guidance on interest rates erodes US central bank’s influence on Treasury market",
    source: "Financial Times",
    url: "https://www.ft.com/content/57aac838-baee-406d-b4ac-c0ffda351aee?syn-25a6b1a6=1",
    time: "7 ore fa",
    pub_ts: 1785430317,
    tags: [],
  },
  {
    id: 20,
    cat: "economia-tech",
    title: "Marathon Asset Management on Hyperscalers’ Credit Risks",
    summary: "Bruce Richards, Managing Partner and Head of CVC Marathon discusses the current state of credit markets and the cost of capital. With $80 billion in assets under management and extensive Wall Street experience, Richards provided valuable perspectives on market dynamics and financing conditions. He speaks with Romaine Bostick & Emily Graffeo on \"The Close.\" (Source: Bloomberg)",
    body: "Bruce Richards, Managing Partner and Head of CVC Marathon discusses the current state of credit markets and the cost of capital. With $80 billion in assets under management and extensive Wall Street experience, Richards provided valuable perspectives on market dynamics and financing conditions. He speaks with Romaine Bostick & Emily Graffeo on \"The Close.\" (Source: Bloomberg)",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/videos/2026-07-30/marathon-asset-management-on-hyperscalers-credit-risks-video",
    time: "1 ora fa",
    pub_ts: 1785449417,
    tags: [],
  },
  {
    id: 21,
    cat: "economia-tech",
    title: "Reformation CEO on IPO, Roadmap for the Future",
    summary: "Reformation CEO Hali Borenstein discusses the company’s IPO, which raised $211 million. She highlighted Reformation’s consistent double-digit revenue growth over 20 consecutive quarters and emphasized the company’s commitment to redefining retail and modernizing fashion branding. She speaks with Romaine Bostick & Emily Graffeo on \"The Close.\" (Source: Bloomberg)",
    body: "Reformation CEO Hali Borenstein discusses the company’s IPO, which raised $211 million. She highlighted Reformation’s consistent double-digit revenue growth over 20 consecutive quarters and emphasized the company’s commitment to redefining retail and modernizing fashion branding. She speaks with Romaine Bostick & Emily Graffeo on \"The Close.\" (Source: Bloomberg)",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/videos/2026-07-30/reformation-ceo-on-ipo-roadmap-for-the-future-video",
    time: "2 ore fa",
    pub_ts: 1785449308,
    tags: [],
  },
  {
    id: 22,
    cat: "economia-tech",
    title: "Citadel buys Situational Awareness equity holdings after steep AI losses",
    summary: "Deal comes after Leopold Aschenbrenner’s investment firm held overnight crunch talks with investors",
    body: "Deal comes after Leopold Aschenbrenner’s investment firm held overnight crunch talks with investors",
    source: "Financial Times",
    url: "https://www.ft.com/content/5fb44089-ecdf-4b48-bc14-1e8b4682b142?syn-25a6b1a6=1",
    time: "5 ore fa",
    pub_ts: 1785435367,
    tags: [],
  },
];
