// Labels for the sticky page rail (components/PageRail.astro) on Platform and Pricing.
// Platform reuses the section names the page already prints (site.ts `sections` / `boot.index`) with the
// "NN / " counter removed, so the rail says exactly what the section label says.
// Pricing has no short section names yet, so the five labels below are NEW UI strings (navigation only,
// no claims).
import type { Locale } from '../i18n/ui';
import { site } from './site';

const strip = (s: string) => s.replace(/^\d+ \/ /, '');

export interface RailItem { id: string; label: string; }

export function platformRail(locale: Locale): RailItem[] {
  const s = site[locale];
  return [
    { id: 'platform', label: strip(s.sections.pillars) },
    { id: 'boot', label: strip(s.boot.index) },
    { id: 'architecture', label: strip(s.sections.architecture) },
    { id: 'updates', label: strip(s.sections.update) },
    { id: 'pipeline', label: strip(s.sections.pipeline) },
    { id: 'console', label: strip(s.sections.console) },
    { id: 'hardware', label: strip(s.sections.hardware) },
    { id: 'compare', label: strip(s.sections.compare) },
  ];
}

export function pricingRail(locale: Locale): RailItem[] {
  return locale === 'pl'
    ? [
        { id: 'plans', label: 'Plany' },
        { id: 'rates', label: 'Stawki' },
        { id: 'examples', label: 'Przykłady' },
        { id: 'extras', label: 'Dodatki' },
        { id: 'faq', label: site.pl.sections.faq },
      ]
    : [
        { id: 'plans', label: 'Plans' },
        { id: 'rates', label: 'Rates' },
        { id: 'examples', label: 'Examples' },
        { id: 'extras', label: 'Extras' },
        { id: 'faq', label: site.en.sections.faq },
      ];
}
