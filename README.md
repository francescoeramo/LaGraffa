# LaGraffa

LaGraffa è una rassegna di notizie italiane e internazionali aggiornata ogni ora. Aggrega feed RSS pubblici, mostra estratti attribuiti alle testate e rimanda sempre all’articolo originale. Vercel serve il sito statico e l’API server-side per le sintesi AI.

## Funzioni

- sezioni Italia, Mondo, Conflitti, Tecnologia ed Economia;
- ricerca testuale, filtro per fonte e ordinamento per data o rilevanza;
- preferiti, articoli letti e coda “Leggi dopo” salvati solo nel browser;
- indicatore dell’ultimo aggiornamento e avviso quando i dati diventano obsoleti;
- link diretti e condivisibili alle singole notizie;
- sintesi o traduzione AI su richiesta, con rimando esplicito alla fonte.

## Criteri editoriali

La selezione conserva prima la freschezza e poi considera pertinenza e priorità delle fonti italiane. Ogni testata ha un limite per categoria. URL canonici, similarità del testo e filtri tematici riducono duplicati, offerte commerciali, gossip e contenuti fuori linea.

I feed generalisti vengono classificati dal contenuto; quelli verticali conservano la propria sezione. Gli ID derivano dall’URL o dal GUID del feed, quindi preferiti e letture restano associati alla stessa notizia dopo gli aggiornamenti.

Le fonti configurate si trovano in `scripts/fetch_news.py`. Gli URL non più pubblicati o non accessibili in modo affidabile non vengono mantenuti solo per aumentarne il numero.

## Aggiornamento feed

Il workflow `.github/workflows/fetch_news.yml` esegue `scripts/fetch_news.py` ogni ora. Ogni richiesta usa timeout, user-agent identificabile e controllo dello stato HTTP. Il file esistente non viene sovrascritto se la raccolta produce meno della soglia minima di articoli.

`news.js` include data di generazione, numero di fonti raggiunte e nomi delle fonti fallite. L’interfaccia mostra questi dati e segnala ritardi superiori alle soglie previste. Il pulsante di aggiornamento ricarica soltanto l’ultima versione pubblicata: non avvia un workflow remoto.

## Sintesi AI e sicurezza

L’API accetta esclusivamente l’ID di una notizia presente nel `news.js` distribuito. Titolo, fonte e testo vengono letti lato server, impedendo l’uso dell’endpoint con testo arbitrario. Sono inoltre presenti controllo same-origin, rate limiting per IP, timeout del provider e istruzioni contro prompt injection.

Il modello configurato è `llama-3.3-70b-versatile` tramite Groq. Le sintesi sono automatiche e possono sbagliare; l’articolo originale resta la fonte autorevole.

## Sviluppo locale

1. Crea un ambiente Python e installa le dipendenze: `pip install -r requirements.txt`.
2. Copia `.env.example` in `.env` e inserisci `GROQ_API_KEY`.
3. Esegui `python scripts/fetch_news.py` per aggiornare i feed.
4. Usa `vercel dev` per provare insieme sito e API, oppure un server statico per la sola interfaccia.

Controlli disponibili:

```sh
python -m unittest discover -s tests -p 'test_*.py'
node --check app.js
node --check api/ai.js
node --test tests/test_api.js
```

## Deploy

Importa il repository in Vercel senza build command e configura `GROQ_API_KEY` in Production, Preview e Development. Gli header di sicurezza sono definiti in `vercel.json`; la chiave non viene mai esposta al browser.
