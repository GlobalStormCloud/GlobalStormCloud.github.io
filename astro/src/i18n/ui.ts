/*
  UI STRINGS — the small, chrome-level strings (nav, footer, locale switch).
  SCAFFOLD placeholders only. Page BODY content migrates later into content
  collections (see src/content/) from the Jekyll _i18n/en.yml + pl.yml.

  Keep this to navigation/footer/meta chrome; long-form page copy belongs in
  content collections, not here.
*/

export const locales = ['en', 'pl'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

type Dict = {
  langName: string;
  nav: { label: string; path: string }[];
  navCta: string;
  footer: { rights: string; privacy: string; privacyPath: string };
  localeSwitch: string;
};

// Route keys shared across locales — the 5 in-scope pages.
// Docs is intentionally OUT of scope (separate effort).
export const strings: Record<Locale, Dict> = {
  en: {
    langName: 'English',
    nav: [
      { label: 'Platform', path: '/platform' },
      { label: 'Pricing', path: '/pricing' },
      { label: 'Compliance', path: '/compliance' },
      { label: 'Company', path: '/company' },
    ],
    navCta: 'Book Demo',
    footer: {
      rights: '© Global Storm. All rights reserved.',
      privacy: 'Privacy Policy',
      privacyPath: '/legal',
    },
    localeSwitch: 'Polski',
  },
  pl: {
    langName: 'Polski',
    nav: [
      { label: 'Platforma', path: '/platform' },
      { label: 'Cennik', path: '/pricing' },
      { label: 'Zgodność', path: '/compliance' },
      { label: 'Firma', path: '/company' },
    ],
    navCta: 'Umów demo',
    footer: {
      rights: '© Global Storm. Wszelkie prawa zastrzeżone.',
      privacy: 'Polityka prywatności',
      privacyPath: '/legal',
    },
    localeSwitch: 'English',
  },
};

/**
 * Prefix a root-relative page path with the locale segment (en = no prefix) and give it the
 * trailing slash GitHub Pages redirects to anyway (`/pricing` -> 301 -> `/pricing/`), so every
 * link, canonical and hreflang points at the final URL. Query/hash are kept after the slash;
 * paths ending in a file extension are left alone.
 */
export function localizePath(path: string, locale: Locale): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  const [, base, tail] = clean.match(/^([^#?]*)(.*)$/) as RegExpMatchArray;
  const slashed = base.endsWith('/') || /\.[A-Za-z0-9]+$/.test(base) ? base : `${base}/`;
  return (locale === defaultLocale ? slashed : `/${locale}${slashed}`) + tail;
}

/** The same logical route in the other locale, for the language switcher. */
export function alternatePath(path: string, from: Locale): string {
  const to: Locale = from === 'en' ? 'pl' : 'en';
  // Strip an existing /pl prefix to get the canonical (en) path first.
  const canonical = path.replace(/^\/pl(?=\/|$)/, '') || '/';
  return localizePath(canonical, to);
}
