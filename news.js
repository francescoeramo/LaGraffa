// Generato automaticamente il 2026-07-16 04:13 UTC da scripts/fetch_news.py
// NON modificare manualmente: viene sovrascritto ogni ora dalla GitHub Action.
var NEWS_TIMESTAMP = 1784175188;

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
    title: "FdI vota le preferenze di Vannacci, la maggioranza si spacca ancora e non passano",
    summary: "Ma il governo va avanti. Attesa per il voto dell'intera riforma. Schlein attacca Meloni",
    body: "Ma il governo va avanti. Attesa per il voto dell'intera riforma. Schlein attacca Meloni",
    source: "ANSA",
    url: "https://www.ansa.it/sito/notizie/politica/2026/07/15/fdi-vota-le-preferenze-di-vannacci-la-maggioranza-si-spacca-ancora-e-non-passano_c5ef556f-1b31-4f6a-899e-c762de3c3587.html",
    time: "9 ore fa",
    pub_ts: 1784142756,
    tags: [],
  },
  {
    id: 2,
    cat: "politica-italiana",
    title: "Uccise due rapinatori, condanna definitiva per il gioielliere: \"È finita, vado in carcere\"",
    summary: "Roggero: \"Sarete voi la mia voce, serve una legge contro le ingiustizie\"",
    body: "Roggero: \"Sarete voi la mia voce, serve una legge contro le ingiustizie\"",
    source: "ANSA",
    url: "https://www.ansa.it/sito/videogallery/italia/2026/07/15/uccise-due-rapinatori-condanna-definitiva-per-il-gioielliere-e-finita-vado-in-carcere_04bbe529-efb3-4ebd-9893-827ad465d308.html",
    time: "9 ore fa",
    pub_ts: 1784141765,
    tags: [],
  },
  {
    id: 3,
    cat: "politica-italiana",
    title: "'L'Italia agli italiani è condivisibile', Valditara contro i prof",
    summary: "Il ministro sullo striscione esposto da due studenti a Cesena. Il Pd 'è grave'",
    body: "Il ministro sullo striscione esposto da due studenti a Cesena. Il Pd 'è grave'",
    source: "ANSA",
    url: "https://www.ansa.it/sito/notizie/cronaca/2026/07/15/litalia-agli-italiani-e-condivisibile-valditara-contro-i-prof_72085083-74a7-4549-84ed-944ee169117b.html",
    time: "10 ore fa",
    pub_ts: 1784137680,
    tags: [],
  },
  {
    id: 4,
    cat: "geopolitica",
    title: "US launches fresh strikes on Iran as Trump warns Tehran it 'better behave'",
    summary: "US President Donald Trump says he is yet to decide whether or not he will \"finish off\" Iran.",
    body: "US President Donald Trump says he is yet to decide whether or not he will \"finish off\" Iran.",
    source: "BBC World",
    url: "https://www.bbc.co.uk/news/articles/c9323zgq6wvo?at_medium=RSS&at_campaign=rss",
    time: "7 min fa",
    pub_ts: 1784174771,
    tags: [],
  },
  {
    id: 5,
    cat: "geopolitica",
    title: "China economic growth falls sharply, missing target",
    summary: "Weak demand domestically and the impact of the Iran war on oil prices overshadowed the country's strong exports.",
    body: "Weak demand domestically and the impact of the Iran war on oil prices overshadowed the country's strong exports.",
    source: "BBC World",
    url: "https://www.bbc.co.uk/news/articles/cd959x4edy8o?at_medium=RSS&at_campaign=rss",
    time: "17 ore fa",
    pub_ts: 1784110908,
    tags: [],
  },
  {
    id: 6,
    cat: "geopolitica",
    title: "Boss of fake government agency arrested in Nigeria after weeks on the run",
    summary: "The case has gripped Nigeria since President Bola Tinubu ordered a corruption investigation last week.",
    body: "The case has gripped Nigeria since President Bola Tinubu ordered a corruption investigation last week.",
    source: "BBC World",
    url: "https://www.bbc.co.uk/news/articles/c17y7ykzgrgo?at_medium=RSS&at_campaign=rss",
    time: "18 ore fa",
    pub_ts: 1784108529,
    tags: [],
  },
  {
    id: 7,
    cat: "geopolitica",
    title: "Trump se enreda de nuevo en una guerra de Irán sin salida clara",
    summary: "La estrategia de la república islámica de agotar la paciencia del presidente de EE UU se demuestra una vez más exitosa. Las opciones de presión a Teherán son inciertas en esta segunda fase",
    body: "En las jornadas posteriores al ataque conjunto de Israel y Estados Unidos contra Irán del pasado 28 de febrero, Donald Trump cambió al menos una docena de veces de argumentos para justificar una operación militar que evitó llamar por su nombre (“guerra”, palabra que aún se resiste a emplear). Sobre su duración también lanzó mensajes contradictorios: la cosa estaría resuelta en “un par de días”, primero, y en no más de “cuatro o cinco semanas”, después.\n\nSeguir leyendo",
    source: "El Pais",
    url: "https://elpais.com/internacional/2026-07-16/trump-se-enreda-de-nuevo-en-una-guerra-de-iran-sin-salida-clara.html",
    time: "33 min fa",
    pub_ts: 1784173200,
    tags: [],
  },
  {
    id: 8,
    cat: "geopolitica",
    title: "La condena de David Sánchez espolea al PSOE: “La derecha política y judicial está logrando el efecto contrario”",
    summary: "Dirigentes socialistas afirman que las causas judiciales contra la familia del presidente se pueden convertir “en un bumerán contra la derecha”",
    body: "“En la sentencia a David Sánchez hay un daño personal al presidente, pero el daño electoral es cero. Lo mismo que con su esposa. Sí que lo hubo con [José Luis] Ábalos, condenado a 24 años, pero los casos de la familia se han convertido en un ataque personal. Y podrían convertirse en un bumerán contra la derecha”, afirma un peso pesado de La Moncloa. Es un análisis compartido en distintos sectores del PSOE, que coinciden en que las causas judiciales contra la familia de Pedro Sánchez están espoleando al partido en otro fin de curso marcado por el rosario de procesos contra dirigentes socialistas de distinto tonelaje en los tribunales.\n\nSeguir leyendo",
    source: "El Pais",
    url: "https://elpais.com/espana/2026-07-16/la-condena-de-david-sanchez-espolea-al-psoe-la-derecha-politica-y-judicial-esta-logrando-el-efecto-contrario.html",
    time: "43 min fa",
    pub_ts: 1784172601,
    tags: [],
  },
  {
    id: 9,
    cat: "geopolitica",
    title: "When China’s open-source AI is a trap",
    summary: "America’s quest for AI dominance is scary. China is not the solution",
    body: "America’s quest for AI dominance is scary. China is not the solution",
    source: "The Economist",
    url: "https://www.economist.com/international/2026/07/14/when-chinas-open-source-ai-is-a-trap",
    time: "1 giorno fa",
    pub_ts: 1784060249,
    tags: [],
  },
  {
    id: 10,
    cat: "conflitti",
    title: "Two killed in Russian missile fire on Kyiv after Ukraine-EU drone deal",
    summary: "Mayor Vitali Klitschko says emergency services are battling blazes across the Ukrainian capital.",
    body: "Mayor Vitali Klitschko says emergency services are battling blazes across the Ukrainian capital.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/news/2026/7/16/kyiv-under-fire-from-russian-missiles-after-eu-ukraine-sign-drone-deal?traffic_source=rss",
    time: "2 ore fa",
    pub_ts: 1784167125,
    tags: [],
  },
  {
    id: 11,
    cat: "conflitti",
    title: "Iran war live: US hits Iranian oil tanker; Tehran attacks Kuwait, Jordan",
    summary: "Iranian media report explosions on Qeshm Island, Bandar Abbas and Chabahar, as Bahrain and Kuwait sound air raid sirens.",
    body: "Iranian media report explosions on Qeshm Island, Bandar Abbas and Chabahar, as Bahrain and Kuwait sound air raid sirens.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/news/liveblog/2026/7/16/iran-war-live-sirens-in-bahrain-kuwait-us-disables-iranian-oil-tanker?traffic_source=rss",
    time: "4 ore fa",
    pub_ts: 1784160048,
    tags: [],
  },
  {
    id: 12,
    cat: "conflitti",
    title: "Iran says peace deal voided, fighting ‘existential war’ after US attacks",
    summary: "The US announced a new wave of attacks Wednesday night, amid reported explosions in Bandar Abbas, Chabahar and Ahvaz.",
    body: "The US announced a new wave of attacks Wednesday night, amid reported explosions in Bandar Abbas, Chabahar and Ahvaz.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/news/2026/7/15/iran-says-peace-deal-voided-fighting-existential-war-after-us-attacks?traffic_source=rss",
    time: "6 ore fa",
    pub_ts: 1784152017,
    tags: [],
  },
  {
    id: 13,
    cat: "ai",
    title: "La causa di Apple è una rogna per OpenAI",
    summary: "Da tempo l'azienda che sviluppa ChatGPT dice che sta sviluppando dispositivi che supereranno gli iPhone: un lungo contenzioso legale potrebbe rallentarla",
    body: "Da tempo l'azienda che sviluppa ChatGPT dice che sta sviluppando dispositivi che supereranno gli iPhone: un lungo contenzioso legale potrebbe rallentarla",
    source: "Il Post Tech",
    url: "https://www.ilpost.it/2026/07/14/causa-apple-openai/",
    time: "1 giorno fa",
    pub_ts: 1784023422,
    tags: [],
  },
  {
    id: 14,
    cat: "ai",
    title: "Si sa qualcosa in più sul misterioso dispositivo a cui sta lavorando OpenAI",
    summary: "Secondo quanto rivelato da un dipendente dell'azienda a Bloomberg sarà un assistente vocale AI con «caratteristiche umane» e in grado di muoversi",
    body: "Secondo quanto rivelato da un dipendente dell'azienda a Bloomberg sarà un assistente vocale AI con «caratteristiche umane» e in grado di muoversi",
    source: "Il Post Tech",
    url: "https://www.ilpost.it/2026/07/15/open-ai-misterioso-dispositivo/",
    time: "20 ore fa",
    pub_ts: 1784103119,
    tags: [],
  },
  {
    id: 15,
    cat: "ai",
    title: "Microsoft is reportedly training salespeople to talk down OpenAI and Anthropic",
    summary: "Microsoft is looking to sell its in-house AI models as more efficient and cost-effective than its competitors' models.",
    body: "Microsoft is looking to sell its in-house AI models as more efficient and cost-effective than its competitors' models.",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/15/microsoft-is-reportedly-training-salespeople-to-talk-down-openai-and-anthropic/",
    time: "4 ore fa",
    pub_ts: 1784159984,
    tags: [],
  },
  {
    id: 16,
    cat: "ai",
    title: "Whatnot acquires Shaped to power real-time live shopping recommendations",
    summary: "Livestream shopping platform Whatnot has acquired AI startup Shaped, a machine learning company focused on real-time recommendations and search. The deal will bolster Whatnot’s personalization and discovery features as it expands into new product categories.",
    body: "Livestream shopping platform Whatnot has acquired AI startup Shaped, a machine learning company focused on real-time recommendations and search. The deal will bolster Whatnot’s personalization and discovery features as it expands into new product categories.",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/15/whatnot-acquires-shaped-to-power-real-time-live-shopping-recommendations/",
    time: "11 ore fa",
    pub_ts: 1784134800,
    tags: [],
  },
  {
    id: 17,
    cat: "ai",
    title: "Inside Ode with Anthropic, the startup betting AI services are the future of enterprise",
    summary: "Can a handful of engineers really do the work of an army of consultants? That’s the bet behind Ode with Anthropic — the joint venture dedicated to embedding forward-deployed engineers in enterprise firms, backed by Anthropic, Blackstone, Hellman & Friedman, Goldman Sachs and others. On this episode of TechCrunch’s Equity podcast, Rebecca Bellan sits down with Ode’s leaders Chris Taylor and Eddie…",
    body: "Can a handful of engineers really do the work of an army of consultants? That’s the bet behind Ode with Anthropic — the joint venture dedicated to embedding forward-deployed engineers in enterprise firms, backed by Anthropic, Blackstone, Hellman & Friedman, Goldman Sachs and others. On this episode of TechCrunch’s Equity podcast, Rebecca Bellan sits down with Ode’s leaders Chris Taylor and Eddie Siegel, who founded Fractional AI,",
    source: "TechCrunch",
    url: "https://techcrunch.com/video/inside-ode-with-anthropic-the-startup-betting-ai-services-are-the-future-of-enterprise/",
    time: "13 ore fa",
    pub_ts: 1784127600,
    tags: [],
  },
  {
    id: 18,
    cat: "economia-tech",
    title: "La Ue vara il codice per contrastare foto e video manipolati dall’AI",
    summary: "Falsi dottori che offrono consigli sbagliati. Ministri delle finanze che suggeriscono investimenti. Volti e voci di celebrità che chiedono aiuto per qualcuno. I video fake sono sempre più numerosi, dall’India...",
    body: "Falsi dottori che offrono consigli sbagliati. Ministri delle finanze che suggeriscono investimenti. Volti e voci di celebrità che chiedono aiuto per qualcuno. I video fake sono sempre più numerosi, dall’India...",
    source: "Il Sole 24 Ore",
    url: "https://www.ilsole24ore.com/art/la-ue-vara-codice-contrastare-foto-e-video-manipolati-dall-ai-AJQidcJ",
    time: "21 ore fa",
    pub_ts: 1784098805,
    tags: [],
  },
  {
    id: 19,
    cat: "economia-tech",
    title: "Rai, Mediaset e Sky al 67% ma piattaforme in crescita e ormai quarto polo",
    summary: "Rai, Sky e Mediaset conservano il comando, ma il loro recinto si restringe. I tre maggiori operatori controllano ancora il 67% del mercato italiano della Tv: Rai al 26,6%, Comcast-Sky...",
    body: "Rai, Sky e Mediaset conservano il comando, ma il loro recinto si restringe. I tre maggiori operatori controllano ancora il 67% del mercato italiano della Tv: Rai al 26,6%, Comcast-Sky...",
    source: "Il Sole 24 Ore",
    url: "https://www.ilsole24ore.com/art/rai-mediaset-e-sky-67percento-ma-piattaforme-crescita-e-ormai-quarto-polo-AJplUUJ",
    time: "1 giorno fa",
    pub_ts: 1784085045,
    tags: [],
  },
  {
    id: 20,
    cat: "economia-tech",
    title: "Anthropic Plans IPO Investor Meetings as Mega-Listing Nears",
    summary: "Anthropic PBC is seeking to meet with investors ahead of its potential mega-IPO, according to people familiar with the matter, as the company prepares to join the rush of artificial intelligence-driven stock market debuts.",
    body: "Anthropic PBC is seeking to meet with investors ahead of its potential mega-IPO, according to people familiar with the matter, as the company prepares to join the rush of artificial intelligence-driven stock market debuts.",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/articles/2026-07-15/anthropic-is-said-to-plan-ipo-investor-meetings-as-listing-nears",
    time: "12 ore fa",
    pub_ts: 1784129330,
    tags: [],
  },
  {
    id: 21,
    cat: "economia-tech",
    title: "India Inc goes on a foreign buying spree",
    summary: "Outflows come as foreign investors flee country’s markets at fastest pace ever this year",
    body: "Outflows come as foreign investors flee country’s markets at fastest pace ever this year",
    source: "Financial Times",
    url: "https://www.ft.com/content/6ae0d120-0027-4351-a381-c73bb3a10808",
    time: "2 ore fa",
    pub_ts: 1784167177,
    tags: [],
  },
  {
    id: 22,
    cat: "economia-tech",
    title: "South Korea stocks slump after first rate rise in 3 years",
    summary: "Bank of Korea’s first move under Shin Hyun-song comes amid concern over won weakness and reliance on energy imports",
    body: "Bank of Korea’s first move under Shin Hyun-song comes amid concern over won weakness and reliance on energy imports",
    source: "Financial Times",
    url: "https://www.ft.com/content/bb1a1582-c522-4c5d-a769-45ba9f5a3054",
    time: "2 ore fa",
    pub_ts: 1784165438,
    tags: [],
  },
  {
    id: 23,
    cat: "economia-tech",
    title: "EU, India Move to Expand Ties Beyond Landmark Free Trade Deal",
    summary: "The European Union and India agreed to start formal talks on New Delhi’s participation in the bloc’s flagship Horizon research program, broadening ties beyond a landmark free trade agreement that’s expected to come into force next year.",
    body: "The European Union and India agreed to start formal talks on New Delhi’s participation in the bloc’s flagship Horizon research program, broadening ties beyond a landmark free trade agreement that’s expected to come into force next year.",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/articles/2026-07-16/eu-india-move-to-expand-ties-beyond-landmark-free-trade-deal",
    time: "2 ore fa",
    pub_ts: 1784164720,
    tags: [],
  },
  {
    id: 24,
    cat: "economia-tech",
    title: "Data Center Firm Csquare Is Said to Price IPO at $21 Per Share",
    summary: "Csquare Inc. priced its initial public offering at $21 per share, according to people familiar with the matter, below a marketed range.",
    body: "Csquare Inc. priced its initial public offering at $21 per share, according to people familiar with the matter, below a marketed range.",
    source: "Bloomberg Tech",
    url: "https://www.bloomberg.com/news/articles/2026-07-15/data-center-firm-csquare-is-said-to-price-ipo-at-21-per-share",
    time: "5 ore fa",
    pub_ts: 1784155624,
    tags: [],
  },
];
