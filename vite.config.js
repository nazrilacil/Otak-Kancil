import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// SEO yang bergantung pada domain final (canonical, og:url, og:image, robots.txt, sitemap.xml).
// Hanya aktif saat build dan hanya jika VITE_SITE_URL diisi, supaya tidak ada tautan palsu.
function seoFinalDomain(siteUrl) {
  return {
    name: 'seo-final-domain',
    apply: 'build',
    transformIndexHtml() {
      if (!siteUrl) return
      const page = `${siteUrl}/`
      const image = `${siteUrl}/favicon.png`
      return [
        { tag: 'link', attrs: { rel: 'canonical', href: page }, injectTo: 'head' },
        { tag: 'meta', attrs: { property: 'og:url', content: page }, injectTo: 'head' },
        { tag: 'meta', attrs: { property: 'og:image', content: image }, injectTo: 'head' },
        { tag: 'meta', attrs: { name: 'twitter:image', content: image }, injectTo: 'head' },
      ]
    },
    generateBundle() {
      if (!siteUrl) return
      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
      })
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>${siteUrl}/</loc></url>\n</urlset>\n`,
      })
    },
  }
}

// Jika deploy ke GitHub Pages di subfolder, ubah base menjadi '/nama-repo/'.
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_')
  const siteUrl = (env.VITE_SITE_URL || '').trim().replace(/\/+$/, '')
  return {
    base: '/',
    plugins: [vue(), tailwindcss(), seoFinalDomain(siteUrl)],
  }
})