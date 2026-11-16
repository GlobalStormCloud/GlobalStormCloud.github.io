/*
  Copy for the Neritic AI band (components/sections/NeriticBand.astro). Shown only when features.neriticAi is true.
  Change wording here only, never in the components.
  The link label is a domain name, so it needs no translation.
*/
import type { Locale } from '../i18n/ui';

export interface NeriticCopy { name: string; headline: string; line: string; linkLabel: string; linkHref: string; }

export const neritic: Record<Locale, NeriticCopy> = {
  en: {
    name: 'Neritic AI',
    headline: 'Make sense of your machine noise.',
    line: 'Learns what normal looks like for each machine.',
    linkLabel: 'neritic.ai',
    linkHref: 'https://neritic.ai/',
  },
  pl: {
    name: 'Neritic AI',
    headline: 'Zrozum szum swoich maszyn.',
    line: 'Uczy się, jak wygląda norma dla każdej maszyny.',
    linkLabel: 'neritic.ai',
    linkHref: 'https://neritic.ai/',
  },
};
