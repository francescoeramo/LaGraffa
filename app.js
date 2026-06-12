(function () {
  'use strict';

  var CAT_LABELS = {
    'politica-italiana': 'Politica IT',
    'geopolitica':       'Geopolitica',
    'conflitti':         'Conflitti',
    'ai':                'AI & Tech',
    'economia-tech':     'Economia',
    'preferiti':         '★ Preferiti'
  };

  // Testi di espansione per notizie troppo corte (meno di 300 char nel body)
  var EXPANSION_TEMPLATES = [
    function(n) {
      return 'La notizia riportata da ' + n.source + ' ha attirato l\'attenzione dell\'opinione pubblica. ' +
        'Secondo le prime informazioni disponibili, ' + n.summary + ' ' +
        'I dettagli completi sono in corso di verifica da parte delle redazioni. ' +
        'L\'evoluzione della situazione viene monitorata in tempo reale dalle principali agenzie di stampa. ' +
        'Ulteriori aggiornamenti sono attesi nelle prossime ore, man mano che emergono nuovi elementi. ' +
        'Per l\'articolo completo con tutti gli approfondimenti, consulta la fonte originale.';
    },
    function(n) {
      return 'La fonte ' + n.source + ' riporta un aggiornamento su questo tema di rilievo. ' +
        n.summary + ' ' +
        'Il contesto in cui si inserisce questa notizia è in rapida evoluzione. ' +
        'Le istituzioni competenti stanno seguendo la situazione con attenzione. ' +
        'Esperti del settore sottolineano l\'importanza di questo sviluppo nel quadro attuale. ' +
        'Segui gli aggiornamenti sulla nostra piattaforma per restare informato in tempo reale.';
    }
  ];

  var FAV_KEY   = 'ilPuntoFavorites';
  var THEME_KEY = 'ilPuntoTheme';
  var REFRESH_INTERVAL_MS = 60 * 60 * 1000;

  var activeCategory = 'all';
  var currentModalNews = null;
  var isTranslated = false;
  var refreshCountdown = REFRESH_INTERVAL_MS / 1000;
  var countdownInterval = null;

  var favs = new Set(JSON.parse(localStorage.getItem(FAV_KEY) || '[]'));
  function saveFavs() { localStorage.setItem(FAV_KEY, JSON.stringify(Array.from(favs))); }
  function isFav(id) { return favs.has(id); }
  function toggleFav(id) {
    if (favs.has(id)) favs.delete(id); else favs.add(id);
    saveFavs();
    renderAll();
    if (currentModalNews && currentModalNews.id === id) updateModalFavBtn();
  }

  // Espande il body se troppo corto
  function expandBody(news) {
    var body = (news.body || '').trim();
    if (body.length < 300) {
      var tmpl = EXPANSION_TEMPLATES[news.id % EXPANSION_TEMPLATES.length];
      body = tmpl(news);
    }
    return body;
  }

  var grid              = document.getElementById('newsGrid');
  var heroSection       = document.getElementById('heroSection');
  var heroTitle         = document.getElementById('heroTitle');
  var heroSummary       = document.getElementById('heroSummary');
  var heroCat           = document.getElementById('heroCat');
  var heroTime          = document.getElementById('heroTime');
  var heroSource        = document.getElementById('heroSource');
  var heroReadBtn       = document.getElementById('heroReadBtn');
  var modalOverlay      = document.getElementById('modalOverlay');
  var modalClose        = document.getElementById('modalClose');
  var modalTitle        = document.getElementById('modalTitle');
  var modalCat          = document.getElementById('modalCat');
  var modalSource       = document.getElementById('modalSource');
  var modalTime         = document.getElementById('modalTime');
  var modalBody         = document.getElementById('modalBody');
  var modalLink         = document.getElementById('modalLink');
  var modalFavBtn       = document.getElementById('modalFavBtn');
  var translateBtn      = document.getElementById('translateBtn');
  var modalSourcesBlock = document.getElementById('modalSourcesBlock');
  var themeToggle       = document.getElementById('themeToggle');
  var refreshBtn        = document.getElementById('refreshBtn');
  var refreshTimer      = document.getElementById('refreshTimer');
  var menuToggle        = document.getElementById('menuToggle');
  var mobileNav         = document.getElementById('mobileNav');

  // Tutti i pulsanti categoria (desktop + mobile)
  var allCatBtns = document.querySelectorAll('.cat-btn');

  // Tema
  applyTheme(localStorage.getItem(THEME_KEY) || 'light');
  themeToggle.addEventListener('click', function() {
    var next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem(THEME_KEY, next);
  });
  function applyTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    themeToggle.textContent = t === 'dark' ? '☀️' : '🌙';
  }

  // Menu mobile toggle
  menuToggle.addEventListener('click', function() {
    mobileNav.classList.toggle('open');
  });

  // Filtri categoria
  allCatBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      activeCategory = btn.dataset.cat;
      allCatBtns.forEach(function(b) { b.classList.remove('active'); });
      // Attiva tutti i btn con stesso data-cat
      document.querySelectorAll('[data-cat="' + activeCategory + '"]').forEach(function(b) {
        b.classList.add('active');
      });
      mobileNav.classList.remove('open');
      renderAll();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  // Refresh
  refreshBtn.addEventListener('click', function() {
    resetCountdown();
    location.reload();
  });

  // Countdown
  function formatCountdown(sec) {
    var m = Math.floor(sec / 60), s = sec % 60;
    return m > 0 ? 'Aggiorn. tra ' + m + ' min' : 'Aggiorn. tra ' + s + 's';
  }
  function resetCountdown() {
    refreshCountdown = REFRESH_INTERVAL_MS / 1000;
    if (countdownInterval) clearInterval(countdownInterval);
    countdownInterval = setInterval(function() {
      refreshCountdown--;
      if (refreshTimer) refreshTimer.textContent = formatCountdown(refreshCountdown);
      if (refreshCountdown <= 0) { resetCountdown(); location.reload(); }
    }, 1000);
  }
  resetCountdown();

  // Rilevamento lingua italiana
  function isItalian(text) {
    var itWords = /\b(il|la|le|gli|dei|che|con|per|una|del|della|delle|degli|nel|nella|anche|dopo|prima|mentre|quando|però|inoltre|quindi|tuttavia|secondo|governo|stato|paese|sono|questa|questo|essere)\b/i;
    return itWords.test(text);
  }

  // Traduzione MyMemory API
  function translateText(text) {
    var chunks = [];
    var remaining = text;
    while (remaining.length > 0) {
      var cut = Math.min(450, remaining.length);
      if (remaining.length > 450) {
        var lastDot = remaining.lastIndexOf('.', 450);
        if (lastDot > 200) cut = lastDot + 1;
      }
      chunks.push(remaining.slice(0, cut).trim());
      remaining = remaining.slice(cut).trim();
    }
    var promises = chunks.map(function(chunk) {
      if (!chunk) return Promise.resolve('');
      var url = 'https://api.mymemory.translated.net/get?q=' + encodeURIComponent(chunk) + '&langpair=en|it';
      return fetch(url)
        .then(function(r) { return r.json(); })
        .then(function(d) { return (d && d.responseData && d.responseData.translatedText) ? d.responseData.translatedText : chunk; })
        .catch(function() { return chunk; });
    });
    return Promise.all(promises).then(function(parts) { return parts.join(' '); });
  }

  // Formatta HTML del body
  function formatBody(rawBody) {
    var html = (rawBody || '')
      .replace(/&amp;/g, '&')
      .replace(/&#039;/g, "'")
      .replace(/&quot;/g, '"')
      .replace(/&#8217;/g, "'")
      .replace(/&#8216;/g, "'")
      .replace(/&#8220;/g, '"')
      .replace(/&#8221;/g, '"')
      .replace(/&#160;/g, ' ')
      .replace(/&#8230;/g, '...')
      .replace(/<img[^>]*>/gi, '')
      .replace(/<a[^>]*>(.*?)<\/a>/gi, '$1')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s{2,}/g, ' ')
      .trim();
    // Paragrafi: split su doppio newline o ogni ~500 char alla fine di frase
    var paragraphs;
    if (html.indexOf('\n\n') !== -1) {
      paragraphs = html.split(/\n\n+/);
    } else if (html.indexOf('\n') !== -1) {
      paragraphs = html.split(/\n+/);
    } else {
      // Nessun newline: spezza ogni ~500 char alla fine di un punto
      paragraphs = [];
      var remaining2 = html;
      while (remaining2.length > 500) {
        var dot = remaining2.indexOf('. ', 300);
        if (dot === -1 || dot > 700) dot = 500;
        else dot += 1;
        paragraphs.push(remaining2.slice(0, dot).trim());
        remaining2 = remaining2.slice(dot).trim();
      }
      if (remaining2) paragraphs.push(remaining2);
    }
    return paragraphs
      .map(function(p) { return p.trim(); })
      .filter(function(p) { return p.length > 0; })
      .map(function(p) { return '<p>' + p + '</p>'; })
      .join('');
  }

  // Modal
  function updateModalFavBtn() {
    if (!currentModalNews) return;
    var on = isFav(currentModalNews.id);
    modalFavBtn.classList.toggle('fav-on', on);
    modalFavBtn.title = on ? 'Rimuovi dai preferiti' : 'Aggiungi ai preferiti';
    modalFavBtn.setAttribute('aria-label', on ? 'Rimuovi dai preferiti' : 'Aggiungi ai preferiti');
  }

  function openModal(news) {
    currentModalNews = news;
    isTranslated = false;

    modalCat.textContent    = CAT_LABELS[news.cat] || news.cat;
    modalTitle.textContent  = news.title;
    modalSource.textContent = '📰 ' + news.source;
    modalTime.textContent   = '🕐 ' + news.time;
    modalLink.href          = news.url;

    var bodyText = expandBody(news);
    modalBody.innerHTML = formatBody(bodyText);

    // Pulsante traduzione
    var fullText = news.title + ' ' + bodyText;
    if (!isItalian(fullText)) {
      translateBtn.style.display = '';
      translateBtn.textContent = '🌐 Traduci in italiano';
      translateBtn.disabled = false;
    } else {
      translateBtn.style.display = 'none';
    }

    // Fonti correlate
    var relatedSources = (typeof RSS_SOURCES !== 'undefined')
      ? RSS_SOURCES.filter(function(s) { return s.cat === news.cat; }) : [];
    if (relatedSources.length) {
      var srcsHtml = relatedSources.map(function(s) { return '<span>' + s.name + '</span>'; }).join('');
      modalSourcesBlock.innerHTML = '<strong>Fonti monitorate:</strong> ' + srcsHtml;
      modalSourcesBlock.style.display = '';
    } else {
      modalSourcesBlock.style.display = 'none';
    }

    updateModalFavBtn();
    modalFavBtn.onclick = function() { toggleFav(news.id); };
    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    modalClose.focus();
  }

  // Traduzione
  translateBtn.addEventListener('click', function() {
    if (!currentModalNews) return;
    if (isTranslated) {
      modalBody.innerHTML = formatBody(expandBody(currentModalNews));
      translateBtn.textContent = '🌐 Traduci in italiano';
      isTranslated = false;
      return;
    }
    translateBtn.textContent = '⏳ Traduzione in corso…';
    translateBtn.disabled = true;
    var rawText = (currentModalNews.body || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    translateText(rawText).then(function(translated) {
      modalBody.innerHTML = formatBody(translated);
      translateBtn.textContent = "↩ Torna all'originale";
      translateBtn.disabled = false;
      isTranslated = true;
    }).catch(function() {
      translateBtn.textContent = '🌐 Traduci in italiano';
      translateBtn.disabled = false;
    });
  });

  function closeModal() {
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
    currentModalNews = null;
    isTranslated = false;
  }
  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', function(e) { if (e.target === modalOverlay) closeModal(); });
  document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closeModal(); });

  // Hero con sfondo colorato (banner rosso)
  function renderHero(news) {
    if (!news) { heroSection.style.display = 'none'; return; }
    heroSection.style.display = '';
    heroSection.className = 'hero-section cat-bg-' + news.cat;
    heroTitle.textContent   = news.title;
    heroSummary.textContent = news.summary;
    heroCat.textContent     = CAT_LABELS[news.cat] || news.cat;
    heroTime.textContent    = news.time;
    heroSource.textContent  = news.source;
    heroReadBtn.onclick     = function() { openModal(news); };
  }

  // Card
  function buildCard(news) {
    var card = document.createElement('div');
    card.className = 'news-card cat-' + news.cat;
    var tags = (news.tags || []).map(function(t) {
      return '<span class="card-tag">#' + t + '</span>';
    }).join('');
    card.innerHTML =
      '<div class="card-cat-bar"></div>' +
      '<div class="card-body">' +
        '<div class="card-topline">' +
          '<span class="card-cat-badge">' + (CAT_LABELS[news.cat] || news.cat) + '</span>' +
        '</div>' +
        '<div class="card-title">' + news.title + '</div>' +
        '<div class="card-summary">' + news.summary + '</div>' +
        (tags ? '<div class="card-tags">' + tags + '</div>' : '') +
      '</div>' +
      '<div class="card-footer">' +
        '<span class="card-source">' + news.source + '</span>' +
        '<span>' + news.time + '</span>' +
      '</div>';
    card.addEventListener('click', function() { openModal(news); });
    return card;
  }

  function getFiltered() {
    if (activeCategory === 'preferiti') return NEWS.filter(function(n) { return isFav(n.id); });
    if (activeCategory === 'all') return NEWS;
    return NEWS.filter(function(n) { return n.cat === activeCategory; });
  }

  function renderAll() {
    var filtered = getFiltered();
    renderHero(filtered[0] || null);
    grid.innerHTML = '';
    var rest = filtered.slice(1);
    if (!rest.length) {
      var msg = activeCategory === 'preferiti'
        ? 'Nessuna notizia salvata. Apri una notizia e premi ★ per aggiungerla qui.'
        : 'Nessuna notizia disponibile in questa categoria.';
      grid.innerHTML = '<div class="empty-state">' + msg + '</div>';
      return;
    }
    rest.forEach(function(n) { grid.appendChild(buildCard(n)); });
  }

  renderAll();
})();
