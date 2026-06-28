import { SITE } from '~/config'
import { withBasePath } from '~/utils/path'

const iconVersion = '20260628-1'
const withAssetVersion = (path) => `${withBasePath(path)}?v=${iconVersion}`

export async function GET() {
  const manifest = {
    id: withBasePath('/'),
    name: SITE.title,
    short_name: 'Mosasaurus',
    description: SITE.description,
    icons: [
      {
        src: withAssetVersion('icon-192.png'),
        type: 'image/png',
        sizes: '192x192',
      },
      {
        src: withAssetVersion('icon-512.png'),
        type: 'image/png',
        sizes: '512x512',
      },
      {
        src: withAssetVersion('icon-mask.png'),
        type: 'image/png',
        sizes: '512x512',
        purpose: 'maskable',
      },
    ],
    scope: withBasePath('/'),
    start_url: withBasePath('/'),
    display: 'standalone',
    theme_color: '#fff',
    background_color: '#fff',
  }

  return new Response(JSON.stringify(manifest), {
    headers: {
      'Content-Type': 'application/manifest+json; charset=utf-8',
    },
  })
}
