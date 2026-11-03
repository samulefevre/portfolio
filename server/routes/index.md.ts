import { defineHandler } from 'nitro/h3'
import { homepageMarkdown } from '../utils/homepage-markdown'

export default defineHandler(() => new Response(homepageMarkdown, {
  headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
}))
