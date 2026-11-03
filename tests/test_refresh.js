const test = require('node:test');
const assert = require('node:assert/strict');
const modulePath = require.resolve('../api/refresh.js');
const headers = { host: 'lagraffa.vercel.app', origin: 'https://lagraffa.vercel.app', 'sec-fetch-site': 'same-origin', 'content-type': 'application/json' };
const run = (extra = {}) => ({ id: 123, status: 'completed', conclusion: 'success', created_at: new Date(Date.now() - 3600000).toISOString(), ...extra });
function response() {
  return { headers: {}, status(code) { this.code = code; }, setHeader(k, v) { this.headers[k] = v; }, end(body) { this.data = JSON.parse(body); } };
}
async function setup(fn) {
  const savedFetch = global.fetch, savedToken = process.env.GITHUB_REFRESH_TOKEN;
  process.env.GITHUB_REFRESH_TOKEN = 'private-test-token';
  delete require.cache[modulePath];
  try { await fn(require(modulePath)); }
  finally { global.fetch = savedFetch; if (savedToken === undefined) delete process.env.GITHUB_REFRESH_TOKEN; else process.env.GITHUB_REFRESH_TOKEN = savedToken; }
}
const req = (method = 'POST', extra = {}) => ({ method, url: '/api/refresh', headers, body: {}, ...extra });
const ok = data => ({ ok: true, status: 200, json: async () => data });

test('rejects cross-origin, invalid bodies, unsupported methods before GitHub access', () => setup(async handler => {
  global.fetch = () => { throw new Error('must not call'); };
  for (const [request, expected] of [
    [req('DELETE'), 405], [req('POST', { headers: { ...headers, origin: 'https://evil.example' } }), 403],
    [req('POST', { body: { ref: 'evil' } }), 400], [req('POST', { body: [] }), 400],
    [req('POST', { headers: { host: headers.host } }), 403],
    [req('GET', { url: '/api/refresh?after=evil' }), 400]
  ]) { const res = response(); await handler(request, res); assert.equal(res.code, expected); }
}));
test('missing credential fails closed', () => setup(async handler => {
  delete process.env.GITHUB_REFRESH_TOKEN;
  const res = response(); await handler(req(), res); assert.equal(res.code, 503);
}));
test('new request dispatches only the fixed workflow on main; concurrent requests join', () => setup(async handler => {
  const calls = [];
  global.fetch = async (url, options) => {
    calls.push({ url, options });
    if (options.method === 'POST') return { ok: true, status: 204 };
    return ok({ workflow_runs: [run()] });
  };
  const a = response(), b = response();
  await Promise.all([handler(req(), a), handler(req(), b)]);
  assert.equal(a.code, 202); assert.deepEqual(a.data, b.data); assert.equal(a.data.after, 123);
  assert.equal(calls.filter(c => c.options.method === 'POST').length, 1);
  assert.equal(calls[1].url, 'https://api.github.com/repos/francescoeramo/LaGraffa/actions/workflows/fetch_news.yml/dispatches');
  assert.deepEqual(JSON.parse(calls[1].options.body), { ref: 'main' });
  assert.equal(JSON.stringify(a.data).includes('private-test-token'), false);
  const c = response(); await handler(req(), c);
  assert.equal(c.data.status, 'waiting'); assert.equal(calls.filter(c => c.options.method === 'POST').length, 1);
}));
test('an active collection is reused and recent attempts are throttled', () => setup(async handler => {
  let current = run({ status: 'in_progress', conclusion: null });
  global.fetch = async (_url, options) => { assert.notEqual(options.method, 'POST'); return ok({ workflow_runs: [current] }); };
  let res = response(); await handler(req(), res); assert.equal(res.data.status, 'running');
  current = run({ created_at: new Date().toISOString() });
  res = response(); await handler(req(), res);
  assert.equal(res.code, 429); assert.equal(res.data.retryAfter, 900); assert.equal(res.headers['Retry-After'], '900');
}));
test('status polling ignores old runs, reports failures, and caches provider reads', () => setup(async handler => {
  let count = 0;
  global.fetch = async () => { count++; return ok({ workflow_runs: [run({ conclusion: 'failure' })] }); };
  let res = response(); await handler(req('GET', { url: '/api/refresh?after=123' }), res); assert.equal(res.data.status, 'waiting');
  res = response(); await handler(req('GET', { url: '/api/refresh?after=122' }), res); assert.equal(res.data.status, 'failed'); assert.equal(count, 1);
}));
test('provider errors fail without reporting success or leaking credentials', () => setup(async handler => {
  global.fetch = async () => ({ ok: false, status: 401 });
  const res = response(); await handler(req(), res); assert.equal(res.code, 502); assert.equal(JSON.stringify(res.data).includes('private-test-token'), false);
}));
