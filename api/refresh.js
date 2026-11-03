/* Fixed workflow only: credentials never leave this function. */
const API = 'https://api.github.com/repos/francescoeramo/LaGraffa';
const WORKFLOW = 'fetch_news.yml';
const COOLDOWN_MS = 15 * 60 * 1000;
const PUBLISHED_AT = Number(require('../news.json').timestamp) * 1000;
let starting = null;
let pendingUntil = 0;
let pendingAfter = 0;
let cachedRuns = null;
let cachedUntil = 0;

function send(res, code, body) {
  res.status(code);
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.end(JSON.stringify(body));
}
function sameOrigin(req) {
  if (req.headers['sec-fetch-site'] && req.headers['sec-fetch-site'] !== 'same-origin') return false;
  try {
    const host = String(req.headers.host || '').toLowerCase();
    const origin = new URL(req.headers.origin || '');
    return origin.host.toLowerCase() === host && (origin.protocol === 'https:' ||
      (origin.protocol === 'http:' && /^(localhost|127\.0\.0\.1)(:\d+)?$/.test(host)));
  } catch (_) {
    // Same-origin GET fetches need not send Origin.
    return req.method === 'GET' && req.headers['sec-fetch-site'] === 'same-origin';
  }
}
async function github(path, options = {}) {
  const response = await fetch(API + path, {
    ...options,
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: 'Bearer ' + process.env.GITHUB_REFRESH_TOKEN,
      'X-GitHub-Api-Version': '2022-11-28',
      'User-Agent': 'LaGraffa-refresh',
      'Content-Type': 'application/json'
    },
    signal: AbortSignal.timeout(8000)
  });
  if (!response.ok) {
    // Do not log provider bodies or credentials.
    console.error('News refresh GitHub status:', response.status);
    throw new Error('Aggiornamento temporaneamente non disponibile. Riprova più tardi.');
  }
  return response.status === 204 ? null : response.json();
}
async function runs(fresh = false) {
  if (!fresh && cachedRuns && Date.now() < cachedUntil) return cachedRuns;
  const result = await github('/actions/workflows/' + WORKFLOW + '/runs?branch=main&per_page=20');
  if (!Array.isArray(result.workflow_runs)) throw new Error('Risposta del servizio non valida.');
  cachedRuns = result.workflow_runs.sort((a, b) => b.id - a.id);
  cachedUntil = Date.now() + 10000;
  return cachedRuns;
}
function state(run) {
  if (!run) return { status: 'waiting', after: 0 };
  return {
    status: run.status !== 'completed' ? 'running' : run.conclusion !== 'success' ? 'failed' :
      PUBLISHED_AT >= Date.parse(run.created_at) ? 'ready' : 'publishing',
    after: run.id - 1
  };
}
async function start() {
  const list = await runs(true);
  const active = list.find(run => run.status !== 'completed');
  if (active) return state(active);
  if (Date.now() < pendingUntil) return { status: 'waiting', after: pendingAfter };
  const latest = list[0];
  const age = latest ? Date.now() - Date.parse(latest.created_at) : Infinity;
  if (age < COOLDOWN_MS) return {
    status: 'cooldown', after: latest.id - 1,
    retryAfter: Math.max(1, Math.ceil((COOLDOWN_MS - age) / 1000)),
    previousStatus: state(latest).status
  };
  pendingAfter = latest ? latest.id : 0;
  await github('/actions/workflows/' + WORKFLOW + '/dispatches', {
    method: 'POST', body: JSON.stringify({ ref: 'main' })
  });
  // Covers the brief delay before a dispatched run appears in GitHub's list.
  pendingUntil = Date.now() + 60000;
  cachedUntil = 0;
  return { status: 'waiting', after: pendingAfter };
}
module.exports = async function handler(req, res) {
  if (!['GET', 'POST'].includes(req.method)) {
    res.setHeader('Allow', 'GET, POST');
    return send(res, 405, { error: 'Metodo non consentito.' });
  }
  if (!sameOrigin(req)) return send(res, 403, { error: 'Richiesta non consentita.' });
  if (req.method === 'POST' && (!String(req.headers['content-type'] || '').startsWith('application/json') ||
      !req.body || typeof req.body !== 'object' || Array.isArray(req.body) || Object.keys(req.body).length)) {
    return send(res, 400, { error: 'Richiesta non valida.' });
  }
  if (!process.env.GITHUB_REFRESH_TOKEN) return send(res, 503, { error: 'Aggiornamento manuale non ancora configurato.' });
  try {
    if (req.method === 'GET') {
      const after = new URL(req.url, 'https://localhost').searchParams.get('after') || '0';
      if (!/^\d{1,16}$/.test(after) || !Number.isSafeInteger(Number(after))) return send(res, 400, { error: 'Richiesta non valida.' });
      const list = await runs();
      return send(res, 200, state(list.find(run => run.id > Number(after))));
    }
    if (!starting) starting = start().finally(() => { starting = null; });
    const result = await starting;
    if (result.status === 'cooldown') res.setHeader('Retry-After', String(result.retryAfter));
    return send(res, result.status === 'cooldown' ? 429 : 202, result);
  } catch (error) {
    console.error('News refresh failed:', error.name);
    return send(res, 502, { error: 'Impossibile contattare il servizio di aggiornamento. Riprova più tardi.' });
  }
};
