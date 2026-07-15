// Generato automaticamente il 2026-07-15 18:14 UTC da scripts/fetch_news.py
// NON modificare manualmente: viene sovrascritto ogni ora dalla GitHub Action.
var NEWS_TIMESTAMP = 1784139161;

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
    title: "Legge elettorale: Ciriani: 'Il governo non si ferma'. In Aula bocciato l'emendamento dei vannacciani, ma sono 130 i sì",
    summary: "Schlein: 'Elezioni a settembre? Noi siamo pronti in ogni momento'. Approvato l'art.1, cuore della riforma. Via libera all'emendamento sul voto dei fuorisede",
    body: "Schlein: 'Elezioni a settembre? Noi siamo pronti in ogni momento'. Approvato l'art.1, cuore della riforma. Via libera all'emendamento sul voto dei fuorisede",
    source: "ANSA",
    url: "https://www.ansa.it/sito/notizie/politica/2026/07/15/legge-elettorale-ciriani-il-nostro-governo-va-avanti-con-orgoglio_d2d28010-63c6-4a72-baa8-3527101899bf.html",
    time: "11 min fa",
    pub_ts: 1784138496,
    tags: [],
  },
  {
    id: 2,
    cat: "politica-italiana",
    title: "'L'Italia agli italiani è condivisibile', Valditara contro i prof",
    summary: "Il ministro sullo striscione esposto da due studenti a Cesena. Il Pd 'è grave'",
    body: "Il ministro sullo striscione esposto da due studenti a Cesena. Il Pd 'è grave'",
    source: "ANSA",
    url: "https://www.ansa.it/sito/notizie/cronaca/2026/07/15/litalia-agli-italiani-e-condivisibile-valditara-contro-i-prof_72085083-74a7-4549-84ed-944ee169117b.html",
    time: "24 min fa",
    pub_ts: 1784137680,
    tags: [],
  },
  {
    id: 3,
    cat: "politica-italiana",
    title: "L'omicidio di Saman Abbas, definitive le condanne per i familiari",
    summary: "Ergastolo ai genitori e ai cugini. Meloni: 'Non c'è spazio per chi nega libertà donne'",
    body: "Ergastolo ai genitori e ai cugini. Meloni: 'Non c'è spazio per chi nega libertà donne'",
    source: "ANSA",
    url: "https://www.ansa.it/sito/notizie/cronaca/2026/07/15/lomicidio-di-saman-abbas-definitive-le-condanne-per-i-familiari_b2a74743-83dd-4a62-b866-650208f4c9a1.html",
    time: "31 min fa",
    pub_ts: 1784137286,
    tags: [],
  },
  {
    id: 4,
    cat: "geopolitica",
    title: "Iran threatens to block more trade routes as US launches fresh strikes",
    summary: "US President Donald Trump vowed to strike Iran's bridges and power plants next week if the country does not return to talks.",
    body: "US President Donald Trump vowed to strike Iran's bridges and power plants next week if the country does not return to talks.",
    source: "BBC World",
    url: "https://www.bbc.co.uk/news/articles/c9323zgq6wvo?at_medium=RSS&at_campaign=rss",
    time: "5 ore fa",
    pub_ts: 1784118398,
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
    time: "7 ore fa",
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
    time: "8 ore fa",
    pub_ts: 1784108529,
    tags: [],
  },
  {
    id: 7,
    cat: "geopolitica",
    title: "Desahuciada en Madrid la familia de Dulce, madre de cinco hijos, pese a la intervención de la ONU",
    summary: "El Comité de los Derechos del Niño pidió suspender el desalojo hasta lograr una solución habitacional con el objetivo de evitar “daños irreparables”",
    body: "Dulce y sus cinco hijos, tres de ellos menores de edad y el más pequeño con síndrome de Down, han sido desahuciados este miércoles del hogar donde residían en Moratalaz, propiedad de la Agencia de Vivienda Social de la Comunidad de Madrid. Junto a Herminio, llevaban residiendo cinco años en una casa en El Ruedo, a orillas de la M-30. Habían accedido a esta sin título, sin un contrato oficial del piso, tras varios intentos fallidos de conseguir una vivienda pública y de negociar un contrato de alquiler social para quedarse, según las asociaciones vecinales que durante tres horas han intentado frenar el actual desenlace entre la tristeza y la indignación.\n\nEl Comité de los Derechos del Niño de las Naciones Unidas pidió suspender el desalojo hasta lograr una solución habitacional con el objetivo de evitar “daños irreparables” a los menores. Seguir leyendo",
    source: "El Pais",
    url: "https://elpais.com/espana/madrid/2026-07-15/desahuciada-en-madrid-la-familia-de-dulce-madre-de-cinco-hijos-pese-a-la-intervencion-de-la-onu.html",
    time: "3 ore fa",
    pub_ts: 1784126316,
    tags: [],
  },
  {
    id: 8,
    cat: "geopolitica",
    title: "Sánchez tras la desaparición de la Verja de Gibraltar: “Cae el último muro de la Europa continental”",
    summary: "El presidente del Gobierno ha presenciado el desmontaje de una de las puertas del lado español de la frontera",
    body: "Si los linenses se las ingeniaron para robarle palabras al inglés —ahí está liquirbá , regaliz, por liquorice bar— y los gibraltareños hicieron lo propio con otras tantas expresiones —voy para atrás, por go back —, ¿cómo no iba a existir un término para designar algo tan condicionante para sus vidas como la frontera? En llanito ese paso es la focona , una deformación fonética de Four Corners, conocida así por el cruce de caminos que fue en el siglo XIX.\n\nLuego llegó la Verja física, el hostigamiento y cierre franquista, la reapertura de los años 80, el terror fundado del Brexit duro y, desde esta medianoche, su desaparición , en derribo simbólico mediante en la parte gibraltareña. Apenas 12 horas después, Pedro Sánchez ha querido tener también su momento piqueta y ha asistido al desmontaje de una de las puertas que seguían allí abiertas. “Hoy cae el último muro de la Europa continental”, ha declarado el presidente español.\n\nSeguir leyendo",
    source: "El Pais",
    url: "https://elpais.com/espana/2026-07-15/sanchez-tras-la-desaparicion-de-la-verja-de-gibraltar-las-columnas-de-hercules-son-una-puerta-al-futuro-compartido.html",
    time: "6 ore fa",
    pub_ts: 1784114633,
    tags: [],
  },
  {
    id: 9,
    cat: "geopolitica",
    title: "Feijóo y Ayuso acusan a Sánchez de ser un “presidente autoritario” y un “autócrata sin escrúpulos”ante los líderes del PP europeo",
    summary: "El líder popular reivindica el giro derechista en América Latina en un foro del PPE en Madrid con la participación de Keiko Fujimori",
    body: "Ante algunos de los principales líderes del Partido Popular Europeo, reunidos este miércoles en Madrid, Alberto Núñez Feijóo ha lanzado la acusación más gruesa hasta la fecha contra Pedro Sánchez. El líder del PP no ha dudado en describir al líder socialista como “un presidente autoritario” delante del presidente del Partido Popular Europeo, Manfred Weber; del vicepresidente de Italia, Antonio Tajani; y de los cientos de delegados de los conservadores europeos concentrados en un hotel de lujo de la capital.\n\n“Para reconocer a un autoritario basta con mirar qué quiere controlar”, ha reflexionado Feijóo ante el auditorio. Y ha añadido, en referencia a Sánchez: “Si recela de los jueces, si desprecia las mayorías parlamentarias cuando no le favorecen, si sustituye el mérito y el esfuerzo por la dependencia estatal, si cuestiona la independencia de las instituciones y si teme a las urnas si no le aseguran el poder, no busquen más: ¡Eso es un presidente autoritario!”.\n\nSeguir leyendo",
    source: "El Pais",
    url: "https://elpais.com/espana/2026-07-15/feijoo-acusa-a-sanchez-de-ser-un-presidente-autoritario-ante-los-lideres-del-pp-europeo.html",
    time: "7 ore fa",
    pub_ts: 1784111592,
    tags: [],
  },
  {
    id: 10,
    cat: "geopolitica",
    title: "When China’s open-source AI is a trap",
    summary: "America’s quest for AI dominance is scary. China is not the solution",
    body: "America’s quest for AI dominance is scary. China is not the solution",
    source: "The Economist",
    url: "https://www.economist.com/international/2026/07/14/when-chinas-open-source-ai-is-a-trap",
    time: "21 ore fa",
    pub_ts: 1784060249,
    tags: [],
  },
  {
    id: 11,
    cat: "conflitti",
    title: "Mapping the latest US strikes across Iran",
    summary: "US attacks kill dozens in Iran as Iranian forces target regional bases, pushing a fragile ceasefire closer to collapse.",
    body: "US attacks kill dozens in Iran as Iranian forces target regional bases, pushing a fragile ceasefire closer to collapse.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/news/2026/7/15/mapping-the-latest-us-strikes-across-iran?traffic_source=rss",
    time: "35 min fa",
    pub_ts: 1784137134,
    tags: [],
  },
  {
    id: 12,
    cat: "conflitti",
    title: "Father, mother, daughter killed in Israeli attack on Gaza home",
    summary: "Palestinians held a funeral for a father, a mother and their six-year-old daughter killed in an Israeli air attack.",
    body: "Palestinians held a funeral for a father, a mother and their six-year-old daughter killed in an Israeli air attack.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/video/newsfeed/2026/7/15/father-mother-daughter-killed-in-israeli-attack-on-gaza-home?traffic_source=rss",
    time: "1 ora fa",
    pub_ts: 1784132679,
    tags: [],
  },
  {
    id: 13,
    cat: "conflitti",
    title: "Who is calling the shots in Iran amid the deadly war with the US?",
    summary: "The IRGC has taken the lead in Iran, particularly over Hormuz - and the government says it's on the same page.",
    body: "The IRGC has taken the lead in Iran, particularly over Hormuz - and the government says it's on the same page.",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/features/2026/7/15/who-is-calling-the-shots-in-iran-amid-the-deadly-war-with-the-us?traffic_source=rss",
    time: "2 ore fa",
    pub_ts: 1784129757,
    tags: [],
  },
  {
    id: 14,
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
    id: 15,
    cat: "ai",
    title: "Si sa qualcosa in più sul misterioso dispositivo a cui sta lavorando OpenAI",
    summary: "Secondo quanto rivelato da un dipendente dell'azienda a Bloomberg sarà un assistente vocale AI con «caratteristiche umane» e in grado di muoversi",
    body: "Secondo quanto rivelato da un dipendente dell'azienda a Bloomberg sarà un assistente vocale AI con «caratteristiche umane» e in grado di muoversi",
    source: "Il Post Tech",
    url: "https://www.ilpost.it/2026/07/15/open-ai-misterioso-dispositivo/",
    time: "10 ore fa",
    pub_ts: 1784103119,
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
    time: "1 ora fa",
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
    time: "3 ore fa",
    pub_ts: 1784127600,
    tags: [],
  },
  {
    id: 18,
    cat: "ai",
    title: "OpenAI finally launches hardware… for Codex",
    summary: "OpenAI is finally releasing some hardware. No, it isn't the mysterious AI-powered device the company is developing with former Apple designer Jony Ive, a project already tangled up in a messy lawsuit. Instead, it's a product designed to be used with its coding platform, Codex. The device, a square-shaped block of buttons called Codex Micro,",
    body: "OpenAI is finally releasing some hardware. No, it isn't the mysterious AI-powered device the company is developing with former Apple designer Jony Ive , a project already tangled up in a messy lawsuit . Instead, it's a product designed to be used with its coding platform, Codex. The device, a square-shaped block of buttons called Codex Micro, is a collaboration between the AI company and keyboard maker Work Louder.\n\nOpenAI said it is a limited-run collaboration that will give users more ways to monitor and manage their agents. The pad closely resembles Work Louder's Creator Micro 2 , and marketing images show what appears to be an identical …",
    source: "The Verge",
    url: "https://www.theverge.com/ai-artificial-intelligence/965901/openai-hardware-codex-micro-launch",
    time: "2 ore fa",
    pub_ts: 1784131200,
    tags: [],
  },
  {
    id: 19,
    cat: "ai",
    title: "Anthropic, Blackstone bet the next trillion-dollar AI business is implementation, not just models",
    summary: "Anthropic-backed Ode launches as AI labs bet that embedding forward-deployed engineers inside enterprises is the key to accelerating enterprise AI adoption.",
    body: "Anthropic-backed Ode launches as AI labs bet that embedding forward-deployed engineers inside enterprises is the key to accelerating enterprise AI adoption.",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/07/15/anthropic-blackstone-bet-the-next-trillion-dollar-ai-business-is-implementation-not-models/",
    time: "5 ore fa",
    pub_ts: 1784121047,
    tags: [],
  },
  {
    id: 20,
    cat: "economia-tech",
    title: "La Ue vara il codice per contrastare foto e video manipolati dall’AI",
    summary: "Falsi dottori che offrono consigli sbagliati. Ministri delle finanze che suggeriscono investimenti. Volti e voci di celebrità che chiedono aiuto per qualcuno. I video fake sono sempre più numerosi, dall’India...",
    body: "Falsi dottori che offrono consigli sbagliati. Ministri delle finanze che suggeriscono investimenti. Volti e voci di celebrità che chiedono aiuto per qualcuno. I video fake sono sempre più numerosi, dall’India...",
    source: "Il Sole 24 Ore",
    url: "https://www.ilsole24ore.com/art/la-ue-vara-codice-contrastare-foto-e-video-manipolati-dall-ai-AJQidcJ",
    time: "11 ore fa",
    pub_ts: 1784098805,
    tags: [],
  },
  {
    id: 21,
    cat: "economia-tech",
    title: "Rai, Mediaset e Sky al 67% ma piattaforme in crescita e ormai quarto polo",
    summary: "Rai, Sky e Mediaset conservano il comando, ma il loro recinto si restringe. I tre maggiori operatori controllano ancora il 67% del mercato italiano della Tv: Rai al 26,6%, Comcast-Sky...",
    body: "Rai, Sky e Mediaset conservano il comando, ma il loro recinto si restringe. I tre maggiori operatori controllano ancora il 67% del mercato italiano della Tv: Rai al 26,6%, Comcast-Sky...",
    source: "Il Sole 24 Ore",
    url: "https://www.ilsole24ore.com/art/rai-mediaset-e-sky-67percento-ma-piattaforme-crescita-e-ormai-quarto-polo-AJplUUJ",
    time: "15 ore fa",
    pub_ts: 1784085045,
    tags: [],
  },
  {
    id: 22,
    cat: "economia-tech",
    title: "L’AI delle Pmi passa dai distretti: serve un dataspace industriale",
    summary: "L’intelligenza artificiale è un mercato in crescita e in Italia vale 1,8 miliardi: +50% su base annua. Germania, Francia, Regno Unito e Paesi Bassi sono più avanti: hanno strategie consolidate...",
    body: "L’intelligenza artificiale è un mercato in crescita e in Italia vale 1,8 miliardi: +50% su base annua. Germania, Francia, Regno Unito e Paesi Bassi sono più avanti: hanno strategie consolidate...",
    source: "Il Sole 24 Ore",
    url: "https://www.ilsole24ore.com/art/l-ai-pmi-passa-distretti-serve-dataspace-industriale-AJuFSQJ",
    time: "1 giorno fa",
    pub_ts: 1784044200,
    tags: [],
  },
];
