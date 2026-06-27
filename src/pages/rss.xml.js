import { getCollection } from 'astro:content'
import rss from '@astrojs/rss'

import { SITE } from '~/config'
import { withBasePath } from '~/utils/path'

export async function GET() {
  const collections = await Promise.all([
    getCollection('blog'),
    getCollection('announcement'),
    getCollection('news'),
  ])

  const items = collections
    .flat()
    .filter((item) => !item.data.draft)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())

  return rss({
    title: SITE.title,
    description: SITE.description,
    site: SITE.website,
    customData: `
      <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
      <image>
        <title>${SITE.title}</title>
        <url>${SITE.website}/icon-512.png</url>
        <link>${SITE.website}</link>
      </image>`,

    items: items.map((item) => ({
      title: item.data.title,
      link: withBasePath(`/${item.collection}/${item.id}`),
      pubDate: item.data.pubDate,
      description: item.data.description,
      author:
        item.data.authors?.map((author) => author.name).join(', ') ||
        SITE.author,
    })),

    stylesheet: withBasePath('/rss-styles.xsl'),
  })
}
