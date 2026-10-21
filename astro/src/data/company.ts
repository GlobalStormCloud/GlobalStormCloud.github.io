// SINGLE SOURCE for the company's legal-entity facts (KSH Art. 206 §1 set). Everything that prints them reads
// from here: the footer line, the /company/#registry block (via content.ts), and the privacy policy's
// controller block (the {{company.*}} tokens in src/content/<locale>/legal.md, filled by
// scripts/company-tokens.mjs at markdown-render time). Change a value here and all of them move together.
// Source: KRS register entry no. 12 (rejestr.io), valid from 2026-03-29: seat Trele 2, 02-842 Warszawa; share
// capital 6 000 zł; registered 2023-11-02. Registry court division: XIII.
export interface CompanyLocale {
  /** Short place for the footer line. */
  place: string;
  /** Street address, no country. */
  address: string;
  country: string;
  court: string;
  capital: string;
  capitalLabel: string;
}

export const company = {
  name: 'Global Storm sp. z o.o.',
  email: 'contact@globalstorm.cloud',
  krs: '0001067072',
  nip: '9512581476',
  regon: '526842855',
  seat: 'Warszawa',
  en: {
    place: 'Warsaw, Poland',
    address: 'Trele 2, 02-842 Warszawa',
    country: 'Poland',
    court: 'District Court for the capital city of Warsaw, XIII Commercial Division of the National Court Register',
    capital: 'PLN 6\u00a0000',
    capitalLabel: 'share capital',
  },
  pl: {
    place: 'Warszawa',
    address: 'ul. Trele 2, 02-842 Warszawa',
    country: 'Polska',
    court: 'Sąd Rejonowy dla m.st. Warszawy w Warszawie, XIII Wydział Gospodarczy Krajowego Rejestru Sądowego',
    capital: '6\u00a0000\u00a0zł',
    capitalLabel: 'kapitał zakładowy',
  },
} as const satisfies Record<string, unknown>;

/** Flat token map for one locale — the keys are what legal.md writes as {{company.<key>}}. */
export function companyTokens(locale: 'en' | 'pl'): Record<string, string> {
  const l: CompanyLocale = company[locale];
  return {
    name: company.name, email: company.email, krs: company.krs, nip: company.nip, regon: company.regon, seat: company.seat,
    address: l.address, country: l.country, court: l.court, capital: l.capital, capitalLabel: l.capitalLabel, place: l.place,
  };
}
