# Audit di sicurezza — 19 ottobre 2026

Revisione dei sorgenti con la skill Cloudflare `security-audit`, verifica indipendente dei candidati e fixture locali senza rete, credenziali o servizi reali.

Correzioni:

- I feed RSS usano lo stesso controllo dei redirect e delle destinazioni pubbliche delle pagine degli articoli. Una risposta di un editore non può più selezionare direttamente un indirizzo privato tramite redirect.
- Il downloader limita i byte decodificati prima del parsing anche per RSS, inclusi corpi senza Content-Length o con lunghezza dichiarata inferiore a quella reale. Chiude le risposte su ogni uscita e prosegue con le altre fonti.

Regressioni in `tests/test_download_security.py`: redirect privati/fuori editore, limiti effettivi e dichiarati, risposte chiuse, feed rifiutati mai passati al parser. Le prove mostrano il comportamento locale; non dimostrano compromissione di servizi interni o esaurimento delle risorse in produzione.

Verifica ancora necessaria: il rate limiter AI è una Map per istanza. La prova con provider simulato conferma contatori indipendenti; restano da osservare scaling, normalizzazione degli IP e limiti condivisi/spesa del deployment. Nessuna nuova risorsa esterna è stata attivata.

Limiti: nessun probe live, nessuna verifica delle impostazioni effettive del provider, nessun audit esaustivo di advisory transitivi o segreti nella cronologia. Il controllo DNS precede la connessione: il pinning degli indirizzi o un filtro egress costituiscono ulteriore hardening contro DNS ostile degli editori consentiti.

Verifica locale: `python -m unittest discover -s tests -p 'test_*.py'` e `node --test tests/test_api.js`, con dipendenze già disponibili in ambiente isolato. Le versioni Python locali sono precedenti ai pin di `requirements.txt`; la CI verifica l’ambiente dichiarato.
