const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const source = fs.readFileSync(require.resolve('../refresh.js'), 'utf8');
function setup(replies) {
  const elements = {}, calls = [], timers = [], navigation = [];
  for (const id of ['refreshBtn', 'feedStatus', 'refreshTimer']) elements[id] = {
    attrs: { 'aria-label': 'Aggiorna le notizie' }, disabled: false,
    setAttribute(k, v) { this.attrs[k] = v; }, getAttribute(k) { return this.attrs[k]; },
    removeAttribute(k) { delete this.attrs[k]; }, addEventListener(_event, fn) { this.click = fn; }
  };
  vm.runInNewContext(source, {
    NEWS_TIMESTAMP: 100, URL, AbortSignal, Date,
    document: { getElementById: id => elements[id] },
    location: { href: 'https://lagraffa.vercel.app/?filter=it#article-abc', replace: url => navigation.push(url) },
    window: { setTimeout: fn => { timers.push(fn); return timers.length; }, clearTimeout() {} },
    fetch: async (url, options) => {
      calls.push({ url, options }); const reply = replies.shift();
      if (reply instanceof Error) throw reply;
      assert.ok(reply, 'unexpected request: ' + url);
      return { ok: (reply.code || 200) < 400, status: reply.code || 200, json: async () => reply.data };
    }
  });
  return { elements, calls, timers, navigation };
}
test('published data reloads without dispatch and preserves the article link', async () => {
  const ui = setup([{ data: { timestamp: 101 } }]); await ui.elements.refreshBtn.click();
  assert.equal(ui.calls.length, 1); assert.equal(ui.navigation.length, 1);
  const url = new URL(ui.navigation[0]); assert.equal(url.hash, '#article-abc'); assert.equal(url.searchParams.get('filter'), 'it');
});
test('starts once, polls publication, and does not reload on workflow completion alone', async () => {
  const ui = setup([
    { data: { timestamp: 100 } }, { code: 202, data: { status: 'waiting', after: 12 } },
    { data: { timestamp: 100 } }, { data: { status: 'publishing' } }, { data: { timestamp: 101 } }
  ]);
  await ui.elements.refreshBtn.click(); await ui.elements.refreshBtn.click();
  assert.equal(ui.calls.length, 2); assert.equal(ui.elements.refreshBtn.disabled, true);
  assert.equal(ui.calls[1].options.method, 'POST'); assert.equal(ui.calls[1].options.body, '{}');
  await ui.timers.shift()(); assert.equal(ui.navigation.length, 0); assert.match(ui.elements.feedStatus.textContent, /Pubblicazione/);
  await ui.timers.shift()(); assert.equal(ui.navigation.length, 1);
});
test('failed runs, unavailable configuration, and network errors restore the button', async () => {
  for (const replies of [
    [{ data: { timestamp: 100 } }, { code: 503, data: { error: 'Aggiornamento manuale non ancora configurato.' } }],
    [new Error('offline')],
    [{ data: { timestamp: 100 } }, { code: 202, data: { status: 'running', after: 12 } }, { data: { timestamp: 100 } }, { data: { status: 'failed' } }]
  ]) {
    const ui = setup(replies); await ui.elements.refreshBtn.click(); if (ui.timers.length) await ui.timers.shift()();
    assert.equal(ui.elements.refreshBtn.disabled, false); assert.equal(ui.navigation.length, 0); assert.equal(ui.elements.refreshBtn.attrs['aria-busy'], undefined);
  }
});
test('cooldown explains when collection is available without polling', async () => {
  const ui = setup([{ data: { timestamp: 100 } }, { code: 429, data: { status: 'cooldown', previousStatus: 'ready', retryAfter: 120 } }]);
  await ui.elements.refreshBtn.click(); assert.match(ui.elements.feedStatus.textContent, /già aggiornate.*2 minuti/);
  assert.equal(ui.elements.refreshBtn.disabled, false); assert.equal(ui.timers.length, 0);
});
