(function () {
  'use strict';

  const CAT_LABELS = {
    'politica-italiana': 'Politica IT',
    'geopolitica':       'Geopolitica',
    'conflitti':         'Conflitti',
    'ai':                'AI & Tech',
    'economia-tech':     'Economia',
    'preferiti':         '★ Preferiti'
  };

  const FAV_KEY   = 'ilPuntoFavorites';
  const THEME_KEY = 'ilPuntoTheme';
  const REFRESH_INTERVAL_MS = 60 * 60 * 1000;

  let activeCategory = 'all';
  let currentModalNews = null;
  let isTranslated = false;
  let translatedBody = '';
  let refreshCountdown = REFRESH_INTERVAL_MS / 1000;
  let countdownInterval = null;

  const favs = new Set(JSON.parse(localStorage.getItem(FAV_KEY) || '[]'));

  function saveFavs() { localStorage.setItem(FAV_KEY, JSON.stringify([...favs])); }
  function isFav(id) { return favs.has(id); }
  function toggleFav(id) {
    if (favs.has(id)) favs.delete(id); else favs.add(id);
    saveFavs();
    renderAll();
    if (currentModalNews && currentModalNews.id === id) updateModalFavBtn();
  }

  // DOM refs
  const grid         = document.getElementById('newsGrid');
  const heroSection  = document.getElementById('heroSection');
  const heroTitle    = document.getElementById('heroTitle');
  const heroSummary  = document.getElementById('heroSummary');
  const heroCat      = document.getElementById('heroCat');
  const heroTime     = document.getElementById('heroTime');
  const heroSource   = document.getElementById('heroSource');
  const heroReadBtn  = document.getElementById('heroReadBtn');
  const modalOverlay = document.getElementById('modalOverlay');
  const modalClose   = document.getElementById('modalClose');
  const modalTitle   = document.getElementById('modalTitle');
  const modalCat     = document.getElementById('modalCat');
  const modalSource  = document.getElementById('modalSource');
  const modalTime    = document.getElementById('modalTime');
  const modalBody    = document.getElementById('modalBody');
  const modalLink    = document.getElementById('modalLink');
  const modalFavBtn  = document.getElementById('modalFavBtn');
  const translateBtn = document.getElementById('translateBtn');
  const modalSourcesBlock = document.getElementById('modalSourcesBlock');
  const themeToggle  = document.getElementById('themeToggle');
  const refreshBtn   = document.getElementById('refreshBtn');
  const refreshTimer = document.getElementById('refreshTimer');
  const catBtns      = document.querySelectorAll('.cat-btn');

  // Tema
  applyTheme(localStorage.getItem(THEME_KEY) || 'light');
  themeToggle.addEventListener('click', () => {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next); localStorage.setItem(THEME_KEY, next);
  });
  function applyTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    themeToggle.textContent = t === 'dark' ? '☀️' : '🌙';
  }

  // Filtri
  catBtns.forEach(btn => btn.addEventListener('click', () => {
    activeCategory = btn.dataset.cat;
    catBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderAll();
  }));

  // Refresh: ricarica la pagina per prendere il news.js aggiornato dalla Action
  refreshBtn.addEventListener('click', () => {
    resetCountdown();
    location.reload();
  });

  // Countdown
  function formatCountdown(sec) {
    const m = Math.floor(sec / 60), s = sec % 60;
    return m > 0 ? `Aggiorn. tra ${m} min` : `Aggiorn. tra ${s}s`;
  }
  function resetCountdown() {
    refreshCountdown = REFRESH_INTERVAL_MS / 1000;
    if (countdownInterval) clearInterval(countdownInterval);
    countdownInterval = setInterval(() => {
      refreshCountdown--;
      if (refreshTimer) refreshTimer.textContent = formatCountdown(refreshCountdown);
      if (refreshCountdown <= 0) { resetCountdown(); location.reload(); }
    }, 1000);
  }
  resetCountdown();

  // Rilevamento lingua (semplice euristica sui caratteri non-ASCII comuni in italiano)
  function isItalian(text) {
    const itWords = /\b(il|la|le|gli|dei|che|con|per|una|del|della|delle|degli|nel|nella|nelle|negli|dal|dalla|dalle|dagli|sul|sulla|sulle|sugli|questo|questa|questi|queste|sono|essere|avere|fare|viene|anche|dopo|prima|mentre|quando|però|inoltre|quindi|tuttavia|secondo|governo|stato|paese)\b/i;
    return itWords.test(text);
  }

  // Traduzione via MyMemory API (gratuita, senza chiave, buona qualità per testi brevi/medi)
  async function translateText(text) {
    // Suddividi in blocchi da max 450 caratteri per rispettare i limiti API
    const chunks = [];
    let remaining = text;
    while (remaining.length > 0) {
      let cut = 450;
      if (remaining.length > cut) {
        const lastDot = remaining.lastIndexOf('.', cut);
        if (lastDot > 200) cut = lastDot + 1;
      }
      chunks.push(remaining.slice(0, cut).trim());
      remaining = remaining.slice(cut).trim();
    }

    const translated = [];
    for (const chunk of chunks) {
      if (!chunk) continue;
      const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(chunk)}&langpair=en|it&de=ilpuntonews@noreply.com`;
      try {
        const res = await fetch(url);
        const data = await res.json();
        const t = data?.responseData?.translatedText || chunk;
        translated.push(t);
      } catch {
        translated.push(chunk);
      }
    }
    return translated.join(' ');
  }

  // Modal
  function updateModalFavBtn() {
    if (!currentModalNews) return;
    const on = isFav(currentModalNews.id);
    modalFavBtn.classList.toggle('fav-on', on);
    modalFavBtn.title = on ? 'Rimuovi dai preferiti' : 'Aggiungi ai preferiti';
  }

  function openModal(news) {
    currentModalNews = news;
    isTranslated = false;
    translatedBody = '';

    modalCat.textContent   = CAT_LABELS[news.cat] || news.cat;
    modalTitle.textContent = news.title;
    modalSource.textContent = '📰 ' + news.source;
    modalTime.textContent   = '🕐 ' + news.time;
    modalBody.innerHTML     = news.body;
    modalLink.href          = news.url;

    // Mostra pulsante traduzione solo se il testo non è in italiano
    const fullText = news.title + ' ' + news.body.replace(/<[^>]+>/g, ' ');
    if (!isItalian(fullText)) {
      translateBtn.style.display = '';
      translateBtn.textContent = '🌐 Traduci in italiano';
      translateBtn.disabled = false;
    } else {
      translateBtn.style.display = 'none';
    }

    // Fonti correlate
    const relatedSources = (typeof RSS_SOURCES !== 'undefined')
      ? RSS_SOURCES.filter(s => s.cat === news.cat) : [];
    if (relatedSources.length) {
      modalSourcesBlock.innerHTML = `<strong>Fonti monitorate per questa categoria</strong>${relatedSources.map(s => `<span>${s.name}</span>`).join('')}`;
      modalSourcesBlock.style.display = '';
    } else {
      modalSourcesBlock.style.display = 'none';
    }

    updateModalFavBtn();
    modalFavBtn.onclick = () => toggleFav(news.id);
    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  // Traduzione al click
  translateBtn.addEventListener('click', async () => {
    if (!currentModalNews) return;
    if (isTranslated) {
      // Torna all'originale
      modalBody.innerHTML = currentModalNews.body;
      translateBtn.textContent = '🌐 Traduci in italiano';
      isTranslated = false;
      return;
    }
    translateBtn.textContent = '⏳ Traduzione in corso…';
    translateBtn.disabled = true;
    try {
      const rawText = currentModalNews.body.replace(/<strong>/gi, '\n\n[SEZ]').replace(/<\/strong>/gi, '[/SEZ]\n').replace(/<[^>]+>/g, '');
      const translated = await translateText(rawText);
      // Ripristina formattazione sezioni
      const formatted = translated
        .replace(/\[SEZ\](.*?)\[\/SEZ\]/gs, (_, t) => `<strong>${t.trim()}</strong>`)
        .replace(/\n\n/g, '\n');
      translatedBody = formatted;
      modalBody.innerHTML = formatted;
      translateBtn.textContent = '↩ Torna all\'originale';
      translateBtn.disabled = false;
      isTranslated = true;
    } catch {
      translateBtn.textContent = '🌐 Traduci in italiano';
      translateBtn.disabled = false;
    }
  });

  function closeModal() {
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
    currentModalNews = null;
    isTranslated = false;
  }
  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  // Hero — senza stellina
  function renderHero(news) {
    if (!news) { heroSection.style.display = 'none'; return; }
    heroSection.style.display = '';
    heroTitle.textContent   = news.title;
    heroSummary.textContent = news.summary;
    heroCat.textContent     = CAT_LABELS[news.cat] || news.cat;
    heroTime.textContent    = news.time;
    heroSource.textContent  = news.source;
    heroReadBtn.onclick     = () => openModal(news);
  }

  // Card — senza stellina
  function buildCard(news) {
    const card = document.createElement('div');
    card.className = `news-card cat-${news.cat}`;
    const tags = (news.tags || []).map(t => `<span class="card-tag">#${t}</span>`).join('');
    card.innerHTML = `
      <div class="card-cat-bar"></div>
      <div class="card-body">
        <div class="card-topline">
          <span class="card-cat-badge">${CAT_LABELS[news.cat] || news.cat}</span>
        </div>
        <div class="card-title">${news.title}</div>
        <div class="card-summary">${news.summary}</div>
        ${tags ? `<div class="card-tags">${tags}</div>` : ''}
      </div>
      <div class="card-footer">
        <span class="card-source">${news.source}</span>
        <span>${news.time}</span>
      </div>`;
    card.addEventListener('click', () => openModal(news));
    return card;
  }

  function getFiltered() {
    if (activeCategory === 'preferiti') return NEWS.filter(n => isFav(n.id));
    if (activeCategory === 'all') return NEWS;
    return NEWS.filter(n => n.cat === activeCategory);
  }

  function renderAll() {
    const filtered = getFiltered();
    renderHero(filtered[0] || null);
    grid.innerHTML = '';
    const rest = filtered.slice(1);
    if (!rest.length) {
      const msg = activeCategory === 'preferiti'
        ? 'Nessuna notizia salvata. Apri una notizia e premi ★ per aggiungerla qui.'
        : 'Nessuna notizia disponibile in questa categoria.';
      grid.innerHTML = `<div class="empty-state">${msg}</div>`;
      return;
    }
    rest.forEach(n => grid.appendChild(buildCard(n)));
  }

  renderAll();
})();
