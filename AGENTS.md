# AGENTS.md

These rules apply to every task unless explicitly overridden. Bias: caution over speed.

## Behavior Rules
1. **Think first** — state assumptions, ask rather than guess, push back on needless complexity.
2. **Simplicity** — minimum code that solves the problem; no speculative abstractions.
3. **Surgical changes** — touch only what's required; match existing style; don't refactor adjacents.
4. **Goal-driven** — define success criteria, loop until verified.
5. **Model for judgment only** — LLM for classification/drafting/extraction; code for deterministic logic.
6. **Token budget** — 4k/task, 30k/session. Surface breaches; never silently overrun.
7. **Surface conflicts** — when patterns contradict, pick the more recent/tested one, explain, flag the other.
8. **Read before write** — check exports, callers, shared utilities before adding code.
9. **Tests encode intent** — a test that can't fail when business logic changes is wrong.
10. **Checkpoint** — after every significant step: what's done / verified / left.
11. **Convention over taste** — conform to the codebase; surface harmful conventions, don't fork silently.
12. **Fail loud** — "done" is wrong if anything was skipped silently.

---

## Design System

**Concept:** Dark-first cinematic tech — premium editorial craft over decorative noise.
**Tone:** Precise, atmospheric, confident. Impact before information.

### CSS Tokens
```css
:root {
  /* Surfaces — warm-shifted, NOT pure black */
  --color-bg: #0e0d0c;  --color-surface: #131211;  --color-surface-2: #181716;
  --color-surface-offset: #1e1d1c;  --color-surface-dynamic: #252422;
  --color-divider: oklch(1 0 0 / 0.06);  --color-border: oklch(1 0 0 / 0.09);

  /* Text */
  --color-text: #e8e6e3;  --color-text-muted: #7a7876;
  --color-text-faint: #3d3c3a;  --color-text-inverse: #0e0d0c;

  /* Accent — ONE color, CTAs and hero emphasis only */
  --color-primary: #f0ece4;  --color-primary-hover: #ffffff;  --color-primary-active: #d4cfc7;

  /* Radius / Shadow / Transition */
  --radius-sm: 0.375rem;  --radius-xl: 1rem;  --radius-full: 9999px;
  --shadow-sm: 0 1px 3px oklch(0 0 0 / 0.4);
  --shadow-md: 0 4px 16px oklch(0 0 0 / 0.5);
  --shadow-lg: 0 16px 48px oklch(0 0 0 / 0.6);
  --transition: 180ms cubic-bezier(0.16, 1, 0.3, 1);

  /* Layout */
  --content-narrow: 640px;  --content-default: 960px;  --content-wide: 1200px;
  --space-2: .5rem;  --space-3: .75rem;  --space-4: 1rem;  --space-6: 1.5rem;
  --space-8: 2rem;  --space-12: 3rem;  --space-16: 4rem;  --space-24: 6rem;

  /* Fonts */
  --font-display: 'Clash Display', 'Inter', sans-serif;
  --font-body: 'Satoshi', 'Inter', sans-serif;

  /* Type scale */
  --text-xs:   clamp(.75rem,   .7rem  + .25vw, .875rem);
  --text-sm:   clamp(.875rem,  .8rem  + .35vw, 1rem);
  --text-base: clamp(1rem,     .95rem + .25vw, 1.125rem);
  --text-lg:   clamp(1.125rem, 1rem   + .75vw, 1.5rem);
  --text-xl:   clamp(1.5rem,   1.2rem + 1.25vw, 2.25rem);
  --text-2xl:  clamp(2rem,     1.2rem + 2.5vw,  3.5rem);
  --text-3xl:  clamp(2.5rem,   1rem   + 4vw,    5rem);
  --text-hero: clamp(3rem,     .5rem  + 7vw,    8rem);
}
```

### Typography
- Titles/hero → `--font-display`; body/UI → `--font-body` 300–400 weight
- Buttons/nav: `--text-sm`, uppercase, `letter-spacing: 0.08em`
- Default: left-align. Center hero headlines only. Max 4–5 type styles per page.
- Fonts via Fontshare: Clash Display + Satoshi. Fallbacks: Neue Machina / General Sans / Inter.

### Layout
- Asymmetric editorial grid — never a symmetric 3-column icon-grid
- Vary section heights: cinematic full-viewport → dense info → breathing moment
- `clamp()` for all fluid spacing: `padding-block: clamp(var(--space-8), 6vw, var(--space-24))`
- Nav: near-transparent sticky, left logo, sparse right links, no mega-menu
- Cards: surface elevation only (no borders); `--radius-xl` or none — pick one, stay consistent

### Buttons
```css
.btn-primary {
  background: var(--color-primary);  color: var(--color-text-inverse);
  font: 500 var(--text-sm) var(--font-body);  letter-spacing: .08em;
  text-transform: uppercase;  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-full);  border: none;
  transition: background var(--transition);
}
.btn-ghost { background: transparent; color: var(--color-text); border: 1px solid var(--color-border); }
```
No gradient buttons. Solid accent or ghost only.

### Motion
- Zero instant show/hide — every state has a transition
- Scroll reveals: `opacity` + `translateY` only — never `height`/`width`/`margin`
  ```css
  .reveal { opacity:0; transform:translateY(20px); transition: opacity .7s, transform .7s cubic-bezier(.16,1,.3,1); }
  .reveal.visible { opacity:1; transform:translateY(0); }
  ```
- Text reveals: `overflow:hidden` wrapper + `translateY(110%) → 0` on `.visible`
- Custom cursor: `cursor:none` on body; 12px dot expands to 40px on hover; touch/reduced-motion fallback required
- Hero: subtle particle/light-streak at `opacity: 0.15–0.25`, emerging from subject
- Always include `@media (prefers-reduced-motion: reduce) { *, *::before, *::after { transition-duration: .01ms !important } }`

### Backgrounds & Depth
- Grain overlay (1–2 per page): `feTurbulence` SVG at `opacity: 0.04`
- Contrast section (1–2 per page): warm cream `#f5f2ed`, inverted dark text
- Dividers: `1px solid oklch(1 0 0 / 0.06)` — use sparingly

### Page Rhythm
1. **Cinematic hero** — full-viewport, text-reveal, ambient particles, single CTA
2. **Feature section** — asymmetric grid, left-aligned copy, varied card sizes
3. **Full-bleed media** — image/3D render edge-to-edge, minimal text overlay
4. **Contrast section** *(optional)* — warm cream, grounded/human
5. **CTA/footer** — dark, minimal, pill-button, sparse links

### Images & Accessibility
- Full-bleed for hero; no grid-boxed thumbnails; `<img loading="lazy" decoding="async" width height alt>`
- Semantic HTML; one `<h1>`; WCAG AA (4.5:1 body, 3:1 large); 44px touch targets; `aria-label` on icon buttons

### ❌ Never Generate
Gradient buttons · Glowing orbs/blob backgrounds · Symmetric icon-grid features ·
Colored card left-borders · Emoji as design elements · Generic hero copy ("Unlock the power of…") ·
Centered body text · Equal-height cookie-cutter sections · Purple/indigo gradient schemes
