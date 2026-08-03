# LaGraffa

LaGraffa è una rassegna di notizie italiane e internazionali aggiornata ogni ora. Aggrega feed RSS pubblici, mostra anteprime attribuite alle testate e rimanda sempre all’articolo originale. Vercel serve il sito statico e l’API server-side per traduzioni e sintesi AI.

## Funzioni

- sezioni Italia, Mondo, Conflitti, Tecnologia ed Economia;
- ricerca testuale, filtro per fonte e ordinamento per data o rilevanza;
- preferiti, articoli letti e coda “Leggi dopo” salvati solo nel browser;
- indicatore dell’ultimo aggiornamento e avviso quando i dati diventano obsoleti;
- link diretti e condivisibili alle singole notizie;
- anteprime omogenee di 5-8 righe nella home e testo esteso solo nel lettore aperto con un clic;
- sintesi approfondita per le notizie italiane o traduzione integrale per quelle straniere, sempre su richiesta e con rimando esplicito alla fonte.

## Criteri editoriali

La selezione conserva prima la freschezza e poi considera pertinenza e priorità delle fonti italiane. Tra gli editori configurati ci sono anche Facta, Internazionale, Limes e Pagella Politica. Ogni testata ha un limite per categoria. URL canonici, similarità del testo e filtri tematici riducono duplicati, offerte commerciali, gossip e contenuti fuori linea.

I feed generalisti vengono classificati dal contenuto; quelli verticali conservano la propria sezione. La pipeline prova a estrarre il testo leggibile dalla pagina pubblica dell’editore, senza aggirare blocchi o paywall. La home ne mostra soltanto un’anteprima di massimo 560 caratteri; il testo esteso compare nel lettore dopo il clic. Se la pagina non è accessibile, resta la sintesi del feed, purché sia abbastanza informativa: gli elementi troppo corti vengono esclusi. Per gli editori di analisi richiesti la finestra arriva a sette giorni, così le pubblicazioni meno frequenti non spariscono dalla rassegna. Gli ID derivano dall’URL o dal GUID del feed, quindi preferiti e letture restano associati alla stessa notizia dopo gli aggiornamenti.

Le fonti configurate si trovano in `scripts/fetch_news.py`. Gli URL non più pubblicati o non accessibili in modo affidabile non vengono mantenuti solo per aumentarne il numero.

## Aggiornamento feed

Il workflow `.github/workflows/fetch_news.yml` esegue `scripts/fetch_news.py` ogni ora. Ogni richiesta usa timeout, user-agent identificabile e controllo dello stato HTTP. Il file esistente non viene sovrascritto se la raccolta produce meno della soglia minima di articoli.

`news.js` include data di generazione, numero di fonti raggiunte e nomi delle fonti fallite. L’interfaccia mostra questi dati e segnala ritardi superiori alle soglie previste. Il pulsante di aggiornamento ricarica soltanto l’ultima versione pubblicata: non avvia un workflow remoto.

## Sintesi AI e sicurezza

L’API accetta esclusivamente l’ID di una notizia presente nel `news.json` generato. Titolo, fonte e testo vengono letti lato server, senza valutare JavaScript e impedendo l’uso dell’endpoint con testo arbitrario. Le traduzioni brevi usano DeepL API Free quando `DEEPL_API_KEY` è configurata, altrimenti MyMemory; in questo percorso Groq non viene chiamato. Gli articoli lunghi e le sintesi approfondite continuano a usare Groq. L’output viene rifiutato se è troppo breve, perde troppi dati numerici o contiene metacommenti. Sono inoltre presenti controllo same-origin, validazione stretta del body, rate limiting per IP, timeout dei provider e istruzioni contro prompt injection.

Il modello configurato è `llama-3.3-70b-versatile` tramite Groq. Le sintesi sono automatiche e possono sbagliare; l’articolo originale resta la fonte autorevole.

## Autore e progetto

LaGraffa è un progetto di Francesco Eramo ed è disponibile su [lagraffa.vercel.app](https://lagraffa.vercel.app/). Segnalazioni, rettifiche e richieste di rimozione possono essere aperte nella sezione Issues del repository.
