// Generato automaticamente il 2026-07-27 08:37 UTC da scripts/fetch_news.py
// NON modificare manualmente: viene sovrascritto ogni ora dalla GitHub Action.
var NEWS_TIMESTAMP = 1785141444;

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
    title: "In arrivo l'intervento ponte sui carburanti, oggi il consiglio dei ministri",
    summary: "Successivamente il governo dovrebbe fare ricorso all'accisa mobile",
    body: "Successivamente il governo dovrebbe fare ricorso all'accisa mobile",
    source: "ANSA",
    url: "https://www.ansa.it/sito/notizie/economia/2026/07/27/in-arrivo-lintervento-ponte-sui-carburanti-oggi-il-consiglio-dei-ministri_9c8411bb-583f-407e-a372-27214add207a.html",
    time: "17 min fa",
    pub_ts: 1785140367,
    tags: [],
  },
  {
    id: 2,
    cat: "politica-italiana",
    title: "A Bologna il corteo per Fakir, il sindaco Lepore sotto scorta",
    summary: "Torna il pugno chiuso di Floyd, in un frame della bodycam la ferita sulla nuca",
    body: "Torna il pugno chiuso di Floyd, in un frame della bodycam la ferita sulla nuca",
    source: "ANSA",
    url: "https://www.ansa.it/sito/notizie/cronaca/2026/07/26/minacce-social-assegnata-la-scorta-al-sindaco-di-bologna-lepore-_bdd19b9e-2c31-450b-8c34-ab215277a2c7.html",
    time: "12 ore fa",
    pub_ts: 1785094949,
    tags: [],
  },
  {
    id: 3,
    cat: "geopolitica",
    title: "PM pledges continued support for Ukraine ahead of Zelensky visit",
    summary: "The Ukrainian president will be Andy Burnham's first international visitor since taking office.",
    body: "The Ukrainian president will be Andy Burnham's first international visitor since taking office.",
    source: "BBC World",
    url: "https://www.bbc.co.uk/news/articles/cy8me5vyjg2o?at_medium=RSS&at_campaign=rss",
    time: "1 ora fa",
    pub_ts: 1785134882,
    tags: [],
  },
  {
    id: 4,
    cat: "geopolitica",
    title: "'This is just the start': India's Gen Z protesters force out a minister, but what next?",
    summary: "The education minister's resignation, a rare setback for the Modi government, brings hope to many young protesters that their voices will be heard.",
    body: "The education minister's resignation, a rare setback for the Modi government, brings hope to many young protesters that their voices will be heard.",
    source: "BBC World",
    url: "https://www.bbc.co.uk/news/articles/c8dng1v72lno?at_medium=RSS&at_campaign=rss",
    time: "2 ore fa",
    pub_ts: 1785131962,
    tags: [],
  },
  {
    id: 5,
    cat: "geopolitica",
    title: "Watch: Scaffolding tumbles from Hong Kong building as Typhoon Noul makes landfall",
    summary: "Typhoon Noul is the strongest to make landfall in China so far this year, according to state media.",
    body: "Typhoon Noul is the strongest to make landfall in China so far this year, according to state media.",
    source: "BBC World",
    url: "https://www.bbc.co.uk/news/videos/ckg9ewekpk1o?at_medium=RSS&at_campaign=rss",
    time: "6 ore fa",
    pub_ts: 1785117270,
    tags: [],
  },
  {
    id: 6,
    cat: "conflitti",
    title: "Iran warns Ukraine of retaliation after deadly Caspian Sea strike",
    summary: "Abbas Araghchi says the Ukrainian attack on the Iranian vessel in the Caspian Sea 'cannot go unanswered'.",
    body: "Abbas Araghchi says the Ukrainian attack on the Iranian vessel in the Caspian Sea 'cannot go unanswered'.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/news/2026/7/27/iran-warns-ukraine-of-retaliation-after-deadly-caspian-sea-strike?traffic_source=rss",
    time: "2 ore fa",
    pub_ts: 1785132901,
    tags: [],
  },
  {
    id: 7,
    cat: "conflitti",
    title: "Iran war live: Tehran halts retaliatory strikes after pause in US attacks",
    summary: "The US has paused its two-week bombing campaign against Iran, prompting Tehran to suspend its retaliatory attacks.",
    body: "The US has paused its two-week bombing campaign against Iran, prompting Tehran to suspend its retaliatory attacks.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/news/liveblog/2026/7/27/iran-war-live-iran-halts-retaliatory-strikes-after-pause-in-us-attacks?traffic_source=rss",
    time: "8 ore fa",
    pub_ts: 1785110400,
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
    time: "5 ore fa",
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
    time: "11 ore fa",
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
    time: "13 ore fa",
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
    time: "16 ore fa",
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
    time: "1 giorno fa",
    pub_ts: 1785049200,
    tags: [],
  },
  {
    id: 14,
    cat: "economia-tech",
    title: "Chinese Biotech Overtakes AI as Emerging-Market Growth Trade",
    summary: "As the artificial-intelligence rally sputters in emerging markets, investors searching for high-growth alternatives are turning to Chinese biotech.",
    body: "As the artificial-intelligence rally sputters in emerging markets, investors searching for high-growth alternatives are turning to Chinese biotech.",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/articles/2026-07-26/chinese-biotech-overtakes-ai-as-emerging-market-growth-trade",
    time: "8 ore fa",
    pub_ts: 1785109863,
    tags: [],
  },
  {
    id: 15,
    cat: "economia-tech",
    title: "Chinese chip champion CXMT soars 466% in market debut",
    summary: "Tech group briefly becomes China’s most valuable listed company in mainland’s biggest IPO since 2010",
    body: "Tech group briefly becomes China’s most valuable listed company in mainland’s biggest IPO since 2010",
    source: "Financial Times",
    url: "https://www.ft.com/content/8e82e939-908b-42bf-a314-0bb02a3f1b07?syn-25a6b1a6=1",
    time: "1 ora fa",
    pub_ts: 1785137355,
    tags: [],
  },
  {
    id: 16,
    cat: "economia-tech",
    title: "Shein slumps to loss ahead of planned Hong Kong listing",
    summary: "US and EU trade tensions hit fast-fashion retailer’s profits",
    body: "US and EU trade tensions hit fast-fashion retailer’s profits",
    source: "Financial Times",
    url: "https://www.ft.com/content/9ed6a6f4-c6a6-4027-9c54-19bffcd88913?syn-25a6b1a6=1",
    time: "3 ore fa",
    pub_ts: 1785129970,
    tags: [],
  },
  {
    id: 17,
    cat: "economia-tech",
    title: "SoftBank’s $40 Billion Loan for OpenAI Stake Gets 21 New Lenders",
    summary: "SoftBank Group Corp.’s $40 billion bridge loan for its investment in US tech giant OpenAI has attracted a new group of 21 lenders in a broader syndication phase, according to people familiar with the matter.",
    body: "SoftBank Group Corp.’s $40 billion bridge loan for its investment in US tech giant OpenAI has attracted a new group of 21 lenders in a broader syndication phase, according to people familiar with the matter.",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/articles/2026-07-27/softbank-s-40-billion-loan-for-openai-stake-gets-21-new-lenders",
    time: "4 ore fa",
    pub_ts: 1785126637,
    tags: [],
  },
  {
    id: 18,
    cat: "economia-tech",
    title: "CXMT Can Rally More Than 1,200% on Market Share Win, Nomura Says",
    summary: "China’s memory-chip bellwether CXMT Corp. can extend its blockbuster stock market debut to rally 1,239% from its initial public offering price as it wins market share over time, according to Nomura Holdings Inc.",
    body: "China’s memory-chip bellwether CXMT Corp. can extend its blockbuster stock market debut to rally 1,239% from its initial public offering price as it wins market share over time, according to Nomura Holdings Inc.",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/articles/2026-07-27/cxmt-can-rally-more-than-1-200-on-market-share-win-nomura-says",
    time: "4 ore fa",
    pub_ts: 1785125690,
    tags: [],
  },
  {
    id: 19,
    cat: "economia-tech",
    title: "Beware holographic markets",
    summary: "Tokenised securities are mirror images of the real thing but pose new risks",
    body: "Tokenised securities are mirror images of the real thing but pose new risks",
    source: "Financial Times",
    url: "https://www.ft.com/content/e76f5ce3-3bd6-4793-87d9-071ecd75f0bb?syn-25a6b1a6=1",
    time: "4 ore fa",
    pub_ts: 1785124814,
    tags: [],
  },
];
