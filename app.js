(function () {
  'use strict';

  var CAT_LABELS = {
    'politica-italiana': 'Politica IT',
    'geopolitica':       'Geopolitica',
    'conflitti':         'Conflitti',
    'ai':                'AI & Tech',
    'economia-tech':     'Economia',
    'preferiti':         '\u2605 Preferiti',
    'leggi-dopo':        '\u23f0 Leggi dopo'
  };

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
        'Il contesto in cui si inserisce questa notizia \u00e8 in rapida evoluzione. ' +
        'Le istituzioni competenti stanno seguendo la situazione con attenzione. ' +
        'Esperti del settore sottolineano l\'importanza di questo sviluppo nel quadro attuale. ' +
        'Segui gli aggiornamenti sulla nostra piattaforma per restare informato in tempo reale.';
    }
  ];

  var FAV_KEY        = 'ilPuntoFavorites';
  var LATER_KEY      = 'ilPuntoReadLater';
  var READ_KEY       = 'ilPuntoRead';
  var THEME_KEY      = 'ilPuntoTheme';
  var REFRESH_MS     = 60 * 60 * 1000;

  var activeCategory    = 'all';
  var currentModalNews  = null;
  var isTranslated      = false;
  var refreshCountdown  = REFRESH_MS / 1000;
  var countdownInterval = null;

  // --- Persistenza ---
  var favs  = new Set(JSON.parse(localStorage.getItem(FAV_KEY)   || '[]'));
  var later = new Set(JSON.parse(localStorage.getItem(LATER_KEY) || '[]'));
  var read  = new Set(JSON.parse(localStorage.getItem(READ_KEY)  || '[]'));

  function saveFavs()  { localStorage.setItem(FAV_KEY,   JSON.stringify(Array.from(favs)));  }
  function saveLater() { localStorage.setItem(LATER_KEY, JSON.stringify(Array.from(later))); }
  function saveRead()  { localStorage.setItem(READ_KEY,  JSON.stringify(Array.from(read)));  }

  function isFav(id)   { return favs.has(id);  }
  function isLater(id) { return later.has(id); }
  function isRead(id)  { return read.has(id);  }

  function toggleFav(id) {
    if (favs.has(id)) favs.delete(id); else favs.add(id);
    saveFavs(); renderAll();
    if (currentModalNews && currentModalNews.id === id) updateModalButtons();
  }
  function toggleLater(id) {
    if (later.has(id)) later.delete(id); else later.add(id);
    saveLater(); renderAll();
    if (currentModalNews && currentModalNews.id === id) updateModalButtons();
  }
  function markRead(id) {
    if (!read.has(id)) { read.add(id); saveRead(); }
  }

  // --- Espansione body corto ---
  function expandBody(news) {
    var body = (news.body || '').trim();
    if (body.length < 300) {
      var tmpl = EXPANSION_TEMPLATES[news.id % EXPANSION_TEMPLATES.length];
      body = tmpl(news);
    }
    return body;
  }

  // --- Rilevamento lingua robusto ---
  // Conta parole italiane VS parole spagnole/inglesi per decidere
  var IT_WORDS = /\b(il|la|le|gli|dei|che|con|per|una|del|della|delle|degli|nel|nella|nelle|negli|anche|dopo|prima|mentre|quando|per\u00f2|inoltre|quindi|tuttavia|secondo|governo|stato|paese|sono|questa|questo|essere|aveva|hanno|viene|venire|loro|come|dove|tutto|tutti|tutte|ogni|molto|molto|anni|anno|parte|caso|modo|volta|sempre|ancora|pi\u00f9|gi\u00e0|solo|fare|fatto|dire|detto|nuovo|grande|primo|italiano|italiana|italiani|italiane|nazionale|ministro|parlamento|regione|comune|impresa|azienda|lavoro|economia|politica|guerra|pace|accordo|legge|decreto|riforma|elezioni|partito|coalizione|sinistra|destra|centro|euro|milioni|miliardi)\b/gi;
  var ES_WORDS = /\b(el|la|los|las|del|de|en|con|por|para|que|una|un|es|son|ha|han|ser|estar|tiene|tienen|este|esta|estos|estas|pero|como|cuando|donde|todo|todos|todas|sobre|entre|cada|muy|bien|m\u00e1s|tambi\u00e9n|a\u00f1o|pa\u00eds|gobierno|partido|espa\u00f1a|madrid|barcelona)\b/gi;
  var EN_WORDS = /\b(the|and|for|are|but|not|you|all|can|had|her|was|one|our|out|day|get|has|him|his|how|its|may|new|now|old|see|two|way|who|did|did|let|put|say|she|too|use|said|have|that|from|they|this|will|with|been|into|more|also|when|your|time|than|then|them|some|would|could|about|which|their|there|these|those|where|while|being|after|under|since|before|between|through|during|however|because|therefore|government|minister|president|country|national|political|military|economic|according|reported|official)\b/gi;

  function detectLang(text) {
    var sample = text.slice(0, 1200);
    var itCount = (sample.match(IT_WORDS) || []).length;
    var esCount = (sample.match(ES_WORDS) || []).length;
    var enCount = (sample.match(EN_WORDS) || []).length;
    // Heuristica: se le parole IT sono >= 40% del totale segnalato => italiano
    var total = itCount + esCount + enCount;
    if (total === 0) return 'it'; // testo vuoto: assume italiano
    var itRatio = itCount / total;
    if (itRatio >= 0.38) return 'it';
    if (esCount > enCount * 1.3) return 'es';
    return 'en';
  }

  function needsTranslation(text) {
    return detectLang(text) !== 'it';
  }

  // --- Traduzione MyMemory (supporta en->it e es->it) ---
  function translateText(text, sourceLang) {
    var sl = sourceLang || 'en';
    var langpair = sl + '|it';
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
      var url = 'https://api.mymemory.translated.net/get?q='
        + encodeURIComponent(chunk) + '&langpair=' + encodeURIComponent(langpair);
      return fetch(url)
        .then(function(r) { return r.json(); })
        .then(function(d) {
          return (d && d.responseData && d.responseData.translatedText)
            ? d.responseData.translatedText : chunk;
        })
        .catch(function() { return chunk; });
    });
    return Promise.all(promises).then(function(parts) { return parts.join(' '); });
  }

  // --- Formattazione HTML body ---
  function formatBody(rawBody) {
    var html = (rawBody || '')
      .replace(/&amp;/g, '&')
      .replace(/&#039;/g, "'")
      .replace(/&quot;/g, '"')
      .replace(/&#8217;/g, "\u2019")
      .replace(/&#8216;/g, "\u2018")
      .replace(/&#8220;/g, '"')
      .replace(/&#8221;/g, '"')
      .replace(/&#160;/g, ' ')
      .replace(/&#8230;/g, '...')
      .replace(/<img[^>]*>/gi, '')
      .replace(/<a[^>]*>(.*?)<\/a>/gi, '$1')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s{2,}/g, ' ')
      .trim();
    var paragraphs;
    if (html.indexOf('\n\n') !== -1) {
      paragraphs = html.split(/\n\n+/);
    } else if (html.indexOf('\n') !== -1) {
      paragraphs = html.split(/\n+/);
    } else {
      paragraphs = [];
      var rem = html;
      while (rem.length > 500) {
        var dot = rem.indexOf('. ', 300);
        if (dot === -1 || dot > 700) dot = 500;
        else dot += 1;
        paragraphs.push(rem.slice(0, dot).trim());
        rem = rem.slice(dot).trim();
      }
      if (rem) paragraphs.push(rem);
    }
    return paragraphs
      .map(function(p) { return p.trim(); })
      .filter(function(p) { return p.length > 0; })
      .map(function(p) { return '<p>' + p + '</p>'; })
      .join('');
  }

  // --- DOM refs ---
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
  var modalLaterBtn     = document.getElementById('modalLaterBtn');
  var translateBtn      = document.getElementById('translateBtn');
  var modalSourcesBlock = document.getElementById('modalSourcesBlock');
  var themeToggle       = document.getElementById('themeToggle');
  var refreshBtn        = document.getElementById('refreshBtn');
  var refreshTimer      = document.getElementById('refreshTimer');
  var menuToggle        = document.getElementById('menuToggle');
  var mobileNav         = document.getElementById('mobileNav');

  var allCatBtns = document.querySelectorAll('.cat-btn');

  // --- Tema ---
  applyTheme(localStorage.getItem(THEME_KEY) || 'light');
  themeToggle.addEventListener('click', function() {
    var next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next); localStorage.setItem(THEME_KEY, next);
  });
  function applyTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    themeToggle.textContent = t === 'dark' ? '\u2600\ufe0f' : '\ud83c\udf19';
  }

  // --- Menu mobile ---
  menuToggle.addEventListener('click', function() {
    mobileNav.classList.toggle('open');
  });

  // --- Filtri categoria ---
  allCatBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      activeCategory = btn.dataset.cat;
      allCatBtns.forEach(function(b) { b.classList.remove('active'); });
      document.querySelectorAll('[data-cat="' + activeCategory + '"]').forEach(function(b) {
        b.classList.add('active');
      });
      mobileNav.classList.remove('open');
      renderAll();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  // --- Refresh ---
  refreshBtn.addEventListener('click', function() { resetCountdown(); location.reload(); });
  function formatCountdown(sec) {
    var m = Math.floor(sec / 60);
    return m > 0 ? 'Aggiorn. tra ' + m + ' min' : 'Aggiorn. tra ' + sec + 's';
  }
  function resetCountdown() {
    refreshCountdown = REFRESH_MS / 1000;
    if (countdownInterval) clearInterval(countdownInterval);
    countdownInterval = setInterval(function() {
      refreshCountdown--;
      if (refreshTimer) refreshTimer.textContent = formatCountdown(refreshCountdown);
      if (refreshCountdown <= 0) { resetCountdown(); location.reload(); }
    }, 1000);
  }
  resetCountdown();

  // --- Modal: aggiorna pulsanti ---
  function updateModalButtons() {
    if (!currentModalNews) return;
    var id = currentModalNews.id;
    // Preferiti
    var fOn = isFav(id);
    modalFavBtn.classList.toggle('fav-on', fOn);
    modalFavBtn.title = fOn ? 'Rimuovi dai preferiti' : 'Aggiungi ai preferiti';
    // Leggi dopo
    var lOn = isLater(id);
    modalLaterBtn.classList.toggle('later-on', lOn);
    modalLaterBtn.title = lOn ? 'Rimuovi da Leggi dopo' : 'Aggiungi a Leggi dopo';
  }

  function openModal(news) {
    currentModalNews = news;
    isTranslated = false;

    markRead(news.id);

    modalCat.textContent    = CAT_LABELS[news.cat] || news.cat;
    modalTitle.textContent  = news.title;
    modalSource.textContent = '\ud83d\udcf0 ' + news.source;
    modalTime.textContent   = '\ud83d\udd50 ' + news.time;
    modalLink.href          = news.url;

    var bodyText = expandBody(news);
    modalBody.innerHTML = formatBody(bodyText);

    // Rileva lingua su titolo + body (senza HTML)
    var plainText = news.title + ' ' + bodyText.replace(/<[^>]+>/g, ' ');
    var lang = detectLang(plainText);
    if (lang !== 'it') {
      translateBtn.style.display = '';
      translateBtn.textContent = '\ud83c\udf10 Traduci in italiano';
      translateBtn.disabled = false;
      translateBtn._sourceLang = lang; // memorizza lingua sorgente
    } else {
      translateBtn.style.display = 'none';
      translateBtn._sourceLang = 'it';
    }

    // Fonti correlate
    var relatedSources = (typeof RSS_SOURCES !== 'undefined')
      ? RSS_SOURCES.filter(function(s) { return s.cat === news.cat; }) : [];
    if (relatedSources.length) {
      modalSourcesBlock.innerHTML = '<strong>Fonti monitorate:</strong> '
        + relatedSources.map(function(s) { return '<span>' + s.name + '</span>'; }).join('');
      modalSourcesBlock.style.display = '';
    } else {
      modalSourcesBlock.style.display = 'none';
    }

    updateModalButtons();
    modalFavBtn.onclick   = function() { toggleFav(news.id); };
    modalLaterBtn.onclick = function() { toggleLater(news.id); };

    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    modalClose.focus();
    // Aggiorna la card/hero per mostrare spunta letto
    renderAll();
  }

  // --- Traduzione ---
  translateBtn.addEventListener('click', function() {
    if (!currentModalNews) return;
    if (isTranslated) {
      modalBody.innerHTML = formatBody(expandBody(currentModalNews));
      translateBtn.textContent = '\ud83c\udf10 Traduci in italiano';
      isTranslated = false;
      return;
    }
    translateBtn.textContent = '\u23f3 Traduzione in corso\u2026';
    translateBtn.disabled = true;
    var rawText = expandBody(currentModalNews).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    var sl = translateBtn._sourceLang || 'en';
    translateText(rawText, sl).then(function(translated) {
      modalBody.innerHTML = formatBody(translated);
      translateBtn.textContent = "\u21a9 Torna all'originale";
      translateBtn.disabled = false;
      isTranslated = true;
    }).catch(function() {
      translateBtn.textContent = '\ud83c\udf10 Traduci in italiano';
      translateBtn.disabled = false;
    });
  });

  // --- Chiudi modal ---
  function closeModal() {
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
    currentModalNews = null;
    isTranslated = false;
  }
  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', function(e) { if (e.target === modalOverlay) closeModal(); });
  document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closeModal(); });

  // --- Hero ---
  function renderHero(news) {
    if (!news) { heroSection.style.display = 'none'; return; }
    heroSection.style.display = '';
    heroSection.className = 'hero-section cat-bg-' + news.cat + (isRead(news.id) ? ' hero-read' : '');
    heroTitle.textContent   = news.title;
    heroSummary.textContent = news.summary;
    heroCat.textContent     = CAT_LABELS[news.cat] || news.cat;
    heroTime.textContent    = news.time;
    heroSource.textContent  = news.source;
    heroReadBtn.onclick     = function() { openModal(news); };
  }

  // --- Card ---
  function buildCard(news) {
    var card = document.createElement('div');
    var readClass = isRead(news.id) ? ' card-read' : '';
    card.className = 'news-card cat-' + news.cat + readClass;
    var tags = (news.tags || []).map(function(t) {
      return '<span class="card-tag">#' + t + '</span>';
    }).join('');
    var readBadge = isRead(news.id)
      ? '<span class="card-read-badge" title="Gi\u00e0 letta">\u2714</span>'
      : '';
    card.innerHTML =
      '<div class="card-cat-bar"></div>' +
      '<div class="card-body">' +
        '<div class="card-topline">' +
          '<span class="card-cat-badge">' + (CAT_LABELS[news.cat] || news.cat) + '</span>' +
          readBadge +
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

  // --- Filtro notizie ---
  function getFiltered() {
    if (activeCategory === 'preferiti')  return NEWS.filter(function(n) { return isFav(n.id); });
    if (activeCategory === 'leggi-dopo') return NEWS.filter(function(n) { return isLater(n.id); });
    if (activeCategory === 'all') return NEWS;
    return NEWS.filter(function(n) { return n.cat === activeCategory; });
  }

  // --- Render principale ---
  function renderAll() {
    var filtered = getFiltered();
    renderHero(filtered[0] || null);
    grid.innerHTML = '';
    var rest = filtered.slice(1);
    if (!rest.length) {
      var msgs = {
        'preferiti':  'Nessuna notizia salvata. Apri una notizia e premi \u2605 per aggiungerla qui.',
        'leggi-dopo': 'Nessuna notizia in coda. Apri una notizia e premi \u23f0 per aggiungerla qui.'
      };
      var msg = msgs[activeCategory] || 'Nessuna notizia disponibile in questa categoria.';
      grid.innerHTML = '<div class="empty-state">' + msg + '</div>';
      return;
    }
    rest.forEach(function(n) { grid.appendChild(buildCard(n)); });
  }

  renderAll();
})();
