(function () {
  'use strict';

  var CAT_LABELS = { 'politica-italiana': 'Italia', geopolitica: 'Mondo', conflitti: 'Conflitti', ai: 'Tecnologia', 'economia-tech': 'Economia', preferiti: 'Preferiti', 'leggi-dopo': 'Leggi dopo' };
  var CAT_DESCRIPTIONS = {
    all: ['Panoramica', 'Le notizie da seguire', 'Una selezione ordinata per freschezza, rilevanza e varietà delle fonti.'],
    'politica-italiana': ['Italia', 'Dentro l’Italia', 'Politica, società e fatti rilevanti raccontati da fonti affidabili.'],
    geopolitica: ['Mondo', 'Scenari internazionali', 'Diplomazia, relazioni globali e cambiamenti che incidono anche sull’Italia.'],
    conflitti: ['Conflitti', 'Le crisi aperte', 'Aggiornamenti distinti dal contesto: fatti, sviluppi e fonti da seguire.'],
    ai: ['Tecnologia', 'AI e innovazione', 'Tecnologie, ricerca e impatti concreti su lavoro, imprese e società.'],
    'economia-tech': ['Economia', 'Mercati e imprese', 'Economia reale, finanza e innovazione con attenzione alle ricadute in Italia.'],
    preferiti: ['La tua raccolta', 'Preferiti', 'Le notizie salvate su questo dispositivo.'],
    'leggi-dopo': ['La tua coda', 'Leggi dopo', 'Gli articoli che hai scelto di approfondire.']
  };
  var LANGUAGE_LABELS = { it: 'Italiano', en: 'English', es: 'Español' };
  var NO_HERO_CATS = { preferiti: true, 'leggi-dopo': true };
  var FAV_KEY = 'lagraffaFavoritesV2', LATER_KEY = 'lagraffaReadLaterV2', READ_KEY = 'lagraffaReadV2', THEME_KEY = 'lagraffaTheme';
  var REFRESH_MS = 60 * 60 * 1000;
  var activeCategory = 'all', currentModalNews = null, aiContent = null, showingAi = false;
  var searchTerm = '', sourceName = '', sortOrder = 'newest', lastFocusedElement = null;
  var LOW_VALUE_NEWS_RE = /\b(sconto|sconti|offerta|offerte|coupon|in saldo|discount|discounts|deal|deals|starter kit|lowest price|low price|price drop|percent off|where to buy|buy now|prime day|black friday|gossip|vip|celebrity|red carpet|oroscopo|reality show|phone accessories|fight stick|gaming controller)\b/i;
  var ALL_NEWS = (typeof NEWS === 'undefined' ? [] : NEWS).filter(function (news) {
    return news && news.id && news.title && news.url && !LOW_VALUE_NEWS_RE.test((news.title || '') + ' ' + (news.preview || '') + ' ' + (news.summary || ''));
  });
  var favs = readSet(FAV_KEY), later = readSet(LATER_KEY), read = readSet(READ_KEY);

  function readSet(key) {
    try {
      return new Set(JSON.parse(localStorage.getItem(key) || '[]').filter(function (id) { return typeof id === 'string' && /^[a-f0-9]{20}$/.test(id); }));
    } catch (_) { return new Set(); }
  }
  function saveSet(key, value) {
    try { localStorage.setItem(key, JSON.stringify(Array.from(value))); } catch (_) { showToast('Impossibile salvare su questo dispositivo.'); }
  }
  function decodeEntities(value) { var area = document.createElement('textarea'), text = String(value || ''); area.innerHTML = text; text = area.value; area.innerHTML = text; return area.value; }
  function escapeHTML(value) { var d = document.createElement('div'); d.textContent = decodeEntities(value); return d.innerHTML; }
  function normalize(value) { return decodeEntities(value).toLocaleLowerCase('it').normalize('NFD').replace(/[\u0300-\u036f]/g, ''); }
  function cleanText(text) { return decodeEntities(text).replace(/<[^>]+>/g, ' ').replace(/[ \t]+/g, ' ').trim(); }
  function formatBody(text) {
    return String(text || '').split(/\n{2,}/).map(cleanText).filter(Boolean).map(function (p) { return '<p>' + escapeHTML(p) + '</p>'; }).join('');
  }
  function cacheKey(news) { return 'lagraffa-ai-v4-' + news.id + '-' + (typeof NEWS_TIMESTAMP === 'undefined' ? 'current' : NEWS_TIMESTAMP); }
  function safeExternalUrl(value) {
    try { var parsed = new URL(String(value || '')); return parsed.protocol === 'https:' ? parsed.href : ''; }
    catch (_) { return ''; }
  }
  function validGeneratedContent(value) {
    return value && typeof value === 'object' && typeof value.title === 'string' && typeof value.body === 'string'
      && value.title.length > 0 && value.title.length <= 600 && value.body.length > 0 && value.body.length <= 40000;
  }
  function articleLanguage(news, generated) {
    return generated ? 'it' : (LANGUAGE_LABELS[news && news.language] ? news.language : 'it');
  }
  function isFav(id) { return favs.has(id); }
  function isLater(id) { return later.has(id); }
  function isRead(id) { return read.has(id); }
  function markRead(id) { if (!isRead(id)) { read.add(id); saveSet(READ_KEY, read); } }

  var heroSection = document.getElementById('heroSection'), heroTitle = document.getElementById('heroTitle'), heroSummary = document.getElementById('heroSummary'), heroCat = document.getElementById('heroCat'), heroTime = document.getElementById('heroTime'), heroSource = document.getElementById('heroSource'), heroReadBtn = document.getElementById('heroReadBtn'), heroReadIndicator = document.getElementById('heroReadIndicator');
  var grid = document.getElementById('newsGrid'), modalOverlay = document.getElementById('modalOverlay'), modalClose = document.getElementById('modalClose'), modalTitle = document.getElementById('modalTitle'), modalCat = document.getElementById('modalCat'), modalSource = document.getElementById('modalSource'), modalTime = document.getElementById('modalTime'), modalBody = document.getElementById('modalBody'), modalLink = document.getElementById('modalLink'), modalFavBtn = document.getElementById('modalFavBtn'), modalLaterBtn = document.getElementById('modalLaterBtn'), translateBtn = document.getElementById('translateBtn'), modalSourcesBlock = document.getElementById('modalSourcesBlock'), modalDisclosure = document.getElementById('modalDisclosure'), shareBtn = document.getElementById('shareBtn');
  var themeToggle = document.getElementById('themeToggle'), refreshBtn = document.getElementById('refreshBtn'), refreshTimer = document.getElementById('refreshTimer'), feedStatus = document.getElementById('feedStatus'), menuToggle = document.getElementById('menuToggle'), mobileNav = document.getElementById('mobileNav');
  var searchInput = document.getElementById('searchInput'), sourceFilter = document.getElementById('sourceFilter'), sortSelect = document.getElementById('sortOrder'), clearFilters = document.getElementById('clearFilters'), resultsCount = document.getElementById('resultsCount'), toast = document.getElementById('toast');

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    window.clearTimeout(showToast.timer);
    showToast.timer = window.setTimeout(function () { toast.classList.remove('show'); }, 3500);
  }

  function formatRelativeTime(timestamp) {
    var seconds = Math.round((Number(timestamp || 0) * 1000 - Date.now()) / 1000);
    var absolute = Math.abs(seconds);
    var formatter = new Intl.RelativeTimeFormat('it', { numeric: 'auto' });
    if (absolute < 90) return 'poco fa';
    if (absolute < 3600) return formatter.format(Math.round(seconds / 60), 'minute');
    if (absolute < 86400) return formatter.format(Math.round(seconds / 3600), 'hour');
    return formatter.format(Math.round(seconds / 86400), 'day');
  }

  function updateFeedStatus() {
    var generatedAt = Number(typeof NEWS_TIMESTAMP === 'undefined' ? 0 : NEWS_TIMESTAMP) * 1000;
    var ageMs = generatedAt ? Date.now() - generatedAt : Infinity;
    var meta = typeof FEED_META === 'undefined' ? null : FEED_META;
    var updateText = generatedAt ? 'Ultimo aggiornamento ' + formatRelativeTime(NEWS_TIMESTAMP) : 'Aggiornamento non disponibile';
    var sourceText = meta ? ' · ' + meta.successful_sources + '/' + meta.total_sources + ' fonti raggiunte' : '';
    feedStatus.className = 'feed-status';
    if (ageMs > 3 * REFRESH_MS) {
      feedStatus.classList.add('stale');
      feedStatus.textContent = '⚠ ' + updateText + '. Le notizie potrebbero essere obsolete.' + sourceText;
      refreshTimer.textContent = 'Dati non aggiornati';
    } else if (ageMs > 90 * 60 * 1000) {
      feedStatus.classList.add('delayed');
      feedStatus.textContent = updateText + '. Aggiornamento in ritardo.' + sourceText;
      refreshTimer.textContent = 'Aggiornamento in ritardo';
    } else {
      feedStatus.textContent = updateText + sourceText;
      var nextAt = generatedAt + REFRESH_MS;
      var minutes = Math.max(0, Math.ceil((nextAt - Date.now()) / 60000));
      refreshTimer.textContent = minutes ? 'Nuovi dati tra ~' + minutes + ' min' : 'Nuovi dati attesi';
    }
    if (meta && meta.failed_sources && meta.failed_sources.length) {
      feedStatus.title = 'Fonti temporaneamente non raggiunte: ' + meta.failed_sources.join(', ');
    }
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
    themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Usa tema chiaro' : 'Usa tema scuro');
  }
  var savedTheme = localStorage.getItem(THEME_KEY);
  var preferredTheme = savedTheme === 'dark' || savedTheme === 'light' ? savedTheme : (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  applyTheme(preferredTheme);
  themeToggle.addEventListener('click', function () {
    var next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem(THEME_KEY, next);
  });

  function setMenu(open) {
    mobileNav.hidden = !open;
    mobileNav.classList.toggle('open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
  }
  menuToggle.addEventListener('click', function () { setMenu(menuToggle.getAttribute('aria-expanded') !== 'true'); });

  function selectCategory(category) {
    activeCategory = category;
    document.querySelectorAll('.cat-btn').forEach(function (button) {
      var selected = button.dataset.cat === activeCategory;
      button.classList.toggle('active', selected);
      button.setAttribute('aria-pressed', String(selected));
    });
    setMenu(false);
    renderAll();
  }
  document.querySelectorAll('.cat-btn').forEach(function (button) {
    button.addEventListener('click', function () { selectCategory(button.dataset.cat); document.getElementById('newsContent').scrollIntoView({ behavior: 'smooth' }); });
  });
  refreshBtn.addEventListener('click', function () { location.replace(location.pathname + '?t=' + Date.now()); });

  function populateSources() {
    Array.from(new Set(ALL_NEWS.map(function (news) { return news.source; }))).sort(function (a, b) { return a.localeCompare(b, 'it'); }).forEach(function (source) {
      var option = document.createElement('option');
      option.value = source;
      option.textContent = source;
      sourceFilter.appendChild(option);
    });
  }
  searchInput.addEventListener('input', function () { searchTerm = normalize(searchInput.value.trim()); renderAll(); });
  sourceFilter.addEventListener('change', function () { sourceName = sourceFilter.value; renderAll(); });
  sortSelect.addEventListener('change', function () { sortOrder = sortSelect.value; renderAll(); });
  clearFilters.addEventListener('click', function () {
    searchTerm = ''; sourceName = ''; sortOrder = 'newest';
    searchInput.value = ''; sourceFilter.value = ''; sortSelect.value = 'newest';
    searchInput.focus(); renderAll();
  });

  function toggleFav(id) {
    isFav(id) ? favs.delete(id) : favs.add(id);
    saveSet(FAV_KEY, favs); updateModalButtons(); renderAll();
    showToast(isFav(id) ? 'Aggiunta ai preferiti.' : 'Rimossa dai preferiti.');
  }
  function toggleLater(id) {
    isLater(id) ? later.delete(id) : later.add(id);
    saveSet(LATER_KEY, later); updateModalButtons(); renderAll();
    showToast(isLater(id) ? 'Aggiunta a Leggi dopo.' : 'Rimossa da Leggi dopo.');
  }

  function updateModalButtons() {
    if (!currentModalNews) return;
    var favOn = isFav(currentModalNews.id), laterOn = isLater(currentModalNews.id);
    modalFavBtn.classList.toggle('fav-on', favOn);
    modalFavBtn.setAttribute('aria-pressed', String(favOn));
    modalFavBtn.setAttribute('aria-label', favOn ? 'Rimuovi dai preferiti' : 'Aggiungi ai preferiti');
    modalLaterBtn.classList.toggle('later-on', laterOn);
    modalLaterBtn.setAttribute('aria-pressed', String(laterOn));
    modalLaterBtn.setAttribute('aria-label', laterOn ? 'Rimuovi da Leggi dopo' : 'Aggiungi a Leggi dopo');
  }
  function setModalContent(news, content) {
    modalTitle.textContent = decodeEntities(content && content.title || news.title);
    modalBody.innerHTML = formatBody(content && (content.body || content.summary) || news.body || news.summary);
    modalTitle.lang = articleLanguage(news, Boolean(content));
    modalBody.lang = articleLanguage(news, Boolean(content));
  }
  function openModal(news, trigger, updateHash) {
    currentModalNews = news; aiContent = null; showingAi = false; lastFocusedElement = trigger || document.activeElement;
    markRead(news.id);
    modalCat.textContent = (CAT_LABELS[news.cat] || news.cat) + (news.language && news.language !== 'it' ? ' · ' + (LANGUAGE_LABELS[news.language] || news.language) : '');
    modalSource.textContent = '📰 ' + news.source;
    modalTime.dataset.pubTs = news.pub_ts;
    modalTime.textContent = '🕐 ' + formatRelativeTime(news.pub_ts);
    var safeNewsUrl = safeExternalUrl(news.url);
    modalLink.href = safeNewsUrl || '#'; modalLink.hidden = !safeNewsUrl;
    setModalContent(news);
    modalDisclosure.textContent = news.content_status === 'full'
      ? 'Modalità lettura: testo esteso estratto dalla pagina pubblica dell’editore e ripulito dagli elementi di navigazione. Per citazioni e impaginazione fa sempre fede la fonte originale.'
      : 'La fonte non rende disponibile un testo esteso leggibile: qui è mostrata la sintesi completa del feed. Apri l’articolo originale per tutti i dettagli.';
    var cached;
    try { cached = JSON.parse(localStorage.getItem(cacheKey(news)) || 'null'); } catch (_) { cached = null; }
    if (validGeneratedContent(cached)) { aiContent = cached; translateBtn.textContent = news.language === 'it' ? '✨ Mostra sintesi AI' : '✨ Mostra traduzione'; }
    else { translateBtn.textContent = news.language === 'it' ? '✨ Sintesi accurata' : '✨ Traduci integralmente'; }
    translateBtn.hidden = news.language === 'it' && news.content_status !== 'full';
    translateBtn.disabled = false;
    modalSourcesBlock.textContent = '';
    var strong = document.createElement('strong'); strong.textContent = 'Fonte utilizzata:';
    modalSourcesBlock.appendChild(strong);
    if (safeNewsUrl) {
      var sourceLink = document.createElement('a'); sourceLink.href = safeNewsUrl; sourceLink.target = '_blank'; sourceLink.rel = 'noopener noreferrer'; sourceLink.textContent = news.source;
      modalSourcesBlock.appendChild(sourceLink);
    } else {
      var sourceNameText = document.createElement('span'); sourceNameText.textContent = news.source; modalSourcesBlock.appendChild(sourceNameText);
    }
    modalFavBtn.onclick = function () { toggleFav(news.id); };
    modalLaterBtn.onclick = function () { toggleLater(news.id); };
    shareBtn.onclick = function () { shareNews(news); };
    updateModalButtons();
    modalOverlay.classList.add('open'); modalOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; modalClose.focus();
    if (updateHash !== false && history.replaceState) history.replaceState(null, '', '#article=' + encodeURIComponent(news.id));
  }

  translateBtn.addEventListener('click', function () {
    if (!currentModalNews) return;
    if (aiContent) {
      showingAi = !showingAi;
      setModalContent(currentModalNews, showingAi ? aiContent : null);
      translateBtn.textContent = showingAi ? '↩ Mostra testo originale' : (currentModalNews.language === 'it' ? '✨ Mostra sintesi AI' : '✨ Mostra traduzione');
      return;
    }
    var requestedNews = currentModalNews;
    translateBtn.disabled = true; translateBtn.textContent = requestedNews.language === 'it' ? '⏳ Sintesi in preparazione…' : '⏳ Traduzione in preparazione…';
    fetch('/api/ai', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ articleId: requestedNews.id }) })
      .then(function (response) { return response.json().then(function (data) { if (!response.ok) throw new Error(data.error || 'Servizio non disponibile'); return data; }); })
      .then(function (data) {
        if (!currentModalNews || currentModalNews.id !== requestedNews.id) return;
        if (!validGeneratedContent(data)) throw new Error('Risposta del servizio non valida');
        aiContent = data; showingAi = true;
        try { localStorage.setItem(cacheKey(requestedNews), JSON.stringify(data)); } catch (_) { /* cache facoltativa */ }
        setModalContent(requestedNews, data); translateBtn.textContent = '↩ Mostra testo originale'; translateBtn.disabled = false;
      })
      .catch(function (error) { translateBtn.textContent = '✨ Riprova'; translateBtn.disabled = false; showToast(error.message || 'Elaborazione non disponibile.'); });
  });

  function shareNews(news) {
    var shareUrl = location.origin + location.pathname + '#article=' + encodeURIComponent(news.id);
    if (navigator.share) {
      navigator.share({ title: decodeEntities(news.title), text: decodeEntities(news.summary), url: shareUrl }).catch(function () { /* annullamento volontario */ });
    } else if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(shareUrl).then(function () { showToast('Link copiato.'); }).catch(function () { showToast('Impossibile copiare il link.'); });
    } else { showToast('Condivisione non supportata dal browser.'); }
  }

  function closeModal() {
    var closingNewsId = currentModalNews && currentModalNews.id;
    modalOverlay.classList.remove('open'); modalOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = ''; currentModalNews = null;
    if (location.hash.indexOf('#article=') === 0 && history.replaceState) history.replaceState(null, '', location.pathname + location.search);
    renderAll();
    if (lastFocusedElement && document.contains(lastFocusedElement)) lastFocusedElement.focus();
    else if (closingNewsId) {
      var replacementTrigger = document.querySelector('[data-news-id="' + closingNewsId + '"] .card-open-btn');
      if (replacementTrigger) replacementTrigger.focus();
    }
  }
  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', function (event) { if (event.target === modalOverlay) closeModal(); });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      if (modalOverlay.classList.contains('open')) closeModal();
      else if (!mobileNav.hidden) setMenu(false);
      return;
    }
    if (event.key !== 'Tab' || !modalOverlay.classList.contains('open')) return;
    var focusable = Array.from(modalOverlay.querySelectorAll('button:not([disabled]), a[href]')).filter(function (item) { return item.offsetParent !== null; });
    if (!focusable.length) return;
    var first = focusable[0], last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  });

  function renderHero(news) {
    if (!news) { heroSection.hidden = true; return; }
    heroSection.hidden = false; heroSection.className = 'hero-section cat-bg-' + news.cat;
    heroTitle.textContent = decodeEntities(news.title); heroSummary.textContent = decodeEntities(news.preview || news.summary);
    heroTitle.lang = articleLanguage(news, false); heroSummary.lang = articleLanguage(news, false);
    heroCat.textContent = CAT_LABELS[news.cat] || news.cat; heroTime.dataset.pubTs = news.pub_ts; heroTime.textContent = formatRelativeTime(news.pub_ts); heroSource.textContent = news.source;
    heroReadBtn.onclick = function () { openModal(news, heroReadBtn); };
    heroReadIndicator.hidden = !isRead(news.id);
  }

  function buildCard(news) {
    var card = document.createElement('article'), wasRead = isRead(news.id), laterOn = isLater(news.id);
    card.className = 'news-card cat-' + news.cat + (wasRead ? ' card-read' : '');
    card.dataset.newsId = news.id;
    var language = articleLanguage(news, false);
    var languageBadge = language !== 'it' ? '<span class="card-language" lang="' + language + '">' + escapeHTML(LANGUAGE_LABELS[language]) + '</span>' : '';
    card.innerHTML = '<div class="card-cat-bar"></div><div class="card-body"><div class="card-topline"><span class="card-cat-badge">' + escapeHTML(CAT_LABELS[news.cat] || news.cat) + '</span><span class="card-badges">' + languageBadge + '<span class="card-read-badge"' + (wasRead ? '' : ' hidden') + ' aria-label="Già letta">✔</span></span></div><h3 class="card-title"><button class="card-open-btn" type="button" lang="' + language + '">' + escapeHTML(news.title) + '</button></h3><p class="card-summary" lang="' + language + '">' + escapeHTML(news.preview || news.summary) + '</p></div><div class="card-footer"><span class="card-source">' + escapeHTML(news.source) + '</span><span class="card-footer-right"><time class="card-time" data-pub-ts="' + escapeHTML(news.pub_ts) + '" datetime="' + escapeHTML(news.published_at || '') + '">' + escapeHTML(formatRelativeTime(news.pub_ts)) + '</time><button class="card-later-btn' + (laterOn ? ' later-on' : '') + '" type="button" aria-pressed="' + String(laterOn) + '" aria-label="' + (laterOn ? 'Rimuovi da Leggi dopo' : 'Aggiungi a Leggi dopo') + '">⏰</button></span></div>';
    var openButton = card.querySelector('.card-open-btn');
    openButton.addEventListener('click', function () { openModal(news, openButton); });
    card.querySelector('.card-later-btn').addEventListener('click', function () { toggleLater(news.id); });
    return card;
  }

  function getFiltered() {
    var filtered = ALL_NEWS.filter(function (news) {
      if (activeCategory === 'preferiti' && !isFav(news.id)) return false;
      if (activeCategory === 'leggi-dopo' && !isLater(news.id)) return false;
      if (activeCategory !== 'all' && activeCategory !== 'preferiti' && activeCategory !== 'leggi-dopo' && news.cat !== activeCategory) return false;
      if (sourceName && news.source !== sourceName) return false;
      if (searchTerm && normalize(news.title + ' ' + news.summary + ' ' + news.source).indexOf(searchTerm) === -1) return false;
      return true;
    });
    return filtered.sort(function (a, b) {
      if (sortOrder === 'relevance') return (b.score || 0) - (a.score || 0) || (b.pub_ts || 0) - (a.pub_ts || 0);
      return (b.pub_ts || 0) - (a.pub_ts || 0);
    });
  }

  function renderAll() {
    var description = CAT_DESCRIPTIONS[activeCategory], filtered = getFiltered();
    var hasFilters = Boolean(searchTerm || sourceName), noHero = NO_HERO_CATS[activeCategory] || hasFilters;
    document.getElementById('sectionKicker').textContent = description[0];
    document.getElementById('sectionTitle').textContent = description[1];
    document.getElementById('sectionDescription').textContent = description[2];
    renderHero(noHero ? null : filtered[0]);
    grid.textContent = '';
    var shown = noHero ? filtered : filtered.slice(1);
    resultsCount.textContent = filtered.length + (filtered.length === 1 ? ' notizia trovata' : ' notizie trovate');
    if (!shown.length) {
      var empty = document.createElement('p'); empty.className = 'empty-state';
      empty.textContent = hasFilters ? 'Nessuna notizia corrisponde ai filtri.' : (noHero ? 'Non ci sono ancora notizie in questa sezione.' : 'Non ci sono altre notizie disponibili in questa sezione.');
      grid.appendChild(empty); return;
    }
    shown.forEach(function (news) { grid.appendChild(buildCard(news)); });
  }

  function updateVisibleTimes() {
    document.querySelectorAll('[data-pub-ts]').forEach(function (element) {
      var relative = formatRelativeTime(element.dataset.pubTs);
      element.textContent = element === modalTime ? '🕐 ' + relative : relative;
    });
  }

  populateSources(); updateFeedStatus(); renderAll();
  window.setInterval(function () { updateFeedStatus(); updateVisibleTimes(); }, 60 * 1000);
  var hashMatch = location.hash.match(/^#article=([^&]+)$/);
  if (hashMatch) {
    try {
      var linkedId = decodeURIComponent(hashMatch[1]);
      if (/^[a-f0-9]{20}$/.test(linkedId)) {
        var linkedNews = ALL_NEWS.find(function (news) { return news.id === linkedId; });
        if (linkedNews) openModal(linkedNews, null, false);
      }
    } catch (_) { /* hash non valido: ignora */ }
  }
})();
