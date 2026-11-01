// Compliance page content, migrated VERBATIM from Jekyll _i18n/{en,pl}/compliance.md.
// Region wording kept as source: "EU-hosted, within the EEA" / "hostowane w UE, w ramach EOG".
import type { Locale } from '../i18n/ui';

interface Section { heading: string; paras: string[]; table?: { cols: string[]; rows: string[][] }; list?: string[] }
interface ComplianceDoc {
  reviewed: string; intro: string;
  glanceTitle: string; glanceCols: string[]; glance: string[][]; caveat: string;
  sections: Section[];
  ctaTitle: string; ctaDesc: string; cta: string;
}

const en: ComplianceDoc = {
  reviewed: 'Last reviewed: 19 October 2026',
  intro: 'Three EU regimes touch connected devices, and which one binds you depends on what you do. If you operate a fleet in a covered sector, NIS2 applies to you. If you place products on the market, the Radio Equipment Directive and the Cyber Resilience Act apply to you. Some organisations are both. This page is split the same way, because the obligations are not interchangeable. It is a good-faith technical mapping, not legal advice.',
  glanceTitle: 'The regulations at a glance',
  glanceCols: ['Regulation', 'Who it binds', 'Status'],
  glance: [
    ['NIS2 — Directive (EU) 2022/2555', 'Operators of essential and important services', "In force. Poland's UKSC amendment applies from 3 April 2026"],
    ['RED cybersecurity delegated act (EU) 2022/30, Art. 3.3(d)(e)(f)', 'Manufacturers placing radio equipment on the EU market', 'Mandatory since 1 August 2025'],
    ['Cyber Resilience Act — Regulation (EU) 2024/2847', 'Manufacturers of products with digital elements', 'Article 14 reporting applies since 11 September 2026; full requirements from 11 December 2027'],
  ],
  caveat: 'One caveat worth knowing, because it is the detail most vendors omit: the harmonised standards EN 18031-1/-2/-3 were listed in the Official Journal with restrictions in January 2025. The "rationale" and "guidance" sections do not confer presumption of conformity, so the standards route is narrower than a bare citation of EN 18031 implies. Plan for that rather than discovering it at assessment.',
  sections: [
    {
      heading: 'If you operate a fleet — NIS2',
      paras: [
        'NIS2 places obligations on operators, not on software. If you run essential or important services in a covered sector, you are the entity the directive names, and only you can be compliant. No operating system can be "NIS2 compliant" on your behalf, and any vendor who tells you otherwise has not read the directive.',
        'What a platform can do is carry the weight of the technical measures NIS2 expects of you, and give you the evidence to show you have them. Below is Article 21(2) — the ten measures every covered entity must take — against what HurricaneOS delivers.',
        'We use three honest labels: <b>Provided</b> — the platform does this by default; you inherit it. <b>Supported</b> — the platform gives you the mechanism, but you must configure, operate or extend it. <b>Yours</b> — an organisational obligation the platform cannot discharge for you. We say so rather than pretend.',
      ],
      table: {
        cols: ['Art. 21(2) measure', 'HurricaneOS', 'What we actually do'],
        rows: [
          ['(a) Risk analysis and IS security policies', 'Yours', 'Your risk assessment and policy set. We supply the fleet inventory, OS version state and configuration baseline a device-layer risk analysis needs as input.'],
          ['(b) Incident handling', 'Supported', 'Health monitoring and automatic rollback on failed boot at the OS and hardware layer. Detection and first response for the device estate; your SOC owns the rest.'],
          ['(c) Business continuity, backup, DR, crisis management', 'Supported', 'A/B updates mean a failed update reverts without a site visit, and a unit can be factory-reset and re-provisioned cleanly without reflashing. Backup of your application data and your crisis plan are yours.'],
          ['(d) Supply-chain security', 'Supported', 'Every image you build is scanned for known vulnerabilities (CVEs), with findings per service by severity. You still assess us as your supplier.'],
          ['(e) Security in acquisition, development, maintenance; vulnerability handling', 'Provided', 'Monthly security updates, CVE backports against your specific board, verified OTA delivery, and a documented disclosure contact. The core of what the subscription buys.'],
          ['(f) Policies to assess effectiveness of risk-management measures', 'Supported', 'CVE scan results on every build, OS version and update history per device, and device health data in your dashboard. The assessment against your own policy is yours.'],
          ['(g) Basic cyber hygiene and security training', 'Yours', 'Staff training is an organisational duty. The platform reduces the surface: an immutable root filesystem means an operator cannot casually weaken a device.'],
          ['(h) Cryptography and, where appropriate, encryption', 'Supported', 'Device-to-cloud channels are encrypted and mutually authenticated (mutual TLS), using a device identity key held in a TPM 2.0. Encryption of application data at rest is not part of this mapping; ask us what applies to your hardware profile.'],
          ['(i) HR security, access control, asset management', 'Supported', 'Console access per account and a complete, authoritative device asset register. HR security and your identity provider are yours.'],
          ['(j) Multi-factor authentication, secured communications', 'Supported', 'Mutually-authenticated, encrypted device-to-cloud channels (mutual TLS, hardware-backed device identity). Console sign-in uses individual accounts. MFA across your own workforce is yours.'],
        ],
      },
    },
    {
      heading: 'If you place products on the market — RED and CRA',
      paras: [
        'This is the shorter half deliberately. Our primary customer operates a fleet; if you are a manufacturer, the platform still carries real weight, but the conformity work is yours and we would rather scope it with you on a call than imply a mapping we have not done against your specific product.',
        '<b>What binds you, and when.</b> Since 1 August 2025, cybersecurity under RED Article 3.3(d)(e)(f) is mandatory for new wireless connected products placed on the EU market — without it you cannot CE-mark and sell. Under the CRA, Article 14 vulnerability and incident reporting has applied since 11 September 2026, and it reaches products already in the field, not only new ones. The full secure-by-design and lifecycle obligations arrive 11 December 2027.',
      ],
      list: [
        '<b>Network protection</b> — RED 3.3(d). Devices ship with no open management interface. Applications run isolated in containers, and the control plane accepts instructions only after mutual authentication.',
        '<b>Data and privacy protection</b> — RED 3.3(e). Device identity is a key generated and held in a TPM 2.0, and the identity is designed so it cannot be copied to another device, so traffic is tied to one specific genuine endpoint. Transport is authenticated and encrypted; per-application storage is isolated.',
        '<b>Protection against fraud</b> — RED 3.3(f). Each device holds its own identity key in a TPM 2.0 and the identity is designed so it cannot be copied to another device; the control plane accepts a device only after mutual authentication.',
        '<b>Secure by default</b> — CRA Annex I. The device starts in its hardened state, with an immutable base a compromised application cannot rewrite.',
        '<b>Updates across the product lifetime</b> — CRA vulnerability handling. Monthly OS security updates over the air to the whole fleet, with automatic recovery to a known-good state if an update fails.',
        '<b>Evidence for reporting</b> — CRA Article 14. CVE scan results on every build, and a record of deployments and of OS version and update history per device — what a 24-hour early warning and 72-hour notification require you to have on hand.',
      ],
    },
    {
      heading: 'Where we are your supplier, not your platform',
      paras: [
        'When you assess your supply chain, we are in it, and you are entitled to evidence rather than assurances. What we will give you:',
      ],
      list: [
        'our EU jurisdiction and hosting (EU-hosted, within the EEA) in writing;',
        'the CVE scan results for every image you build, per service and by severity;',
        'our vulnerability-disclosure and security-update cadence, contractually;',
        'notification timed so that if a vulnerability in the OS affects your fleet, you learn in time to meet your own deadlines — NIS2 Article 23 or CRA Article 14, both of which run on 24 hours then 72.',
      ],
    },
    {
      heading: 'What we will not claim',
      paras: ['Consistent with how we talk about security everywhere else on this site:'],
      list: [
        'We do not claim HurricaneOS "is compliant" with any of these regimes. Compliance attaches to you; the platform is a means to it.',
        'We do not claim the platform discharges your organisational measures — training, governance, your own risk assessment, management accountability.',
        'We do not claim immutability or hardware-backed device identity are distinctive. They are table stakes, and they are listed here because the regulations ask for them — not as differentiators.',
        'We do not claim tamper detection as a platform property. A TPM resists key extraction, which is a different thing from detecting physical intrusion. Enclosure-level tamper response is available only on hardware we build ourselves, specified per project.',
      ],
    },
    {
      heading: 'Hardware requirement',
      paras: [
        'A hardware root of trust is not optional here. We require TPM 2.0 to certify a hardware profile — a board without it cannot provision securely, so we do not support it. That is what lets the claims above apply to every supported device rather than to a subset, and it is worth checking against your bill of materials early if you are bringing your own hardware.',
      ],
    },
  ],
  ctaTitle: 'Talk to us',
  ctaDesc: 'Tell us your sector, whether you operate or manufacture, and roughly how many gateways, and we will map these measures against your specific deployment. Your obligations under these regulations and their national transpositions are for you and your counsel to determine.',
  cta: 'Talk to us',
};

const pl: ComplianceDoc = {
  reviewed: 'Ostatni przegląd: 19 października 2026',
  intro: 'Trzy reżimy UE dotyczą urządzeń podłączonych do sieci, a to, który wiąże Ciebie, zależy od tego, co robisz. Jeśli operujesz flotą w objętym sektorze, dotyczy Cię NIS2. Jeśli wprowadzasz produkty na rynek, dotyczą Cię dyrektywa o urządzeniach radiowych i Cyber Resilience Act. Niektóre organizacje są jednym i drugim. Ta strona jest podzielona w ten sam sposób, bo te obowiązki nie są wymienne. To techniczne odwzorowanie w dobrej wierze, nie porada prawna.',
  glanceTitle: 'Regulacje w skrócie',
  glanceCols: ['Regulacja', 'Kogo wiąże', 'Status'],
  glance: [
    ['NIS2 — dyrektywa (UE) 2022/2555', 'Operatorzy usług kluczowych i ważnych', 'Obowiązuje. Nowelizacja UKSC w Polsce od 3 kwietnia 2026'],
    ['Akt delegowany do RED (UE) 2022/30, art. 3.3(d)(e)(f)', 'Producenci wprowadzający na rynek UE urządzenia radiowe', 'Obowiązkowe od 1 sierpnia 2025'],
    ['Cyber Resilience Act — rozporządzenie (UE) 2024/2847', 'Producenci produktów z elementami cyfrowymi', 'Raportowanie z art. 14 obowiązuje od 11 września 2026; pełne wymogi od 11 grudnia 2027'],
  ],
  caveat: 'Jedno zastrzeżenie warte uwagi, bo to szczegół, który większość dostawców pomija: normy zharmonizowane EN 18031-1/-2/-3 zostały opublikowane w Dzienniku Urzędowym z ograniczeniami w styczniu 2025. Sekcje „rationale" i „guidance" nie dają domniemania zgodności, więc ścieżka normatywna jest węższa, niż sugeruje samo powołanie się na EN 18031. Lepiej to zaplanować, niż odkryć przy ocenie.',
  sections: [
    {
      heading: 'Jeśli operujesz flotą — NIS2',
      paras: [
        'NIS2 nakłada obowiązki na operatorów, nie na oprogramowanie. Jeśli świadczysz usługi kluczowe lub ważne w objętym sektorze, to Ty jesteś podmiotem, który dyrektywa wskazuje, i tylko Ty możesz być zgodny. Żaden system operacyjny nie może być „zgodny z NIS2" za Ciebie, a każdy dostawca, który twierdzi inaczej, nie przeczytał dyrektywy.',
        'To, co platforma może zrobić, to unieść ciężar technicznych środków, których NIS2 od Ciebie oczekuje, i dać Ci dowody na ich posiadanie. Poniżej artykuł 21 ust. 2 — dziesięć środków, które musi podjąć każdy objęty podmiot — wobec tego, co zapewnia HurricaneOS.',
        'Używamy trzech uczciwych etykiet: <b>Zapewnione</b> — platforma robi to domyślnie; dziedziczysz to. <b>Wspierane</b> — platforma daje mechanizm, ale musisz go skonfigurować, obsługiwać lub rozszerzyć. <b>Po Twojej stronie</b> — obowiązek organizacyjny, którego platforma nie może za Ciebie wypełnić. Mówimy to wprost, zamiast udawać.',
      ],
      table: {
        cols: ['Środek art. 21 ust. 2', 'HurricaneOS', 'Co faktycznie robimy'],
        rows: [
          ['(a) Analiza ryzyka i polityki bezpieczeństwa SI', 'Po Twojej stronie', 'Twoja ocena ryzyka i zestaw polityk. Dostarczamy inwentaryzację floty, stan wersji OS i bazową konfigurację, których analiza ryzyka warstwy urządzeń potrzebuje jako danych wejściowych.'],
          ['(b) Obsługa incydentów', 'Wspierane', 'Monitoring stanu i automatyczne wycofanie po nieudanym rozruchu na poziomie OS i sprzętu. Wykrywanie i pierwsza reakcja dla floty urządzeń; resztą zarządza Twój SOC.'],
          ['(c) Ciągłość działania, kopie, DR, zarządzanie kryzysowe', 'Wspierane', 'Aktualizacje A/B oznaczają, że nieudana aktualizacja wraca bez wizyty na miejscu, a urządzenie można przywrócić do stanu fabrycznego i skonfigurować ponownie bez ponownego wgrywania obrazu. Kopie danych aplikacyjnych i plan kryzysowy są po Twojej stronie.'],
          ['(d) Bezpieczeństwo łańcucha dostaw', 'Wspierane', 'Każdy zbudowany przez Ciebie obraz jest skanowany pod kątem znanych podatności (CVE), z wynikami per usługa według wagi. Nadal oceniasz nas jako dostawcę.'],
          ['(e) Bezpieczeństwo w nabywaniu, rozwoju, utrzymaniu; obsługa podatności', 'Zapewnione', 'Comiesięczne aktualizacje bezpieczeństwa, backporty CVE na Twoją konkretną płytę, weryfikowana dostawa OTA i udokumentowany kontakt do zgłoszeń. Rdzeń tego, co kupuje subskrypcja.'],
          ['(f) Polityki oceny skuteczności środków zarządzania ryzykiem', 'Wspierane', 'Wyniki skanu CVE przy każdym buildzie, wersja systemu i historia aktualizacji każdego urządzenia oraz dane o stanie urządzeń w Twoim dashboardzie. Ocena względem Twojej polityki jest po Twojej stronie.'],
          ['(g) Podstawowa higiena cybernetyczna i szkolenia', 'Po Twojej stronie', 'Szkolenie personelu to obowiązek organizacyjny. Platforma zmniejsza powierzchnię ataku: niezmienny system plików root uniemożliwia operatorowi przypadkowe osłabienie urządzenia.'],
          ['(h) Kryptografia i, w stosownych przypadkach, szyfrowanie', 'Wspierane', 'Kanały urządzenie–chmura są szyfrowane i wzajemnie uwierzytelniane (wzajemny TLS), z kluczem tożsamości urządzenia przechowywanym w TPM 2.0. Szyfrowanie danych aplikacji w spoczynku nie jest objęte tym odwzorowaniem; zapytaj nas, co dotyczy Twojego profilu sprzętowego.'],
          ['(i) Bezpieczeństwo kadr, kontrola dostępu, zarządzanie aktywami', 'Wspierane', 'Dostęp do konsoli per konto oraz kompletny, wiarygodny rejestr urządzeń. Bezpieczeństwo kadrowe i Twój dostawca tożsamości są po Twojej stronie.'],
          ['(j) Uwierzytelnianie wieloskładnikowe, zabezpieczona komunikacja', 'Wspierane', 'Wzajemnie uwierzytelniane, szyfrowane kanały urządzenie–chmura (wzajemny TLS, tożsamość urządzenia oparta na sprzęcie). Logowanie do konsoli odbywa się na indywidualnych kontach. MFA w Twoim zespole jest po Twojej stronie.'],
        ],
      },
    },
    {
      heading: 'Jeśli wprowadzasz produkty na rynek — RED i CRA',
      paras: [
        'To celowo krótsza połowa. Naszym głównym klientem jest operator floty; jeśli jesteś producentem, platforma nadal wnosi realną wartość, ale praca nad zgodnością jest po Twojej stronie i wolimy określić jej zakres z Tobą na rozmowie, niż sugerować odwzorowanie, którego nie zrobiliśmy dla Twojego konkretnego produktu.',
        '<b>Co Cię wiąże i od kiedy.</b> Od 1 sierpnia 2025 cyberbezpieczeństwo z artykułu 3.3(d)(e)(f) RED jest obowiązkowe dla nowych bezprzewodowych produktów podłączonych do sieci wprowadzanych na rynek UE — bez tego nie oznaczysz produktu CE i nie sprzedasz go. W ramach CRA raportowanie podatności i incydentów z artykułu 14 obowiązuje od 11 września 2026 i obejmuje także produkty już w polu. Pełne obowiązki secure-by-design i utrzymania cyklu życia wchodzą 11 grudnia 2027.',
      ],
      list: [
        '<b>Ochrona sieci</b> — RED 3.3(d). Urządzenia startują bez otwartego interfejsu zarządzania. Aplikacje działają odizolowane w kontenerach, a płaszczyzna kontrolna przyjmuje polecenia wyłącznie po wzajemnym uwierzytelnieniu.',
        '<b>Ochrona danych i prywatności</b> — RED 3.3(e). Tożsamość urządzenia to klucz wygenerowany i przechowywany w TPM 2.0, a tożsamość jest zaprojektowana tak, by nie dało się jej skopiować na inne urządzenie, więc ruch jest powiązany z jednym, konkretnym, prawdziwym punktem końcowym. Transport jest uwierzytelniony i szyfrowany; magazyn danych każdej aplikacji jest odizolowany.',
        '<b>Ochrona przed nadużyciami</b> — RED 3.3(f). Każde urządzenie trzyma własny klucz tożsamości w TPM 2.0, a tożsamość jest zaprojektowana tak, by nie dało się jej skopiować na inne urządzenie; płaszczyzna kontrolna przyjmuje urządzenie dopiero po wzajemnym uwierzytelnieniu.',
        '<b>Bezpieczne domyślnie</b> — załącznik I CRA. Urządzenie startuje w stanie utwardzonym, z niezmiennym rdzeniem, którego przejęta aplikacja nie nadpisze.',
        '<b>Aktualizacje przez cały cykl życia</b> — obsługa podatności w CRA. Comiesięczne aktualizacje bezpieczeństwa OS przez powietrze na całą flotę, z automatycznym powrotem do znanego dobrego stanu przy nieudanej aktualizacji.',
        '<b>Dowody do raportowania</b> — artykuł 14 CRA. Wyniki skanu CVE przy każdym buildzie oraz historia wdrożeń i historia wersji systemu i aktualizacji każdego urządzenia — to, czego wymaga 24-godzinne wczesne ostrzeżenie i 72-godzinne zgłoszenie.',
      ],
    },
    {
      heading: 'Tam, gdzie jesteśmy Twoim dostawcą, a nie Twoją platformą',
      paras: ['Kiedy oceniasz swój łańcuch dostaw, jesteśmy w nim, i masz prawo do dowodów, a nie zapewnień. Co Ci damy:'],
      list: [
        'naszą jurysdykcję i hosting w UE (hostowane w UE, w ramach EOG) na piśmie;',
        'wyniki skanu CVE dla każdego obrazu, który budujesz, per usługa i według wagi;',
        'nasz harmonogram ujawniania podatności i aktualizacji bezpieczeństwa, umownie;',
        'powiadomienie w takim czasie, by — jeśli podatność w OS dotknie Twojej floty — dowiedzieć się na czas i dotrzymać własnych terminów wynikających z artykułu 23 NIS2 albo artykułu 14 CRA — oba liczą 24 godziny, a potem 72.',
      ],
    },
    {
      heading: 'Czego nie będziemy twierdzić',
      paras: ['Zgodnie z tym, jak mówimy o bezpieczeństwie wszędzie indziej na tej stronie:'],
      list: [
        'Nie twierdzimy, że HurricaneOS „jest zgodny" z którymkolwiek z tych reżimów. Zgodność przypisana jest Tobie; platforma jest środkiem do niej.',
        'Nie twierdzimy, że platforma wypełnia Twoje środki organizacyjne — szkolenia, ład korporacyjny, Twoją własną ocenę ryzyka, odpowiedzialność zarządu.',
        'Nie twierdzimy, że niezmienność czy tożsamość urządzenia oparta na sprzęcie są wyróżnikiem. To standard, i wymieniamy je tu, bo regulacje o nie proszą — nie jako wyróżniki.',
        'Nie twierdzimy, że wykrywanie naruszeń fizycznych jest właściwością platformy. TPM utrudnia wyciągnięcie klucza, co jest czymś innym niż wykrywanie fizycznej ingerencji. Reakcja na naruszenie na poziomie obudowy jest dostępna tylko na sprzęcie, który budujemy sami, specyfikowana per projekt.',
      ],
    },
    {
      heading: 'Wymóg sprzętowy',
      paras: [
        'Sprzętowy fundament zaufania nie jest tu opcjonalny. Do certyfikacji profilu sprzętowego wymagamy TPM 2.0 — płyta bez niego nie może bezpiecznie zarejestrować się w chmurze, więc jej nie wspieramy. To właśnie sprawia, że powyższe twierdzenia dotyczą każdego wspieranego urządzenia, a nie tylko części, i warto sprawdzić to wcześnie w swoim zestawieniu materiałowym, jeśli przynosisz własny sprzęt.',
      ],
    },
  ],
  ctaTitle: 'Porozmawiajmy',
  ctaDesc: 'Podaj swój sektor, to czy operujesz czy produkujesz, i orientacyjną liczbę bramek, a odwzorujemy te środki na Twoje konkretne wdrożenie. Twoje obowiązki w ramach tych regulacji i ich krajowych transpozycji są do ustalenia przez Ciebie i Twoich prawników.',
  cta: 'Porozmawiajmy',
};

export const complianceContent: Record<Locale, ComplianceDoc> = { en, pl };
