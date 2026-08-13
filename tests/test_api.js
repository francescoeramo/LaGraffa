const test = require('node:test');
const assert = require('node:assert/strict');
const handler = require('../api/ai.js');

function responseMock() {
  return {
    statusCode: 0, headers: {}, body: '',
    status(code) { this.statusCode = code; return this; },
    setHeader(key, value) { this.headers[key] = value; },
    end(value) { this.body = value; }
  };
}

function validHeaders(extra = {}) {
  return { host: 'example.com', origin: 'https://example.com', 'sec-fetch-site': 'same-origin', 'content-type': 'application/json', ...extra };
}

test('rejects methods other than POST', async () => {
  const res = responseMock();
  await handler({ method: 'GET', headers: {} }, res);
  assert.equal(res.statusCode, 405);
  assert.equal(res.headers.Allow, 'POST');
});

test('rejects cross-site and origin-less requests', async () => {
  let res = responseMock();
  await handler({ method: 'POST', headers: validHeaders({ 'sec-fetch-site': 'cross-site' }), body: {} }, res);
  assert.equal(res.statusCode, 403);
  res = responseMock();
  await handler({ method: 'POST', headers: { host: 'example.com', 'content-type': 'application/json' }, body: {} }, res);
  assert.equal(res.statusCode, 403);
});

test('requires a small JSON body containing only articleId', async () => {
  let res = responseMock();
  await handler({ method: 'POST', headers: validHeaders({ 'content-type': 'text/plain' }), body: { articleId: 'a'.repeat(20) } }, res);
  assert.equal(res.statusCode, 415);
  res = responseMock();
  await handler({ method: 'POST', headers: validHeaders(), body: { articleId: 'a'.repeat(20), text: 'arbitrary' } }, res);
  assert.equal(res.statusCode, 415);
});

test('rejects arbitrary or malformed article ids', async () => {
  const res = responseMock();
  await handler({ method: 'POST', headers: validHeaders(), body: { articleId: 'not-an-id' } }, res);
  assert.equal(res.statusCode, 400);
});

test('same-origin validation accepts only matching secure origins', () => {
  assert.equal(handler._test.isSameOrigin({ headers: validHeaders() }), true);
  assert.equal(handler._test.isSameOrigin({ headers: validHeaders({ origin: 'https://evil.example' }) }), false);
  assert.equal(handler._test.isSameOrigin({ headers: validHeaders({ origin: 'http://example.com' }) }), false);
});

test('looks up article text in news.json before calling Groq', async () => {
  const previousKey = process.env.GROQ_API_KEY;
  const previousFetch = global.fetch;
  process.env.GROQ_API_KEY = 'test';
  const article = Array.from(handler._test.loadArticles().values()).find(item => item.content_status === 'full' && item.language === 'it');
  assert.ok(article, 'news.json deve contenere almeno un articolo italiano con testo esteso');
  let providerBody;
  global.fetch = async (_url, options) => {
    providerBody = JSON.parse(options.body);
    return {
      ok: true,
      async json() { return { choices: [{ message: { content: JSON.stringify({ title: 'Titolo', body: 'Sintesi verificata e fedele ai fatti della fonte. '.repeat(240) }) } }] }; }
    };
  };
  try {
    const res = responseMock();
    await handler({ method: 'POST', headers: validHeaders(), socket: { remoteAddress: '127.0.0.2' }, body: { articleId: article.id } }, res);
    assert.equal(res.statusCode, 200);
    assert.match(providerBody.messages[1].content, /<articolo>/);
    assert.equal(JSON.parse(res.body).provider, 'groq');
  } finally {
    global.fetch = previousFetch;
    if (previousKey === undefined) delete process.env.GROQ_API_KEY; else process.env.GROQ_API_KEY = previousKey;
  }
});

test('short foreign articles use free translation without a Groq key', async () => {
  const previousGroq = process.env.GROQ_API_KEY;
  const previousDeepL = process.env.DEEPL_API_KEY;
  const previousFetch = global.fetch;
  delete process.env.GROQ_API_KEY;
  delete process.env.DEEPL_API_KEY;
  const article = Array.from(handler._test.loadArticles().values()).find(item => item.language === 'en' && String(item.body || '').length >= 40 && String(item.body || '').length <= 1400);
  assert.ok(article, 'news.json deve contenere una notizia breve in inglese');
  const calledUrls = [];
  global.fetch = async url => {
    calledUrls.push(String(url));
    const source = new URL(String(url)).searchParams.get('q');
    return { ok: true, async json() { return { responseStatus: 200, responseData: { translatedText: `Traduzione italiana fedele: ${source}` } }; } };
  };
  try {
    const res = responseMock();
    await handler({ method: 'POST', headers: validHeaders(), socket: { remoteAddress: '127.0.0.3' }, body: { articleId: article.id } }, res);
    assert.equal(res.statusCode, 200);
    const payload = JSON.parse(res.body);
    assert.equal(payload.provider, 'mymemory');
    assert.equal(payload.mode, 'translation');
    assert.ok(calledUrls.length >= 2);
    assert.ok(calledUrls.every(url => url.startsWith('https://api.mymemory.translated.net/get?')));
  } finally {
    global.fetch = previousFetch;
    if (previousGroq === undefined) delete process.env.GROQ_API_KEY; else process.env.GROQ_API_KEY = previousGroq;
    if (previousDeepL === undefined) delete process.env.DEEPL_API_KEY; else process.env.DEEPL_API_KEY = previousDeepL;
  }
});

test('translation chunks respect the MyMemory 500-byte limit', () => {
  const chunks = handler._test.chunksByUtf8Bytes('È una frase con caratteri multibyte. '.repeat(40));
  assert.ok(chunks.length > 1);
  assert.ok(chunks.every(chunk => Buffer.byteLength(chunk, 'utf8') <= 450));
});

test('requests complete translations and rejects meta-commentary', () => {
  const messages = handler._test.buildMessages({
    title: 'Original title', text: 'A complete source article.', source: 'Publisher', language: 'en', mode: 'translation'
  });
  assert.match(messages[1].content, /Traduci integralmente/);
  assert.match(messages[1].content, /Non riassumere/);
  assert.throws(
    () => handler._test.validateGenerated({ title: 'Titolo', body: 'La notizia non è ben approfondita.' }, 'Testo fonte '.repeat(120), 'summary'),
    /metacommenti/
  );
});

test('numeric validation accepts localized punctuation and percent signs', () => {
  assert.deepEqual(
    [...handler._test.numericTokens('93 percent, 8.79 million and 100,000 people')],
    [...handler._test.numericTokens('93%, 8,79 milioni e 100.000 persone')]
  );
});
