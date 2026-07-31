// Generato automaticamente il 2026-07-31 04:28 UTC da scripts/fetch_news.py
// NON modificare manualmente: viene sovrascritto ogni ora dalla GitHub Action.
var NEWS_TIMESTAMP = 1785472077;

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
    time: "8 ore fa",
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
    time: "9 ore fa",
    pub_ts: 1785437059,
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
    time: "10 ore fa",
    pub_ts: 1785433623,
    tags: [],
  },
  {
    id: 4,
    cat: "geopolitica",
    title: "Trump anuncia un acuerdo para “el desarme total” de Hamás",
    summary: "El presidente de EE UU asegura que el pacto, sin confirmación israelí ni de la milicia palestina, supone un paso clave para que Gaza tenga un Gobierno propio",
    body: "El presidente de Estados Unidos, Donald Trump , aseguró este jueves que la Junta de Paz para Gaza ha logrado un acuerdo que calificó de “histórico” para lograr el desarme total de Hamás. El anunció lo hizo a última hora del día en sus redes sociales, sin confirmación oficial ni por parte del Gobierno israelí ni de la milicia palestina. Según el republicano, las conversaciones en El Cairo entre mediadores y líderes de Hamás han logrado este importante paso adelante para llevar la paz a la Franja palestina.\n\nSeguir leyendo",
    source: "El Pais",
    url: "https://elpais.com/us/2026-07-30/trump-anuncia-un-acuerdo-para-el-desarme-total-de-hamas.html",
    time: "4 ore fa",
    pub_ts: 1785455870,
    tags: [],
  },
  {
    id: 5,
    cat: "geopolitica",
    title: "Why limited war with the US may suit Iran better than peace",
    summary: "Iran may believe it can control its conflict carefully enough to keep pressure on the US while avoiding an all-out war.",
    body: "Iran may believe it can control its conflict carefully enough to keep pressure on the US while avoiding an all-out war.",
    source: "BBC World",
    url: "https://www.bbc.co.uk/news/articles/c78gnyq3wvdo?at_medium=RSS&at_campaign=rss",
    time: "11 ore fa",
    pub_ts: 1785432361,
    tags: [],
  },
  {
    id: 6,
    cat: "geopolitica",
    title: "Uefa to boycott World Cups if Fifa plans approved",
    summary: "Uefa says \"the World Cup is not for sale\" after its 55 member associations vote to boycott future tournaments if Fifa and its president, Gianni Infantino, do not back down on their investment proposals.",
    body: "Uefa says \"the World Cup is not for sale\" after its 55 member associations vote to boycott future tournaments if Fifa and its president, Gianni Infantino, do not back down on their investment proposals.",
    source: "BBC World",
    url: "https://www.bbc.co.uk/sport/football/articles/c5y67zrrdddo?at_medium=RSS&at_campaign=rss",
    time: "11 ore fa",
    pub_ts: 1785430060,
    tags: [],
  },
  {
    id: 7,
    cat: "geopolitica",
    title: "The Chinese robot army transforming the UK's retail industry",
    summary: "Britain's weak productivity growth and labour shortages are creating an opportunity for China's robotics firms.",
    body: "Britain's weak productivity growth and labour shortages are creating an opportunity for China's robotics firms.",
    source: "BBC World",
    url: "https://www.bbc.co.uk/news/articles/c0jl8v23qwgo?at_medium=RSS&at_campaign=rss",
    time: "1 giorno fa",
    pub_ts: 1785362909,
    tags: [],
  },
  {
    id: 8,
    cat: "conflitti",
    title: "Iran war live: Gaza Board of Peace lauds ‘historic’ disarmament agreement",
    summary: "Hamas member told Al Jazeera all implementation would be conditioned on Israel implementing its part of deal.",
    body: "Hamas member told Al Jazeera all implementation would be conditioned on Israel implementing its part of deal.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/news/liveblog/2026/7/31/iran-war-live-trump-says-hamas-to-disarm-israel-to-leave-gaza-gradually?traffic_source=rss",
    time: "4 ore fa",
    pub_ts: 1785456238,
    tags: [],
  },
  {
    id: 9,
    cat: "conflitti",
    title: "Trump announces Hamas to disarm paving way for Israel to withdraw from Gaza",
    summary: "US President Donald Trump said on TruthSocial that an agreement has been reached for Hamas to fully disarm.",
    body: "US President Donald Trump said on TruthSocial that an agreement has been reached for Hamas to fully disarm.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/video/newsfeed/2026/7/30/trump-announces-hamas-to-disarm-paving-way-for-israel-to-withdraw-from-gaza?traffic_source=rss",
    time: "4 ore fa",
    pub_ts: 1785455500,
    tags: [],
  },
  {
    id: 10,
    cat: "conflitti",
    title: "Hamas reaches Gaza disarmament agreement with Board of Peace",
    summary: "US president says Israel will withdraw from Gaza once the Palestinian group disarms.",
    body: "US president says Israel will withdraw from Gaza once the Palestinian group disarms.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/news/2026/7/30/trump-says-board-of-peace-reaches-agreement-on-disarmament-of-hamas-in-gaza?traffic_source=rss",
    time: "5 ore fa",
    pub_ts: 1785450859,
    tags: [],
  },
  {
    id: 11,
    cat: "ai",
    title: "Google DeepMind’s new AI model can control a robot’s entire body",
    summary: "Google DeepMind says the latest version of its Gemini Robotics AI model can \"control entire humanoid robots.\" While the previous model focused on controlling a humanoid robot's upper body, Gemini Robotics 2 now supports \"whole-body motions\" ranging from its feet to fingertips, according to an announcement on Thursday. The new model will allow humanoid robots",
    body: "Apptronik’s Apollo 2 robot takes a baseball glove off of a shelf. | Image: Google Google DeepMind says the latest version of its Gemini Robotics AI model can \"control entire humanoid robots.\" While the previous model focused on controlling a humanoid robot's upper body, Gemini Robotics 2 now supports \"whole-body motions\" ranging from its feet to fingertips, according to an announcement on Thursday .\n\nThe new model will allow humanoid robots to perform a wider range of actions, as it allows them to walk, crouch, stretch, and manipulate objects. Videos shared by Google show how Apptronik's Apollo 2 robot can bend over to pick up a watering can, as well as find and take specific items off a shelf. Though Google DeepMind not …",
    source: "The Verge",
    url: "https://www.theverge.com/tech/973276/google-deepmind-gemini-robotics-2-whole-body",
    time: "11 ore fa",
    pub_ts: 1785431925,
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
    time: "3 ore fa",
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
    time: "5 ore fa",
    pub_ts: 1785453958,
    tags: [],
  },
  {
    id: 14,
    cat: "ai",
    title: "Investors love AI, as long as you’re a cloud host",
    summary: "Amazon isn't slowing down on data center spending — but investors don't seem to mind.",
    body: "Amazon isn't slowing down on data center spending — but investors don't seem to mind.",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/30/investors-love-ai-as-long-as-youre-a-cloud-host/",
    time: "5 ore fa",
    pub_ts: 1785451301,
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
    time: "21 ore fa",
    pub_ts: 1785394921,
    tags: [],
  },
  {
    id: 16,
    cat: "economia-tech",
    title: "China’s Factories, Construction Slump in Sign Slowdown Spreading",
    summary: "China’s factory activity unexpectedly contracted for the first time in five months and construction slumped to the lowest since the start of the pandemic, pointing to a further loss of momentum in the economy after a slowdown last quarter.",
    body: "China’s factory activity unexpectedly contracted for the first time in five months and construction slumped to the lowest since the start of the pandemic, pointing to a further loss of momentum in the economy after a slowdown last quarter.",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/articles/2026-07-31/china-factory-activity-surprises-with-first-slump-in-five-months",
    time: "2 ore fa",
    pub_ts: 1785461818,
    tags: [],
  },
  {
    id: 17,
    cat: "economia-tech",
    title: "IDC's Ma on Apple, Consumer Electronics Market",
    summary: "Bryan Ma, Vice President of Devices Research at IDC, discusses Apple's latest earnings and the outlook for the broader consumer electronics market. He speaks with Shery Ahn on Bloomberg: The Asia Trade. (Source: Bloomberg)",
    body: "Bryan Ma, Vice President of Devices Research at IDC, discusses Apple's latest earnings and the outlook for the broader consumer electronics market. He speaks with Shery Ahn on Bloomberg: The Asia Trade. (Source: Bloomberg)",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/videos/2026-07-31/idc-s-ma-on-apple-consumer-electronics-market-video",
    time: "3 ore fa",
    pub_ts: 1785460530,
    tags: [],
  },
  {
    id: 18,
    cat: "economia-tech",
    title: "How Leopold Aschenbrenner, the ‘golden child’ of the AI trade, was laid low",
    summary: "The $20bn hedge fund manager’s wild ride ended with a call to Ken Griffin",
    body: "The $20bn hedge fund manager’s wild ride ended with a call to Ken Griffin",
    source: "Financial Times",
    url: "https://www.ft.com/content/620bd668-d112-412d-aa52-22489b128d55?syn-25a6b1a6=1",
    time: "3 ore fa",
    pub_ts: 1785459479,
    tags: [],
  },
  {
    id: 19,
    cat: "economia-tech",
    title: "Saudi Arabia announces maritime defence coalition as Houthi attacks threaten Red Sea route",
    summary: "Fourteen countries, including Pakistan, Turkey, Egypt and Sudan, vow to protect shipping and energy supplies",
    body: "Fourteen countries, including Pakistan, Turkey, Egypt and Sudan, vow to protect shipping and energy supplies",
    source: "Financial Times",
    url: "https://www.ft.com/content/926bad8a-55e0-4d1d-8612-7ebd0aaef4ee?syn-25a6b1a6=1",
    time: "7 ore fa",
    pub_ts: 1785445087,
    tags: [],
  },
  {
    id: 20,
    cat: "economia-tech",
    title: "Samsung, SK Hynix Answer AI Doubters With Big Numbers, Deals",
    summary: "In a remarkable week, the titans of the near-$1 trillion global memory industry smashed profit records. It took days before investors stopped selling — a testament to the depth of anxiety in markets about an AI bubble.",
    body: "In a remarkable week, the titans of the near-$1 trillion global memory industry smashed profit records. It took days before investors stopped selling — a testament to the depth of anxiety in markets about an AI bubble.",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/articles/2026-07-30/samsung-sk-hynix-answer-ai-doubters-with-big-numbers-and-deals",
    time: "12 ore fa",
    pub_ts: 1785427200,
    tags: [],
  },
];
