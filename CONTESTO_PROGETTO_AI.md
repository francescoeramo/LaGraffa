# LaGraffa — contesto completo per una nuova AI

> Documento di handoff operativo. Consegnare questo file a un'altra AI insieme al repository, oppure incollarlo all'inizio di una nuova chat. Le informazioni sullo stato corrente sono uno snapshot del **13 agosto 2026**: prima di modificare, pubblicare o descrivere come attuali feed, dipendenze, workflow, provider e produzione, verificarli nuovamente.

## 1. Istruzioni iniziali per l'AI

Stai lavorando su **LaGraffa**, una rassegna di notizie italiane e internazionali creata da Francesco Eramo. Prima di intervenire:

1. leggi questo documento e `README.md`;
2. esegui `git status --short --branch` e non sovrascrivere modifiche già presenti dell'utente;
3. ispeziona i file direttamente coinvolti, senza assumere che questo snapshot sia ancora aggiornato;
4. non leggere, stampare, committare o riportare il contenuto di `.env`;
5. non modificare manualmente `news.js`, `news.json` o il parametro `news.js?t=...` in `index.html`: sono generati dalla pipeline;
6. dopo ogni intervento esegui i controlli indicati nella sezione 12;
7. per azioni esterne o potenzialmente distruttive — push, merge, cancellazione di branch, deploy, modifica di variabili o domini — verifica prima target, autenticazione e stato corrente, e agisci solo se richiesto;
8. non dichiarare risolto o pubblicato qualcosa senza una verifica proporzionata: test locali per il codice, stato del workflow per GitHub Actions e risposta HTTP/DOM reale per la produzione.

## 2. Identità, obiettivo e vincoli editoriali

- **Nome:** LaGraffa.
- **Repository GitHub:** `https://github.com/francescoeramo/LaGraffa`.
- **URL pubblico configurato:** `https://lagraffa.vercel.app/` — il dominio corretto è senza trattino.
- **Autore:** Francesco Eramo.
- **Lingua principale dell'interfaccia:** italiano.
- **Scopo:** aggregare feed RSS pubblici, selezionare contenuti informativi, mostrare anteprime attribuite e rimandare sempre all'articolo originale.
- **Categorie pubbliche:** Italia, Mondo, Conflitti, Tecnologia, Economia, più le raccolte locali Preferiti e Leggi dopo.
- **Principio editoriale:** freschezza prima, poi pertinenza e priorità delle fonti italiane, mantenendo varietà tra editori.
- **Fonte autorevole:** l'articolo originale, non la sintesi del feed e non l'elaborazione AI.
- **Estrazione:** si usa solo testo accessibile dalla pagina pubblica dell'editore; non si aggirano blocchi o paywall.
- **Contenuti esclusi:** offerte, promozioni, gossip, consumer news poco pertinenti e duplicati.
- **Crediti media:** se foto o video non vengono ripubblicati, rimuovere dalla pipeline i relativi credit tecnici; preservare invece le normali frasi giornalistiche che parlano di fotografie o video.

Decisioni di prodotto da non invertire senza una richiesta esplicita:

- usare ovunque `https://lagraffa.vercel.app`, senza `-`, inclusi canonical, Open Graph, sitemap, robots, documentazione e user-agent;
- mantenere nel footer “Un progetto di Francesco Eramo” e il collegamento GitHub con icona;
- non reintrodurre la vecchia sezione “Metodo Editoriale” nel footer;
- mantenere il README pubblico descrittivo e trasparente, senza trasformarlo in una guida estesa per clonare, testare e distribuire autonomamente il progetto;
- non presentare le elaborazioni AI come verità o sostituti della fonte.

## 3. Stato del repository allo snapshot

- **Percorso locale:** `/home/fra/Documents/GitHub/notizie/webAppNotizie`.
- **Remote `origin`:** `https://github.com/francescoeramo/LaGraffa.git`.
- **Branch:** `main`, allineato a `origin/main` al momento della verifica.
- **Commit HEAD verificato:** `a0435cd` — `Correggi la validazione delle traduzioni`.
- **Commit precedente rilevante:** `a31037e` — `Prepara LaGraffa per la produzione`.
- **Working tree prima della creazione di questo file:** pulito.
- **Snapshot dati:** `news.json` conteneva 39 articoli in tutte e cinque le categorie editoriali. Questo numero cambia a ogni raccolta.

Il file `.env` e l'ambiente `.venv/` possono esistere localmente ma sono ignorati da Git. Non considerarli parte distribuibile del progetto.

## 4. Stack e architettura

Il progetto non usa framework frontend, bundler o `package.json`.

- **Frontend:** HTML, CSS e JavaScript vanilla.
- **Dati client:** `news.js`, caricato come script statico e contenente `NEWS`, `FEED_META`, `RSS_SOURCES` e `NEWS_TIMESTAMP`.
- **Dati server:** `news.json`, JSON rigoroso letto dall'API senza eseguire JavaScript.
- **Pipeline editoriale:** Python 3.12, `feedparser`, `requests`, `trafilatura`.
- **API serverless:** CommonJS Node.js in `api/ai.js` su Vercel.
- **Hosting:** Vercel per file statici e funzione `/api/ai`.
- **Automazione:** GitHub Actions per qualità e aggiornamento orario dei feed.

Flusso principale:

```text
Feed RSS pubblici
       |
       v
scripts/fetch_news.py
  - scarica e classifica
  - filtra e deduplica
  - prova a estrarre testo pubblico
  - genera metadati e snapshot
       |
       +--> news.js ----> index.html + app.js ----> browser
       |
       +--> news.json --> api/ai.js --> DeepL / MyMemory / Groq
                              ^
                              |
                 POST { articleId } dal browser
```

## 5. Mappa dei file

| File | Responsabilità | Note operative |
|---|---|---|
| `index.html` | Struttura della home, SEO/social metadata, navigazione, filtri, modale lettore, footer | Il parametro cache-busting di `news.js` viene aggiornato dalla pipeline |
| `style.css` | Tema chiaro/scuro, layout responsive, schede, modale, accessibilità visiva | Nessuna risorsa font esterna; CSP consente solo stili/font locali |
| `app.js` | Stato UI, filtri, ricerca, ordinamento, preferiti, letti, Leggi dopo, modale, condivisione, chiamata API | I contenuti dinamici vengono inseriti con escaping o `textContent`; preservare questa difesa |
| `news.js` | Dataset destinato al browser | **Generato automaticamente; non modificare a mano** |
| `news.json` | Dataset destinato all'API server-side | **Generato automaticamente; non modificare a mano** |
| `scripts/fetch_news.py` | Fonti RSS, selezione editoriale, sicurezza URL, estrazione, generazione dataset | È la fonte di verità per feed, categorie e regole di raccolta |
| `api/ai.js` | Endpoint Vercel per sintesi e traduzioni | Accetta solo un ID già presente in `news.json` |
| `tests/test_fetch_news.py` | Test pipeline, classificazione, URL/SSRF, pulizia, preview e schema | 27 test allo snapshot |
| `tests/test_api.js` | Test metodo/origine/body, lookup server-side, provider, chunking e validazione output | Usa il test runner Node integrato |
| `privacy.html` | Informativa privacy e note legali | `noindex,follow`; aggiornare data e testo se cambiano trattamenti/provider |
| `vercel.json` | Durata funzione, header di sicurezza e cache | API `no-store`; dati `must-revalidate`; CSP stretta |
| `.github/workflows/fetch_news.yml` | Raccolta oraria, test, generazione e commit automatico | Scrive direttamente su `main` con il bot |
| `.github/workflows/quality.yml` | Test a ogni push su `main` e pull request | Controlla Python, sintassi JS e API Node |
| `.github/dependabot.yml` | Aggiornamenti settimanali pip e GitHub Actions | Massimo 5 PR aperte per ecosistema |
| `.env.example` | Nomi delle variabili necessarie | Non contiene chiavi reali |
| `requirements.txt` | Dipendenze Python bloccate | Allo snapshot: feedparser 6.0.14, requests 2.34.2, trafilatura 2.2.0 |
| `manifest.webmanifest`, `icon-192.png`, `icon-512.png` | Installabilità PWA e icone | `display: standalone`, lingua italiana |
| `og.png` | Immagine Open Graph | Dimensioni dichiarate: 1200×630 |
| `robots.txt`, `sitemap.xml` | Indicizzazione | Devono mantenere il dominio pubblico corretto |

## 6. Funzionamento del frontend

`app.js` legge l'array globale `NEWS`, applica un ulteriore filtro prudenziale contro contenuti promozionali e gestisce:

- categorie desktop e mobile;
- ricerca su titolo, sommario e fonte;
- filtro per editore;
- ordinamento per data o rilevanza;
- hero con la prima notizia del risultato corrente;
- schede e modale di lettura;
- URL condivisibili nel formato `#article=<id>`;
- aggiornamento dei tempi relativi ogni minuto;
- avvisi quando il feed è in ritardo o alcune fonti sono fallite;
- tema chiaro/scuro;
- focus trap, chiusura con Escape, ritorno del focus e attributi ARIA della modale.

Stato salvato soltanto nel browser tramite `localStorage`:

- `lagraffaFavoritesV2` — preferiti;
- `lagraffaReadLaterV2` — Leggi dopo;
- `lagraffaReadV2` — articoli letti;
- `lagraffaTheme` — tema;
- `lagraffaAiV1:<id>` — cache locale della sintesi/traduzione AI.

Gli ID ammessi sono hash esadecimali di 20 caratteri e sono stabili rispetto all'URL/GUID, così preferiti e letture sopravvivono agli aggiornamenti. Non cambiare l'algoritmo degli ID senza pianificare una migrazione o accettare la perdita delle associazioni locali.

Il pulsante di aggiornamento ricarica i file già pubblicati con cache busting: **non** avvia la GitHub Action.

## 7. Pipeline RSS e selezione editoriale

### Fonti configurate allo snapshot

- Italia/politica e società: ANSA, AGI, Facta, Pagella Politica, Valigia Blu.
- Mondo/geopolitica: Internazionale, Limes, BBC World, The Economist, El Pais.
- Conflitti: Al Jazeera.
- Tecnologia/AI: The Verge, Wired IT, TechCrunch, Il Post Tech.
- Economia: Il Sole 24 Ore, Bloomberg Tech, Financial Times, The Economist Ec.

Gli URL completi e i domini permessi sono definiti in `RSS_SOURCES` e `PUBLISHER_DOMAINS` dentro `scripts/fetch_news.py`. Non aggiungere una fonte se feed e dominio pubblico non sono realmente accessibili e affidabili.

### Regole importanti

- Legge fino a 40 elementi per feed.
- Finestra normale: 48 ore.
- Finestra per Facta, Internazionale, Limes e Pagella Politica: 168 ore.
- Massimo 20 articoli per categoria e 3 per fonte in ciascuna categoria.
- Soglia minima complessiva: 10 articoli; sotto questa soglia la pipeline fallisce e preserva il dataset esistente.
- Preview: obiettivo minimo 280 caratteri, massimo rigido 560; elementi non arricchiti con preview sotto 220 caratteri vengono scartati.
- Testo articolo: massimo 50.000 caratteri.
- Estrazione parallela: 6 worker.
- Download HTML: massimo 5 MB, massimo 5 redirect, timeout connessione/lettura 5/20 secondi.
- User-agent identificabile: `LaGraffa/1.0 (+https://lagraffa.vercel.app)`.

### Sicurezza della raccolta

La pipeline canonicalizza gli URL, rimuove tracking e frammenti, rifiuta schemi non HTTP(S), credenziali negli URL, localhost, indirizzi privati/non globali e redirect fuori dai domini dell'editore. Questa è una difesa SSRF: non indebolirla per far passare un singolo feed.

### Classificazione e qualità

- I feed verticali restano nella loro categoria predefinita.
- I feed generalisti possono essere riclassificati in base a segnali forti.
- Regole specifiche impediscono che incidenti, incendi, eventi storici o metafore di guerra finiscano automaticamente in “Conflitti”.
- I duplicati sono riconosciuti tramite URL canonico e similarità dei token, con soglia più severa tra fonti diverse.
- Si scartano contenuti promozionali, gossip, sport e recensioni consumer non coerenti.
- Boilerplate, etichette di estrazione, titoli ripetuti, footer editoriali e credit di media non ripubblicati vengono rimossi.
- Se la pagina pubblica non fornisce testo sufficiente, si mantiene la sintesi RSS solo se abbastanza informativa.

### Output dati

`news.js` espone:

```js
var NEWS_TIMESTAMP = 1234567890;
const FEED_META = { /* stato raccolta */ };
const RSS_SOURCES = [ /* fonti */ ];
const NEWS = [ /* articoli */ ];
```

`news.json` usa questo schema concettuale:

```json
{
  "timestamp": 1234567890,
  "meta": {
    "successful_sources": 0,
    "failed_sources": [],
    "total_sources": 0,
    "total_articles": 0,
    "full_text_articles": 0
  },
  "articles": [
    {
      "id": "20-caratteri-hex",
      "cat": "politica-italiana",
      "title": "Titolo",
      "summary": "Sintesi RSS",
      "preview": "Anteprima fino a 560 caratteri",
      "body": "Testo feed o testo pubblico estratto",
      "content_status": "full oppure feed",
      "source": "Editore",
      "url": "https://...",
      "pub_ts": 1234567890,
      "published_at": "ISO-8601 oppure null",
      "language": "it, en o es",
      "score": 1
    }
  ]
}
```

## 8. API AI: contratto, provider e validazioni

Endpoint: `POST /api/ai`.

Body consentito, senza campi aggiuntivi:

```json
{ "articleId": "356afa087879d288d9b5" }
```

L'API non accetta testo libero dal client. Cerca l'ID in `news.json`, legge server-side titolo, fonte e corpo, ripulisce il testo e sceglie il percorso:

- articolo straniero (`en`/`es`) fino a 1.400 caratteri: DeepL API Free se configurata, altrimenti MyMemory; se DeepL fallisce prova MyMemory;
- articolo straniero più lungo e con `content_status: full`: traduzione integrale via Groq;
- articolo italiano con testo completo sufficiente: sintesi giornalistica approfondita via Groq;
- testo o stato insufficienti: risposta 422, senza generazione approssimativa.

Provider e limiti allo snapshot:

- Groq endpoint compatibile OpenAI, modello `llama-3.3-70b-versatile`, temperatura 0;
- timeout Groq 22 secondi;
- timeout provider breve 12 secondi;
- output massimo interno 40.000 caratteri;
- input massimo interno 45.000 caratteri;
- rate limit applicativo: 12 richieste per IP ogni 15 minuti;
- body HTTP massimo: 1.024 byte;
- funzione Vercel: durata massima 30 secondi.

Variabili ambiente:

```dotenv
GROQ_API_KEY=...
DEEPL_API_KEY=...   # opzionale; DeepL API Free
```

Senza `GROQ_API_KEY`, le traduzioni brevi possono funzionare tramite DeepL/MyMemory, ma sintesi italiane e traduzioni lunghe restituiscono servizio non configurato. Le chiavi reali devono stare soltanto in `.env` locale o nelle variabili del progetto Vercel.

Difese API da preservare:

- solo POST e `Content-Type: application/json`;
- origine HTTPS same-origin, inclusi controlli `Origin`, host e `Sec-Fetch-Site`;
- body con la sola proprietà `articleId`;
- ID esadecimale di 20 caratteri e lookup obbligatorio nel dataset;
- rate limit per IP e `Retry-After` su 429;
- prompt che tratta il contenuto dell'articolo come non attendibile come istruzione;
- output JSON obbligatorio;
- rifiuto di output troppo corti, metacommenti e perdita eccessiva di valori numerici;
- nessuna esecuzione di `news.js`: il server legge `news.json` con `JSON.parse`.

Nota: il rate limit è in memoria nel singolo processo serverless; non è un limite globale distribuito tra tutte le istanze.

## 9. Sicurezza, privacy e aspetti legali

`vercel.json` applica CSP e header di sicurezza, tra cui HSTS, anti-framing, `nosniff`, referrer policy, COOP/CORP e Permissions Policy. La CSP permette risorse solo same-origin, immagini locali/data URI e nessun oggetto, frame o endpoint esterno dal browser. Le chiamate ai provider AI avvengono server-side.

Politica cache:

- `/api/*`: `Cache-Control: no-store`;
- `news.js` e `news.json`: `public, max-age=0, must-revalidate`.

Il sito non ha account, pubblicità, profilazione o cookie pubblicitari. Preferiti, letture, tema e cache AI restano nel browser. Quando l'utente richiede un'elaborazione, il testo pubblico dell'articolo viene inviato server-side a Groq, DeepL o MyMemory; i dati tecnici e l'IP possono essere trattati dalla piattaforma per funzionamento e sicurezza.

Se cambiano dati raccolti, local storage, provider, analytics, cookie, autenticazione o finalità, aggiornare anche `privacy.html` e la data “Ultimo aggiornamento”.

## 10. GitHub Actions, Dependabot e deploy

### Aggiornamento notizie

`.github/workflows/fetch_news.yml`:

- trigger cron `0 * * * *` e manuale `workflow_dispatch`;
- una sola esecuzione nel gruppo `fetch-rss-news`, senza cancellare quella in corso;
- runner Ubuntu, timeout job 20 minuti;
- Python 3.12 con cache pip;
- installazione requirements, test Python e Node, esecuzione della pipeline;
- commit di `news.js`, `news.json` e `index.html` solo se cambiano;
- `git pull --rebase origin main` e push con `github-actions[bot]`;
- messaggio automatico: `chore: aggiornamento automatico notizie RSS [skip ci]`.

Poiché il workflow scrive direttamente su `main`, prima di cambiare la strategia Git o il workflow considerare collisioni con push contemporanei. Un errore “job was not acquired by Runner of type hosted” indica normalmente un problema di infrastruttura GitHub-hosted, non un bug di `fetch_news.py`: controllare stato del servizio e log prima di modificare codice.

### Qualità

`.github/workflows/quality.yml` gira su pull request e push a `main`, installa le dipendenze ed esegue test Python, sintassi JavaScript e suite API.

### Dependabot

Controlla ogni settimana dipendenze pip e GitHub Actions, con massimo cinque PR aperte per ecosistema. I branch `dependabot/...` sono temporanei e isolano gli aggiornamenti prima del merge. Se più PR partono dalla stessa base e confliggono, preservare l'unione delle versioni compatibili invece di scegliere un lato in blocco. Prima di cancellare branch, verificare che i commit siano contenuti in `main`.

### Vercel

Vercel serve la root come sito statico e riconosce `api/ai.js` come funzione serverless. Il dominio configurato nei file è `lagraffa.vercel.app`. Prima di dichiarare un deploy riuscito verificare almeno:

1. deploy in stato Ready;
2. alias/dominio associato al progetto corretto;
3. risposta pubblica 200 della home e di `/privacy.html`;
4. caricamento reale di CSS, `news.js` e `app.js`;
5. assenza di errori console rilevanti;
6. chiamata `/api/ai` con un articolo adatto, se sono disponibili chiavi e il test è richiesto.

Non fidarsi soltanto dello stato del deploy o di un comando di ispezione dominio: verificare la risposta HTTP pubblica effettiva.

## 11. Sviluppo locale

Non c'è una fase di build. Per il solo frontend statico:

```bash
cd /home/fra/Documents/GitHub/notizie/webAppNotizie
python3 -m http.server 8000
```

Poi aprire `http://127.0.0.1:8000/`. Questo server non emula la funzione Vercel `/api/ai`.

Per preparare Python in un nuovo ambiente:

```bash
python3 -m venv .venv
.venv/bin/python -m pip install -r requirements.txt
```

Per usare l'API localmente con il runtime Vercel, installare/avviare la Vercel CLI secondo l'ambiente disponibile e configurare le variabili in `.env`; non committare `.env`. Verificare la documentazione corrente della CLI prima di fissare comandi o opzioni in automazioni.

Per rigenerare realmente le notizie, operazione che usa la rete e modifica file tracciati:

```bash
.venv/bin/python scripts/fetch_news.py
```

Prima di eseguirla, controllare lo stato Git. Dopo l'esecuzione verificare quantità, fonti fallite, diff di `news.js`, `news.json` e `index.html`, e non committare automaticamente se l'utente ha chiesto soltanto una diagnosi.

## 12. Controlli obbligatori

Suite completa usata nello snapshot:

```bash
.venv/bin/python -m unittest discover -s tests -p 'test_*.py'
node --check app.js
node --check api/ai.js
node --test tests/test_api.js
python -m json.tool news.json >/dev/null
git diff --check
```

Risultato verificato il 13 agosto 2026 prima di aggiungere questo documento:

- 27 test Python superati;
- sintassi di `app.js` e `api/ai.js` valida;
- suite Node completata senza errori;
- `news.json` valido;
- nessun errore di whitespace nel diff esistente.

Controlli aggiuntivi in base alla modifica:

- **UI/CSS/HTML:** avviare il sito, controllare desktop e mobile, tastiera, tema, filtri, modale e console;
- **pipeline:** eseguire test Python, poi una raccolta reale solo se autorizzata e verificare fonti/metadati/output;
- **API:** testare errori 400/403/415/422/429 e un successo senza stampare segreti;
- **privacy/sicurezza:** verificare CSP e header sul deploy reale;
- **workflow:** controllare YAML, log dell'esecuzione e commit prodotti;
- **deploy:** controllare URL pubblico e flusso end-to-end, non solo la build.

## 13. Rischi e limitazioni note

- Feed, URL degli editori e HTML delle pagine possono cambiare senza preavviso.
- L'estrazione può includere boilerplate o ripetizioni e va corretta in modo generale con test, non con modifiche manuali ai dataset generati.
- MyMemory è un fallback esterno con propri limiti; DeepL richiede una chiave; Groq è indispensabile per testi lunghi e sintesi.
- Le elaborazioni AI possono sbagliare: attribuzione e link originale devono restare visibili.
- Il rate limit in memoria può azzerarsi a un nuovo processo e non coordina istanze diverse.
- I test API usano il contenuto dello snapshot `news.json` per trovare almeno un articolo italiano completo e uno straniero breve; un dataset futuro molto diverso potrebbe richiedere fixture indipendenti.
- `news.json` contiene anche il testo usato dal server ed è un file statico pubblicabile; non inserirvi mai segreti o dati privati.
- La pipeline automatica committa dati su `main`, quindi può muovere il branch mentre un intervento locale è in corso.
- Il sito pubblico, i workflow e i provider sono stati descritti dai file e dallo storico del progetto; in questa sessione la verifica web diretta non è riuscita. Ricontrollarli live prima di considerarli attuali.

## 14. Metodo consigliato per modifiche future

1. Definire esattamente il comportamento richiesto e i file coinvolti.
2. Leggere implementazione, test e vincoli correlati.
3. Riprodurre il problema o creare un test che esponga il caso.
4. Fare la modifica minima coerente con l'architettura.
5. Non modificare output generati a mano.
6. Eseguire la suite completa e i controlli specifici.
7. Ispezionare `git diff --stat`, `git diff` e `git status`.
8. Separare chiaramente nel resoconto: modifiche fatte, test passati, verifiche esterne fatte e parti non verificate.
9. Committare, pushare o distribuire solo se richiesto, usando messaggi intenzionali e verificando il risultato remoto.

## 15. Prompt pronto per una nuova chat

Puoi accompagnare questo file con il seguente messaggio:

> Questo repository contiene LaGraffa. Leggi integralmente `CONTESTO_PROGETTO_AI.md` e `README.md`, poi controlla lo stato reale del repository prima di agire. Preserva le decisioni editoriali, di sicurezza, privacy e accessibilità descritte nel documento. Non leggere o esporre `.env`, non modificare manualmente i file dati generati e non eseguire push/deploy o altre azioni esterne se non richiesto. Se qualche informazione temporale è cambiata, usa lo stato corrente dei file e dei servizi e segnalalo. Alla fine riporta modifiche, test, verifiche esterne e qualsiasi parte rimasta non verificata.

