// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import plTypography from './scripts/pl-typography.mjs';
import companyTokens from './scripts/company-tokens.mjs';

// Static site for globalstorm.cloud (GitHub Pages serves static only — no SSR).
// i18n mirrors the current Jekyll URL shape: English at the root (/pricing/),
// Polish under a /pl/ prefix (/pl/pricing/).
export default defineConfig({
  site: 'https://globalstorm.cloud',
  // 'static' is Astro's default; stated explicitly so a future contributor
  // doesn't flip it to 'server' (which GitHub Pages cannot host).
  output: 'static',
  // GitHub Pages answers /pricing with a 301 to /pricing/, so every URL we emit (links,
  // canonical, hreflang, og:url, sitemap) carries the trailing slash and points at the final URL.
  trailingSlash: 'always',
  build: {
    // Emit /pricing/index.html style pretty URLs (matches Jekyll permalinks).
    format: 'directory',
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pl'],
    routing: {
      // English has no /en/ prefix (served at root); Polish lives under /pl/.
      prefixDefaultLocale: false,
    },
  },
  // {{company.*}} tokens in the Markdown content come from src/data/company.ts (one source for footer, registry, privacy).
  markdown: { remarkPlugins: [companyTokens] },
  integrations: [
    sitemap({
      // EN/PL alternates (xhtml:link) in the sitemap, matching the page-level hreflang.
      i18n: { defaultLocale: 'en', locales: { en: 'en', pl: 'pl' } },
      // Keep out what robots.txt disallows or the page marks noindex: privacy policy, status placeholder, 404.
      filter: (page) => !/\/(legal|status|404)\/?$/.test(page),
    }),
    // Non-breaking spaces in Polish amounts ("300 €", "2 500") so prices never wrap mid-amount.
    plTypography(),
  ],
  vite: {
    // Cast works around a type-only clash between Astro's bundled Vite and the
    // Vite that @tailwindcss/vite resolves (different PluginOption identities).
    // Runtime is unaffected — the plugin loads and the build emits token CSS.
    plugins: [/** @type {any} */ (tailwindcss())],
  },
});
