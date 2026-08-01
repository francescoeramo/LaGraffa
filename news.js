// Generato automaticamente il 2026-08-01 04:24 UTC da scripts/fetch_news.py
// NON modificare manualmente: viene sovrascritto ogni ora dalla GitHub Action.
var NEWS_TIMESTAMP = 1785558260;

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
    title: "Esplosioni a Kiev, 'siamo sotto attacco missilistico'",
    summary: "L'annuncio del sindaco su Telegram, 'restate nei rifugi'",
    body: "L'annuncio del sindaco su Telegram, 'restate nei rifugi'",
    source: "ANSA",
    url: "https://www.ansa.it/sito/notizie/mondo/europa/2026/08/01/esplosioni-a-kiev-siamo-sotto-attacco-missilistico_82fa3fc8-1c69-46fa-8ad0-78bba5c6353f.html",
    time: "4 ore fa",
    pub_ts: 1785541483,
    tags: [],
  },
  {
    id: 2,
    cat: "politica-italiana",
    title: "Torna la paura ai Campi Flegrei: scossa 4.7, crolli e 21 feriti. Oltre 30 repliche",
    summary: "La più forte degli ultimi 40 anni. Avvertita a Napoli e nel Golfo, Ischia e Procida. Sospesa la circolazione dei treni. Meloni segue l'evolversi della situazione",
    body: "La più forte degli ultimi 40 anni. Avvertita a Napoli e nel Golfo, Ischia e Procida. Sospesa la circolazione dei treni. Meloni segue l'evolversi della situazione",
    source: "ANSA",
    url: "https://www.ansa.it/sito/notizie/cronaca/2026/08/01/torna-la-paura-ai-campi-flegrei-scossa-4.7-crolli-e-21-feriti.-oltre-30-repliche_c40469ed-2529-4076-956e-d61621f42b86.html",
    time: "5 ore fa",
    pub_ts: 1785537486,
    tags: [],
  },
  {
    id: 3,
    cat: "politica-italiana",
    title: "L'Italia blocca Schengen con la Spagna per un mese, tensione Meloni-Sanchez",
    summary: "Gelo con l'Ue. La premier: 'Tuteliamo la sicurezza'. L'ira delle opposizioni. Attenzione del Colle",
    body: "Gelo con l'Ue. La premier: 'Tuteliamo la sicurezza'. L'ira delle opposizioni. Attenzione del Colle",
    source: "ANSA",
    url: "https://www.ansa.it/sito/notizie/politica/2026/07/31/litalia-blocca-schengen-con-la-spagna-per-un-mese-tensione-meloni-sanchez_5561039f-ead8-4f8f-b3a2-6ca7062f84a9.html",
    time: "8 ore fa",
    pub_ts: 1785526608,
    tags: [],
  },
  {
    id: 4,
    cat: "geopolitica",
    title: "Abascal usa la crisis para elevar la presión: “Si el Gobierno no echa a los inmigrantes lo harán los españoles”",
    summary: "Vox desafía al PP al ordenar unilateralmente revisar las ayudas a ONG que atienden a extranjeros en Andalucía, Extremadura, Aragón y Castilla y León",
    body: "Las imágenes de miles de marroquíes entrando ilegalmente en Ceuta a través del paso de El Tarajal, a nado o a pie, han confirmado los más negros augurios de Vox, a juicio de sus dirigentes. La palabra “invasión”, que llevan blandiendo desde hace años como un mantra, no parece tan hiperbólica ante la irrupción en la ciudad española de una avalancha humana equivalente al 60% de su población censada.\n\nAunque se trate de invasores desarmados, muchos menores de edad, que en su inmensa mayoría han regresado a su país tras dejar un saldo de al menos 57 ahogados entre quienes trataban de alcanzar la primera playa española al otro lado de la frontera. Seguir leyendo",
    source: "El Pais",
    url: "https://elpais.com/espana/2026-08-01/abascal-usa-la-crisis-para-elevar-la-presion-si-el-gobierno-no-echa-a-los-inmigrantes-lo-haran-los-espanoles.html",
    time: "54 min fa",
    pub_ts: 1785555001,
    tags: [],
  },
  {
    id: 5,
    cat: "geopolitica",
    title: "Peru's ex-president leaves jail after 15-year jail term for corruption overturned",
    summary: "Ollanta Humala had been convicted of money laundering offences alongside his wife in 2025.",
    body: "Ollanta Humala had been convicted of money laundering offences alongside his wife in 2025.",
    source: "BBC World",
    url: "https://www.bbc.co.uk/news/articles/cx2j9nj88rro?at_medium=RSS&at_campaign=rss",
    time: "2 ore fa",
    pub_ts: 1785550889,
    tags: [],
  },
  {
    id: 6,
    cat: "geopolitica",
    title: "La FIFA acepta la derrota: Gianni Infantino da marcha atrás con su propuesta de privatizar el Mundial",
    summary: "El presidente ha informado que el proyecto no seguirá adelante ante la falta de apoyo de las asociaciones miembro",
    body: "El fútbol le ha ganado a los millones y a los agentes externos y la FIFA ha perdido. Al menos por ahora, su idea de privatizar el Mundial se ha terminado. Gianni Infantino , presidente de la casa madre del fútbol, ha comunicado este sábado por la madrugada desde la sede de la FIFA en Suiza que su propuesta no seguirá adelante. Seguir leyendo",
    source: "El Pais",
    url: "https://elpais.com/deportes/2026-07-31/gianni-infantino-da-marcha-atras-con-su-propuesta-de-privatizar-el-mundial.html",
    time: "4 ore fa",
    pub_ts: 1785542301,
    tags: [],
  },
  {
    id: 7,
    cat: "geopolitica",
    title: "What could happen to Fifa if Uefa boycotts World Cup?",
    summary: "It's been a seismic 48 hours for football after Uefa threatened to boycott the World Cup and Concacaf rejected Gianni Infantino's funding plan - what happens now, and can Fifa's president survive?",
    body: "It's been a seismic 48 hours for football after Uefa threatened to boycott the World Cup and Concacaf rejected Gianni Infantino's funding plan - what happens now, and can Fifa's president survive?",
    source: "BBC World",
    url: "https://www.bbc.co.uk/sport/football/articles/c9984d9x1eyo?at_medium=RSS&at_campaign=rss",
    time: "23 ore fa",
    pub_ts: 1785474857,
    tags: [],
  },
  {
    id: 8,
    cat: "geopolitica",
    title: "Why limited war with the US may suit Iran better than peace",
    summary: "Iran may believe it can control its conflict carefully enough to keep pressure on the US while avoiding an all-out war.",
    body: "Iran may believe it can control its conflict carefully enough to keep pressure on the US while avoiding an all-out war.",
    source: "BBC World",
    url: "https://www.bbc.co.uk/news/articles/c78gnyq3wvdo?at_medium=RSS&at_campaign=rss",
    time: "1 giorno fa",
    pub_ts: 1785432361,
    tags: [],
  },
  {
    id: 9,
    cat: "conflitti",
    title: "Russian missile attack kills three in Ukraine’s Kyiv",
    summary: "Residents trapped as partially collapsed building catches fire after deadly strike on Ukrainian capital.",
    body: "Residents trapped as partially collapsed building catches fire after deadly strike on Ukrainian capital.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/news/2026/8/1/russian-missile-attack-kills-three-in-ukraines-kyiv?traffic_source=rss",
    time: "2 ore fa",
    pub_ts: 1785549960,
    tags: [],
  },
  {
    id: 10,
    cat: "conflitti",
    title: "Israel launches attacks across Gaza one day after Hamas agrees to disarm",
    summary: "Israeli attacks across Gaza have killed at least two Palestinians, hours after Hamas agreed to a draft peace deal.",
    body: "Israeli attacks across Gaza have killed at least two Palestinians, hours after Hamas agreed to a draft peace deal.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/video/newsfeed/2026/8/1/israel-launches-attacks-across-gaza-one-day-after-hamas-agrees-to-disarm?traffic_source=rss",
    time: "3 ore fa",
    pub_ts: 1785545317,
    tags: [],
  },
  {
    id: 11,
    cat: "conflitti",
    title: "Is Israel really ready to withdraw from Gaza?",
    summary: "Netanyahu faces political turmoil over Gaza disarmament plan tied to Israel's potential withdrawal from the enclave.",
    body: "Netanyahu faces political turmoil over Gaza disarmament plan tied to Israel's potential withdrawal from the enclave.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/news/2026/8/1/is-israel-really-ready-to-withdraw-from-gaza?traffic_source=rss",
    time: "1 ora fa",
    pub_ts: 1785554512,
    tags: [],
  },
  {
    id: 12,
    cat: "ai",
    title: "Samsung expects memory shortage to worsen through 2027 and last until 2028",
    summary: "AI data center demand is fueling a multi-year chip shortage, pushing up component costs and retail device prices.",
    body: "AI data center demand is fueling a multi-year chip shortage, pushing up component costs and retail device prices.",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/31/samsung-expects-memory-shortage-to-worsen-through-2027-and-last-until-2028/",
    time: "12 ore fa",
    pub_ts: 1785512278,
    tags: [],
  },
  {
    id: 13,
    cat: "ai",
    title: "Anthropic says its own AI models breached three companies during security tests",
    summary: "After OpenAI's models broke into Hugging Face, Anthropic checked its own history and found three similar incidents.",
    body: "After OpenAI's models broke into Hugging Face, Anthropic checked its own history and found three similar incidents.",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/30/anthropic-says-its-own-ai-models-breached-three-companies-during-security-tests/",
    time: "1 giorno fa",
    pub_ts: 1785460014,
    tags: [],
  },
  {
    id: 14,
    cat: "ai",
    title: "OpenAI reportedly finds evidence that more of its agents ran amok",
    summary: "OpenAI has reportedly found evidence of additional agent misbehavior as it looks into the incident that occurred with Hugging Face.",
    body: "OpenAI has reportedly found evidence of additional agent misbehavior as it looks into the incident that occurred with Hugging Face.",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/31/openai-reportedly-finds-evidence-that-more-of-its-agents-ran-amok/",
    time: "5 ore fa",
    pub_ts: 1785538046,
    tags: [],
  },
  {
    id: 15,
    cat: "ai",
    title: "The ban on robot vacuums won’t make them safer, only worse",
    summary: "No other gadget knows as much about your home as a robot vacuum. They map your space, learn your routines, and many now carry a camera and microphone into every room in your house. As AI gives them a better understanding of what they see, the privacy and security risks these autonomous robots pose are",
    body: "All future robot vacuums manufactured outside the USA (i.e., all of them) have been banned by the FCC. | Photo by Jennifer Pattison Tuohy / The Verge No other gadget knows as much about your home as a robot vacuum . They map your space, learn your routines, and many now carry a camera and microphone into every room in your house. As AI gives them a better understanding of what they see, the privacy and security risks these autonomous robots pose are only growing.\n\nThat's why greater scrutiny makes sense, but the ban on foreign-made mobile robots issued by the Federal Communications Commission earlier this week - implemented to address \"unacceptable risks to the national security of the United States or the safety and security of United States persons\" - doesn't actually judge products by h …",
    source: "The Verge",
    url: "https://www.theverge.com/tech/973738/robot-vacuum-ban-fewer-choices-higher-prices",
    time: "10 ore fa",
    pub_ts: 1785519049,
    tags: [],
  },
  {
    id: 16,
    cat: "economia-tech",
    title: "Stellantis, il mercato italiano guida la ripresa, corre il marchio Fiat",
    summary: "Sul mercato domestico, un quarto delle immatricolazioni in più registrate in Europa nel primo semestre dell’anno - I nuovi modelli Fiat Grande Panda e Citroen C3 trainano i volumi",
    body: "Sul mercato domestico, un quarto delle immatricolazioni in più registrate in Europa nel primo semestre dell’anno - I nuovi modelli Fiat Grande Panda e Citroen C3 trainano i volumi",
    source: "Il Sole 24 Ore",
    url: "https://www.ilsole24ore.com/art/stellantis-mercato-italiano-guida-ripresa-corre-marchio-fiat-AJ1T7DY",
    time: "22 min fa",
    pub_ts: 1785556921,
    tags: [],
  },
  {
    id: 17,
    cat: "economia-tech",
    title: "Commercio di legname, le sfide di un sistema che vale 3,3 miliardi",
    summary: "Stefano Corà eletto alla presidenza di Fedecomlegno di FederlegnoArredo",
    body: "Stefano Corà eletto alla presidenza di Fedecomlegno di FederlegnoArredo",
    source: "Il Sole 24 Ore",
    url: "https://www.ilsole24ore.com/art/commercio-legname-sfide-un-sistema-che-vale-33-miliardi-AJpd5ea",
    time: "22 ore fa",
    pub_ts: 1785477721,
    tags: [],
  },
  {
    id: 18,
    cat: "economia-tech",
    title: "Serial Innovation in Fintech | Masters in Business with Som Seif",
    summary: "Barry sits down with Som Seif, Founder and CEO at Purpose Unlimited. They discuss Som's journey from engineering to investment banking. They also discuss his early push into ETFs in Canada and the creation of the first bitcoin ETF. Finally, Som discusses his history as a serial entrepreneur and the importance of endurance when building business in today's ever changing markets. (Source: Bloomberg)",
    body: "Barry sits down with Som Seif, Founder and CEO at Purpose Unlimited. They discuss Som's journey from engineering to investment banking. They also discuss his early push into ETFs in Canada and the creation of the first bitcoin ETF. Finally, Som discusses his history as a serial entrepreneur and the importance of endurance when building business in today's ever changing markets. (Source: Bloomberg)",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/videos/2026-07-31/masters-in-business-with-som-seif-video",
    time: "7 ore fa",
    pub_ts: 1785532469,
    tags: [],
  },
  {
    id: 19,
    cat: "economia-tech",
    title: "Som Seif on Prioritizing Customers When Building Companies",
    summary: "Barry sits down with Som Seif, Founder and CEO at Purpose Unlimited. They discuss Som's journey from engineering to investment banking. They also discuss his early push into ETFs in Canada and the creation of the first bitcoin ETF. Finally, Som discusses his history as a serial entrepreneur and the importance of endurance when building business in today's ever changing markets. (Source: Bloomberg)",
    body: "Barry sits down with Som Seif, Founder and CEO at Purpose Unlimited. They discuss Som's journey from engineering to investment banking. They also discuss his early push into ETFs in Canada and the creation of the first bitcoin ETF. Finally, Som discusses his history as a serial entrepreneur and the importance of endurance when building business in today's ever changing markets. (Source: Bloomberg)",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/videos/2026-07-31/som-seif-on-prioritizing-customers-video",
    time: "7 ore fa",
    pub_ts: 1785531658,
    tags: [],
  },
  {
    id: 20,
    cat: "economia-tech",
    title: "Fed dissenters warn of challenges in taming inflation",
    summary: "Three rate-setters rebelled against US central bank’s majority decision to hold rates steady this week",
    body: "Three rate-setters rebelled against US central bank’s majority decision to hold rates steady this week",
    source: "Financial Times",
    url: "https://www.ft.com/content/395afe31-3c86-4911-af05-54ca5aa2d41b?syn-25a6b1a6=1",
    time: "14 ore fa",
    pub_ts: 1785506477,
    tags: [],
  },
  {
    id: 21,
    cat: "economia-tech",
    title: "Bond sell-off sent warning on Fed’s credibility, says top central bank official",
    summary: "Alberto Musalem says he supported dissenters’ calls for a quarter-point interest rate rise",
    body: "Alberto Musalem says he supported dissenters’ calls for a quarter-point interest rate rise",
    source: "Financial Times",
    url: "https://www.ft.com/content/2735a2b5-db87-4a7f-9484-20c1e429267d?syn-25a6b1a6=1",
    time: "5 ore fa",
    pub_ts: 1785539423,
    tags: [],
  },
  {
    id: 22,
    cat: "economia-tech",
    title: "US Treasury undertakes historic intervention in yen market",
    summary: "New York Fed sells euros to buy yen following recent speculation that Tokyo intervened to support Japan’s currency",
    body: "New York Fed sells euros to buy yen following recent speculation that Tokyo intervened to support Japan’s currency",
    source: "Financial Times",
    url: "https://www.ft.com/content/0f9b2fe7-bde4-4f5f-b49e-93ccb5da9ea8?syn-25a6b1a6=1",
    time: "5 ore fa",
    pub_ts: 1785539036,
    tags: [],
  },
  {
    id: 23,
    cat: "economia-tech",
    title: "US Stocks Rally To End Turbulent Month | The Close 7/31/2026",
    summary: "Bloomberg Television brings you the latest news and analysis leading up to the final minutes and seconds before and after the closing bell on Wall Street. Today's guests are UBS Head of US Rates Strategy Phoebe White, Glide Identity Founder & CEO Eran Haggiag & Verizon Business Senior VP, Chief Product Officer Scott Lawrence, Rosenblatt Securities Senior Research Analyst & Managing Director…",
    body: "Bloomberg Television brings you the latest news and analysis leading up to the final minutes and seconds before and after the closing bell on Wall Street. Today's guests are UBS Head of US Rates Strategy Phoebe White, Glide Identity Founder & CEO Eran Haggiag & Verizon Business Senior VP, Chief Product Officer Scott Lawrence, Rosenblatt Securities Senior Research Analyst & Managing Director Barton Crockett, Chevron CFO Eimear Bonner, Wells Fargo Investment Institute Global Asset Allocation Strategist Veronica Willis, First Founder & CEO Libby Leffler, Illumina CEO Jacob Thaysen, Most Valuable Promotions Co-Founders Jake Paul & Nakisa Bidarian, & Most Valuable Promotions CEO & Board Member John Martin, & Serhant CEO & Founder Ryan Serhant.\n\n(Source: Bloomberg)",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/videos/2026-07-31/the-close-7-31-2026-video",
    time: "6 ore fa",
    pub_ts: 1785535730,
    tags: [],
  },
];
