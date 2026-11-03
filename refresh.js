(function () {
  'use strict';
  var button = document.getElementById('refreshBtn');
  var status = document.getElementById('feedStatus');
  var timer = document.getElementById('refreshTimer');
  var originalLabel = button.getAttribute('aria-label');
  var baseline = Number(typeof NEWS_TIMESTAMP === 'undefined' ? 0 : NEWS_TIMESTAMP);
  var deadline = 0, after = 0, polling = null;

  function message(text) {
    status.className = 'feed-status';
    status.textContent = text;
    timer.textContent = 'Aggiornamento in corso';
  }
  function finish(text) {
    window.clearTimeout(polling);
    button.disabled = false;
    button.removeAttribute('aria-busy');
    button.setAttribute('aria-label', originalLabel);
    status.textContent = text;
    timer.textContent = 'Aggiorna notizie';
  }
  async function request(url, options) {
    var response = await fetch(url, Object.assign({ cache: 'no-store', signal: AbortSignal.timeout(15000) }, options));
    var data = await response.json();
    if (!response.ok && !(response.status === 429 && data.status === 'cooldown')) throw new Error(data.error || 'Aggiornamento non riuscito. Riprova.');
    return data;
  }
  async function loadPublished() {
    var data = await request('/news.json?t=' + Date.now());
    if (Number(data.timestamp) <= baseline) return false;
    var url = new URL(location.href);
    url.searchParams.set('t', String(Date.now()));
    location.replace(url.href);
    return true;
  }
  async function poll() {
    try {
      if (await loadPublished()) return;
      if (Date.now() >= deadline) return finish('L’aggiornamento sta richiedendo più tempo del previsto. Riprova tra qualche minuto.');
      var data = await request('/api/refresh?after=' + after);
      if (data.status === 'failed') return finish('La raccolta delle notizie non è riuscita. Riprova più tardi.');
      message(data.status === 'publishing' ? 'Raccolta completata. Pubblicazione delle nuove notizie…' :
        data.status === 'running' ? 'Raccolta delle notizie in corso…' : 'Aggiornamento richiesto. Attendo l’avvio…');
      polling = window.setTimeout(poll, 15000);
    } catch (_) {
      finish('Non riesco a verificare l’aggiornamento. Controlla la connessione e riprova.');
    }
  }
  button.addEventListener('click', async function () {
    if (button.disabled) return;
    button.disabled = true;
    button.setAttribute('aria-busy', 'true');
    button.setAttribute('aria-label', 'Aggiornamento in corso');
    message('Verifico se sono disponibili nuove notizie…');
    try {
      if (await loadPublished()) return;
      var data = await request('/api/refresh', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: '{}' });
      if (data.status === 'cooldown' && data.previousStatus !== 'publishing') {
        return finish((data.previousStatus === 'ready' ? 'Le notizie sono già aggiornate. Nuova raccolta tra ' : 'Aggiornamento già tentato. Riprova tra ') + Math.ceil(data.retryAfter / 60) + ' minuti.');
      }
      after = data.after;
      deadline = Date.now() + 20 * 60 * 1000;
      message('Aggiornamento in corso. Le nuove notizie appariranno automaticamente.');
      polling = window.setTimeout(poll, 1500);
    } catch (error) {
      finish(error.message || 'Aggiornamento non riuscito. Riprova.');
    }
  });
}());
