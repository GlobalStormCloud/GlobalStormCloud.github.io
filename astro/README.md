# Global Storm — Astro site (rebuild scaffold)

Multi-page static rebuild of the globalstorm.cloud marketing site, replacing the
single-page Jekyll site. **This is the SCAFFOLD stage**: project skeleton,
tooling, i18n routing, token plumbing, and placeholder pages only. Real pages
and visual design land later, after the design direction is approved and content
is migrated from the Jekyll site.

- **Branch:** `rebuild/astro-2026`
- **Worktree:** `.worktrees/astro-rebuild/` (the Astro project lives in the
  `astro/` subdirectory so the existing Jekyll site at the repo root is left
  completely untouched on this branch).

## Requirements

- **Node:** 20.3+ (developed on v24.22.0)
- **npm:** 10+ (developed on 12.2.1)
- Astro **5.14.1**, Tailwind CSS **4.1.14** (versions pinned in `package.json`;
  exact tree in `package-lock.json`). Everything is free/OSS and nothing phones
  home (Astro telemetry is not enabled; no analytics in the scaffold).

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

Plus a `404` page. **Docs is intentionally out of scope** (separate effort).

Legacy single-page anchors from the Jekyll site (`/#pricing`, `/#platform`,
`/#architecture`, `/#hardware`, `/#team`) are redirected client-side from the
home page to their new routes (see `src/pages/index.astro`) — a hash never
reaches the server, so this must be JS.

## Where things live

- **Design tokens:** `src/styles/tokens.css` — Tailwind v4 `@theme` block.
  This is the single source of truth for colors, type scale, spacing, and
  radii. The current values are **neutral placeholders**; replace them verbatim
  with the approved design tokens in the build phase.
- **Global styles / base:** `src/styles/global.css` (imports Tailwind + tokens).
- **Chrome strings (nav/footer/locale switch):** `src/i18n/ui.ts`.
- **Page body content:** `src/content/<locale>/` via content collections
  (`src/content.config.ts`). In the build phase, Legal-cleared copy and
  Finance-verified pricing migrate here **verbatim** from the Jekyll
  `_i18n/en.yml` + `pl.yml` and `_i18n/<locale>/*.md`. Pricing **numbers** are
  NOT seeded yet — source of truth is
  `GlobalStorm-internal/docs/Pricing-Final-2026-10.md`.
- **Layout / components:** `src/layouts/Layout.astro`, `src/components/`.
- **Pages (routes):** `src/pages/` (EN at root, PL under `src/pages/pl/`).

## Deploy — STAGED, inert, user-gated

The GitHub Actions workflow lives at **`astro/.github-pending/astro-pages.yml`**
— deliberately NOT under the repo-root `.github/workflows/`. GitHub only runs
workflows found at `.github/workflows/*.yml` on the default branch, so while it
sits here it **cannot trigger, build, or deploy anything**. It also listens only
on `workflow_dispatch`, not `push`.

Nothing has been pushed or deployed. The existing Jekyll deploy
(`.github/workflows/jekyll.yml`, triggered by push to `main`) is still the live
path and is untouched.

**Cutover is a later, user-approved step** (do not do it now). At cutover a human
would: disable the Jekyll workflow, move this workflow to
`.github/workflows/astro.yml`, optionally add a `push` trigger, and set repo
Settings → Pages → Source = GitHub Actions. See the header comment in the
workflow file for the full checklist.
