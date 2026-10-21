// Pricing helpers. Every figure shown is read from ./content.ts (the source
// of truth, kept byte-identical); this file only parses and re-formats those strings.
import type { Locale } from '../i18n/ui';

/** "€1.90" | "1,90 €" | "€2,700/mo" | "2 700 €/mies." → number */
export function parseEur(s: string): number {
  const m = s.replace(/\u00a0/g, ' ').match(/[\d][\d\s.,]*/);
  if (!m) throw new Error(`No amount in "${s}"`);
  let t = m[0].trim();
  if (/,\d{2}$/.test(t)) t = t.replace(/[\s.]/g, '').replace(',', '.'); // pl decimal comma
  else t = t.replace(/[\s,]/g, ''); // en thousands comma / pl thousands space
  const n = Number(t);
  if (!Number.isFinite(n)) throw new Error(`Bad amount in "${s}"`);
  return n;
}

export function fmtEur(n: number, locale: Locale): string {
  const fixed = n.toFixed(2);
  const [int, dec] = fixed.split('.');
  // U+00A0 (no-break space) between thousands groups and before the euro sign, so a Polish amount
  // such as "2 700,00 €" can never break across lines on a narrow screen.
  if (locale === 'pl') return `${int.replace(/\B(?=(\d{3})+(?!\d))/g, '\u00a0')},${dec}\u00a0€`;
  return `€${int.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}.${dec}`;
}
