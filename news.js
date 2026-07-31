// Generato automaticamente il 2026-07-31 10:46 UTC da scripts/fetch_news.py
// NON modificare manualmente: viene sovrascritto ogni ora dalla GitHub Action.
var NEWS_TIMESTAMP = 1785494748;

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
    title: "Almeno 49mila migranti entrati a Ceuta in 24 ore. 'Scontri con lanci di pietre alle frontiere'. Il bilancio dei morti sale a 18",
    summary: "Chiusa la frontiera a Melilla dopo l'entrata di 400 migranti",
    body: "Chiusa la frontiera a Melilla dopo l'entrata di 400 migranti",
    source: "ANSA",
    url: "https://www.ansa.it/sito/notizie/mondo/2026/07/31/almeno-49mila-migranti-entrati-a-ceuta-in-24-ore.-scontri-con-lanci-di-pietre_a2e6519a-5785-4646-8369-c6b28102df5e.html",
    time: "15 min fa",
    pub_ts: 1785493824,
    tags: [],
  },
  {
    id: 2,
    cat: "politica-italiana",
    title: "Ue: 'Dal 2 agosto scatta la vigilanza sull'AI Act, scure su chatbot e deepfake'",
    summary: "Al via fase di enforcement della legge, etichette per i contenuti IA tra i nuovi obblighi",
    body: "Al via fase di enforcement della legge, etichette per i contenuti IA tra i nuovi obblighi",
    source: "ANSA",
    url: "https://www.ansa.it/sito/notizie/cronaca/2026/07/31/ue-dal-2-agosto-scatta-la-vigilanza-sullai-act-scure-su-chatbot-e-deepfake_7a2a332b-d870-48c5-ae6c-0b9685cc8735.html",
    time: "41 min fa",
    pub_ts: 1785492231,
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
    time: "18 ore fa",
    pub_ts: 1785428886,
    tags: [],
  },
  {
    id: 4,
    cat: "geopolitica",
    title: "Peru's ex-president has 15-year jail sentence for corruption charges overturned",
    summary: "Ollanta Humala had been convicted of money laundering offences alongside his wife in 2025.",
    body: "Ollanta Humala had been convicted of money laundering offences alongside his wife in 2025.",
    source: "BBC World",
    url: "https://www.bbc.co.uk/news/articles/cx2j9nj88rro?at_medium=RSS&at_campaign=rss",
    time: "13 min fa",
    pub_ts: 1785493937,
    tags: [],
  },
  {
    id: 5,
    cat: "geopolitica",
    title: "What could happen to Fifa if Uefa boycotts World Cup?",
    summary: "It's been a seismic 48 hours for football after Uefa threatened to boycott the World Cup and Concacaf rejected Gianni Infantino's funding plan - what happens now, and can Fifa's president survive?",
    body: "It's been a seismic 48 hours for football after Uefa threatened to boycott the World Cup and Concacaf rejected Gianni Infantino's funding plan - what happens now, and can Fifa's president survive?",
    source: "BBC World",
    url: "https://www.bbc.co.uk/sport/football/articles/c9984d9x1eyo?at_medium=RSS&at_campaign=rss",
    time: "5 ore fa",
    pub_ts: 1785474857,
    tags: [],
  },
  {
    id: 6,
    cat: "geopolitica",
    title: "Why limited war with the US may suit Iran better than peace",
    summary: "Iran may believe it can control its conflict carefully enough to keep pressure on the US while avoiding an all-out war.",
    body: "Iran may believe it can control its conflict carefully enough to keep pressure on the US while avoiding an all-out war.",
    source: "BBC World",
    url: "https://www.bbc.co.uk/news/articles/c78gnyq3wvdo?at_medium=RSS&at_campaign=rss",
    time: "17 ore fa",
    pub_ts: 1785432361,
    tags: [],
  },
  {
    id: 7,
    cat: "conflitti",
    title: "Iran war live: IRGC claims ‘retaliatory attack’ on Kuwait",
    summary: "Iran has continued its attacks on Gulf states, in what it calls retaliation for US strikes on Thursday.",
    body: "Iran has continued its attacks on Gulf states, in what it calls retaliation for US strikes on Thursday.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/news/liveblog/2026/7/31/iran-war-live-irgc-claims-retaliatory-attack-on-kuwait?traffic_source=rss",
    time: "3 ore fa",
    pub_ts: 1785480578,
    tags: [],
  },
  {
    id: 8,
    cat: "conflitti",
    title: "Hamas agrees to phased disarmament in Gaza",
    summary: "Hamas has agreed to gradually disarm in Gaza as part of Donald Trump’s 20-point peace plan.",
    body: "Hamas has agreed to gradually disarm in Gaza as part of Donald Trump’s 20-point peace plan.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/video/newsfeed/2026/7/31/hamas-agrees-to-phased-disarmament-in-gaza?traffic_source=rss",
    time: "1 ora fa",
    pub_ts: 1785487997,
    tags: [],
  },
  {
    id: 9,
    cat: "conflitti",
    title: "Her mother said no to a phone. Then came the Gaza genocide",
    summary: "As the world debated social media use, Eman Lulu's phone became a lifeline and a window into Gaza for millions.",
    body: "As the world debated social media use, Eman Lulu's phone became a lifeline and a window into Gaza for millions.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/features/longform/2026/7/31/her-mother-said-no-to-a-phone-then-came-the-gaza-genocide?traffic_source=rss",
    time: "1 ora fa",
    pub_ts: 1785489834,
    tags: [],
  },
  {
    id: 10,
    cat: "ai",
    title: "Google DeepMind’s new AI model can control a robot’s entire body",
    summary: "Google DeepMind says the latest version of its Gemini Robotics AI model can \"control entire humanoid robots.\" While the previous model focused on controlling a humanoid robot's upper body, Gemini Robotics 2 now supports \"whole-body motions\" ranging from its feet to fingertips, according to an announcement on Thursday. The new model will allow humanoid robots",
    body: "Apptronik’s Apollo 2 robot takes a baseball glove off of a shelf. | Image: Google Google DeepMind says the latest version of its Gemini Robotics AI model can \"control entire humanoid robots.\" While the previous model focused on controlling a humanoid robot's upper body, Gemini Robotics 2 now supports \"whole-body motions\" ranging from its feet to fingertips, according to an announcement on Thursday .\n\nThe new model will allow humanoid robots to perform a wider range of actions, as it allows them to walk, crouch, stretch, and manipulate objects. Videos shared by Google show how Apptronik's Apollo 2 robot can bend over to pick up a watering can, as well as find and take specific items off a shelf. Though Google DeepMind not …",
    source: "The Verge",
    url: "https://www.theverge.com/tech/973276/google-deepmind-gemini-robotics-2-whole-body",
    time: "17 ore fa",
    pub_ts: 1785431925,
    tags: [],
  },
  {
    id: 11,
    cat: "ai",
    title: "Anthropic says its own AI models breached three companies during security tests",
    summary: "After OpenAI's models broke into Hugging Face, Anthropic checked its own history and found three similar incidents",
    body: "After OpenAI's models broke into Hugging Face, Anthropic checked its own history and found three similar incidents",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/30/anthropic-says-its-own-ai-models-breached-three-companies-during-security-tests/",
    time: "9 ore fa",
    pub_ts: 1785460014,
    tags: [],
  },
  {
    id: 12,
    cat: "ai",
    title: "AI hedge fund Situational Awareness may have sold its public portfolio, but it still has its Anthropic shares",
    summary: "The former OpenAI researcher’s fund was forced to unwind public equities after leveraged public bets plummeted. But he still has cards to play.",
    body: "The former OpenAI researcher’s fund was forced to unwind public equities after leveraged public bets plummeted. But he still has cards to play.",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/30/ai-hedge-fund-situational-awareness-may-have-sold-its-public-portfolio-but-it-still-has-its-anthropic-shares/",
    time: "11 ore fa",
    pub_ts: 1785453958,
    tags: [],
  },
  {
    id: 13,
    cat: "ai",
    title: "Investors love AI, as long as you’re a cloud host",
    summary: "Amazon isn't slowing down on data center spending — but investors don't seem to mind.",
    body: "Amazon isn't slowing down on data center spending — but investors don't seem to mind.",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/30/investors-love-ai-as-long-as-youre-a-cloud-host/",
    time: "12 ore fa",
    pub_ts: 1785451301,
    tags: [],
  },
  {
    id: 14,
    cat: "economia-tech",
    title: "Commercio di legname, le sfide di un sistema che vale 3,3 miliardi",
    summary: "Stefano Corà eletto alla presidenza di Fedecomlegno di FederlegnoArredo",
    body: "Stefano Corà eletto alla presidenza di Fedecomlegno di FederlegnoArredo",
    source: "Il Sole 24 Ore",
    url: "https://www.ilsole24ore.com/art/commercio-legname-sfide-un-sistema-che-vale-33-miliardi-AJpd5ea",
    time: "4 ore fa",
    pub_ts: 1785477721,
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
    time: "1 giorno fa",
    pub_ts: 1785394921,
    tags: [],
  },
  {
    id: 16,
    cat: "economia-tech",
    title: "European Execs Show AI Optimism: Markets Snapshot",
    summary: "A big week of earnings results for some of the world's most influential companies has been underscored by the global AI infrastructure buildout, tightening supply chains and ongoing geopolitical uncertainty. The Opening Trade spoke to CEOs and corporate heavy weights to get clarity on their second-half outlook and whether they remain optimistic on returns from their AI investments. (Source:…",
    body: "A big week of earnings results for some of the world's most influential companies has been underscored by the global AI infrastructure buildout, tightening supply chains and ongoing geopolitical uncertainty. The Opening Trade spoke to CEOs and corporate heavy weights to get clarity on their second-half outlook and whether they remain optimistic on returns from their AI investments. (Source: Bloomberg)",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/videos/2026-07-31/european-execs-show-ai-optimism-markets-snapshot-video",
    time: "2 ore fa",
    pub_ts: 1785486553,
    tags: [],
  },
  {
    id: 17,
    cat: "economia-tech",
    title: "Tech Stocks Rally in AI Trade Euphoria | The China Show | 7/31/2026",
    summary: "“Bloomberg: The China Show” is your definitive source for news and analysis on the world's second-biggest economy. From politics and policy to tech and trends, Yvonne Man and David Ingles give global investors unique insight, delivering in-depth discussions with the newsmakers who matter. (Source: Bloomberg)",
    body: "“Bloomberg: The China Show” is your definitive source for news and analysis on the world's second-biggest economy. From politics and policy to tech and trends, Yvonne Man and David Ingles give global investors unique insight, delivering in-depth discussions with the newsmakers who matter. (Source: Bloomberg)",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/videos/2026-07-31/the-china-show-7-31-2026-video",
    time: "4 ore fa",
    pub_ts: 1785478834,
    tags: [],
  },
  {
    id: 18,
    cat: "economia-tech",
    title: "South Korean stock market soars 18% as investors pile back into AI",
    summary: "Chipmakers rebound at end of bruising month for the sector, helped by Wall Street rally",
    body: "Chipmakers rebound at end of bruising month for the sector, helped by Wall Street rally",
    source: "Financial Times",
    url: "https://www.ft.com/content/23eb1fd4-8301-4c0e-89b3-2647389e6226?syn-25a6b1a6=1",
    time: "33 min fa",
    pub_ts: 1785492752,
    tags: [],
  },
  {
    id: 19,
    cat: "economia-tech",
    title: "Hong Kong’s Economy Slows More Than Forecast Despite AI Boom",
    summary: "Hong Kong’s economic growth slowed more than forecast last quarter, even as a global rush to invest in artificial intelligence turbocharges the city’s exports.",
    body: "Hong Kong’s economic growth slowed more than forecast last quarter, even as a global rush to invest in artificial intelligence turbocharges the city’s exports.",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/articles/2026-07-31/hong-kong-s-economy-slows-more-than-forecast-despite-export-boom",
    time: "2 ore fa",
    pub_ts: 1785487166,
    tags: [],
  },
  {
    id: 20,
    cat: "economia-tech",
    title: "How Leopold Aschenbrenner, the ‘golden child’ of the AI trade, was laid low",
    summary: "The $20bn hedge fund manager’s wild ride ended with a call to Ken Griffin",
    body: "The $20bn hedge fund manager’s wild ride ended with a call to Ken Griffin",
    source: "Financial Times",
    url: "https://www.ft.com/content/620bd668-d112-412d-aa52-22489b128d55?syn-25a6b1a6=1",
    time: "9 ore fa",
    pub_ts: 1785459479,
    tags: [],
  },
];
