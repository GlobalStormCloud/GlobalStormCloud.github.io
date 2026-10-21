# Global Storm — Astro site

Multi-page static site for globalstorm.cloud (EN + PL), built with Astro and
shipped together with the documentation under `/docs/` (`docs-src/`). The Astro
project lives in the `astro/` subdirectory.

## Requirements

- **Node:** 20.3+ (developed on v24.22.0)
- **npm:** 10+ (developed on 12.2.1)
- Astro **5.14.1**, Tailwind CSS **4.1.14** (versions pinned in `package.json`;
  exact tree in `package-lock.json`). Everything is free/OSS. The site itself
  loads no analytics and no third-party resources.

## Run it

All commands run from the `astro/` directory.

```bash
cd astro
npm install          # first time only — installs pinned deps from package-lock.json
npm run dev          # dev server  -> http://127.0.0.1:4012/
npm run build        # static build -> astro/dist/
npm run preview      # serve the built dist -> http://127.0.0.1:4012/
npm run check        # astro check (TypeScript + content validation)
```

Port **4012** is used deliberately to avoid clashing with the Jekyll preview on
4011. If 4012 is already taken, Astro will pick the next free port and print the
actual URL on startup — read that line rather than assuming 4012.

## Routes

English at the root, Polish under `/pl/` (Astro i18n, `prefixDefaultLocale:
false` — mirrors the current site's URL shape). All build to static HTML:

| EN            | PL               |
|---------------|------------------|
| `/`           | `/pl/`           |
| `/platform`   | `/pl/platform`   |
| `/pricing`    | `/pl/pricing`    |
| `/compliance` | `/pl/compliance` |
| `/company`    | `/pl/company`    |

Plus a `404` page. The documentation is built from `docs-src/` and merged into
`dist/docs/` by `npm run build:site`.

Legacy single-page anchors from the Jekyll site (`/#pricing`, `/#platform`,
`/#architecture`, `/#hardware`, `/#team`) are redirected client-side from the
home page to their new routes (see `src/pages/index.astro`) — a hash never
reaches the server, so this must be JS.

## Where things live

- **Design tokens:** `src/styles/tokens.css` — Tailwind v4 `@theme` block.
  This is the single source of truth for colors, type scale, spacing, and
  radii (see `DESIGN-SYSTEM.md`).
- **Global styles / base:** `src/styles/global.css` (imports Tailwind + tokens).
- **Chrome strings (nav/footer/locale switch):** `src/i18n/ui.ts`.
- **Page copy and pricing:** `src/data/` (`content.ts`, `site.ts`,
  `compliance.ts`, `company.ts`).
- **Privacy policy:** `src/content/<locale>/legal.md` via content collections
  (`src/content.config.ts`).
- **Layout / components:** `src/layouts/Layout.astro`, `src/components/`.
- **Pages (routes):** `src/pages/` (EN at root, PL under `src/pages/pl/`).

## Deploy

The site and the docs deploy as one GitHub Pages artifact from
**`.github/workflows/astro-pages.yml`** (repo root). It runs on a push to `main`
(or a manual run) and its deploy job refuses any ref other than `main`; a manual
run from another branch is a build check only. The old Jekyll workflow was
retired in the same change. Merging to `main` is the live deploy.
