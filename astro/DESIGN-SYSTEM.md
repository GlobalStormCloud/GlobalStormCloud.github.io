# Global Storm — "Anodised" design system

Palette A: graphite + signal amber, Saira display. This file is the build reference for the site. Tokens live in `src/styles/tokens.css`; shared primitives and motifs live in `src/styles/global.css`.

## Logo
- Source of truth: the original vectors in `src/assets/logo/source/`. They are kept unmodified.
- `src/assets/logo/{mark,lockup}.svg` are the SVGO-optimised copies. Each is one path with `fill="currentColor"`.
- Render them through `src/components/Logo.astro` (`variant="lockup" | "mark"`). Colour comes from CSS: ink on light, paper on dark. **Monochrome only.** Never colour, outline, rotate, or animate the mark.
- Module **E** = eye height = 0.326 × mark height, measured on the supplied vector: the eye is 1.372 : 1, 44.8 % of mark width, centred, and the mark has 180° rotational symmetry. The lockup gap between mark and wordmark is already 1 E, and the wordmark baseline sits on the eye's lower edge.
  - Clear space = 1 E on every side.
  - Minimum size: mark 16 px; lockup 140 px wide.
- Favicons: `public/favicon.svg` (switches with dark mode), `favicon.ico` (16/32/48), `apple-touch-icon.png`.
- Social preview: one static `public/og.png` (1200×630), image-preview only — no share buttons or share UI.

## Colour (WCAG ratios measured)
| Token | Hex | Use |
|---|---|---|
| `--ink` | #0D0F12 | text on light (17.4:1 on paper) |
| `--graphite` / `--graphite-2` | #1A1E24 / #252B33 | dark bands |
| `--steel` | #4A5561 | secondary text on light (6.9:1) |
| `--mist` | #9AA4AF | secondary text on dark (6.6:1 on graphite) |
| `--alloy` | #C6CBD1 | hairlines only, never text |
| `--seam` / `--paper` / `--white` | #E7E8E4 / #F4F4F1 / #FFF | surfaces |
| `--amber` | #F5A300 | fill + lamp; ink on amber 9.25:1 |
| `--amber-deep` | #8F5D00 | amber as text on light (5.1:1) — rare |

Amber is a lamp, not a paint. It covers at most 5 % of a screen. Amber text is never set on light surfaces.

**Exception — the primary CTA on mobile.** At 600 px and below the primary call-to-action button is full width and is **excluded from the 5 % measure**; we do not shrink it. Measured on the first 390×844 screen of the Home page, the amber area is 5.12 % (EN) and 5.32 % (PL) with the CTA included, and every other measured screen at 1440, 834 and 390 px is at or below 4.2 %. Everything else still counts toward the 5 %: the beacon, badges, lamps and focus rings.

## Type (SIL OFL, self-hosted in `public/fonts/`, licences beside the files)
- **Mono / caption / label scale: 12, 13 and 14 px only.** 12 px is the floor for any text, including the uppercase wide labels (table headers, spec-plate keys, diagram captions). 13 px is the default for captions and mono readouts, 14 px for dense table cells and mono values. Do not add 11, 11.5, 12.5 or 13.5 px. Body text stays 15–17 px and headings use the fluid `clamp()` scale below.
- Known leftovers that still use the old sizes (owned by other files, to be moved to the scale): the console chrome in `HomeHero.astro` and `BootVideo.astro` (11 px lamp, 12.5 px label) and the contact-form labels in `ContactForm.astro` (11 px).
- **Saira** (variable, wght 400–700, wdth 100–125) for display, headings, prices and uppercase legends (wdth 125, +0.14em).
- **Inter** (variable) for body and UI.
- **IBM Plex Mono** 400/500 for readouts, captions, spec plates and tables.
- The latin and latin-ext subsets together cover Polish ą ć ę ł ń ó ś ź ż.
- No CDN of any kind. Any third-party runtime fetch is a defect.

## Icons (Lucide, ISC — vendored stock, no generated art)
- Pillar glyphs come from **lucide-static 1.59.0** (ISC; the Feather-derived icons in that package are MIT — none of ours are). Survival `database-backup`, Security `shield-check`, Operated `server-cog`, Sovereignty `earth-lock`. Unmodified source SVGs live in `src/assets/icons/lucide/`; `src/components/sections/PillarIcon.astro` inlines them.
- The full upstream licence ships at `public/icons/LICENSE-lucide-static.txt` (served at `/icons/LICENSE-lucide-static.txt`). It is the single place third-party icon licences are recorded, as the OFL texts are for fonts. When adding another Lucide glyph, copy its SVG unmodified and keep that file in sync with the pinned version.
- Monochrome `currentColor` only — ink on light, paper on dark. **No amber inside icons.** No CDN, no runtime fetch.
- Hairline holds by tuning `stroke-width` per render size on Lucide's 24-unit grid (`size` prop): `nav` ≤32 px = 1.5, `card` 48 px = 1.0, `feature` ≥72 px = 0.75.

## Layout rules
- **Pricing plan cards:** four across above 1240 px, two across from 700 to 1240 px, one column filling the container below 700 px. They never sit in a narrower column than the content around them.
- **Home / Platform pillars:** four across above 1100 px, a 2×2 grid from 641 to 1100 px (left cards flush with no rule, right cards inset 28 px behind a hairline, written as `.pillars .pillar:nth-child(odd|even)` so the override out-ranks the base rule), one column at 640 px and below.
- **Footer link columns:** three across down to 641 px; at 640 px and below two across, with the third column (Connect) spanning the full row so it never sits alone in half a row; one column at 420 px and below.
- **Wide tables** sit in `.tbl-wrap` (scrolls sideways). It carries a CSS-only scroll cue: a soft edge shadow on whichever side has more to scroll to, hidden at the ends. `--tw` (wrapper colour) and `--tws` (shadow colour) are set for light and `.dark` bands. Any new surface colour needs matching `--tw` or the cover gradient will show.
- **Arrows on buttons and links:** one component, `src/components/Arrow.astro` (Lucide `arrow-right` / `arrow-left` / `arrow-up-right`, inline SVG, `currentColor`, `aria-hidden`). Never type `→` / `←` / `↗` as a glyph in markup: use `<Arrow />`, or `<ArrowText text={…} />` for a data string that ends in `→`. Size, stroke and optical alignment live in the single `.arr` rule in `global.css`: box 1.25 em (ink ≈ the label's cap height), stroke 2.25/24, centred on the cap-height with a small per-context `--arr-dy` nudge (buttons 0, text links −0.06 em). The arrow nudges 3 px on hover only when motion is allowed. The pricing-card "Recommended" flag is a tab on top of the featured card above 1240 px so all four cards share the same rows.
- **Hover and focus:** primary buttons lighten, ghost buttons invert, text links thicken their underline, FAQ rows underline the question and turn the plus amber-deep. Focus is a 2 px amber-deep ring (amber on dark) with a 3 px offset on every interactive element.
- **Partner line:** "PwC" is plain text in the body face — Inter 600, about 17 px, no letter-spacing, no logo. The Home hero line is in `HomeHero.astro` and must match the Company record row in `Team.astro`.

## Motifs (each traced to the mark or the product)
1. **Beacon** `.beacon` — the logo's eye (11×8 px ellipse), lit amber. Maximum 2 per viewport.
2. **Eye reticle** — hairline ellipses behind the hero product. Home hero only.
3. **Blade brackets** `.bracketed > .br--*` — four quarter-sweeps framing one subject per screen.
4. **Spec plate** `.plate` — industrial rating plate: wide-caps legend + mono value on a hairline grid.
5. **Machined geometry** — 2 px radius on controls, 4 px on plates. No pills.

Motion: 220 ms ease-out reveals only. Nothing loops or bounces. Everything is disabled under `prefers-reduced-motion`.

## Boot video
- One copy: `public/media/hurricaneos-boot.webm` (830×324, 13.7 s). Poster: `hurricaneos-boot-poster.jpg`, the final login-banner frame.
- **Home hero** (`HomeHero`): no controls. Two real cuts of the recording are chained in the browser (no seeking): the boot clip (`hurricaneos-boot-hero.webm`, source 3.00 s → 11.16 s, plays once) then the real settled-console tail (`hurricaneos-boot-hero-loop.webm`, 11.16 s → 13.16 s, loops). The poster stays under them and is the LCP element; reduced-motion visitors get the poster only. Footer label "real recording".
- **Platform** (`BootFeature`): `muted playsinline preload="none" controls`, plus a text fallback; plays once when scrolled into view, unless the visitor prefers reduced motion.
- **Home** (`HomeStrip`): the strip is proof points only; the boot video is not repeated there.
- The recording was made in a VirtualBox VM, and the caption says so.

## Diagrams (`src/components/diagrams/`)
The diagrams are built in HTML with inline-SVG glyphs, so the text is real, reflows on mobile and fits longer Polish strings. They are drawn from the user manual (docs-site, Starlight); each file's header names its sections.

## Wayfinding

- **Current page in the nav** = an ink label plate with the amber lamp lit under the text (ink/paper 17:1), not a hairline tick. `aria-current="page"` stays the source.
- **Page rail** (`components/PageRail.astro`): one component for Platform, Pricing and Compliance. `layout="bar"` = a 48 px sticky strip under the nav (full-bleed pages); `layout="side"` = the sticky column beside a narrow body (Compliance). Below 1180 px (bar) / 1040 px (side) both collapse to one compact control, "On this page <current section>", that opens a list. The current section has `aria-current="location"` and a lit lamp; the last item is always "Book a demo". Section ids must exist before you add the item; labels for Platform come from `data/rail.ts` (existing section names), never from new copy. It is in the page flow, so it adds no CLS; anchors land below nav + rail (`--rail-h`).
- **Contextual CTA** (`sections/InlineCta.astro`): in-flow strip at a decision point (after the pillars, the rate tables, the obligations table). No pop-up, nothing sticky over content.
- **Stacked tables** (`.tbl--stack`, <= 900 px): rows become cards; every cell prints its column name from `data-label`; `td.long` = label above text, `td.chip` = label + status chip; the header row stays in the DOM, visually hidden.
- **Small text floor**: mono captions and table text are 14-16 px; `--steel-deep` (8.6:1) replaces `--steel` for mono captions and secondary labels on light, `--mist-lt` (10.0:1) on dark.

## Content
- `src/data/content.ts` holds the migrated copy and the pricing data. **Do not edit it in design work.**
- `src/data/site.ts` holds the copy this build adds.
- `src/data/pricing-format.ts` only re-formats figures from `content.ts`. The worked example is recomputed at build time and checked against the published example.
