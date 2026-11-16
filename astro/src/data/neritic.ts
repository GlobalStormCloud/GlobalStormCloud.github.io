/*
  Copy for the Neritic AI band (components/sections/NeriticBand.astro). Shown only when features.neriticAi is true.
  Change wording here only, never in the components.
  The link label is a domain name, so it needs no translation.
*/
import type { Locale } from '../i18n/ui';

export interface NeriticCopy { name: string; headline: string; line: string; points: string[]; linkLabel: string; linkHref: string; }

export const neritic: Record<Locale, NeriticCopy> = {
  en: {
    name: 'Neritic AI',
    headline: 'Make sense of your machine noise.',
    line: 'Your machines already show when something’s changing. Neritic AI helps you see it.',
    points: [
      'It learns what normal looks like for each of your machines, from their own data.',
      'Nothing to build or train for each machine. Setup is simple.',
      'When one starts to drift, you hear about it early, so you can plan the maintenance.',
    ],
    linkLabel: 'neritic.ai',
    linkHref: 'https://neritic.ai/',
  },
  pl: {
    name: 'Neritic AI',
    headline: 'Zrozum szum swoich maszyn.',
    line: 'Twoje maszyny już pokazują, kiedy coś się zmienia. Neritic AI pomaga to zobaczyć.',
    points: [
      'Uczy się, jak wygląda normalna praca każdej z Twoich maszyn, na podstawie jej własnych danych.',
      'Nic nie trzeba budować ani trenować osobno dla każdej maszyny. Konfiguracja jest prosta.',
      'Gdy któraś zaczyna pracować inaczej niż zwykle, dowiadujesz się o tym wcześnie i możesz zaplanować konserwację.',
    ],
    linkLabel: 'neritic.ai',
    linkHref: 'https://neritic.ai/',
  },
};
