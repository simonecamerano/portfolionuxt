import { defineEventHandler, getQuery, createError } from 'h3'

// GitHub blob/ URLs serve an HTML page, not the raw file.
// Rewriting relative paths and blob/ URLs to raw.githubusercontent.com
// ensures images in the rendered README actually load.
function rewriteImageUrls(markdown: string, repo: string, branch: string): string {
  const rawBase = `https://raw.githubusercontent.com/${repo}/${branch}`

  // Markdown images with relative path: ![alt](./path) or ![alt](path)
  markdown = markdown.replace(
    /!\[([^\]]*)\]\((?!https?:\/\/)([^)#?]+)/g,
    (_, alt, path) => `![${alt}](${rawBase}/${path.replace(/^\.\//, '')}`,
  )

  // HTML <img src="relative"> tags
  markdown = markdown.replace(
    /<img([^>]*?)src="(?!https?:\/\/)([^"]+)"/gi,
    (_, attrs, path) => `<img${attrs}src="${rawBase}/${path.replace(/^\.\//, '')}"`,
  )

  // GitHub blob URLs → raw URLs (so images in blob links also render)
  markdown = markdown.replace(
    /https:\/\/github\.com\/([\w.-]+\/[\w.-]+)\/blob\/([\w.-]+)\//g,
    `https://raw.githubusercontent.com/$1/$2/`,
  )

  return markdown
}

export default defineEventHandler(async (event) => {
  const { repo } = getQuery(event)

  if (!repo || typeof repo !== 'string') {
    throw createError({ statusCode: 400, message: 'Parametro repo mancante.' })
  }

  if (!/^[\w.-]+\/[\w.-]+$/.test(repo)) {
    throw createError({ statusCode: 400, message: 'Formato repo non valido.' })
  }

  // New GitHub repos default to 'main'; legacy repos use 'master'.
  // We try both before returning a 404.
  for (const branch of ['main', 'master']) {
    try {
      const content = await $fetch<string>(
        `https://raw.githubusercontent.com/${repo}/${branch}/README.md`,
        { responseType: 'text' },
      )
      return { content: rewriteImageUrls(content, repo, branch) }
    } catch {
      // try next branch
    }
  }

  throw createError({ statusCode: 404, message: 'README non trovato.' })
})
