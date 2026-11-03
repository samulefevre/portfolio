import Negotiator from 'negotiator'
import { defineMiddleware, HTTPError } from 'nitro/h3'
import { homepageMarkdown } from '../utils/homepage-markdown'

const notFoundMarkdown = `# 404 — Page introuvable

La page demandée n’existe pas ou a été déplacée. Consultez les [instructions pour les agents](https://samuel-lefevre.com/llms.txt) ou revenez à l’[accueil](https://samuel-lefevre.com/).
`

function markdownResponse(body: string, status = 200) {
  return new Response(body, {
    status,
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Vary': 'Accept',
    },
  })
}

export default defineMiddleware(async (event, next) => {
  if (event.req.method !== 'GET' && event.req.method !== 'HEAD') return next()

  // HTML is the default for absent Accept and wildcards.
  const preferred = new Negotiator({ headers: { accept: event.req.headers.get('accept') ?? '*/*' } })
    .mediaType(['text/html', 'text/markdown'])

  if (event.url.pathname === '/') {
    event.res.headers.append('Vary', 'Accept')
    event.res.headers.set('Link', '</llms.txt>; rel="describedby"')
    if (preferred === 'text/markdown') return markdownResponse(homepageMarkdown)
    if (!preferred) {
      return new Response('Not acceptable. Request text/html or text/markdown.', {
        status: 406,
        headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Vary': 'Accept' },
      })
    }
  }

  if (preferred !== 'text/markdown') return next()

  // Let the router decide what exists; do not turn valid pages or assets into 404s.
  try {
    const response = await next()
    if (response instanceof Response && response.status === 404) {
      return markdownResponse(notFoundMarkdown, 404)
    }
    return response
  }
  catch (error) {
    if (HTTPError.isError(error) && error.status === 404) {
      return markdownResponse(notFoundMarkdown, 404)
    }
    throw error
  }
})
