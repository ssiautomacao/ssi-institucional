import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://ssiautomacao.github.io',
  base: '/ssi-institucional/',
  output: 'server',
  i18n: {
    defaultLocale: "pt",
    locales: ["pt", "en", "es", "it", "de", "zh-CN"],
    routing: {
      prefixDefaultLocale: true
    },
    // Fallback Strategy: prevents 404s on untranslated pages
    fallback: {
      "es": "pt",
      "it": "en",
      "de": "en",
      "zh-CN": "en"
    }
  },

  // ─────────────────────────────────────────────────────────────
  // 301 Redirects — SEO Preservation (Legacy → Sprint 02-06 Routes)
  // ─────────────────────────────────────────────────────────────
  redirects: {
    // Ciclo de Vida
    '/pt/servicos/apreciacao-de-riscos-lar': '/ssi-institucional/pt/solucoes/ciclo-de-vida/apreciacao-de-riscos-lar',
    '/pt/servicos/validacao-de-sistemas-lvs': '/ssi-institucional/pt/solucoes/ciclo-de-vida/validacao-seguranca-lvs',
    // Curinga para qualquer outra rota antiga cair na home ou na página de soluções
    '/pt/servicos/[...slug]': '/ssi-institucional/pt/solucoes/ciclo-de-vida',
    // Institucional
    '/pt/empresa': '/ssi-institucional/pt/sobre-nos',
    '/empresa': '/ssi-institucional/pt/sobre-nos',
    '/servicos': '/ssi-institucional/pt/solucoes/ciclo-de-vida',
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    react(),
    sitemap({
      i18n: {
        defaultLocale: "pt",
        locales: {
          pt: "pt",
          en: "en",
          es: "es",
          it: "it",
          de: "de",
          "zh-CN": "zh-CN"
        }
      },
      customPages: ["/ssi-institucional/api/*"]
    })
  ]
});