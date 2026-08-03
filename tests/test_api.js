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

test('rejects methods other than POST', async () => {
  const res = responseMock();
  await handler({ method: 'GET', headers: {} }, res);
  assert.equal(res.statusCode, 405);
  assert.equal(res.headers.Allow, 'POST');
});

test('rejects cross-site requests', async () => {
  const previousKey = process.env.GROQ_API_KEY;
  process.env.GROQ_API_KEY = 'test';
  const res = responseMock();
  await handler({ method: 'POST', headers: { 'sec-fetch-site': 'cross-site' }, body: {} }, res);
  assert.equal(res.statusCode, 403);
  if (previousKey === undefined) delete process.env.GROQ_API_KEY; else process.env.GROQ_API_KEY = previousKey;
});

test('rejects arbitrary or malformed article ids', async () => {
  const previousKey = process.env.GROQ_API_KEY;
  process.env.GROQ_API_KEY = 'test';
  const res = responseMock();
  await handler({ method: 'POST', headers: {}, body: { articleId: 'not-an-id', text: 'arbitrary' } }, res);
  assert.equal(res.statusCode, 400);
  if (previousKey === undefined) delete process.env.GROQ_API_KEY; else process.env.GROQ_API_KEY = previousKey;
});

test('same-origin validation accepts matching origin and host', () => {
  assert.equal(handler._test.isSameOrigin({ headers: { origin: 'https://example.com', host: 'example.com' } }), true);
  assert.equal(handler._test.isSameOrigin({ headers: { origin: 'https://evil.example', host: 'example.com' } }), false);
});

test('looks up article text server-side before calling the provider', async () => {
  const previousKey = process.env.GROQ_API_KEY;
  const previousFetch = global.fetch;
  process.env.GROQ_API_KEY = 'test';
  const article = Array.from(handler._test.loadArticles().values()).find(item => item.content_status === 'full' && item.language === 'it');
  assert.ok(article, 'news.js deve contenere almeno un articolo italiano con testo esteso');
  const articleId = article.id;
  let providerBody;
  global.fetch = async (_url, options) => {
    providerBody = JSON.parse(options.body);
    return {
      ok: true,
      async json() { return { choices: [{ message: { content: JSON.stringify({ title: 'Titolo', body: 'Sintesi verificata e fedele ai fatti della fonte. '.repeat(240) }) } }] }; }
    };
  };
  const res = responseMock();
  await handler({ method: 'POST', headers: { host: 'example.com' }, socket: { remoteAddress: 'test-success' }, body: { articleId, text: 'testo arbitrario da ignorare' } }, res);
  assert.equal(res.statusCode, 200);
  assert.match(providerBody.messages[1].content, /<articolo>/);
  assert.doesNotMatch(providerBody.messages[1].content, /testo arbitrario da ignorare/);
  assert.equal(JSON.parse(res.body).mode, 'summary');
  global.fetch = previousFetch;
  if (previousKey === undefined) delete process.env.GROQ_API_KEY; else process.env.GROQ_API_KEY = previousKey;
});

test('requests a complete translation without summaries for foreign articles', () => {
  const messages = handler._test.buildMessages({
    title: 'Original title', text: 'A complete source article.', source: 'Publisher', language: 'en', mode: 'translation'
  });
  assert.match(messages[1].content, /Traduci integralmente/);
  assert.match(messages[1].content, /Non riassumere/);
  assert.match(messages[0].content, /non produrre avvertenze/i);
});

test('rejects model meta-commentary and incomplete translations', () => {
  assert.throws(
    () => handler._test.validateGenerated({ title: 'Titolo', body: 'La notizia non è ben approfondita.' }, 'Testo fonte '.repeat(120), 'summary'),
    /metacommenti/
  );
  assert.throws(
    () => handler._test.validateGenerated({ title: 'Titolo', body: 'Traduzione breve.' }, 'Full source text '.repeat(200), 'translation'),
    /troppo breve/
  );
});
