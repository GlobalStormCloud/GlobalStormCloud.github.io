// Copy for behaviour-driven blocks (form feedback, vulnerability reporting), kept apart from
// content.ts/site.ts. English uses an em dash like the rest of the site. If the B2B note moves
// into site.ts, point ContactForm at that key and drop it here.
import type { Locale } from '../i18n/ui';

export const SECURITY_EMAIL = 'contact@globalstorm.cloud';

interface EngCopy {
  form: { sending: string; failure: string; b2b: string };
  vuln: { toc: string; title: string; lead: string; disclosure: string; machine: string };
}

export const engCopy: Record<Locale, EngCopy> = {
  en: {
    form: {
      sending: 'Sending…',
      b2b: 'Trials and quotes are for businesses only — company name required.',
      failure: `Something went wrong — please email ${SECURITY_EMAIL}.`,
    },
    vuln: {
      toc: 'Report a vulnerability',
      title: 'Report a vulnerability',
      lead: `If you believe you have found a security vulnerability in HurricaneOS or on this website, email ${SECURITY_EMAIL}.`,
      disclosure: 'Include enough detail to reproduce it, and give us reasonable time to respond before you disclose it publicly.',
      machine: 'The same contact in machine-readable form:',
    },
  },
  pl: {
    form: {
      sending: 'Wysyłanie…',
      b2b: 'Triale i wyceny są wyłącznie dla firm — wymagana nazwa firmy.',
      failure: `Coś poszło nie tak — napisz na ${SECURITY_EMAIL}.`,
    },
    vuln: {
      toc: 'Zgłoś podatność',
      title: 'Zgłoś podatność',
      lead: `Jeśli odkryjesz podatność w HurricaneOS lub na tej stronie, napisz na ${SECURITY_EMAIL}.`,
      disclosure: 'Opisz ją na tyle dokładnie, by dało się ją odtworzyć, i daj nam rozsądny czas na reakcję, zanim ujawnisz ją publicznie.',
      machine: 'Ten sam kontakt w formacie maszynowym:',
    },
  },
};
