// Generato automaticamente il 2026-07-27 12:31 UTC da scripts/fetch_news.py
// NON modificare manualmente: viene sovrascritto ogni ora dalla GitHub Action.
var NEWS_TIMESTAMP = 1785155480;

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
    title: "Guerriglia No Tav, Meloni in Val di Susa: 'Violenza organizzata'. Schlein: 'Il governo strumentalizza'",
    summary: "Fermati 4 antagonisti stranieri per le violenze di sabato, le loro posizioni sono al vaglio degli inquirenti. Oltre 800 identificati al festival No Tav",
    body: "Fermati 4 antagonisti stranieri per le violenze di sabato, le loro posizioni sono al vaglio degli inquirenti. Oltre 800 identificati al festival No Tav",
    source: "ANSA",
    url: "https://www.ansa.it/sito/notizie/cronaca/2026/07/27/meloni-e-piantedosi-in-val-di-susa-dopo-gli-assalti-no-tav-ai-cantieri-fermati_6aeee38f-44bd-40ef-afaf-9b3a940a47ca.html",
    time: "18 min fa",
    pub_ts: 1785154378,
    tags: [],
  },
  {
    id: 2,
    cat: "politica-italiana",
    title: "In arrivo l'intervento ponte sui carburanti, oggi il consiglio dei ministri",
    summary: "Successivamente il governo dovrebbe fare ricorso all'accisa mobile. Fra le ipotesi di intervento c'è l'aumento delle sigarette",
    body: "Successivamente il governo dovrebbe fare ricorso all'accisa mobile. Fra le ipotesi di intervento c'è l'aumento delle sigarette",
    source: "ANSA",
    url: "https://www.ansa.it/sito/notizie/economia/2026/07/27/in-arrivo-lintervento-ponte-sui-carburanti-oggi-il-consiglio-dei-ministri_9c8411bb-583f-407e-a372-27214add207a.html",
    time: "36 min fa",
    pub_ts: 1785153296,
    tags: [],
  },
  {
    id: 3,
    cat: "politica-italiana",
    title: "Il sindaco Lepore: 'Bologna è una città ferita. Non ho chiesto io la scorta, è stato un obbligo'",
    summary: "'Per conoscere questa città bisogna venire in piazza il giorno dell'anniversario'",
    body: "'Per conoscere questa città bisogna venire in piazza il giorno dell'anniversario'",
    source: "ANSA",
    url: "https://www.ansa.it/sito/notizie/cronaca/2026/07/27/il-sindaco-lepore-bologna-ferita-dal-pilastro-spero-tanta-gente-al-corteo_5044ada6-ca4d-473e-bb72-27db671c8e6c.html",
    time: "1 ora fa",
    pub_ts: 1785150760,
    tags: [],
  },
  {
    id: 4,
    cat: "geopolitica",
    title: "Oil price dives as US and Iran pause attacks",
    summary: "The US says attacks on Iran have been halted to give \"talks some space\", raising hopes of a resolution to the conflict.",
    body: "The US says attacks on Iran have been halted to give \"talks some space\", raising hopes of a resolution to the conflict.",
    source: "BBC World",
    url: "https://www.bbc.co.uk/news/articles/clyj834jn5lo?at_medium=RSS&at_campaign=rss",
    time: "41 min fa",
    pub_ts: 1785153023,
    tags: [],
  },
  {
    id: 5,
    cat: "geopolitica",
    title: "Canarias apoyará la nueva financiación autonómica del Gobierno",
    summary: "El presidente Fernando Clavijo asegura que este acuerdo reportará más de 1.300 millones al año al archipiélago “para sus servicios públicos y esenciales”",
    body: "El Gobierno de Canarias (formado por Coalición Canaria, Partido Popular y Agrupación Herreña Independiente) ha anunciado este lunes que respaldará este miércoles en el Consejo de Política Fiscal y Financiera el nuevo modelo de financiación autonómica , tras ver reconocidas sus singularidades con planteamientos “razonables que no perjudican a otras comunidades” y que reportarán 1.300 millones más al año a los servicios esenciales del archipiélago.\n\nSeguir leyendo",
    source: "El Pais",
    url: "https://elpais.com/economia/2026-07-27/canarias-apoyara-la-nueva-financiacion-autonomica-del-gobierno.html",
    time: "1 ora fa",
    pub_ts: 1785151128,
    tags: [],
  },
  {
    id: 6,
    cat: "geopolitica",
    title: "Argentine leader calls Brazilian president a 'thief' and a 'convict'",
    summary: "Javier Milei spoke at a campaign rally for right-wing presidential candidate Flávio Bolsonaro, who is running against Lula.",
    body: "Javier Milei spoke at a campaign rally for right-wing presidential candidate Flávio Bolsonaro, who is running against Lula.",
    source: "BBC World",
    url: "https://www.bbc.co.uk/news/articles/cvgx91vdedno?at_medium=RSS&at_campaign=rss",
    time: "2 ore fa",
    pub_ts: 1785147574,
    tags: [],
  },
  {
    id: 7,
    cat: "geopolitica",
    title: "Infantino tells Fifa critics to 'meditate, pray or watch football'",
    summary: "Fifa president Gianni Infantino tells critics to \"meditate, pray or watch a football match\" instead of \"spreading hate and false rumours\" about him and the World Cup.",
    body: "Fifa president Gianni Infantino tells critics to \"meditate, pray or watch a football match\" instead of \"spreading hate and false rumours\" about him and the World Cup.",
    source: "BBC World",
    url: "https://www.bbc.co.uk/sport/football/articles/cz0515973gpo?at_medium=RSS&at_campaign=rss",
    time: "4 ore fa",
    pub_ts: 1785139648,
    tags: [],
  },
  {
    id: 8,
    cat: "conflitti",
    title: "Iran warns Ukraine of retaliation after deadly Caspian Sea strike",
    summary: "Abbas Araghchi says the Ukrainian attack on the Iranian vessel in the Caspian Sea 'cannot go unanswered'.",
    body: "Abbas Araghchi says the Ukrainian attack on the Iranian vessel in the Caspian Sea 'cannot go unanswered'.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/news/2026/7/27/iran-warns-ukraine-of-retaliation-after-deadly-caspian-sea-strike?traffic_source=rss",
    time: "6 ore fa",
    pub_ts: 1785132901,
    tags: [],
  },
  {
    id: 9,
    cat: "conflitti",
    title: "Why has the US halted its bombing of Iran?",
    summary: "Tit-for-tat strikes have halted in the Middle East amid reports of depleted US weapons stocks.",
    body: "Tit-for-tat strikes have halted in the Middle East amid reports of depleted US weapons stocks.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/news/2026/7/27/why-has-the-us-halted-its-bombing-of-iran?traffic_source=rss",
    time: "1 ora fa",
    pub_ts: 1785149752,
    tags: [],
  },
  {
    id: 10,
    cat: "conflitti",
    title: "The Ban: A censorship loophole during the conflict in Northern Ireland",
    summary: "A censorship saga about how the voices of republican leaders in Northern Ireland were banned by the British government.",
    body: "A censorship saga about how the voices of republican leaders in Northern Ireland were banned by the British government.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/video/witness/2026/7/27/the-ban-a-censorship-loophole-during-the-conflict-in-northern-ireland?traffic_source=rss",
    time: "3 ore fa",
    pub_ts: 1785143124,
    tags: [],
  },
  {
    id: 11,
    cat: "ai",
    title: "Nvidia, Microsoft launch open AI security alliance – without OpenAI, Google, or Anthropic",
    summary: "Nvidia on Monday said it is joining forces with Microsoft, SpaceX, IBM, and other tech companies to build and share open-source AI security tools. The new Open Secure AI Alliance said open tools are required to effectively defend against attacks from frontier models. The initiative is a direct response to mounting concerns over the safety",
    body: "Nvidia on Monday said it is joining forces with Microsoft, SpaceX, IBM, and other tech companies to build and share open-source AI security tools. The new Open Secure AI Alliance said open tools are required to effectively defend against attacks from frontier models. The initiative is a direct response to mounting concerns over the safety of advanced AI systems after a rogue OpenAI model escaped containment and attacked another company during testing.\n\nThat company, Hugging Face, said it was forced to use a Chinese open-weight model to defend itself due to the strict safety guardrails limiting the usefulness of top US models. Founding memb …",
    source: "The Verge",
    url: "https://www.theverge.com/ai-artificial-intelligence/971281/nvidia-open-secure-ai-alliance-cybersecurity",
    time: "25 min fa",
    pub_ts: 1785153982,
    tags: [],
  },
  {
    id: 12,
    cat: "ai",
    title: "Europe got its own TBPN-style live show, and everyone’s angling for a guest spot",
    summary: "On Monday, the network announced a $1.6 million seed round from top players in the media ecosystem, including Powerhouse Capital, Axel Springer SE (which owns Business Insider and Politico), the popular media publication LadBible, and angel investors from OpenAI and DeepMind. With this fresh capital, the network is announcing its largest expansion yet.",
    body: "On Monday, the network announced a $1.6 million seed round from top players in the media ecosystem, including Powerhouse Capital, Axel Springer SE (which owns Business Insider and Politico), the popular media publication LadBible, and angel investors from OpenAI and DeepMind. With this fresh capital, the network is announcing its largest expansion yet.",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/27/europe-got-its-own-tbpn-style-live-show-and-its-already-a-hot-spot-on-a-press-tour/",
    time: "2 ore fa",
    pub_ts: 1785146400,
    tags: [],
  },
  {
    id: 13,
    cat: "ai",
    title: "Can Apple make smart glasses that aren’t a constant privacy threat?",
    summary: "As Apple prepares to launch its first smart glasses, the company may also be wrestling with how to address consumer privacy concerns.",
    body: "As Apple prepares to launch its first smart glasses, the company may also be wrestling with how to address consumer privacy concerns.",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/26/can-apple-make-smart-glasses-that-arent-a-constant-privacy-threat/",
    time: "15 ore fa",
    pub_ts: 1785100004,
    tags: [],
  },
  {
    id: 14,
    cat: "ai",
    title: "Apple is banking on privacy to set its smart glasses apart",
    summary: "According to Mark Gurman, Apple is planning to reveal its first smart glasses at WWDC next June, with an expectation that they'll launch by the end of 2027. Part of the hold-up may be around the company's efforts to get its privacy features and messaging in order. Smart glasses in general, and Meta's in particular,",
    body: "Meta’s AI glasses have been the focus of controversy. | Photo: Amelia Holowaty Krales / The Verge According to Mark Gurman , Apple is planning to reveal its first smart glasses at WWDC next June, with an expectation that they'll launch by the end of 2027. Part of the hold-up may be around the company's efforts to get its privacy features and messaging in order. Smart glasses in general, and Meta's in particular, have ignited controversy over their ability to stealthily capture photos and videos.\n\nAs Gurman points out: The company has spent more than a decade making privacy one of its defining product messages. Simply entering the same category as Meta risks undermining that reputation, regardless of how Apple's approach differs. Apple …",
    source: "The Verge",
    url: "https://www.theverge.com/tech/971101/apple-smart-glasses-privacy",
    time: "16 ore fa",
    pub_ts: 1785094598,
    tags: [],
  },
  {
    id: 15,
    cat: "ai",
    title: "Hugging Face CEO calls for ‘radical transparency’ after ‘unprecedented’ OpenAI hack",
    summary: "\"The first autonomous agent cyberattack is an unprecedented event. It deserves an unprecedented response!\"",
    body: "\"The first autonomous agent cyberattack is an unprecedented event. It deserves an unprecedented response!\"",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/26/hugging-face-ceo-calls-for-radical-transparency-after-unprecedented-openai-hack/",
    time: "19 ore fa",
    pub_ts: 1785083593,
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
    title: "Chinese Biotech Overtakes AI as Emerging-Market Growth Trade",
    summary: "As the artificial-intelligence rally sputters in emerging markets, investors searching for high-growth alternatives are turning to Chinese biotech.",
    body: "As the artificial-intelligence rally sputters in emerging markets, investors searching for high-growth alternatives are turning to Chinese biotech.",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/articles/2026-07-26/chinese-biotech-overtakes-ai-as-emerging-market-growth-trade",
    time: "12 ore fa",
    pub_ts: 1785109863,
    tags: [],
  },
  {
    id: 18,
    cat: "economia-tech",
    title: "Truist Names Jefferies Veteran Mineard Co-Head of TMT",
    summary: "Craig Mineard is joining Truist Financial Corp.’s investment bank from Jefferies Financial Group Inc. to co-head the firm’s technology media and telecom group.",
    body: "Craig Mineard is joining Truist Financial Corp.’s investment bank from Jefferies Financial Group Inc. to co-head the firm’s technology media and telecom group.",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/articles/2026-07-27/truist-names-jefferies-veteran-mineard-co-head-of-tmt",
    time: "1 ora fa",
    pub_ts: 1785151865,
    tags: [],
  },
  {
    id: 19,
    cat: "economia-tech",
    title: "Startup Raises $470 Million to Build Tiny Reactors for Military",
    summary: "California startup Antares Nuclear Inc. raised $470 million to advance plans to build tiny reactors aimed at supplying power to US military bases.",
    body: "California startup Antares Nuclear Inc. raised $470 million to advance plans to build tiny reactors aimed at supplying power to US military bases.",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/articles/2026-07-27/startup-raises-470-million-to-build-tiny-reactors-for-military",
    time: "1 ora fa",
    pub_ts: 1785150000,
    tags: [],
  },
  {
    id: 20,
    cat: "economia-tech",
    title: "Chinese chip champion CXMT soars 466% in market debut",
    summary: "Tech group briefly becomes China’s most valuable listed company in mainland’s biggest IPO since 2010",
    body: "Tech group briefly becomes China’s most valuable listed company in mainland’s biggest IPO since 2010",
    source: "Financial Times",
    url: "https://www.ft.com/content/8e82e939-908b-42bf-a314-0bb02a3f1b07?syn-25a6b1a6=1",
    time: "5 ore fa",
    pub_ts: 1785137355,
    tags: [],
  },
];
