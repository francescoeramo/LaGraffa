// Generato automaticamente il 2026-07-27 04:42 UTC da scripts/fetch_news.py
// NON modificare manualmente: viene sovrascritto ogni ora dalla GitHub Action.
var NEWS_TIMESTAMP = 1785127299;

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
    title: "A Bologna il corteo per Fakir, il sindaco Lepore sotto scorta",
    summary: "Torna il pugno chiuso di Floyd, in un frame della bodycam la ferita sulla nuca",
    body: "Torna il pugno chiuso di Floyd, in un frame della bodycam la ferita sulla nuca",
    source: "ANSA",
    url: "https://www.ansa.it/sito/notizie/cronaca/2026/07/26/minacce-social-assegnata-la-scorta-al-sindaco-di-bologna-lepore-_bdd19b9e-2c31-450b-8c34-ab215277a2c7.html",
    time: "8 ore fa",
    pub_ts: 1785094949,
    tags: [],
  },
  {
    id: 2,
    cat: "politica-italiana",
    title: "Katy Perry contro la Casa Bianca: 'Non usate la mia musica per celebrare la guerra'",
    summary: "Il governo americano ha utilizzato 'Firework' in un video su attacchi militari",
    body: "Il governo americano ha utilizzato 'Firework' in un video su attacchi militari",
    source: "ANSA",
    url: "https://www.ansa.it/sito/notizie/mondo/nordamerica/2026/07/26/katy-perry-contro-la-casa-bianca-non-usate-la-mia-musica-per_356a2fc2-a432-448d-9878-1681d2b0fcd2.html",
    time: "19 ore fa",
    pub_ts: 1785056831,
    tags: [],
  },
  {
    id: 3,
    cat: "geopolitica",
    title: "Watch: Scaffolding ripped from Hong Kong building as Typhoon Noul makes landfall",
    summary: "Typhoon Noul is the strongest to make landfall in China so far this year, according to state media.",
    body: "Typhoon Noul is the strongest to make landfall in China so far this year, according to state media.",
    source: "BBC World",
    url: "https://www.bbc.co.uk/news/videos/ckg9ewekpk1o?at_medium=RSS&at_campaign=rss",
    time: "2 ore fa",
    pub_ts: 1785117270,
    tags: [],
  },
  {
    id: 4,
    cat: "geopolitica",
    title: "Argentinian leader calls Brazilian president a 'thief' and a 'convict'",
    summary: "Javier Milei made the comments while in Brazil at a rally to launch the campaign of right-wing presidential candidate Flávio Bolsonaro.",
    body: "Javier Milei made the comments while in Brazil at a rally to launch the campaign of right-wing presidential candidate Flávio Bolsonaro.",
    source: "BBC World",
    url: "https://www.bbc.co.uk/news/articles/cvgx91vdedno?at_medium=RSS&at_campaign=rss",
    time: "3 ore fa",
    pub_ts: 1785116151,
    tags: [],
  },
  {
    id: 5,
    cat: "geopolitica",
    title: "PM pledges continued support for Ukraine ahead of Zelensky visit",
    summary: "The Ukrainian president will be Andy Burnham's first international visitor since taking office.",
    body: "The Ukrainian president will be Andy Burnham's first international visitor since taking office.",
    source: "BBC World",
    url: "https://www.bbc.co.uk/news/articles/cy8me5vyjg2o?at_medium=RSS&at_campaign=rss",
    time: "7 ore fa",
    pub_ts: 1785101420,
    tags: [],
  },
  {
    id: 6,
    cat: "conflitti",
    title: "Iran war live: Tehran halts retaliatory strikes after pause in US attacks",
    summary: "The US has paused its two-week bombing campaign against Iran, prompting Tehran to suspend its retaliatory attacks.",
    body: "The US has paused its two-week bombing campaign against Iran, prompting Tehran to suspend its retaliatory attacks.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/news/liveblog/2026/7/27/iran-war-live-iran-halts-retaliatory-strikes-after-pause-in-us-attacks?traffic_source=rss",
    time: "4 ore fa",
    pub_ts: 1785110400,
    tags: [],
  },
  {
    id: 7,
    cat: "conflitti",
    title: "Israeli government nods to international stabilisation force in Gaza",
    summary: "The ISF, to be staffed by 'friendly countries', will operate in areas outside of Israel's military control.",
    body: "The ISF, to be staffed by 'friendly countries', will operate in areas outside of Israel's military control.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/news/2026/7/26/israeli-government-nods-to-international-stabilisation-force-in-gaza?traffic_source=rss",
    time: "7 ore fa",
    pub_ts: 1785100207,
    tags: [],
  },
  {
    id: 8,
    cat: "conflitti",
    title: "Why Mali’s northern conflict has entered a dangerous new phase",
    summary: "A separatist–al-Qaeda alliance has shifted the balance of power in northern Mali and complicated efforts to end the war.",
    body: "A separatist–al-Qaeda alliance has shifted the balance of power in northern Mali and complicated efforts to end the war.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/news/2026/7/27/why-malis-northern-conflict-has-entered-a-dangerous-new-phase?traffic_source=rss",
    time: "1 ora fa",
    pub_ts: 1785120585,
    tags: [],
  },
  {
    id: 9,
    cat: "ai",
    title: "Can Apple make smart glasses that aren’t a constant privacy threat?",
    summary: "As Apple prepares to launch its first smart glasses, the company may also be wrestling with how to address consumer privacy concerns.",
    body: "As Apple prepares to launch its first smart glasses, the company may also be wrestling with how to address consumer privacy concerns.",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/26/can-apple-make-smart-glasses-that-arent-a-constant-privacy-threat/",
    time: "7 ore fa",
    pub_ts: 1785100004,
    tags: [],
  },
  {
    id: 10,
    cat: "ai",
    title: "Apple is banking on privacy to set its smart glasses apart",
    summary: "According to Mark Gurman, Apple is planning to reveal its first smart glasses at WWDC next June, with an expectation that they'll launch by the end of 2027. Part of the hold-up may be around the company's efforts to get its privacy features and messaging in order. Smart glasses in general, and Meta's in particular,",
    body: "Meta’s AI glasses have been the focus of controversy. | Photo: Amelia Holowaty Krales / The Verge According to Mark Gurman , Apple is planning to reveal its first smart glasses at WWDC next June, with an expectation that they'll launch by the end of 2027. Part of the hold-up may be around the company's efforts to get its privacy features and messaging in order. Smart glasses in general, and Meta's in particular, have ignited controversy over their ability to stealthily capture photos and videos.\n\nAs Gurman points out: The company has spent more than a decade making privacy one of its defining product messages. Simply entering the same category as Meta risks undermining that reputation, regardless of how Apple's approach differs. Apple …",
    source: "The Verge",
    url: "https://www.theverge.com/tech/971101/apple-smart-glasses-privacy",
    time: "9 ore fa",
    pub_ts: 1785094598,
    tags: [],
  },
  {
    id: 11,
    cat: "ai",
    title: "Hugging Face CEO calls for ‘radical transparency’ after ‘unprecedented’ OpenAI hack",
    summary: "\"The first autonomous agent cyberattack is an unprecedented event. It deserves an unprecedented response!\"",
    body: "\"The first autonomous agent cyberattack is an unprecedented event. It deserves an unprecedented response!\"",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/26/hugging-face-ceo-calls-for-radical-transparency-after-unprecedented-openai-hack/",
    time: "12 ore fa",
    pub_ts: 1785083593,
    tags: [],
  },
  {
    id: 12,
    cat: "ai",
    title: "Elon Musk’s Boring Company reportedly raising funding at a $20 billion valuation",
    summary: "Elon Musk's tunneling startup is reportedly in talks for a major new funding round.",
    body: "Elon Musk's tunneling startup is reportedly in talks for a major new funding round.",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/25/elon-musks-boring-company-reportedly-raising-funding-at-a-20-billion-valuation/",
    time: "1 giorno fa",
    pub_ts: 1785007412,
    tags: [],
  },
  {
    id: 13,
    cat: "economia-tech",
    title: "La filiera del tessile di Como si unisce per comprare energia rinnovabile a costi ridotti",
    summary: "L’acquisto collettivo permetterà di avere prezzi migliori a partire dal 2027",
    body: "L’acquisto collettivo permetterà di avere prezzi migliori a partire dal 2027",
    source: "Il Sole 24 Ore",
    url: "https://www.ilsole24ore.com/art/la-filiera-tessile-como-si-unisce-comprare-energia-rinnovabile-costi-ridotti-AJuNwlV",
    time: "21 ore fa",
    pub_ts: 1785049200,
    tags: [],
  },
  {
    id: 14,
    cat: "economia-tech",
    title: "Chinese chipmaker CXMT soars almost 500% in market debut",
    summary: "Mainland’s biggest IPO since 2010 reflects booming demand for AI memory semiconductors",
    body: "Mainland’s biggest IPO since 2010 reflects booming demand for AI memory semiconductors",
    source: "Financial Times",
    url: "https://www.ft.com/content/8e82e939-908b-42bf-a314-0bb02a3f1b07?syn-25a6b1a6=1",
    time: "1 ora fa",
    pub_ts: 1785121707,
    tags: [],
  },
  {
    id: 15,
    cat: "economia-tech",
    title: "Chinese Biotech Overtakes AI as Emerging-Market Growth Trade",
    summary: "As the artificial-intelligence rally sputters in emerging markets, investors searching for high-growth alternatives are turning to Chinese biotech.",
    body: "As the artificial-intelligence rally sputters in emerging markets, investors searching for high-growth alternatives are turning to Chinese biotech.",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/articles/2026-07-26/chinese-biotech-overtakes-ai-as-emerging-market-growth-trade",
    time: "4 ore fa",
    pub_ts: 1785109863,
    tags: [],
  },
  {
    id: 16,
    cat: "economia-tech",
    title: "SoftBank’s $40 Billion Loan for OpenAI Stake Gets 21 New Lenders",
    summary: "SoftBank Group Corp.’s $40 billion bridge loan for its investment in US tech giant OpenAI has attracted a new group of 21 lenders in a broader syndication phase, according to people familiar with the matter.",
    body: "SoftBank Group Corp.’s $40 billion bridge loan for its investment in US tech giant OpenAI has attracted a new group of 21 lenders in a broader syndication phase, according to people familiar with the matter.",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/articles/2026-07-27/softbank-s-40-billion-loan-for-openai-stake-gets-21-new-lenders",
    time: "11 min fa",
    pub_ts: 1785126637,
    tags: [],
  },
  {
    id: 17,
    cat: "economia-tech",
    title: "CXMT Can Rally More Than 1,200% on Market Share Win, Nomura Says",
    summary: "China’s memory-chip bellwether CXMT Corp. can extend its blockbuster stock market debut to rally 1,239% from its initial public offering price as it wins market share over time, according to Nomura Holdings Inc.",
    body: "China’s memory-chip bellwether CXMT Corp. can extend its blockbuster stock market debut to rally 1,239% from its initial public offering price as it wins market share over time, according to Nomura Holdings Inc.",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/articles/2026-07-27/cxmt-can-rally-more-than-1-200-on-market-share-win-nomura-says",
    time: "27 min fa",
    pub_ts: 1785125690,
    tags: [],
  },
  {
    id: 18,
    cat: "economia-tech",
    title: "Beware holographic markets",
    summary: "Tokenised securities are mirror images of the real thing but pose new risks",
    body: "Tokenised securities are mirror images of the real thing but pose new risks",
    source: "Financial Times",
    url: "https://www.ft.com/content/e76f5ce3-3bd6-4793-87d9-071ecd75f0bb?syn-25a6b1a6=1",
    time: "41 min fa",
    pub_ts: 1785124814,
    tags: [],
  },
];
