// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://ssiautomacao.github.io',
  base: '/ssi-institucional/',
  i18n: {
    defaultLocale: "pt",
    locales: ["pt", "en", "it", "es", "de"],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true
    }
  },
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react()]
});