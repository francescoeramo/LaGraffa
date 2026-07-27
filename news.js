// Generato automaticamente il 2026-07-27 17:48 UTC da scripts/fetch_news.py
// NON modificare manualmente: viene sovrascritto ogni ora dalla GitHub Action.
var NEWS_TIMESTAMP = 1785174477;

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
    title: "Meloni in Val di Susa: 'Violenza organizzata'. I No-Tav: 'Siamo tutti responsabili'",
    summary: "Fermati 4 antagonisti stranieri per le violenze di sabato, le loro posizioni sono al vaglio degli inquirenti. Oltre 800 identificati al festival No Tav. Schlein: 'Il governo strumentalizza'. Telt: 'Il peggiore attacco dal 2011'",
    body: "Fermati 4 antagonisti stranieri per le violenze di sabato, le loro posizioni sono al vaglio degli inquirenti. Oltre 800 identificati al festival No Tav. Schlein: 'Il governo strumentalizza'. Telt: 'Il peggiore attacco dal 2011'",
    source: "ANSA",
    url: "https://www.ansa.it/sito/notizie/cronaca/2026/07/27/guerriglia-no-tav-meloni-in-val-di-susa-violenza-organizzata.-i-no-tav-siamo-tutti_6aeee38f-44bd-40ef-afaf-9b3a940a47ca.html",
    time: "28 min fa",
    pub_ts: 1785172796,
    tags: [],
  },
  {
    id: 2,
    cat: "politica-italiana",
    title: "Attacco con il coltello a Parigi: ferite tre donne, una è incinta. Fermato un uomo",
    summary: "Il ministro dell'Interno Laurent Nuñez: \"Due di loro sono state ferite piuttosto gravemente\"",
    body: "Il ministro dell'Interno Laurent Nuñez: \"Due di loro sono state ferite piuttosto gravemente\"",
    source: "ANSA",
    url: "https://www.ansa.it/sito/notizie/mondo/2026/07/27/attacco-con-il-coltello-a-parigi-ferite-tre-donne-una-e-incinta.-fermato_ebfb1002-e6cc-4586-aca3-3eed6f59986a.html",
    time: "20 min fa",
    pub_ts: 1785173234,
    tags: [],
  },
  {
    id: 3,
    cat: "politica-italiana",
    title: "Pirlo non sarà il Ct. Sky: 'Maldini e Leonardo lasciano la nazionale'",
    summary: "Nuovo post del campione del mondo su Instagram: 'Ho appreso di non essere più candidato'. Botta e risposta fra il ministro dello sport e il presidente della Figc che assicura: 'Domani ci saranno novità'",
    body: "Nuovo post del campione del mondo su Instagram: 'Ho appreso di non essere più candidato'. Botta e risposta fra il ministro dello sport e il presidente della Figc che assicura: 'Domani ci saranno novità'",
    source: "ANSA",
    url: "https://www.ansa.it/sito/notizie/sport/2026/07/27/pirlo-non-sara-il-ct.-abodi-recuperare-alla-brutta-figura.-malago_2dec2d1e-c7b5-476a-9142-af1ffcbaec7d.html",
    time: "29 min fa",
    pub_ts: 1785172690,
    tags: [],
  },
  {
    id: 4,
    cat: "geopolitica",
    title: "Ukraine dismisses Iranian threats as Caspian Sea strike directly links wars",
    summary: "Iran has reacted with fury to the assault on the vessel, with Tehran's foreign minister saying it \"cannot go unanswered\".",
    body: "Iran has reacted with fury to the assault on the vessel, with Tehran's foreign minister saying it \"cannot go unanswered\".",
    source: "BBC World",
    url: "https://www.bbc.co.uk/news/articles/cwyj7yl0xndo?at_medium=RSS&at_campaign=rss",
    time: "1 ora fa",
    pub_ts: 1785169985,
    tags: [],
  },
  {
    id: 5,
    cat: "geopolitica",
    title: "Zelensky visit sends clear message of support for Ukraine, Burnham says",
    summary: "The Ukrainian president became the new prime minister's first international visitor since taking office.",
    body: "The Ukrainian president became the new prime minister's first international visitor since taking office.",
    source: "BBC World",
    url: "https://www.bbc.co.uk/news/articles/cy8me5vyjg2o?at_medium=RSS&at_campaign=rss",
    time: "1 ora fa",
    pub_ts: 1785167907,
    tags: [],
  },
  {
    id: 6,
    cat: "geopolitica",
    title: "Oil price dives as US and Iran pause attacks",
    summary: "The US says attacks on Iran have been halted to give \"talks some space\", raising hopes of a resolution to the conflict.",
    body: "The US says attacks on Iran have been halted to give \"talks some space\", raising hopes of a resolution to the conflict.",
    source: "BBC World",
    url: "https://www.bbc.co.uk/news/articles/clyj834jn5lo?at_medium=RSS&at_campaign=rss",
    time: "2 ore fa",
    pub_ts: 1785164917,
    tags: [],
  },
  {
    id: 7,
    cat: "geopolitica",
    title: "Brasil llama a consultas al embajador argentino tras los ataques de Milei contra Lula",
    summary: "Las expresiones ofensivas del presidente ultra generan un conflicto diplomático entre los dos países sudamericanos",
    body: "El Gobierno brasileño llamó este domingo a consultas al embajador de Argentina en Brasil, Daniel Raimundi, después de los insultos del presidente Javier Milei contra Luiz Inácio Lula da Silva y otras autoridades. La medida de la Cancillería llega poco después de que también se convocara al embajador brasileño en Buenos Aires, Julio Bitelli, que regresará a Brasilia ya en la madrugada de este lunes.\n\nLa polémica presencia de Milei en el lanzamiento de la candidatura presidencial de Flávio Bolsonaro, el sábado, provocó una nueva crisis en la tensa relación entre los dos gobiernos. Seguir leyendo",
    source: "El Pais",
    url: "https://elpais.com/argentina/2026-07-27/brasil-llama-a-consultas-al-embajador-argentino-tras-los-ataques-de-milei-contra-lula.html",
    time: "17 ore fa",
    pub_ts: 1785112044,
    tags: [],
  },
  {
    id: 8,
    cat: "conflitti",
    title: "Gaza student tops national exams despite war and displacement",
    summary: "Gaza’s Saba Rabah ranked first in Palestine's national high school exams amid Israel’s genocidal war.",
    body: "Gaza’s Saba Rabah ranked first in Palestine's national high school exams amid Israel’s genocidal war.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/video/newsfeed/2026/7/27/gaza-student-tops-national-exams-despite-war-and-displacement?traffic_source=rss",
    time: "5 ore fa",
    pub_ts: 1785156087,
    tags: [],
  },
  {
    id: 9,
    cat: "conflitti",
    title: "Students and staff work to bring Islamic University of Gaza back to life",
    summary: "The university is looking to continue educating Palestinians amid Israel's genocidal war on Gaza.",
    body: "The university is looking to continue educating Palestinians amid Israel's genocidal war on Gaza.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/features/2026/7/27/students-staff-work-to-bring-the-islamic-university-of-gaza-back-to-life?traffic_source=rss",
    time: "5 ore fa",
    pub_ts: 1785155165,
    tags: [],
  },
  {
    id: 10,
    cat: "conflitti",
    title: "Israel’s approval of limited Gaza force a calculated manoeuvre, experts say",
    summary: "Analysts say Israeli cabinet's decision aims to deflect US pressure and fragment the Gaza Strip.",
    body: "Analysts say Israeli cabinet's decision aims to deflect US pressure and fragment the Gaza Strip.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/news/2026/7/27/israels-approval-of-limited-gaza-force-a-calculated-manoeuvre-experts-say?traffic_source=rss",
    time: "4 ore fa",
    pub_ts: 1785157100,
    tags: [],
  },
  {
    id: 11,
    cat: "ai",
    title: "Nvidia, Microsoft launch open AI security alliance — without OpenAI, Google, or Anthropic",
    summary: "Nvidia on Monday said it is joining forces with Microsoft, SpaceX, IBM, and other tech companies to build and share open-source AI security tools. The new Open Secure AI Alliance said open tools are required to effectively defend against attacks from frontier models. The initiative is a direct response to mounting concerns over the safety",
    body: "Nvidia on Monday said it is joining forces with Microsoft, SpaceX, IBM, and other tech companies to build and share open-source AI security tools. The new Open Secure AI Alliance said open tools are required to effectively defend against attacks from frontier models. The initiative is a direct response to mounting concerns over the safety of advanced AI systems after a rogue OpenAI model escaped containment and attacked another company during testing.\n\nThat company, Hugging Face, said it was forced to use a Chinese open-weight model to defend itself due to the strict safety guardrails limiting the usefulness of top US models. Founding memb …",
    source: "The Verge",
    url: "https://www.theverge.com/ai-artificial-intelligence/971281/nvidia-open-secure-ai-alliance-cybersecurity",
    time: "5 ore fa",
    pub_ts: 1785153982,
    tags: [],
  },
  {
    id: 12,
    cat: "ai",
    title: "Ilya Sutskever’s Safe Superintelligence partners with Nvidia to scale its AI research",
    summary: "After two years in stealth, Safe Superintelligence has announced a long-term partnership with Nvidia as it prepares to scale to its next phase.",
    body: "After two years in stealth, Safe Superintelligence has announced a long-term partnership with Nvidia as it prepares to scale to its next phase.",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/27/ilya-sutskevers-safe-superintelligence-partners-with-nvidia-to-scale-its-ai-research/",
    time: "2 ore fa",
    pub_ts: 1785164510,
    tags: [],
  },
  {
    id: 13,
    cat: "ai",
    title: "Europe got its own TBPN-style live show, and everyone’s angling for a guest spot",
    summary: "On Monday, the network announced a $1.6 million seed round from top players in the media ecosystem, including Powerhouse Capital, Axel Springer SE (which owns Business Insider and Politico), the popular media publication LADbible, and angel investors from OpenAI and DeepMind. With this fresh capital, the network is announcing its largest expansion yet.",
    body: "On Monday, the network announced a $1.6 million seed round from top players in the media ecosystem, including Powerhouse Capital, Axel Springer SE (which owns Business Insider and Politico), the popular media publication LADbible, and angel investors from OpenAI and DeepMind. With this fresh capital, the network is announcing its largest expansion yet.",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/27/europe-got-its-own-tbpn-style-live-show-and-its-already-a-hot-spot-on-a-press-tour/",
    time: "7 ore fa",
    pub_ts: 1785146400,
    tags: [],
  },
  {
    id: 14,
    cat: "ai",
    title: "OpenAI’s Hugging Face breach has reignited the debate over alignment and control",
    summary: "OpenAI's Hugging Face breach has reignited debate over AI alignment and control, exposing competing views on whether increasingly capable AI should be better aligned, better contained, or both.",
    body: "OpenAI's Hugging Face breach has reignited debate over AI alignment and control, exposing competing views on whether increasingly capable AI should be better aligned, better contained, or both.",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/27/openais-hugging-face-breach-has-reignited-the-debate-over-alignment-and-control/",
    time: "19 min fa",
    pub_ts: 1785173322,
    tags: [],
  },
  {
    id: 15,
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
    id: 16,
    cat: "economia-tech",
    title: "Donald Trump rebuilds his tariff wall",
    summary: "The US president is moving his signature trade policy into a new phase",
    body: "The US president is moving his signature trade policy into a new phase",
    source: "Financial Times",
    url: "https://www.ft.com/content/426d49ae-1d07-45f4-b784-e65756a4f5ac?syn-25a6b1a6=1",
    time: "51 min fa",
    pub_ts: 1785171439,
    tags: [],
  },
  {
    id: 17,
    cat: "economia-tech",
    title: "Nvidia to Invest $5 Billion in Ilya Sutskever’s AI Research Lab",
    summary: "Nvidia Corp. has committed to invest $5 billion in Ilya Sutskever’s artificial intelligence startup Safe Superintelligence Inc., according to people familiar with the matter, marking one of the chipmaker’s largest funding deals of the AI boom.",
    body: "Nvidia Corp. has committed to invest $5 billion in Ilya Sutskever’s artificial intelligence startup Safe Superintelligence Inc., according to people familiar with the matter, marking one of the chipmaker’s largest funding deals of the AI boom.",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/articles/2026-07-27/nvidia-makes-substantial-investment-in-sutskever-s-ai-startup",
    time: "4 ore fa",
    pub_ts: 1785158085,
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
    time: "6 ore fa",
    pub_ts: 1785151865,
    tags: [],
  },
  {
    id: 19,
    cat: "economia-tech",
    title: "Startup Raises $470 Million to Make Reactors for Military Bases",
    summary: "California startup Antares Nuclear Inc. raised $470 million to advance plans to build small reactors aimed at supplying power to US military bases.",
    body: "California startup Antares Nuclear Inc. raised $470 million to advance plans to build small reactors aimed at supplying power to US military bases.",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/articles/2026-07-27/startup-raises-470-million-to-build-tiny-reactors-for-military",
    time: "6 ore fa",
    pub_ts: 1785150000,
    tags: [],
  },
];
