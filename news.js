// Generato automaticamente il 2026-07-20 08:11 UTC da scripts/fetch_news.py
// NON modificare manualmente: viene sovrascritto ogni ora dalla GitHub Action.
var NEWS_TIMESTAMP = 1784535048;

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
    title: "Migliaia di persone protestano nel centro di Nuova Delhi",
    summary: "Chiedono le dimissioni del ministro dell'Istruzione dopo una presunta fuga di informazioni sul test di Medicina",
    body: "Chiedono le dimissioni del ministro dell'Istruzione dopo una presunta fuga di informazioni sul test di Medicina",
    source: "ANSA",
    url: "https://www.ansa.it/sito/notizie/mondo/2026/07/20/migliaia-di-persone-protestano-nel-centro-di-nuova-delhi-_3d0e12e6-a225-41a1-a492-31ed48242cf1.html",
    time: "1 ora fa",
    pub_ts: 1784529330,
    tags: [],
  },
  {
    id: 2,
    cat: "politica-italiana",
    title: "Ddl della Lega per allargare le maglie della legittima difesa, stop da FI",
    summary: "Ira delle opposizioni. Salvini coinvolge Bongiorno-Matone su Roggero. Meloni,'pena sproporzionata'",
    body: "Ira delle opposizioni. Salvini coinvolge Bongiorno-Matone su Roggero. Meloni,'pena sproporzionata'",
    source: "ANSA",
    url: "https://www.ansa.it/sito/notizie/politica/2026/07/19/roggero-la-lega-deposita-la-pdl-che-estende-i-limiti-della-legittima-difesa_f5eb2d6d-554d-471d-a00b-9471f951ff56.html",
    time: "12 ore fa",
    pub_ts: 1784490510,
    tags: [],
  },
  {
    id: 3,
    cat: "geopolitica",
    title: "Food delivery rider wins China's top literary prize",
    summary: "Wang Jibing is among blue-collar Chinese workers gaining wider attention for their literary works.",
    body: "Wang Jibing is among blue-collar Chinese workers gaining wider attention for their literary works.",
    source: "BBC World",
    url: "https://www.bbc.co.uk/news/articles/c5ydr3xd0kvo?at_medium=RSS&at_campaign=rss",
    time: "4 ore fa",
    pub_ts: 1784519587,
    tags: [],
  },
  {
    id: 4,
    cat: "geopolitica",
    title: "Los afortunados que van andando a trabajar: “Es de lo mejor que te puede pasar en la vida”",
    summary: "En torno al 12% de los ocupados se desplaza principalmente a pie, frente al 19% que usa el transporte público y el 64% que recurre al coche",
    body: "Luis Ródenas cree que su vida es “mejor” y “más fácil” ahora que el año pasado. “Este curso he ido andando a trabajar y llegaba en tres minutos. El anterior vivía lejos y me pasaba hasta dos horas al día en los trayectos en coche. Lo odiaba, era una mierda”, dice este profesor de matemáticas en un instituto de Camarena , un pueblo de Toledo cercano a la frontera con la Comunidad de Madrid. El curso anterior trabajaba en el mismo pueblo, pero vivía en el barrio capitalino de Tetuán; ahora reside en Camarena, cerquísima de su instituto.\n\n“He ganado calidad de vida. Sé que la mayoría no tiene la posibilidad de ir andando al trabajo, pero la recomiendo muchísimo para el que sí pueda hacerlo. Ganas tanto tiempo...”, agrega Ródenas. Seguir leyendo",
    source: "El Pais",
    url: "https://elpais.com/economia/2026-07-20/los-afortunados-que-van-andando-a-trabajar-es-de-lo-mejor-que-te-puede-pasar-en-la-vida.html",
    time: "4 ore fa",
    pub_ts: 1784519101,
    tags: [],
  },
  {
    id: 5,
    cat: "geopolitica",
    title: "Trump avanza en su plan de minar la confianza en unas elecciones justas: “Nunca antes la principal amenaza al sistema vino de la Casa Blanca”",
    summary: "El discurso con el que el presidente resucitó la semana pasada teorías conspirativas sobre su derrota en 2020 se suma a su campaña de decretos, presiones del Gobierno e intentos de supresión del voto",
    body: "Se ha convertido casi en una rutina en el Capitolio. Una persona elegida por Donald Trump para ocupar un puesto en su Administración o en la judicatura se sienta ante un grupo de senadores, encargados de aprobar su designación, cuando uno de ellos, demócrata, le interroga sobre las elecciones de 2020. Lo que sigue suele hacerse viral. Seguir leyendo",
    source: "El Pais",
    url: "https://elpais.com/internacional/2026-07-20/trump-avanza-en-su-plan-de-minar-la-confianza-en-unas-elecciones-justas-nunca-antes-la-principal-amenaza-al-sistema-vino-de-la-casa-blanca.html",
    time: "4 ore fa",
    pub_ts: 1784518201,
    tags: [],
  },
  {
    id: 6,
    cat: "geopolitica",
    title: "Sánchez culmina en Argel la superación de la crisis que provocó el giro sobre el Sáhara",
    summary: "El presidente viaja al país magrebí con la vicepresidenta Aagesen, Albares y los directivos de grandes compañías energéticas para aumentar el suministro de gas",
    body: "El presidente del Gobierno, Pedro Sánchez, visitará este lunes Argel para pactar un aumento del suministro de gas y culminar la superación de la crisis diplomática bilateral que se abrió en marzo de 2022, después de que España rompiera en favor de Marruecos su tradicional neutralidad en el conflicto del Sáhara. Sánchez viajará directamente desde Nueva York, ciudad a la que se había desplazado previamente para asistir a la final de la Copa del Mundo de fútbol, y se entrevistará con el primer ministro argelino, Sifi Ghrieb, y el presidente, Abdelmayid Tebún, además de mantener un encuentro con empresarios españoles que operan en el país.\n\nSeguir leyendo",
    source: "El Pais",
    url: "https://elpais.com/espana/2026-07-20/sanchez-culmina-en-argel-la-superacion-de-la-crisis-que-provoco-el-giro-sobre-el-sahara.html",
    time: "4 ore fa",
    pub_ts: 1784518200,
    tags: [],
  },
  {
    id: 7,
    cat: "geopolitica",
    title: "Russia launches major ballistic missile attack on Ukrainian cities",
    summary: "Eight people die and dozens are injured as several cities are hit by missile and drone attacks, while Kyiv continues its own assault on Russian infrastructure.",
    body: "Eight people die and dozens are injured as several cities are hit by missile and drone attacks, while Kyiv continues its own assault on Russian infrastructure.",
    source: "BBC World",
    url: "https://www.bbc.co.uk/news/articles/c2el7xpnzrpo?at_medium=RSS&at_campaign=rss",
    time: "13 ore fa",
    pub_ts: 1784485540,
    tags: [],
  },
  {
    id: 8,
    cat: "geopolitica",
    title: "Cuban dissident Luis Manuel Otero Alcántara goes into exile in US",
    summary: "He was arrested in 2021 during Cuba's largest anti-government protests in decades and spent five years ⁠in prison.",
    body: "He was arrested in 2021 during Cuba's largest anti-government protests in decades and spent five years ⁠in prison.",
    source: "BBC World",
    url: "https://www.bbc.co.uk/news/articles/cx2k77p2r1xo?at_medium=RSS&at_campaign=rss",
    time: "1 giorno fa",
    pub_ts: 1784447222,
    tags: [],
  },
  {
    id: 9,
    cat: "conflitti",
    title: "Iran war live: Ship ablaze in Hormuz Strait after attack; crew rescued",
    summary: "US forces attack Iran for ninth consecutive night as one US soldier killed in northern Iraq.",
    body: "US forces attack Iran for ninth consecutive night as one US soldier killed in northern Iraq.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/news/liveblog/2026/7/20/iran-war-live-us-military-carries-out-another-wave-of-strikes-on-iran?traffic_source=rss",
    time: "8 ore fa",
    pub_ts: 1784505600,
    tags: [],
  },
  {
    id: 10,
    cat: "conflitti",
    title: "US soldier killed in Iraq during ‘controlled detonation’ of Iranian drone",
    summary: "The death brings the number of US soldiers killed since the start of the US-Israel war on Iran to 17.",
    body: "The death brings the number of US soldiers killed since the start of the US-Israel war on Iran to 17.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/news/2026/7/19/us-soldier-killed-in-iraq-during-controlled-detonation-of-iranian-drone?traffic_source=rss",
    time: "8 ore fa",
    pub_ts: 1784504970,
    tags: [],
  },
  {
    id: 11,
    cat: "conflitti",
    title: "US renews attacks on Iran after US soldier killed: What’s the latest?",
    summary: "Iran's IRGC claims an attack on Jordan while the US embassy issues a warning to Americans in Bahrain.",
    body: "Iran's IRGC claims an attack on Jordan while the US embassy issues a warning to Americans in Bahrain.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/news/2026/7/20/us-renews-attacks-on-iran-after-us-soldier-killed-whats-the-latest?traffic_source=rss",
    time: "23 min fa",
    pub_ts: 1784533662,
    tags: [],
  },
  {
    id: 12,
    cat: "ai",
    title: "Le minacce contro le aziende di AI sono in aumento",
    summary: "OpenAI, Anthropic e le altre stanno spendendo milioni di dollari per la sicurezza dei loro dirigenti negli Stati Uniti",
    body: "OpenAI, Anthropic e le altre stanno spendendo milioni di dollari per la sicurezza dei loro dirigenti negli Stati Uniti",
    source: "Il Post Tech",
    url: "https://www.ilpost.it/2026/07/20/minacce-aziende-dirigenti-intelligenza-artificiale/",
    time: "1 ora fa",
    pub_ts: 1784529602,
    tags: [],
  },
  {
    id: 13,
    cat: "ai",
    title: "Netflix paid $587M for Ben Affleck’s AI filmmaking startup",
    summary: "Netflix revealed that it paid $587 million in cash for InterPositive, a startup co-founded by Ben Affleck.",
    body: "Netflix revealed that it paid $587 million in cash for InterPositive, a startup co-founded by Ben Affleck.",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/19/netflix-paid-587m-for-ben-afflecks-ai-filmmaking-startup/",
    time: "10 ore fa",
    pub_ts: 1784497500,
    tags: [],
  },
  {
    id: 14,
    cat: "ai",
    title: "Can an Apple lawsuit derail OpenAI’s hardware plans?",
    summary: "On the latest episode of Equity, we debate whether Apple's lawsuit will cast over OpenAi's much-discussed plans to get into hardware and go public.",
    body: "On the latest episode of Equity, we debate whether Apple's lawsuit will cast over OpenAi's much-discussed plans to get into hardware and go public.",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/19/can-an-apple-lawsuit-derail-openais-hardware-plans/",
    time: "12 ore fa",
    pub_ts: 1784489085,
    tags: [],
  },
  {
    id: 15,
    cat: "ai",
    title: "I hate that I don’t hate this song made with Suno",
    summary: "I would never go so far as to say there's no place for AI in music (I'm a fan of Holly Herndon, after all). But I generally find music made with generative AI to be offensively boring, especially the outputs of Suno. So I'm having a bit of a tough time processing the fact that",
    body: "1010Benja won’t apologize for using AI. | Image: 1010Benja / Instagram I would never go so far as to say there's no place for AI in music (I'm a fan of Holly Herndon, after all). But I generally find music made with generative AI to be offensively boring , especially the outputs of Suno . So I'm having a bit of a tough time processing the fact that I actually quite enjoy 1010Benja's \" Semiramis' Dream .\" Benja has been unapologetic about his use of generative AI on his latest EP, Time Has Nothing To Do With What You Choose… The other three tracks can't quite hold a candle to what you find on 2024's Ten Total .\n\nBut the opener \"Semiramis' Dream\" is infectious. It explodes out of the speakers with a jungle beat and Be …",
    source: "The Verge",
    url: "https://www.theverge.com/entertainment/967678/1010benja-semiramis-dream-suno-ai-music",
    time: "14 ore fa",
    pub_ts: 1784482554,
    tags: [],
  },
  {
    id: 16,
    cat: "economia-tech",
    title: "Como hotels verso l’acquisto di asset in Puglia e nelle Langhe",
    summary: "Il gruppo di Singapore ha 19 resort nel mondo e ville di lusso da Bali ai Caraibi. Pronti investimenti in Italia per edifici storici da valorizzare",
    body: "Il gruppo di Singapore ha 19 resort nel mondo e ville di lusso da Bali ai Caraibi. Pronti investimenti in Italia per edifici storici da valorizzare",
    source: "Il Sole 24 Ore",
    url: "https://www.ilsole24ore.com/art/como-hotels-l-acquisto-asset-puglia-e-langhe-AJkFVGO",
    time: "1 giorno fa",
    pub_ts: 1784442720,
    tags: [],
  },
  {
    id: 17,
    cat: "economia-tech",
    title: "AI Pioneer Kai-Fu Lee’s Startup Targets Hong Kong IPO Next Year",
    summary: "01.ai, the Chinese AI startup founded by computer scientist Kai-Fu Lee, is pushing ahead with plans to raise funds before an initial public offering in 2027.",
    body: "01.ai, the Chinese AI startup founded by computer scientist Kai-Fu Lee, is pushing ahead with plans to raise funds before an initial public offering in 2027.",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/articles/2026-07-20/ai-pioneer-kai-fu-lee-s-startup-targets-hong-kong-ipo-next-year",
    time: "4 ore fa",
    pub_ts: 1784518812,
    tags: [],
  },
  {
    id: 18,
    cat: "economia-tech",
    title: "Moonshot Plans IPO in Six Months After China AI Breakthrough",
    summary: "Moonshot AI has told investors it’s preparing to list in as early as six months, seizing the opportunity to tap capital markets after its latest model upended industry perceptions of China’s artificial intelligence capabilities and sent tech stocks reeling.",
    body: "Moonshot AI has told investors it’s preparing to list in as early as six months, seizing the opportunity to tap capital markets after its latest model upended industry perceptions of China’s artificial intelligence capabilities and sent tech stocks reeling.",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/articles/2026-07-19/china-s-moonshot-plans-ipo-in-six-months-after-ai-breakthrough",
    time: "1 giorno fa",
    pub_ts: 1784439091,
    tags: [],
  },
  {
    id: 19,
    cat: "economia-tech",
    title: "AI Is ‘New Engine’ Keeping Chinese Economy From Harder Landing",
    summary: "A global rush to build out artificial intelligence infrastructure has turned the technology into a key pocket of growth in China’s economy during one of its weakest stretches in years.",
    body: "A global rush to build out artificial intelligence infrastructure has turned the technology into a key pocket of growth in China’s economy during one of its weakest stretches in years.",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/articles/2026-07-20/ai-is-new-engine-keeping-chinese-economy-from-harder-landing",
    time: "45 min fa",
    pub_ts: 1784532345,
    tags: [],
  },
  {
    id: 20,
    cat: "economia-tech",
    title: "Iran’s currency tumbles as renewed conflict threatens economy",
    summary: "US blockades ports and targets infrastructure as Donald Trump tries to force Tehran’s hand over Strait of Hormuz",
    body: "US blockades ports and targets infrastructure as Donald Trump tries to force Tehran’s hand over Strait of Hormuz",
    source: "Financial Times",
    url: "https://www.ft.com/content/3b659fcd-77ce-4e63-aa46-8cb648735f13?syn-25a6b1a6=1",
    time: "4 ore fa",
    pub_ts: 1784520028,
    tags: [],
  },
];
