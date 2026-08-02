// Generato automaticamente il 2026-08-02 04:28 UTC da scripts/fetch_news.py
// NON modificare manualmente: viene sovrascritto ogni ora dalla GitHub Action.
var NEWS_TIMESTAMP = 1785644877;

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
    title: "Meloni e 21 leader Ue: 'Vertice su Ceuta'. E' scontro con Sanchez",
    summary: "Martedì la riunione. Lettera anche dal premier spagnolo: 'Chiudere Schengen è da ignoranti'",
    body: "Martedì la riunione. Lettera anche dal premier spagnolo: 'Chiudere Schengen è da ignoranti'",
    source: "ANSA",
    url: "https://www.ansa.it/sito/notizie/politica/2026/08/01/meloni-e-21-leader-ue-vertice-su-ceuta.-e-scontro-con-sanchez_dab85127-0560-4ac1-8fcb-789013fbbad4.html",
    time: "6 ore fa",
    pub_ts: 1785621386,
    tags: [],
  },
  {
    id: 2,
    cat: "politica-italiana",
    title: "Valditara: 'Il divieto di burqa a scuola per riaffermare la dignità delle donne'",
    summary: "Il ministro per l'Istruzione: 'Da Pd e Cgil un passo indietro, solo polemiche e demagogia'",
    body: "Il ministro per l'Istruzione: 'Da Pd e Cgil un passo indietro, solo polemiche e demagogia'",
    source: "ANSA",
    url: "https://www.ansa.it/sito/notizie/politica/2026/08/01/valditara-il-divieto-di-burqa-a-scuola-per-riaffermare-la-dignita-delle-donne_96dce8bc-ba56-4eec-81fb-3060089a4a5d.html",
    time: "9 ore fa",
    pub_ts: 1785610996,
    tags: [],
  },
  {
    id: 3,
    cat: "politica-italiana",
    title: "Aperta la camera ardente per don Mazzi nella sede di Exodus",
    summary: "Allestita nella mensa dove pranzava con i ragazzi",
    body: "Allestita nella mensa dove pranzava con i ragazzi",
    source: "ANSA",
    url: "https://www.ansa.it/sito/notizie/cronaca/2026/08/01/aperta-la-camera-ardente-di-don-mazzi-nella-sede-di-exodus_ac5fcd28-454f-400d-a83f-3bc9a51c3f14.html",
    time: "9 ore fa",
    pub_ts: 1785610739,
    tags: [],
  },
  {
    id: 4,
    cat: "geopolitica",
    title: "Trump says he is cancelling strikes on Iran subject to 'rapidly' making deal",
    summary: "The US president's message came amid media reports that he was planning new, intense strikes on Iran over the weekend.",
    body: "The US president's message came amid media reports that he was planning new, intense strikes on Iran over the weekend.",
    source: "BBC World",
    url: "https://www.bbc.co.uk/news/articles/cjwx74qgld2o?at_medium=RSS&at_campaign=rss",
    time: "1 ora fa",
    pub_ts: 1785639916,
    tags: [],
  },
  {
    id: 5,
    cat: "geopolitica",
    title: "La crisis de Ceuta alinea a la derecha europea contra Sánchez",
    summary: "El presidente español, cada vez más solo en Europa, acusa a sus socios de falta de solidaridad, mientras PP y Vox avivan la batalla por la inmigración",
    body: "Un nuevo fantasma recorre Europa y esta vez se llama inmigración. Sobre él cabalga la rampante derechización del continente. Y ante él, Pedro Sánchez, el único socialdemócrata al mando de uno de los grandes países de los 27, se ve cada vez más solo, como ha evidenciado la crisis de Ceuta con sus imágenes de una oleada humana que han impresionado a todo el planeta . Pero, muy en su estilo, el presidente español no rehúye la batalla.\n\nComo prueba, la carta que envió este sábado a Bruselas denunciando el “egoísmo” de algunos de sus socios europeos. Seguir leyendo",
    source: "El Pais",
    url: "https://elpais.com/espana/2026-08-02/la-crisis-de-ceuta-alinea-a-la-derecha-europea-contra-sanchez.html",
    time: "58 min fa",
    pub_ts: 1785641401,
    tags: [],
  },
  {
    id: 6,
    cat: "geopolitica",
    title: "La doble vara de medir de Trump: de la complacencia con Marruecos a la incomodidad con España",
    summary: "El presidente estadounidense alaba al rey Mohamed VI, con quien ha estrechado la relación tras el reconocimiento del Sáhara Occidental",
    body: "Lo primero que se ve cuando se visita la cuenta de Donald Trump en su red social, Truth, es una publicación fija en la que agradece al rey de Marruecos, Mohamed VI, que le haya puesto su nombre a una autopista kilométrica que conecta el sur del país con el Sáhara Occidental. No es un mensaje más. Lleva una semana encabezando el resto de publicaciones del presidente estadounidense en la plataforma social que creó para dar rienda suelta a sus pensamientos verborreicos.\n\nSeguir leyendo",
    source: "El Pais",
    url: "https://elpais.com/espana/2026-08-02/la-doble-vara-de-medir-de-trump-de-la-complacencia-con-marruecos-a-la-incomodidad-con-espana.html",
    time: "58 min fa",
    pub_ts: 1785641401,
    tags: [],
  },
  {
    id: 7,
    cat: "geopolitica",
    title: "Russian ship defies sanctions to send military vehicles to Mali",
    summary: "The ship carried armoured personnel carriers and trucks through the English Channel to Africa, satellite images show.",
    body: "The ship carried armoured personnel carriers and trucks through the English Channel to Africa, satellite images show.",
    source: "BBC World",
    url: "https://www.bbc.co.uk/news/articles/cgk4rdley0ko?at_medium=RSS&at_campaign=rss",
    time: "5 ore fa",
    pub_ts: 1785625403,
    tags: [],
  },
  {
    id: 8,
    cat: "geopolitica",
    title: "Infantino on the brink? Who might replace him if he goes?",
    summary: "Fifa president Gianni Infantino is in the eye of a storm after scrapping his attempt to sell stakes in the World Cup. If he goes, who comes in?",
    body: "Fifa president Gianni Infantino is in the eye of a storm after scrapping his attempt to sell stakes in the World Cup. If he goes, who comes in?",
    source: "BBC World",
    url: "https://www.bbc.co.uk/sport/football/articles/c998m4ve0rpo?at_medium=RSS&at_campaign=rss",
    time: "18 ore fa",
    pub_ts: 1785578563,
    tags: [],
  },
  {
    id: 9,
    cat: "conflitti",
    title: "Israel kills eight in Gaza despite Trump’s Hamas disarmament plan",
    summary: "Strikes hit Gaza homes after the US unveiled plans for Hamas disarmament and Israeli withdrawal.",
    body: "Strikes hit Gaza homes after the US unveiled plans for Hamas disarmament and Israeli withdrawal.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/news/2026/8/2/israel-kills-five-in-gaza-despite-trumps-hamas-disarmament-plan?traffic_source=rss",
    time: "1 ora fa",
    pub_ts: 1785639531,
    tags: [],
  },
  {
    id: 10,
    cat: "conflitti",
    title: "Iran war live: Trump cancels attack, says ‘perimeters of a deal’ agreed",
    summary: "Move comes after Iran's top diplomat warned of a 'decisive response' to any US-Israeli 'aggression'.",
    body: "Move comes after Iran's top diplomat warned of a 'decisive response' to any US-Israeli 'aggression'.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/news/liveblog/2026/8/2/iran-war-live-tehran-warns-of-decisive-response-to-any-us-aggression?traffic_source=rss",
    time: "4 ore fa",
    pub_ts: 1785628800,
    tags: [],
  },
  {
    id: 11,
    cat: "conflitti",
    title: "‘Marathon’ shines light on Gaza’s orphaned children and humanitarian crisis",
    summary: "More than 58,000 children have lost one or both parents by Israel's war, highlighting urgent humanitarian challenges.",
    body: "More than 58,000 children have lost one or both parents by Israel's war, highlighting urgent humanitarian challenges.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/news/2026/8/1/marathon-shines-light-on-gazas-orphaned-children-and-humanitarian-crisis?traffic_source=rss",
    time: "10 ore fa",
    pub_ts: 1785607038,
    tags: [],
  },
  {
    id: 12,
    cat: "ai",
    title: "Sam Altman is still making the case for parenting via ChatGPT",
    summary: "OpenAI's CEO seemed excited to share a \"cool use case\" for parents.",
    body: "OpenAI's CEO seemed excited to share a \"cool use case\" for parents.",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/08/01/sam-altman-is-still-making-the-case-for-parenting-via-chatgpt/",
    time: "11 ore fa",
    pub_ts: 1785604054,
    tags: [],
  },
  {
    id: 13,
    cat: "ai",
    title: "Trump blames Tim Walz for water hacks even though it’s probably Iran",
    summary: "The FBI, the EPA, and the Cybersecurity and Infrastructure Security Agency (CISA) have stopped short of officially blaming Iran for a spate of cyberattacks on Minnesota's water systems, but consensus is that Iran is likely behind them. That, of course, hasn't stopped Donald Trump from sharing his own theory - that Governor Tim Walz is",
    body: "Donald Trump speaks during the House Republican Party member retreat. | Image: Mandel NGAN / AFP via Getty Images The FBI, the EPA, and the Cybersecurity and Infrastructure Security Agency ( CISA ) have stopped short of officially blaming Iran for a spate of cyberattacks on Minnesota's water systems, but consensus is that Iran is likely behind them. That, of course, hasn't stopped Donald Trump from sharing his own theory - that Governor Tim Walz is to blame and telling reporters that \"I don't think there was an Iranian cyberattack.\" Trump's comments come shortly after the FBI issued a warning that the cyberattacks on American infrastructure were spreading to other states.\n\nIn Minnesota alone, at least 30 community water systems had been targeted in what a …",
    source: "The Verge",
    url: "https://www.theverge.com/policy/974197/trump-tim-walz-minnesota-water-hacks-iran",
    time: "13 ore fa",
    pub_ts: 1785597815,
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
    time: "1 giorno fa",
    pub_ts: 1785538046,
    tags: [],
  },
  {
    id: 15,
    cat: "ai",
    title: "Rivian spinoff Also to start delivering e-bikes after months of delays",
    summary: "Also has big plans beyond the TM-B. The startup mostly refers to itself as a \"vehicle\" company and has plans to make four-wheel pedal-assist cargo vehicles for Amazon.",
    body: "Also has big plans beyond the TM-B. The startup mostly refers to itself as a \"vehicle\" company and has plans to make four-wheel pedal-assist cargo vehicles for Amazon.",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/31/rivian-spinoff-also-to-start-delivering-e-bikes-after-months-of-delays/",
    time: "1 giorno fa",
    pub_ts: 1785535208,
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
    time: "1 giorno fa",
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
    time: "1 giorno fa",
    pub_ts: 1785477721,
    tags: [],
  },
  {
    id: 18,
    cat: "economia-tech",
    title: "Zepto Turns to Private Funding With IPO Plans on Hold for Now",
    summary: "Zepto Ltd said it agreed on a private share sale to major investors as the Indian quick-commerce firm pushed back plans for an initial public offering after failing to secure its anticipated valuation.",
    body: "Zepto Ltd said it agreed on a private share sale to major investors as the Indian quick-commerce firm pushed back plans for an initial public offering after failing to secure its anticipated valuation.",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/articles/2026-08-01/zepto-turns-to-private-funding-with-ipo-plans-on-hold-for-now",
    time: "13 ore fa",
    pub_ts: 1785597455,
    tags: [],
  },
  {
    id: 19,
    cat: "economia-tech",
    title: "AI Isn’t a Catch-All Trade for Stocks in This Earnings Season",
    summary: "Equity investors are learning a harsh lesson this corporate earnings season: Not all artificial intelligence trades are created equal.",
    body: "Equity investors are learning a harsh lesson this corporate earnings season: Not all artificial intelligence trades are created equal.",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/articles/2026-08-01/ai-isn-t-a-catch-all-trade-for-stocks-in-this-earnings-season",
    time: "16 ore fa",
    pub_ts: 1785585600,
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
    time: "23 ore fa",
    pub_ts: 1785560561,
    tags: [],
  },
];
