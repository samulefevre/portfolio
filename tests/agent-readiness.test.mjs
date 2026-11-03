import assert from 'node:assert/strict'
import { spawn } from 'node:child_process'
import { once } from 'node:events'
import { createServer } from 'node:net'
import { after, before, test } from 'node:test'
import { setTimeout } from 'node:timers/promises'

let baseURL = process.env.TEST_BASE_URL
let server

before(async () => {
  if (baseURL) return
  const socket = createServer().listen(0, '127.0.0.1')
  await once(socket, 'listening')
  const { port } = socket.address()
  await new Promise(resolve => socket.close(resolve))
  baseURL = `http://127.0.0.1:${port}`
  server = spawn(process.execPath, ['.output/server/index.mjs'], {
    env: { ...process.env, PORT: String(port), HOST: '127.0.0.1' },
    stdio: 'inherit',
  })
  for (let attempt = 0; attempt < 100; attempt++) {
    if (server.exitCode !== null) throw new Error('Production server exited before becoming ready')
    try {
      await fetch(baseURL)
      return
    }
    catch {
      await setTimeout(100)
    }
  }
  throw new Error('Production server did not become ready')
})

after(async () => {
  if (!server || server.exitCode !== null) return
  server.kill()
  await once(server, 'exit')
})

function request(path, accept, method = 'GET') {
  return fetch(new URL(path, baseURL), {
    method,
    headers: accept ? { Accept: accept } : {},
  })
}

function variesOnAccept(response) {
  assert.ok(response.headers.get('vary')?.toLowerCase().split(/\s*,\s*/).includes('accept'))
}

void test('homepage negotiates real Markdown and exposes the same content at /index.md', async () => {
  const response = await request('/?source=agent', 'text/markdown')
  assert.equal(response.status, 200)
  assert.match(response.headers.get('content-type'), /^text\/markdown\b.*charset=utf-8/i)
  variesOnAccept(response)
  const body = await response.text()
  assert.match(body, /^# Samuel Lefèvre/)
  for (const topic of ['Architecture web & SaaS', 'Backend & data', 'Cloud & delivery', 'Flutter', 'mailto:samuel.lefevr@gmail.com']) {
    assert.ok(body.includes(topic), topic)
  }
  assert.doesNotMatch(body, /<!doctype|<html/i)
  const alternate = await request('/index.md')
  assert.equal(alternate.status, 200)
  assert.match(alternate.headers.get('content-type'), /^text\/markdown\b/)
  assert.equal(await alternate.text(), body)
})

void test('Accept quality, specificity, exclusions and browser defaults are respected', async () => {
  for (const [accept, type, status] of [
    [undefined, 'text/html', 200],
    ['*/*', 'text/html', 200],
    ['text/*', 'text/html', 200],
    ['text/html', 'text/html', 200],
    ['text/markdown;q=0.2, text/html;q=0.9', 'text/html', 200],
    ['text/html;q=0.1, text/markdown;q=0.8', 'text/markdown', 200],
    ['text/markdown;q=0, */*;q=0.5', 'text/html', 200],
    ['text/html;q=0, text/*;q=0.5', 'text/markdown', 200],
    ['TEXT/MARKDOWN', 'text/markdown', 200],
    ['application/json', 'text/plain', 406],
    ['text/html;q=0, text/markdown;q=0', 'text/plain', 406],
  ]) {
    const response = await request('/', accept)
    assert.equal(response.status, status, accept)
    assert.ok(response.headers.get('content-type').startsWith(type), accept)
    variesOnAccept(response)
    const body = await response.text()
    if (type === 'text/html') assert.match(body, /<!doctype html>/i)
    if (type === 'text/markdown') assert.match(body, /^# Samuel Lefèvre/)
    if (status === 406) assert.match(body, /text\/html or text\/markdown/)
  }
})

void test('unknown paths remain 404 with useful Markdown for agents and HTML for browsers', async () => {
  for (const path of ['/__ora-404-probe-czj7fkqb', '/missing/nested/page?from=agent', '/missing.md']) {
    const response = await request(path, 'text/markdown')
    assert.equal(response.status, 404, path)
    assert.match(response.headers.get('content-type'), /^text\/markdown\b/)
    variesOnAccept(response)
    const body = await response.text()
    assert.ok(body.length >= 20)
    assert.match(body, /^# 404/)
    assert.match(body, /\[[^\]]+\]\(https:\/\/samuel-lefevre\.com\/llms\.txt\)/)
    assert.doesNotMatch(body, /<html/i)
  }
  const html = await request('/__ora-404-probe-czj7fkqb', 'text/html')
  assert.equal(html.status, 404)
  assert.match(html.headers.get('content-type'), /^text\/html\b/)
  assert.match(await html.text(), /Cette page est introuvable/)
})

void test('HEAD has the corresponding status and type without a body', async () => {
  for (const [path, accept, status] of [
    ['/', 'text/markdown', 200],
    ['/', 'text/html', 200],
    ['/missing', 'text/markdown', 404],
    ['/index.md', 'text/markdown', 200],
  ]) {
    const response = await request(path, accept, 'HEAD')
    assert.equal(response.status, status)
    assert.ok(response.headers.get('content-type').startsWith(accept))
    assert.equal(await response.text(), '')
  }
})

void test('homepage HTML contains parseable Person JSON-LD and discovery links', async () => {
  const response = await request('/', 'text/html')
  assert.match(response.headers.get('link'), /<\/llms\.txt>; rel="describedby"/)
  const html = await response.text()
  const scripts = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
  const person = scripts.map(match => JSON.parse(match[1])).find(item => item['@type'] === 'Person')
  assert.ok(person)
  assert.equal(person['@context'], 'https://schema.org')
  assert.equal(person.name, 'Samuel Lefèvre')
  assert.equal(person.url, 'https://samuel-lefevre.com/')
  assert.ok(person.description.length > 20)
  assert.match(person.jobTitle, /TypeScript/)
  assert.equal(person.email, 'mailto:samuel.lefevr@gmail.com')
  assert.deepEqual(person.sameAs, [
    'https://www.malt.fr/profile/samuel-lefevre',
    'https://github.com/samulefevre',
    'https://www.linkedin.com/in/samuel-lefevre',
  ])
  assert.match(html, /<link\b(?=[^>]*rel="alternate")(?=[^>]*type="text\/markdown")(?=[^>]*href="\/index.md")[^>]*>/)
})

void test('llms.txt follows the heading, summary, guidance and linked file-list format', async () => {
  const response = await request('/llms.txt')
  assert.equal(response.status, 200)
  assert.match(response.headers.get('content-type'), /^text\/plain\b/)
  const body = await response.text()
  assert.match(body, /^# Samuel Lefèvre\n\n> .+/)
  assert.match(body, /When to use this:.*Nuxt\/TypeScript SaaS/)
  assert.match(body, /How to contact:.*samuel\.lefevr@gmail\.com/)
  assert.match(body, /Availability, pricing, delivery dates.*confirmed directly/)
  for (const section of body.split(/^## .+$/m).slice(1)) {
    for (const line of section.trim().split('\n').filter(Boolean)) {
      assert.match(line, /^- \[[^\]]+\]\(https:\/\/[^)]+\): .+/)
    }
  }
  const localLinks = [...body.matchAll(/\]\(https:\/\/samuel-lefevre\.com([^)]*)\)/g)]
  for (const [, path] of localLinks) assert.equal((await request(path)).status, 200, path)
})

void test('sitemap lists only indexable canonical pages and robots advertises it', async () => {
  const response = await request('/sitemap.xml')
  assert.equal(response.status, 200)
  assert.match(response.headers.get('content-type'), /^(application|text)\/xml\b/)
  const xml = await response.text()
  assert.ok(Buffer.byteLength(xml) < 52_428_800)
  assert.match(xml, /^<\?xml version="1.0" encoding="UTF-8"\?>\s*<urlset xmlns="http:\/\/www\.sitemaps\.org\/schemas\/sitemap\/0\.9">\s*<url>\s*<loc>https:\/\/samuel-lefevre\.com\/<\/loc>\s*<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>\s*<\/url>\s*<\/urlset>\s*$/)
  const lastmod = xml.match(/<lastmod>([^<]+)<\/lastmod>/)[1]
  assert.equal(new Date(lastmod).toISOString().slice(0, 10), lastmod)
  assert.ok(Date.parse(lastmod) <= Date.now())
  const homepage = await request('/', 'text/html')
  assert.equal(homepage.status, 200)
  assert.doesNotMatch(await homepage.text(), /<meta[^>]*name="robots"[^>]*content="[^"]*noindex/)
  const legal = await request('/mentions-legales', 'text/markdown')
  assert.equal(legal.status, 200)
  assert.match(legal.headers.get('content-type'), /^text\/html\b/)
  assert.match(await legal.text(), /<meta[^>]*name="robots"[^>]*content="noindex, follow"/)
  const robots = await request('/robots.txt')
  assert.equal(robots.status, 200)
  assert.match(robots.headers.get('content-type'), /^text\/plain\b/)
  assert.match(await robots.text(), /^Sitemap: https:\/\/samuel-lefevre\.com\/sitemap\.xml$/m)
})

void test('valid static assets are not replaced by Markdown or errors', async () => {
  const response = await request('/favicon.svg', 'text/markdown')
  assert.equal(response.status, 200)
  assert.match(response.headers.get('content-type'), /^image\/svg\+xml\b/)
  assert.match(await response.text(), /<svg\b/)
})
