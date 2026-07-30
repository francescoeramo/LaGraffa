// Generato automaticamente il 2026-07-30 11:13 UTC da scripts/fetch_news.py
// NON modificare manualmente: viene sovrascritto ogni ora dalla GitHub Action.
var NEWS_TIMESTAMP = 1785410022;

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
    time: "3 min fa",
    pub_ts: 1785409809,
    tags: [],
  },
  {
    id: 2,
    cat: "politica-italiana",
    title: "++ Ue, 'riconoscimento facciale in spazi pubblici è vietato dall'AI Act' ++",
    summary: "'Non abbiamo elementi per giudicare in anticipo il decreto legislativo in Italia'",
    body: "'Non abbiamo elementi per giudicare in anticipo il decreto legislativo in Italia'",
    source: "ANSA",
    url: "https://www.ansa.it/sito/notizie/flash/2026/07/30/-ue-riconoscimento-facciale-in-spazi-pubblici-e-vietato-dallai-act-_de67767f-c846-4a97-ad78-aa71ff3eb23b.html",
    time: "12 min fa",
    pub_ts: 1785409271,
    tags: [],
  },
  {
    id: 3,
    cat: "politica-italiana",
    title: "Il caso delle chat di Delmastro rinviato in giunta delle autorizzazioni",
    summary: "Il voto era atteso oggi nell'Aula della Camera",
    body: "Il voto era atteso oggi nell'Aula della Camera",
    source: "ANSA",
    url: "https://www.ansa.it/sito/notizie/cronaca/2026/07/30/il-caso-delle-chat-di-delmastro-rinviato-in-giunta-delle-autorizzazioni_4d606650-2e0e-4faa-b2cf-825a590cd4f8.html",
    time: "2 ore fa",
    pub_ts: 1785402001,
    tags: [],
  },
  {
    id: 4,
    cat: "geopolitica",
    title: "US launches 'heavy' strikes on Iran after attempted attack on American troops",
    summary: "After a short period of relative calm when hostilities were paused, both sides have now restarted missile attacks.",
    body: "After a short period of relative calm when hostilities were paused, both sides have now restarted missile attacks.",
    source: "BBC World",
    url: "https://www.bbc.co.uk/news/articles/c74gwdzywmeo?at_medium=RSS&at_campaign=rss",
    time: "24 min fa",
    pub_ts: 1785408554,
    tags: [],
  },
  {
    id: 5,
    cat: "geopolitica",
    title: "Begoña Gómez recupera el pasaporte tras retirárselo el juez Peinado",
    summary: "El magistrado autorizó finalmente que otra persona recogiera la documentación en su nombre, según fuentes cercanas a la esposa del presidente del Gobierno",
    body: "Begoña Gómez ya ha podido recuperar su pasaporte, según informan fuentes cercanas a la esposa de Pedro Sánchez. El juez Juan Carlos Peinado, a quien la Audiencia Provincial de Madrid ha obligado a retirar las medidas cautelares que impuso a la pareja del presidente y a su asistente en La Moncloa, autorizó finalmente a que la procuradora de la pareja del presidente del Gobierno acudiese a recoger la documentación en su nombre y, según detallan estas fuentes, así se ha hecho.\n\nEsta devolución se produce después de que la defensa de la asistente de Gómez, Cristina Álvarez, denunciase que Peinado estaba “reteniendo” su pasaporte al obligar a ambas a acudir en persona al juzgado para conseguir tenerlos de vuelta. Seguir leyendo",
    source: "El Pais",
    url: "https://elpais.com/espana/2026-07-30/begona-gomez-recupera-el-pasaporte-tras-retirarselo-el-juez-peinado.html",
    time: "1 ora fa",
    pub_ts: 1785406400,
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
    time: "13 ore fa",
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
    time: "16 ore fa",
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
    title: "Poland says Russian missile breaches NATO airspace",
    summary: "Poland says a Russian missile landed inside Polish territory, breaching NATO airspace during a Russian attack on Ukraine",
    body: "Poland says a Russian missile landed inside Polish territory, breaching NATO airspace during a Russian attack on Ukraine",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/video/newsfeed/2026/7/30/30-07-sv-lublin-air-sirens-pl?traffic_source=rss",
    time: "1 ora fa",
    pub_ts: 1785406432,
    tags: [],
  },
  {
    id: 10,
    cat: "conflitti",
    title: "India’s arms sale to Israel risks complicity in Gaza genocide, Amnesty says",
    summary: "Rights group says India continues to support the Israeli military despite genocide 'broadcast worldwide on daily basis'.",
    body: "Rights group says India continues to support the Israeli military despite genocide 'broadcast worldwide on daily basis'.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/news/2026/7/30/indias-arms-sale-to-israel-risks-complicity-in-gaza-genocide-amnesty-says?traffic_source=rss",
    time: "4 ore fa",
    pub_ts: 1785395604,
    tags: [],
  },
  {
    id: 11,
    cat: "conflitti",
    title: "Photos: Zelenskyy urges ‘protection of life’ amid deadly Russian attacks",
    summary: "Russia launches more than 70 missiles and 280 drones in a major attack on Ukraine that kills at least eight people.",
    body: "Russia launches more than 70 missiles and 280 drones in a major attack on Ukraine that kills at least eight people.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/gallery/2026/7/30/photos-zelenskyy-urges-protection-of-life-amid-deadly-russian-attacks?traffic_source=rss",
    time: "2 ore fa",
    pub_ts: 1785402607,
    tags: [],
  },
  {
    id: 12,
    cat: "ai",
    title: "Microsoft is openly competing with OpenAI, Anthropic more than ever",
    summary: "Microsoft pitched its own homegrown AI models, harnesses, and even a Mythos competitor on Wednesday, telling Wall Street it plans for continued growth.",
    body: "Microsoft pitched its own homegrown AI models, harnesses, and even a Mythos competitor on Wednesday, telling Wall Street it plans for continued growth.",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/29/microsoft-is-openly-competing-with-openai-anthropic-more-than-ever/",
    time: "10 ore fa",
    pub_ts: 1785370866,
    tags: [],
  },
  {
    id: 13,
    cat: "ai",
    title: "Microsoft logs $3.2B from Anthropic investment, but OpenAI was a mixed bag",
    summary: "When Microsoft reported killer fourth-quarter earnings for its fiscal 2026 year (which ended June 30), it tucked in an interesting little tidbit about how its investments in the two biggest, and competing, AI labs are doing.",
    body: "When Microsoft reported killer fourth-quarter earnings for its fiscal 2026 year (which ended June 30), it tucked in an interesting little tidbit about how its investments in the two biggest, and competing, AI labs are doing.",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/29/microsoft-logs-3-2b-from-anthropic-investment-but-openai-was-a-mixed-bag/",
    time: "12 ore fa",
    pub_ts: 1785365163,
    tags: [],
  },
  {
    id: 14,
    cat: "ai",
    title: "Thinking Machines co-founder Lilian Weng left the company citing health reasons, then joined OpenAI",
    summary: "Weng previously served as the VP of AI Safety Research at OpenAI.",
    body: "Weng previously served as the VP of AI Safety Research at OpenAI.",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/29/thinking-machines-co-founder-lilian-weng-left-the-company-citing-health-reasons-then-joined-openai/",
    time: "14 ore fa",
    pub_ts: 1785359268,
    tags: [],
  },
  {
    id: 15,
    cat: "ai",
    title: "Qualcomm is raising phone chip prices starting September 1st",
    summary: "RAMageddon won't be the only reason your next phone costs more - Qualcomm is about to raise prices on all its processors, as well. Qualcomm CEO Cristiano Amon said on Wednesday that \"prices are going to go up\" on the company's products starting on September 1st, CNBC reports. The price hikes were rumored last week",
    body: "RAMageddon won't be the only reason your next phone costs more - Qualcomm is about to raise prices on all its processors, as well. Qualcomm CEO Cristiano Amon said on Wednesday that \"prices are going to go up\" on the company's products starting on September 1st, CNBC reports. The price hikes were rumored last week to be \"a percentage in the double digits.\" Qualcomm announced the planned price increases while reporting a 20 percent year-over-year drop in revenue from its handset business, the lowest it's reported since 2021 .\n\nIn its quarterly earnings presentation, Qualcomm said this drop is due to \"unprecedented increases in memory pricing …",
    source: "The Verge",
    url: "https://www.theverge.com/tech/972894/qualcomm-price-hikes-q2-2026-earnings",
    time: "13 ore fa",
    pub_ts: 1785361316,
    tags: [],
  },
  {
    id: 16,
    cat: "ai",
    title: "OpenAI president says it’s ‘building a family of devices’ for its AI chatbots",
    summary: "In an interview with our friend Joanna Stern on her YouTube channel, OpenAI president Greg Brockman said the company is working on a \"family of devices\" for interacting with its AI models. However, Brockman didn't confirm reports that one of those devices is a smart speaker OpenAI's rumored to be launching in 2027, or earlier",
    body: "In an interview with our friend Joanna Stern on her YouTube channel , OpenAI president Greg Brockman said the company is working on a \"family of devices\" for interacting with its AI models. However, Brockman didn't confirm reports that one of those devices is a smart speaker OpenAI's rumored to be launching in 2027, or earlier rumors that the device might be a wearable like the Humane AI pin. He didn't give a release date, either, only saying that \"you can expect them soon.\" When asked about whether Apple's lawsuit against OpenAI could impact the devices it's working on with former Apple designer Jony Ive , Brockman said, \"We are focused on o …",
    source: "The Verge",
    url: "https://www.theverge.com/ai-artificial-intelligence/972709/openai-hardware-greg-brockman-interview",
    time: "16 ore fa",
    pub_ts: 1785348902,
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
    time: "4 ore fa",
    pub_ts: 1785394921,
    tags: [],
  },
  {
    id: 18,
    cat: "economia-tech",
    title: "Warsh’s stripped-back Fed communication ‘already backfiring’, say investors",
    summary: "Traders warn lack of guidance on interest rates erodes US central bank’s influence on Treasury market",
    body: "Traders warn lack of guidance on interest rates erodes US central bank’s influence on Treasury market",
    source: "Financial Times",
    url: "https://www.ft.com/content/57aac838-baee-406d-b4ac-c0ffda351aee?syn-25a6b1a6=1",
    time: "49 min fa",
    pub_ts: 1785407066,
    tags: [],
  },
  {
    id: 19,
    cat: "economia-tech",
    title: "Bank of England holds interest rates at 3.75%",
    summary: "Decision comes against backdrop of renewed volatility in energy prices",
    body: "Decision comes against backdrop of renewed volatility in energy prices",
    source: "Financial Times",
    url: "https://www.ft.com/content/9c33426e-d413-4d9b-b429-34dea508195e?syn-25a6b1a6=1",
    time: "2 ore fa",
    pub_ts: 1785402361,
    tags: [],
  },
  {
    id: 20,
    cat: "economia-tech",
    title: "US borrowing costs hit 19-year high as Fed defies inflation fears",
    summary: "Central bank holds rates even as investors worry Iran war will ignite jolt of price growth",
    body: "Central bank holds rates even as investors worry Iran war will ignite jolt of price growth",
    source: "Financial Times",
    url: "https://www.ft.com/content/c4eedbe8-6345-48b6-8d44-5cc5b0bea2c7?syn-25a6b1a6=1",
    time: "2 ore fa",
    pub_ts: 1785402216,
    tags: [],
  },
  {
    id: 21,
    cat: "economia-tech",
    title: "Pakistan’s Fintech Abhi Plans Microfinance Bank IPO This Month",
    summary: "Pakistan’s fintech group Abhi is preparing to launch an initial public offering of its microlender this month, according to its founder, as it seeks to capitalize on the nation’s busiest year for listings.",
    body: "Pakistan’s fintech group Abhi is preparing to launch an initial public offering of its microlender this month, according to its founder, as it seeks to capitalize on the nation’s busiest year for listings.",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/articles/2026-07-30/pakistan-s-fintech-abhi-plans-microfinance-bank-ipo-this-month",
    time: "6 ore fa",
    pub_ts: 1785385099,
    tags: [],
  },
  {
    id: 22,
    cat: "economia-tech",
    title: "Apple’s Earnings Will Test Stock’s Status as the AI Safety Play",
    summary: "Wall Street’s sudden aversion to AI spending has made Apple Inc. this year’s Big Tech stock market star. But the iPhone maker’s earnings after the close Thursday could remind investors of the hurdles it still faces.",
    body: "Wall Street’s sudden aversion to AI spending has made Apple Inc. this year’s Big Tech stock market star. But the iPhone maker’s earnings after the close Thursday could remind investors of the hurdles it still faces.",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/articles/2026-07-30/apple-s-earnings-will-test-stock-s-status-as-the-ai-safety-play",
    time: "2 ore fa",
    pub_ts: 1785401457,
    tags: [],
  },
  {
    id: 23,
    cat: "economia-tech",
    title: "GoTo CEO on 2Q26 Results",
    summary: "Hans Patuwo, CEO of GoTo Group, discusses the Indonesian ride-hailing and food delivery firm's 2Q results, marking a consecutive quarter of net income. He outlines the company’s outlook and addresses its stock price, which has hovered at the lowest level permitted for regular trading under Jakarta exchange rules. He speaks with Haidi Stroud Watts on \"Bloomberg: The Asia Trade\". (Source: Bloomberg)",
    body: "Hans Patuwo, CEO of GoTo Group, discusses the Indonesian ride-hailing and food delivery firm's 2Q results, marking a consecutive quarter of net income. He outlines the company’s outlook and addresses its stock price, which has hovered at the lowest level permitted for regular trading under Jakarta exchange rules. He speaks with Haidi Stroud Watts on \"Bloomberg: The Asia Trade\". (Source: Bloomberg)",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/videos/2026-07-30/goto-ceo-on-2q26-results-video",
    time: "7 ore fa",
    pub_ts: 1785382151,
    tags: [],
  },
];
