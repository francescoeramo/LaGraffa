// Generato automaticamente il 2026-08-01 12:05 UTC da scripts/fetch_news.py
// NON modificare manualmente: viene sovrascritto ogni ora dalla GitHub Action.
var NEWS_TIMESTAMP = 1785585911;

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
    title: "Sanchez: 'Stop a Schengen per ignoranza o interessi politici'. Meloni e altri 21 leader chiedono una riunione urgente, ok dell'Ue",
    summary: "Sale a 84 il bilancio delle vittime in mare al largo di Ceuta. Assaltato il centro di accoglienza e ferito un migrante",
    body: "Sale a 84 il bilancio delle vittime in mare al largo di Ceuta. Assaltato il centro di accoglienza e ferito un migrante",
    source: "ANSA",
    url: "https://www.ansa.it/sito/notizie/mondo/2026/08/01/sanchez-stop-a-schengen-per-ignoranza-o-interessi-politici.-meloni-e-altri-21-leader_d21f320a-6855-4da1-a572-33b9a2c63095.html",
    time: "14 min fa",
    pub_ts: 1785585050,
    tags: [],
  },
  {
    id: 2,
    cat: "politica-italiana",
    title: "Ucraina, esplosioni a Kiev: 'Almeno 9 morti e 23 feriti'",
    summary: "L'annuncio del sindaco su Telegram: 'Restate nei rifugi'. Raid ucraini a Sebastopoli e Zaporizhzhia",
    body: "L'annuncio del sindaco su Telegram: 'Restate nei rifugi'. Raid ucraini a Sebastopoli e Zaporizhzhia",
    source: "ANSA",
    url: "https://www.ansa.it/sito/notizie/mondo/europa/2026/08/01/ucraina-esplosioni-a-kiev-almeno-9-morti-e-23-feriti_82fa3fc8-1c69-46fa-8ad0-78bba5c6353f.html",
    time: "1 ora fa",
    pub_ts: 1785580223,
    tags: [],
  },
  {
    id: 3,
    cat: "politica-italiana",
    title: "Stop Schengen : controlli a Fiumicino, Malpensa e Linate su tutte le rotte in atterraggio dalla Spagna",
    summary: "Verifiche sui passeggeri dopo la decisione del governo",
    body: "Verifiche sui passeggeri dopo la decisione del governo",
    source: "ANSA",
    url: "https://www.ansa.it/sito/notizie/cronaca/2026/08/01/stop-schengen-con-spagna-controlli-a-fiumicino-malpensa-e-linate_401ae5b5-f22e-4848-9dbe-b5f410f2ebdd.html",
    time: "2 ore fa",
    pub_ts: 1785578573,
    tags: [],
  },
  {
    id: 4,
    cat: "geopolitica",
    title: "Infantino on the brink? Who might replace him if he goes?",
    summary: "Fifa president Gianni Infantino is in the eye of a storm after scrapping his attempt to sell stakes in the World Cup. If he goes, who comes in?",
    body: "Fifa president Gianni Infantino is in the eye of a storm after scrapping his attempt to sell stakes in the World Cup. If he goes, who comes in?",
    source: "BBC World",
    url: "https://www.bbc.co.uk/sport/football/articles/c998m4ve0rpo?at_medium=RSS&at_campaign=rss",
    time: "2 ore fa",
    pub_ts: 1785578563,
    tags: [],
  },
  {
    id: 5,
    cat: "geopolitica",
    title: "Uefa has 'lost confidence' in Infantino's Fifa leadership",
    summary: "The governing body of European football says Fifa president Gianni Infantino has \"failed to deliver\" on promises he made when elected 10 years ago.",
    body: "The governing body of European football says Fifa president Gianni Infantino has \"failed to deliver\" on promises he made when elected 10 years ago.",
    source: "BBC World",
    url: "https://www.bbc.co.uk/sport/football/articles/c04kr2nv3v3o?at_medium=RSS&at_campaign=rss",
    time: "2 ore fa",
    pub_ts: 1785577865,
    tags: [],
  },
  {
    id: 6,
    cat: "geopolitica",
    title: "Peru's ex-president leaves jail after 15-year jail term for corruption overturned",
    summary: "Ollanta Humala had been convicted of money laundering offences alongside his wife in 2025.",
    body: "Ollanta Humala had been convicted of money laundering offences alongside his wife in 2025.",
    source: "BBC World",
    url: "https://www.bbc.co.uk/news/articles/cx2j9nj88rro?at_medium=RSS&at_campaign=rss",
    time: "9 ore fa",
    pub_ts: 1785550889,
    tags: [],
  },
  {
    id: 7,
    cat: "geopolitica",
    title: "La FIFA acepta la derrota: Gianni Infantino da marcha atrás con su propuesta de privatizar el Mundial",
    summary: "El presidente ha informado que el proyecto no seguirá adelante ante la falta de apoyo de las asociaciones miembro",
    body: "El fútbol le ha ganado a los millones y a los agentes externos y la FIFA ha perdido. Al menos por ahora, su idea de privatizar el Mundial se ha terminado. Gianni Infantino , presidente de la casa madre del fútbol, ha comunicado este sábado por la madrugada desde la sede de la FIFA en Suiza que su propuesta no seguirá adelante. Seguir leyendo",
    source: "El Pais",
    url: "https://elpais.com/deportes/2026-07-31/gianni-infantino-da-marcha-atras-con-su-propuesta-de-privatizar-el-mundial.html",
    time: "12 ore fa",
    pub_ts: 1785542301,
    tags: [],
  },
  {
    id: 8,
    cat: "conflitti",
    title: "Iran: The Making of a War",
    summary: "From coup to conflict - how decades of rivalries and miscalculations have shaped one of today’s most dangerous wars.",
    body: "From coup to conflict - how decades of rivalries and miscalculations have shaped one of today’s most dangerous wars.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/video/featured-documentaries/2026/8/1/iran-the-making-of-a-war?traffic_source=rss",
    time: "1 ora fa",
    pub_ts: 1785580200,
    tags: [],
  },
  {
    id: 9,
    cat: "conflitti",
    title: "Israel launches attacks across Gaza one day after Hamas agrees to disarm",
    summary: "Israeli attacks across Gaza have killed at least two Palestinians, hours after Hamas agreed to a draft peace deal.",
    body: "Israeli attacks across Gaza have killed at least two Palestinians, hours after Hamas agreed to a draft peace deal.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/video/newsfeed/2026/8/1/israel-launches-attacks-across-gaza-one-day-after-hamas-agrees-to-disarm?traffic_source=rss",
    time: "11 ore fa",
    pub_ts: 1785545317,
    tags: [],
  },
  {
    id: 10,
    cat: "conflitti",
    title: "Trump mimics sound of Patriot missile interceptions",
    summary: "US President Donald Trump mimicked missile interceptions as he described the US military shooting down Iranian missiles.",
    body: "US President Donald Trump mimicked missile interceptions as he described the US military shooting down Iranian missiles.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/video/newsfeed/2026/8/1/aje-onl-nf_01-08-trump-jordan-missiles-clip-010826?traffic_source=rss",
    time: "43 min fa",
    pub_ts: 1785583292,
    tags: [],
  },
  {
    id: 11,
    cat: "ai",
    title: "Samsung expects memory shortage to worsen through 2027 and last until 2028",
    summary: "AI data center demand is fueling a multi-year chip shortage, pushing up component costs and retail device prices.",
    body: "AI data center demand is fueling a multi-year chip shortage, pushing up component costs and retail device prices.",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/31/samsung-expects-memory-shortage-to-worsen-through-2027-and-last-until-2028/",
    time: "20 ore fa",
    pub_ts: 1785512278,
    tags: [],
  },
  {
    id: 12,
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
    id: 13,
    cat: "ai",
    title: "OpenAI reportedly finds evidence that more of its agents ran amok",
    summary: "OpenAI has reportedly found evidence of additional agent misbehavior as it looks into the incident that occurred with Hugging Face.",
    body: "OpenAI has reportedly found evidence of additional agent misbehavior as it looks into the incident that occurred with Hugging Face.",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/31/openai-reportedly-finds-evidence-that-more-of-its-agents-ran-amok/",
    time: "13 ore fa",
    pub_ts: 1785538046,
    tags: [],
  },
  {
    id: 14,
    cat: "ai",
    title: "The ban on robot vacuums won’t make them safer, only worse",
    summary: "No other gadget knows as much about your home as a robot vacuum. They map your space, learn your routines, and many now carry a camera and microphone into every room in your house. As AI gives them a better understanding of what they see, the privacy and security risks these autonomous robots pose are",
    body: "All future robot vacuums manufactured outside the USA (i.e., all of them) have been banned by the FCC. | Photo by Jennifer Pattison Tuohy / The Verge No other gadget knows as much about your home as a robot vacuum . They map your space, learn your routines, and many now carry a camera and microphone into every room in your house. As AI gives them a better understanding of what they see, the privacy and security risks these autonomous robots pose are only growing.\n\nThat's why greater scrutiny makes sense, but the ban on foreign-made mobile robots issued by the Federal Communications Commission earlier this week - implemented to address \"unacceptable risks to the national security of the United States or the safety and security of United States persons\" - doesn't actually judge products by h …",
    source: "The Verge",
    url: "https://www.theverge.com/tech/973738/robot-vacuum-ban-fewer-choices-higher-prices",
    time: "18 ore fa",
    pub_ts: 1785519049,
    tags: [],
  },
  {
    id: 15,
    cat: "economia-tech",
    title: "Stellantis, il mercato italiano guida la ripresa, corre il marchio Fiat",
    summary: "Sul mercato domestico, un quarto delle immatricolazioni in più registrate in Europa nel primo semestre dell’anno - I nuovi modelli Fiat Grande Panda e Citroen C3 trainano i volumi",
    body: "Sul mercato domestico, un quarto delle immatricolazioni in più registrate in Europa nel primo semestre dell’anno - I nuovi modelli Fiat Grande Panda e Citroen C3 trainano i volumi",
    source: "Il Sole 24 Ore",
    url: "https://www.ilsole24ore.com/art/stellantis-mercato-italiano-guida-ripresa-corre-marchio-fiat-AJ1T7DY",
    time: "8 ore fa",
    pub_ts: 1785556921,
    tags: [],
  },
  {
    id: 16,
    cat: "economia-tech",
    title: "Commercio di legname, le sfide di un sistema che vale 3,3 miliardi",
    summary: "Stefano Corà eletto alla presidenza di Fedecomlegno di FederlegnoArredo",
    body: "Stefano Corà eletto alla presidenza di Fedecomlegno di FederlegnoArredo",
    source: "Il Sole 24 Ore",
    url: "https://www.ilsole24ore.com/art/commercio-legname-sfide-un-sistema-che-vale-33-miliardi-AJpd5ea",
    time: "1 giorno fa",
    pub_ts: 1785477721,
    tags: [],
  },
  {
    id: 17,
    cat: "economia-tech",
    title: "Serial Innovation in Fintech | Masters in Business with Som Seif",
    summary: "Barry sits down with Som Seif, Founder and CEO at Purpose Unlimited. They discuss Som's journey from engineering to investment banking. They also discuss his early push into ETFs in Canada and the creation of the first bitcoin ETF. Finally, Som discusses his history as a serial entrepreneur and the importance of endurance when building business in today's ever changing markets. (Source: Bloomberg)",
    body: "Barry sits down with Som Seif, Founder and CEO at Purpose Unlimited. They discuss Som's journey from engineering to investment banking. They also discuss his early push into ETFs in Canada and the creation of the first bitcoin ETF. Finally, Som discusses his history as a serial entrepreneur and the importance of endurance when building business in today's ever changing markets. (Source: Bloomberg)",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/videos/2026-07-31/masters-in-business-with-som-seif-video",
    time: "14 ore fa",
    pub_ts: 1785532469,
    tags: [],
  },
  {
    id: 18,
    cat: "economia-tech",
    title: "Som Seif on Prioritizing Customers When Building Companies",
    summary: "Barry sits down with Som Seif, Founder and CEO at Purpose Unlimited. They discuss Som's journey from engineering to investment banking. They also discuss his early push into ETFs in Canada and the creation of the first bitcoin ETF. Finally, Som discusses his history as a serial entrepreneur and the importance of endurance when building business in today's ever changing markets. (Source: Bloomberg)",
    body: "Barry sits down with Som Seif, Founder and CEO at Purpose Unlimited. They discuss Som's journey from engineering to investment banking. They also discuss his early push into ETFs in Canada and the creation of the first bitcoin ETF. Finally, Som discusses his history as a serial entrepreneur and the importance of endurance when building business in today's ever changing markets. (Source: Bloomberg)",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/videos/2026-07-31/som-seif-on-prioritizing-customers-video",
    time: "15 ore fa",
    pub_ts: 1785531658,
    tags: [],
  },
  {
    id: 19,
    cat: "economia-tech",
    title: "Fifa abandons $20bn investment plan after global backlash",
    summary: "Uefa says it has lost confidence in Infantino’s leadership after climbdown",
    body: "Uefa says it has lost confidence in Infantino’s leadership after climbdown",
    source: "Financial Times",
    url: "https://www.ft.com/content/58400cf0-20df-46ef-975b-7414806e09de?syn-25a6b1a6=1",
    time: "2 ore fa",
    pub_ts: 1785578593,
    tags: [],
  },
  {
    id: 20,
    cat: "economia-tech",
    title: "Can Africa Power the AI Boom?",
    summary: "Teraco Chief Executive Officer Jan Hnizdo discusses why Africa is becoming a key destination for data centers, how cloud infrastructure is evolving and why energy and sustainability will determine the continent's digital future. He speaks with Bloomberg's Jennifer Zabasajja. (Source: Bloomberg)",
    body: "Teraco Chief Executive Officer Jan Hnizdo discusses why Africa is becoming a key destination for data centers, how cloud infrastructure is evolving and why energy and sustainability will determine the continent's digital future. He speaks with Bloomberg's Jennifer Zabasajja. (Source: Bloomberg)",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/videos/2026-08-01/can-africa-power-the-ai-boom-video",
    time: "7 ore fa",
    pub_ts: 1785560561,
    tags: [],
  },
  {
    id: 21,
    cat: "economia-tech",
    title: "Humbling times for markets",
    summary: "Investors finally show signs of growing weary of the painfully obvious nonsense",
    body: "Investors finally show signs of growing weary of the painfully obvious nonsense",
    source: "Financial Times",
    url: "https://www.ft.com/content/e41dadef-c473-48ff-9fa5-30b56d40af34?syn-25a6b1a6=1",
    time: "8 ore fa",
    pub_ts: 1785556824,
    tags: [],
  },
  {
    id: 22,
    cat: "economia-tech",
    title: "Bond sell-off sent warning on Fed’s credibility, says top central bank official",
    summary: "Alberto Musalem says he supported dissenters’ calls for a quarter-point interest rate rise",
    body: "Alberto Musalem says he supported dissenters’ calls for a quarter-point interest rate rise",
    source: "Financial Times",
    url: "https://www.ft.com/content/2735a2b5-db87-4a7f-9484-20c1e429267d?syn-25a6b1a6=1",
    time: "12 ore fa",
    pub_ts: 1785539423,
    tags: [],
  },
];
