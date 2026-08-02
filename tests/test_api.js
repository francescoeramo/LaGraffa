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
  const articleId = handler._test.loadArticles().keys().next().value;
  let providerBody;
  global.fetch = async (_url, options) => {
    providerBody = JSON.parse(options.body);
    return {
      ok: true,
      async json() { return { choices: [{ message: { content: JSON.stringify({ title: 'Titolo', summary: 'Sintesi verificata.' }) } }] }; }
    };
  };
  const res = responseMock();
  await handler({ method: 'POST', headers: { host: 'example.com' }, socket: { remoteAddress: 'test-success' }, body: { articleId, text: 'testo arbitrario da ignorare' } }, res);
  assert.equal(res.statusCode, 200);
  assert.match(providerBody.messages[0].content, /<articolo>/);
  assert.doesNotMatch(providerBody.messages[0].content, /testo arbitrario da ignorare/);
  global.fetch = previousFetch;
  if (previousKey === undefined) delete process.env.GROQ_API_KEY; else process.env.GROQ_API_KEY = previousKey;
});
