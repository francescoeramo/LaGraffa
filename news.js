// Generato automaticamente da scripts/fetch_news.py — NON modificare manualmente.
// Le notizie di esempio qui sotto vengono sovrascritte ogni ora dalla GitHub Action.

const RSS_SOURCES = [
  // Politica italiana
  { name: "ANSA",             url: "https://www.ansa.it/sito/ansait_rss.xml",                         cat: "politica-italiana" },
  { name: "Corriere",         url: "https://xml2.corrieredellasera.it/rss/homepage.xml",               cat: "politica-italiana" },
  { name: "Il Post",          url: "https://www.ilpost.it/feed/",                                      cat: "politica-italiana" },
  { name: "Sky TG24",         url: "https://tg24.sky.it/feed/rss.xml",                                 cat: "politica-italiana" },
  { name: "AGI",              url: "https://www.agi.it/feed/rss.xml",                                  cat: "politica-italiana" },
  { name: "Pagella Politica", url: "https://pagellapolitica.it/feed",                                  cat: "politica-italiana" },
  { name: "Facta",            url: "https://facta.news/feed/",                                         cat: "politica-italiana" },
  { name: "Valigia Blu",      url: "https://www.valigiablu.it/feed/",                                  cat: "politica-italiana" },
  // Geopolitica
  { name: "Limes",            url: "https://www.limesonline.com/feed",                                 cat: "geopolitica" },
  { name: "Internazionale",   url: "https://www.internazionale.it/feed/tutto",                         cat: "geopolitica" },
  { name: "BBC World",        url: "https://feeds.bbci.co.uk/news/world/rss.xml",                      cat: "geopolitica" },
  { name: "AP",               url: "https://apnews.com/hub/world-news?output=rss",                     cat: "geopolitica" },
  { name: "AFP",              url: "https://www.afp.com/en/agency/rss-feeds",                          cat: "geopolitica" },
  { name: "The Economist",    url: "https://www.economist.com/international/rss.xml",                  cat: "geopolitica" },
  { name: "El País",          url: "https://feeds.elpais.com/mrss-s/pages/ep/site/elpais.com/portada", cat: "geopolitica" },
  // Conflitti
  { name: "Reuters",          url: "https://feeds.reuters.com/reuters/worldNews",                      cat: "conflitti" },
  { name: "Al Jazeera",       url: "https://www.aljazeera.com/xml/rss/all.xml",                        cat: "conflitti" },
  { name: "AP conflitti",     url: "https://apnews.com/hub/wars-and-conflicts?output=rss",             cat: "conflitti" },
  // AI & Tech
  { name: "The Verge",        url: "https://www.theverge.com/rss/index.xml",                           cat: "ai" },
  { name: "Wired IT",         url: "https://www.wired.it/feed/rss",                                    cat: "ai" },
  { name: "TechCrunch",       url: "https://techcrunch.com/feed/",                                     cat: "ai" },
  { name: "Il Post Tech",     url: "https://www.ilpost.it/tecnologia/feed/",                           cat: "ai" },
  // Economia tech
  { name: "Il Sole 24 Ore",   url: "https://www.ilsole24ore.com/rss/economia.xml",                     cat: "economia-tech" },
  { name: "Bloomberg Tech",   url: "https://feeds.bloomberg.com/technology/news.rss",                  cat: "economia-tech" },
  { name: "Financial Times",  url: "https://www.ft.com/rss/home",                                      cat: "economia-tech" },
  { name: "The Economist Ec", url: "https://www.economist.com/business/rss.xml",                       cat: "economia-tech" },
];

const NEWS = [
  {
    id: 1,
    cat: 'politica-italiana',
    title: 'Riforma fiscale: il governo approva il nuovo catasto',
    summary: 'Il Consiglio dei Ministri ha dato il via libera alla revisione del catasto immobiliare. La riforma mira ad aggiornare i valori degli immobili rimasti fermi agli anni '80, con un impatto stimato su milioni di proprietari.',
    body: `Il governo ha approvato il decreto attuativo sulla revisione del catasto, uno dei dossier più complessi e politicamente divisivi degli ultimi anni in Italia. La proposta di legge, attesa da decenni, punta ad allineare le rendite catastali ai valori di mercato reali, colmando una distanza che si è accumulata in oltre quarant'anni di immobilismo normativo.

<strong>Il contesto storico</strong>
I valori catastali italiani sono fermi mediamente agli anni '80 e '90. Questa forbice tra base imponibile ufficiale e prezzi reali di mercato alimenta forme di elusione fiscale difficili da perseguire e distorce il gettito delle imposte patrimoniali locali come l'IMU e le imposte di registro sulle compravendite. Il risultato è un sistema fiscale percepito come iniquo, dove immobili di pregio scontano imposte uguali o inferiori a immobili di minor valore.

<strong>Cosa cambia operativamente</strong>
Il decreto prevede un aggiornamento progressivo delle rendite catastali sulla base di valori di mercato certificati, da realizzare entro un arco temporale di tre anni. Non ci sarà un aumento automatico delle aliquote, ma la base di calcolo per IMU, TARI e imposte di registro cambierà in modo significativo per molte categorie di immobili, in particolare quelli nel centro delle grandi città.

<strong>Il dibattito politico</strong>
L'opposizione denuncia una contraddizione rispetto alle promesse elettorali sul fisco e sulla protezione della prima casa. Confedilizia parla di "riforma mascherata da riordino tecnico". Il MEF risponde che i correttivi previsti neutralizzeranno gli effetti negativi sulle abitazioni principali e che la revisione è necessaria per rendere il sistema tributario più equo e trasparente.

<strong>Effetti attesi sul mercato immobiliare</strong>
Gli esperti segnalano che la rivalutazione catastale potrebbe avere effetti importanti sul mercato: rendere più costoso detenere immobili non produttivi, aumentare il valore fiscale delle compravendite e ridurre l'appetibilità degli investimenti speculativi nell'immobiliare. Alcune categorie, come i proprietari di seconde case nelle città d'arte, potrebbero essere colpite in modo particolarmente sensibile.

<strong>I prossimi passi</strong>
Il decreto passa ora al Parlamento per la conversione in legge entro sessanta giorni. I sindacati della proprietà promettono emendamenti massicci. La tempistica è stretta: il governo vuole il via libera definitivo entro la fine dell'estate, prima che il dibattito politico si concentri sulle elezioni europee di autunno.`,
    source: 'Il Sole 24 Ore',
    url: 'https://www.ilsole24ore.com',
    time: '2 ore fa',
    tags: ['fisco', 'catasto', 'governo', 'immobili']
  },
  {
    id: 2,
    cat: 'politica-italiana',
    title: 'Sondaggi: FdI stabile al 27%, il PD risale al 21%',
    summary: 'A sei mesi dalle europee, il quadro politico italiano resta sostanzialmente stabile. Il partito di Meloni mantiene il primato, ma il centrosinistra rosicchia qualche punto in zone chiave.',
    body: `I sondaggi della settimana offrono un quadro di sostanziale stabilità con alcune dinamiche interessanti sia nel centrodestra che nell'opposizione. Mancano sei mesi alle elezioni europee di autunno e i partiti italiani stanno definendo le proprie strategie di alleanza a Bruxelles, operazione che condizionerà anche la competizione interna.

<strong>Il quadro numerico</strong>
Fratelli d'Italia si attesta tra il 26% e il 28% secondo le diverse rilevazioni, con una base elettorale solida e fedele. La Lega si stabilizza intorno all'8%, pagando la concorrenza di FdI sui temi identitari. Forza Italia recupera al 9% grazie a una comunicazione più attiva sui dossier europei e al lavoro dei parlamentari sul PNRR. Nel centrosinistra, il PD sale al 21% mentre il M5S consolida il 15% con una forte radice nel Mezzogiorno.

<strong>La partita europea</strong>
Il vero campo di battaglia è la composizione dei gruppi parlamentari europei. L'Italia conta molto per i numeri di ECR e del PPE, e ogni accordo pre-elettorale condizionerà le posizioni dei partiti italiani sui temi cruciali: difesa europea, allargamento a est, bilancio e immigrazione. Meloni deve gestire la tensione tra l'asse con i conservatori europei e la necessità di mantenere buoni rapporti con il PPE per non isolarsi.

<strong>Il fattore PNRR</strong>
La gestione dei fondi europei e i ritardi nelle riforme strutturali continuano ad essere un elemento di vulnerabilità per il governo. L'opposizione prova a capitalizzare, puntando sulle infrastrutture nel Sud e sulla qualità dei servizi pubblici. Il problema è che nessun partito di opposizione riesce ancora a tradurre la critica in un'alternativa programmatica credibile.

<strong>Il centrosinistra e la sfida della leadership</strong>
Il nuovo segretario democratico sta tentando una linea più netta su lavoro, transizione ecologica e welfare. La sfida è costruire un'alleanza larga che includa M5S e progressisti senza perdere l'identità politica riformista di riferimento. Le prossime settimane diranno se la strategia funziona o se il PD resta bloccato in un posizionamento di attesa.`,
    source: 'Corriere della Sera',
    url: 'https://www.corriere.it',
    time: '5 ore fa',
    tags: ['sondaggi', 'elezioni', 'FdI', 'PD', 'europee']
  },
  {
    id: 3,
    cat: 'geopolitica',
    title: "NATO nell'Indo-Pacifico: ufficio permanente a Tokyo",
    summary: "L'Alleanza Atlantica apre un ufficio di collegamento in Giappone, segnando il più significativo ampliamento geografico della sua storia. La Cina protesta formalmente e annuncia esercitazioni navali.",
    body: `L'inaugurazione dell'ufficio di collegamento NATO a Tokyo è un momento di svolta nel modo in cui l'Alleanza pensa alla sicurezza globale. Per la prima volta dalla sua fondazione nel 1949, la NATO stabilisce una presenza istituzionale permanente al di fuori dell'area euroatlantica, segnalando che il concetto di sicurezza collettiva occidentale ha ora una dimensione indopacifico esplicita e riconosciuta.

<strong>Il significato strategico</strong>
L'ufficio non estende formalmente l'articolo 5 al Giappone, ma crea un canale permanente di coordinamento su intelligence, cyber-sicurezza, supply chain critiche e deterrenza navale nel Pacifico. Per gli analisti, è il primo mattone verso una NATO con una vera dimensione asiatica, un processo che potrebbe accelerare nei prossimi anni in risposta alla crescente assertività cinese.

<strong>Il contesto geopolitico</strong>
La scelta arriva in un momento in cui la Cina ha accelerato la modernizzazione militare, aumentato la pressione su Taiwan e stretto legami strategici con la Russia dopo l'invasione dell'Ucraina. Il Giappone, dal canto suo, ha già raddoppiato il budget della difesa al 2% del PIL, sta sviluppando capacità di contrattacco a lungo raggio e ha recentemente firmato nuovi accordi di cooperazione militare con Australia e Gran Bretagna.

<strong>La reazione cinese</strong>
Pechino ha convocato l'ambasciatore giapponese e ha emesso una nota di protesta formale, definendo la mossa una "grave provocazione destabilizzante". Il ministero della Difesa PLA ha annunciato esercitazioni navali nello stretto di Taiwan nei prossimi giorni, una risposta calibrata per inviare un segnale senza esacerbare ulteriormente la crisi diplomatica.

<strong>L'asse AUKUS, Quad e le nuove geometrie</strong>
L'apertura a Tokyo si inserisce in un quadro più ampio che include AUKUS 2.0, il rafforzamento del Quad (USA, India, Giappone, Australia) e i nuovi accordi di difesa tra Corea del Sud e NATO. Insieme, questi segnali disegnano un nuovo perimetro di sicurezza occidentale in Asia che va ben oltre le alleanze bilaterali tradizionali.

<strong>Le implicazioni economiche</strong>
Il dossier della sicurezza è inseparabile da quello economico: semiconduttori, terre rare, rotte commerciali e tecnologia dual-use sono al centro di una competizione che l'ufficio NATO contribuisce a inquadrare in termini di sicurezza collettiva, aprendo la strada a eventuali meccanismi di coordinamento su export control e protezione delle infrastrutture critiche.`,
    source: 'Foreign Policy',
    url: 'https://foreignpolicy.com',
    time: '3 ore fa',
    tags: ['NATO', 'Giappone', 'Cina', 'Indo-Pacifico', 'difesa']
  },
  {
    id: 4,
    cat: 'geopolitica',
    title: 'Trump e Xi a Mar-a-Lago: accordo parziale sui dazi',
    summary: 'Il summit bilaterale si chiude con una tregua commerciale di 90 giorni e impegni agricoli cinesi. Restano intatte le restrizioni tech sui semiconduttori e il dossier Taiwan non viene toccato.',
    body: `Il vertice tra Trump e Xi a Mar-a-Lago ha prodotto un documento di intenti che allenta le tensioni immediate senza risolvere i nodi strutturali del conflitto commerciale e tecnologico tra le due superpotenze. Entrambe le parti hanno presentato l'accordo come una vittoria: Washington per aver ottenuto concessioni agricole, Pechino per aver bloccato nuovi dazi.

<strong>I termini dell'accordo</strong>
Gli USA sospendono per 90 giorni i dazi aggiuntivi del 15% sui beni di consumo cinesi introdotti nel 2025. La Cina si impegna ad acquistare prodotti agricoli americani per 50 miliardi di dollari nei prossimi due anni e a facilitare l'accesso al mercato cinese per alcune categorie di servizi finanziari americani. Viene istituito un gruppo di lavoro bilaterale su commercio e tecnologia.

<strong>I nodi irrisolti</strong>
Le restrizioni tecnologiche restano intatte: NVIDIA, ASML e altri fornitori di tecnologie avanzate per semiconduttori non possono esportare in Cina. Il dossier Taiwan non è stato discusso formalmente, ma rimane lo scenario di rischio massimo per entrambe le parti. Le questioni dei diritti di proprietà intellettuale e delle sussidiazioni statali cinesi alle imprese restano completamente aperte.

<strong>La lettura dei mercati</strong>
Wall Street ha risposto con un rialzo dell'1,8% sull'S&P 500 nella giornata dell'annuncio. I titoli delle aziende più esposte al commercio con la Cina hanno sovraperformato. Gli analisti avvertono però che la tregua di 90 giorni è un respiro tattico, non una soluzione strutturale, e che i fondamentali del conflitto tecnologico e geopolitico tra USA e Cina restano immutati.

<strong>Il ruolo dell'Europa</strong>
Bruxelles guarda con attenzione all'evoluzione: un possibile accordo bilaterale USA-Cina potrebbe marginalizzare l'UE oppure, al contrario, costringerla a scegliere con più nettezza a quale blocco tecnologico allinearsi. La Commissione Europea ha già avviato un'analisi d'impatto per capire se l'accordo crea asimmetrie competitive nei settori automotive, acciaio e tecnologia pulita.`,
    source: 'Wall Street Journal',
    url: 'https://www.wsj.com',
    time: '5 ore fa',
    tags: ['Trump', 'Xi', 'dazi', 'commercio', 'geopolitica']
  },
  {
    id: 5,
    cat: 'conflitti',
    title: 'Ucraina: colloqui a Istanbul, tregua tecnica di 72 ore',
    summary: 'Russia e Ucraina hanno concordato una pausa temporanea nei combattimenti per consentire i negoziati mediati dalla Turchia. È il primo contatto diretto ad alto livello da oltre un anno.',
    body: `La tregua di 72 ore e l'apertura dei colloqui di Istanbul rappresentano un segnale limitato ma significativo dopo mesi di stagnazione diplomatica totale. È la prima volta da oltre quattordici mesi che rappresentanti dei due paesi si siedono allo stesso tavolo in presenza di mediatori internazionali. Il fragile cessate il fuoco è entrato in vigore a mezzanotte, tra episodi di violazione segnalati da entrambe le parti nelle prime ore.

<strong>La struttura dei negoziati</strong>
Al tavolo siedono delegazioni tecniche di secondo livello, non i ministri degli Esteri. La mediazione turca è affiancata da un osservatore ONU. Gli USA partecipano come osservatori senza poteri negoziali formali, ma con un ruolo sostanziale nel fornire garanzie informali. La struttura riflette la volontà di testare la disponibilità delle parti senza impegnarsi in un processo formale che potrebbe fallire vistosamente.

<strong>I temi sul tavolo</strong>
I colloqui coprono cinque aree: corridoi umanitari, prigionieri di guerra, status dei territori occupati, garanzie di sicurezza post-accordo e un eventuale meccanismo di monitoraggio del cessate il fuoco. Le posizioni restano molto distanti su quasi tutti i punti strutturali, ma c'è margine di convergenza sugli aspetti umanitari immediati.

<strong>I nodi politici irrisolvibili nel breve termine</strong>
Mosca chiede il riconoscimento formale dei territori occupati come condizione per qualsiasi accordo duraturo. Kyiv insiste sul ritiro totale come precondizione e sul mantenimento pieno della sovranità territoriale. La questione delle garanzie di sicurezza — chi garantisce cosa a Kyiv in caso di violazione — è forse il nodo più difficile, perché implica un ruolo militare diretto delle potenze occidentali che nessuno è ancora disposto a formalizzare.

<strong>Le reazioni internazionali</strong>
L'UE accoglie la tregua con cauto ottimismo ma avverte che nessun accordo che cristallizzi le conquiste territoriali russe sarà accettabile. Polonia e Paesi baltici sono i più scettici e temono che la pressione occidentale per la pace possa indebolire la posizione negoziale ucraina. Zelensky ha definito i colloqui "un test, non una svolta", segnalando che la continuazione dipenderà dai risultati concreti delle prime 72 ore.

<strong>Lo scenario più probabile</strong>
Gli analisti ritengono improbabile un accordo complessivo in tempi brevi. Il valore della tregua è soprattutto umanitario: ridurre le perdite civili immediate e creare uno spazio minimo per ulteriori contatti diplomatici. La vera domanda è se questa apertura riesce a costruire abbastanza fiducia per estendere la pausa e avviare negoziati su aspetti più sostanziali.`,
    source: 'Reuters',
    url: 'https://www.reuters.com',
    time: '1 ora fa',
    tags: ['Ucraina', 'Russia', 'negoziati', 'guerra', 'Turchia']
  },
  {
    id: 6,
    cat: 'conflitti',
    title: 'Gaza: accordo di principio per la seconda fase del cessate il fuoco',
    summary: 'Mediatori egiziani e qatarini annunciano un testo condiviso per una tregua di 42 giorni con rilascio di ostaggi e aumento degli aiuti. Restano resistenze interne in entrambi i campi.',
    body: `Le trattative per la seconda fase dell'accordo di cessate il fuoco a Gaza sono entrate nella fase finale dopo settimane di negoziati difficili. Il testo condiviso rappresenta un compromesso faticoso tra le posizioni di Israele e Hamas, entrambi con forti correnti interne contrarie a qualsiasi concessione.

<strong>I termini dell'accordo</strong>
La seconda fase prevede 42 giorni di tregua, il rilascio di 33 ostaggi israeliani in cambio di centinaia di detenuti palestinesi, un incremento massiccio degli aiuti umanitari nel nord della Striscia — fino a 600 camion al giorno secondo le stime ONU — e l'apertura di corridoi permanenti per i civili sfollati che vogliano tornare nelle proprie abitazioni.

<strong>Le resistenze interne israeliane</strong>
All'interno del gabinetto israeliano, la destra nazionalista guidata da Ben-Gvir e Smotrich si oppone con forza a qualsiasi accordo che non garantisca la smilitarizzazione definitiva e immediata di Hamas. Questa pressione costringe Netanyahu a negoziare con un margine di manovra molto ristretto, rischiando la crisi di governo in caso di accordo.

<strong>Le condizioni di Hamas</strong>
Hamas chiede garanzie scritte di un ritiro permanente delle IDF dalla Striscia e il ripristino delle infrastrutture civili distrutte prima di qualsiasi impegno formale sul proprio futuro politico-militare. L'organizzazione sa che ogni accordo che non includa garanzie solide la consegna in una posizione di debolezza irreversibile.

<strong>La situazione umanitaria sul campo</strong>
Oltre 2,1 milioni di persone restano sfollate. Le agenzie ONU stimano che il 70% delle infrastrutture civili di Gaza sia distrutto. L'OMS segnala rischio concreto di carestia in diverse aree del nord. Ogni giorno di ritardo nell'accordo ha un costo umano immediato e misurabile in termini di morti, malnutrizione e collasso del sistema sanitario.

<strong>Il ruolo degli attori regionali</strong>
Egitto e Qatar si sono guadagnati un ruolo di mediatori indispensabili, con una credibilità che né gli USA né l'Europa riescono a replicare con entrambe le parti. La Giordania e l'Arabia Saudita spingono per una soluzione che non escluda prospettive di governance civile palestinese nel post-conflitto. Il dossier si intreccia direttamente con la normalizzazione dei rapporti tra Israele e Arabia Saudita, che rimane l'obiettivo strategico di lungo periodo degli USA nella regione.`,
    source: 'Al Jazeera',
    url: 'https://www.aljazeera.com',
    time: '4 ore fa',
    tags: ['Gaza', 'Israele', 'Hamas', 'cessate-il-fuoco', 'ostaggi']
  },
  {
    id: 7,
    cat: 'ai',
    title: 'GPT-5 supera i medici nei test diagnostici: lo studio di Stanford',
    summary: 'Un paper su Nature Medicine mostra che GPT-5 raggiunge il 92% di accuratezza diagnostica su casi clinici complessi, superando la media dei medici generalisti. Restano però limiti importanti su casi rari.',
    body: `Uno studio peer-reviewed pubblicato su Nature Medicine ha valutato le capacità diagnostiche di un modello linguistico di nuova generazione su un dataset di 5.000 casi clinici reali anonimizzati, prodotto in collaborazione con quattordici ospedali universitari negli Stati Uniti e in Europa.

<strong>La metodologia</strong>
I ricercatori hanno sottoposto gli stessi casi clinici a gruppi di medici generalisti, specialisti e al modello AI in condizioni controllate. I casi includevano patologie comuni, sindromi rare e presentazioni atipiche che storicamente causano errori diagnostici anche a professionisti esperti. Ogni diagnosi è stata confrontata con la diagnosi definitiva certificata dal team clinico trattante.

<strong>I risultati principali</strong>
Il modello ha raggiunto il 92,3% di accuratezza complessiva, contro l'84,7% dei generalisti e il 90,1% degli specialisti di area. La performance cala al 78% per le malattie rare, dove la scarsità di dati di addestramento pesa in modo evidente. Il modello eccelle particolarmente nella sintesi di quadri clinici complessi e nella generazione di diagnosi differenziali strutturate.

<strong>Le implicazioni cliniche</strong>
Gli autori sottolineano con forza che il modello non sostituisce il medico: manca della capacità di esaminare fisicamente il paziente, raccogliere anamnesi contestuale non strutturata e gestire la relazione terapeutica. Il valore clinico è nel triage, nel supporto alla diagnosi differenziale, nella sintesi di documentazione clinica complessa e nell'identificazione di combinazioni di sintomi rare che un singolo professionista potrebbe non aver mai incontrato nella propria carriera.

<strong>Le critiche metodologiche</strong>
Alcuni ricercatori contestano che i casi clinici scritti in inglese accademico, già strutturati e completi, favoriscano artificialmente un modello linguistico rispetto alla pratica clinica reale. Le cartelle cliniche reali sono spesso frammentate, incomplete, ambigue e scritte in lingue diverse — un contesto molto più difficile per qualsiasi sistema AI.

<strong>Il quadro regolatorio</strong>
In Europa, l'AI Act classifica i sistemi AI in ambito medico come "ad alto rischio", richiedendo certificazione, supervisione umana obbligatoria e trasparenza sugli errori. L'adozione clinica sarà lenta, vigilata e probabilmente limitata ai contesti in cui il beneficio rispetto al rischio è più chiaro: radiologia, patologia e supporto al triage in pronto soccorso.`,
    source: 'Nature Medicine',
    url: 'https://www.nature.com/nm',
    time: '6 ore fa',
    tags: ['AI', 'medicina', 'GPT-5', 'diagnostica', 'Stanford']
  },
  {
    id: 8,
    cat: 'ai',
    title: 'AI Act UE: in vigore, prime sanzioni possibili dal 2027',
    summary: "Il regolamento europeo sull'intelligenza artificiale è ora pienamente operativo. Le aziende hanno 24 mesi per adeguarsi. Violazioni rischiano multe fino al 7% del fatturato globale.",
    body: `L'AI Act europeo ha completato il suo iter legislativo ed è ora pienamente in vigore, segnando il primo sistema regolatorio globale completo sull'intelligenza artificiale. È un momento storico: per la prima volta una grande giurisdizione prova a regolare non solo gli usi ma le caratteristiche stesse dei sistemi AI, prima che causino danni e non dopo.

<strong>La struttura del regolamento</strong>
L'AI Act adotta un approccio basato sul rischio, suddividendo i sistemi AI in quattro categorie: rischio inaccettabile (vietati, come i sistemi di social scoring e la manipolazione subliminale), alto rischio (regolamentati con requisiti stringenti), rischio limitato (obblighi di trasparenza, come i chatbot che devono dichiararsi tali) e rischio minimo (liberi). I grandi modelli linguistici rientrano in una categoria trasversale con obblighi specifici di disclosure sulle capacità e i rischi.

<strong>Chi è più colpito</strong>
OpenAI, Google DeepMind, Anthropic e Meta dovranno registrare i propri modelli nel database europeo entro 12 mesi e pubblicare sintesi tecniche sui dati di addestramento. I sistemi di riconoscimento biometrico in tempo reale in spazi pubblici sono de facto vietati, con eccezioni molto ristrette per le forze dell'ordine in casi di terrorismo o ricerca di persone scomparse.

<strong>Il meccanismo sanzionatorio</strong>
Le violazioni delle norme sui sistemi ad alto rischio rischiano multe fino al 3% del fatturato globale annuo. La commercializzazione di sistemi vietati sale fino al 7%. Per le PMI e startup sono previste riduzioni significative per evitare di soffocare l'innovazione emergente. L'applicazione è affidata alle autorità nazionali di vigilanza, coordinate dall'AI Office europeo.

<strong>Le critiche dell'industria</strong>
Confindustria Digitale e DigitalEurope lamentano che la regolazione penalizzi le startup europee rispetto ai giganti americani e cinesi, già dotati di strutture legali per la compliance. Il rischio concreto è che l'innovazione si sposti fuori dall'UE, che i modelli di frontiera siano sviluppati altrove e importati in Europa già certificati.

<strong>Il quadro globale e l'effetto Bruxelles</strong>
Mentre l'Europa regola, gli USA hanno scelto un approccio prevalentemente volontario basato su linee guida e accordi con l'industria. La Cina ha emanato regole settoriali su raccomandazioni algoritmiche e generative AI. L'AI Act potrebbe diventare un modello globale — il cosiddetto effetto Bruxelles che ha già funzionato con il GDPR sulla privacy — oppure trasformarsi in un handicap competitivo se altri blocchi economici resteranno più permissivi.`,
    source: 'Politico EU',
    url: 'https://www.politico.eu',
    time: '12 ore fa',
    tags: ['AI Act', 'UE', 'regolazione', 'OpenAI', 'compliance']
  },
  {
    id: 9,
    cat: 'economia-tech',
    title: 'NVIDIA supera Apple: prima azienda più capitalizzata al mondo',
    summary: 'Per la prima volta nella storia, NVIDIA raggiunge 3,4 trilioni di dollari di capitalizzazione, superando Apple. I chip per AI continuano a generare una domanda senza precedenti nei data center globali.',
    body: `NVIDIA ha chiuso la settimana con una capitalizzazione di mercato di 3,42 trilioni di dollari, superando Apple attestata a 3,38 trilioni e diventando l'azienda più preziosa mai quotata nei mercati pubblici globali. Il sorpasso era atteso dagli analisti da mesi, ma la velocità della crescita ha comunque sorpreso molti osservatori.

<strong>I driver della crescita</strong>
La domanda di chip H200 e Blackwell Ultra per i data center AI è cresciuta del 340% anno su anno. I margini operativi di NVIDIA hanno raggiunto il 67%, un record assoluto per un'azienda hardware di queste dimensioni. Ogni grande cloud provider — Amazon, Microsoft, Google, Meta — sta moltiplicando gli ordini e allungando i lead time, creando una situazione di scarsità strutturale.

<strong>Il contesto competitivo</strong>
AMD sta guadagnando quote di mercato con i chip MI350, ma resta lontana in termini di ecosistema software: CUDA, la piattaforma di programmazione GPU di NVIDIA, è ancora lo standard de facto su cui è costruita la maggior parte del software AI. Cambiare piattaforma costa tempo e risorse che pochi sviluppatori sono disposti a spendere. Intel è uscita dalla competizione nell'AI accelerated computing.

<strong>I chip proprietari delle Big Tech</strong>
Le grandi piattaforme tecnologiche stanno sviluppando chip proprietari — TPU di Google, Trainium di Amazon, chip custom di Meta — ma per ora questi acceleratori integrano piuttosto che sostituiscono NVIDIA nelle workload più pesanti. Il vantaggio di NVIDIA in termini di software, ecosistema e volume produttivo è ancora troppo grande per essere colmato rapidamente.

<strong>I rischi strutturali</strong>
Le restrizioni all'export verso la Cina riguardano circa il 15% del fatturato e continuano ad aumentare. Una potenziale bolla dei capex AI nei cloud provider — che stanno investendo cifre enormi con ritorni ancora incerti — è il principale rischio sistemico per i prossimi 12-18 mesi. Se i modelli AI non riuscissero a generare il valore economico atteso, la domanda di chip potrebbe rallentare bruscamente.

<strong>Le implicazioni geopolitiche</strong>
I chip NVIDIA sono diventati un asset strategico di primo piano: gli USA li usano come leva nelle relazioni con alleati e avversari, condizionando l'accesso alle tecnologie GPU più avanzate. Il controllo della supply chain dei semiconduttori è ormai esplicitamente questione di sicurezza nazionale, come dimostrano i CHIPS Act americano e il European Chips Act.`,
    source: 'Bloomberg',
    url: 'https://www.bloomberg.com',
    time: '3 ore fa',
    tags: ['NVIDIA', 'Apple', 'capitalizzazione', 'AI', 'chip']
  },
  {
    id: 10,
    cat: 'economia-tech',
    title: 'BCE taglia i tassi al 2%: inflazione sotto il target per la prima volta',
    summary: "La Banca Centrale Europea porta i tassi al 2%, il livello più basso dal 2022. L'inflazione scende all'1,8%, aprendo scenari nuovi per mutui, credito e crescita nell'Eurozona.",
    body: `Il Consiglio Direttivo della BCE ha deciso un ulteriore taglio da 25 punti base, portando il tasso sui depositi al 2,0%. È la quarta riduzione consecutiva di questo ciclo di allentamento monetario, avviato a metà 2024 dopo il picco inflazionistico del 2022-2023. La mossa era largamente attesa dai mercati ma il comunicato ha sorpreso per il tono più cauto del previsto sulle prospettive future.

<strong>Il contesto macro</strong>
L'inflazione core nell'Eurozona è scesa all'1,8%, sotto il target del 2% per la prima volta dal 2021. La crescita del PIL dell'area euro rimane debole: 0,4% nel Q1 2026, con la Germania ancora in territorio di stagnazione tecnica. Il mercato del lavoro resta sorprendentemente solido, con la disoccupazione al 6,2%, il livello più basso degli ultimi vent'anni.

<strong>Effetti su mutui e credito</strong>
I tassi sui mutui a tasso variabile scenderanno nelle prossime settimane seguendo il calo dell'Euribor. L'Euribor 3 mesi è già al 2,1%. Per un mutuo medio italiano da 200.000 euro a 20 anni, la riduzione mensile della rata è stimata in circa 65 euro rispetto ai livelli di un anno fa, con un risparmio annuo di circa 800 euro. Chi ha mutui a tasso fisso non beneficia direttamente, ma le nuove erogazioni saranno più convenienti.

<strong>Implicazioni per le imprese tech</strong>
Il costo del capitale più basso facilita il finanziamento dei data center e dei progetti di espansione AI in Europa. Le startup tech europee potrebbero trovare condizioni di funding più favorevoli nel secondo semestre 2026, dopo due anni di venture capital molto selettivo. Il private equity torna a guardare con interesse alle acquisizioni nel settore software.

<strong>Il rischio di deflazione e i limiti della politica monetaria</strong>
Alcuni membri del board hanno espresso cautela: con il tasso reale vicino allo zero, la BCE ha meno spazio di manovra in caso di nuovi shock esogeni — energetici, geopolitici o finanziari. Lagarde ha esplicitamente segnalato che le prossime decisioni dipenderanno in modo cruciale dai dati di inflazione e occupazione di maggio.

<strong>La risposta dei mercati</strong>
I titoli bancari europei hanno perso terreno nella giornata del comunicato, poiché tassi più bassi comprimono i margini di interesse netti. I BTP italiani si sono apprezzati con un calo dello spread BTP-Bund verso i 110 punti base. L'euro si è leggermente indebolito sul dollaro, riflettendo l'attesa che la Fed mantenga i tassi più alti più a lungo rispetto alla BCE.`,
    source: 'Financial Times',
    url: 'https://www.ft.com',
    time: '7 ore fa',
    tags: ['BCE', 'tassi', 'inflazione', 'mutui', 'Eurozona']
  }
];
