// Anodised-build chrome copy: section indexes, captions, diagram labels, page meta.
// Kept SEPARATE from ./content.ts so the migrated copy and the
// pricing data there stay byte-identical. Region wording: "EU-hosted (within the EEA)" /
// "hostowane w UE (w ramach EOG)" — never a named AWS region.
//
// Diagram labels are taken from the HurricaneOS user manual (docs-site, Starlight):
// overview/how-it-works, operators/prerequisites §2.2–2.3, operators/first-boot,
// developers/pushing-code, security-scan, deploying-a-build, writing-your-application,
// reference/day-2-operations, reference/glossary. Nothing beyond those pages is drawn.
import type { Locale } from '../i18n/ui';

export interface Site {
  meta: Record<'home' | 'platform' | 'pricing' | 'compliance' | 'company' | 'legal' | 'notFound' | 'status', { title: string; desc: string }>;
  nav: { menu: string; close: string; home: string; lang: string };
  hero: { productAlt: string; capTitle: string; capLine: string; fromPrice: string; posterAlt: string; lamp: string; watch: string; metaFlow: string; metaUnedited: string; metaReal: string; metaVm: string; consoleCap: string };
  boot: {
    homeIndex: string; homeTitle: string; homeCaption: string; homeLink: string;
    index: string; title: string; desc: string; frameLabel: string; caption: string;
    fallback: string; fallbackLink: string; playLabel: string;
    points: { term: string; text: string }[];
  };
  sections: Record<'pillars' | 'architecture' | 'update' | 'pipeline' | 'console' | 'hardware' | 'compare' | 'field' | 'pricing' | 'cta' | 'facts' | 'people' | 'contact' | 'faq', string>;
  pillarsMore: string;
  field: { tag: string; unit: string; inService: string; engineAlt: string; shipAlt: string; deviceAlt: string; quoteLead: string };
  hardware: { photoAlts: string[]; photoCaption: string; photoTag: string; recHeader: string; recRows: { label: string; value: string }[]; recProfile: string; recNote: string; moreLink: string };
  pricing: { formulaLabel: string; formula: [string, string, string]; featured: string; from: string; perDevice: string; launchNoTel: string; minimum: string; trialCta: string; paidTrialCta: string; supportedCta: string; customCta: string; bringupLabel: string; exampleTitle: string; exampleTotalLabel: string; perMonth: string; exampleNote: string; noTel: string; tel: string; table: string; bringupFrom: string };
  teaser: { pricingLink: string; archLink: string; trial: string; supported: string; custom: string; minimum: string; terms: string };
  people: { linkedin: string };
  diagrams: {
    note: string;
    anatomy: {
      title: string; desc: string; disk: string; growsNote: string;
      parts: { name: string; role: string; meta: string }[];
      tpm: { name: string; role: string; meta: string };
      runtime: { name: string; items: string[] };
      link: { name: string; meta: string };
      running: string;
    };
    update: {
      title: string; desc: string;
      steps: { k: string; name: string; meta: string }[];
      decision: string; yes: string; no: string; yesOut: string; noOut: string; dataNote: string;
    };
    pipeline: {
      title: string; desc: string;
      lanes: [string, string, string];
      nodes: { k: string; name: string; meta: string }[];
      gate: string; back: string; mtls: string;
    };
  };
  legal: { back: string };
  notFound: { title: string; desc: string; home: string };
  status: { eyebrow: string; title: string; desc: string; stateLabel: string; stateValue: string; note: string; back: string };
  footerLinks: { docs: string; status: string };
  trust2: { eyebrow: string; items: string[]; link: string };
  contactSteps: { title: string; items: string[] };
}

const en: Site = {
  meta: {
    home: { title: 'Operated immutable edge OS', desc: 'HurricaneOS is a fully operated, immutable edge operating system for x86 and ARM fleets. EU vendor, EU-hosted (within the EEA).' },
    platform: { title: 'HurricaneOS Platform — Immutable OS for Edge Fleets', desc: 'How HurricaneOS works: A/B operating-system slots with automatic fallback, TPM 2.0 hardware identity, and a Git-to-fleet pipeline with CVE scanning.' },
    pricing: { title: 'Pricing', desc: 'Published HurricaneOS prices per active device per month, per hardware profile. Free 1-month trial. EUR, excluding VAT, for businesses.' },
    compliance: { title: 'Compliance', desc: 'A good-faith technical mapping of HurricaneOS against NIS2, the RED cybersecurity delegated act and the Cyber Resilience Act.' },
    company: { title: 'HurricaneOS edge OS, built in Poland', desc: 'Global Storm sp. z o.o., Warsaw — the engineers behind HurricaneOS. Book a demo.' },
    legal: { title: 'Privacy Policy', desc: 'How Global Storm handles personal data collected through this website.' },
    notFound: { title: 'Page not found', desc: 'The page you were looking for does not exist.' },
    status: { title: 'Status', desc: 'Status page for the HurricaneOS control plane — coming soon.' },
  },
  nav: { menu: 'Menu', close: 'Close', home: 'Global Storm — home', lang: 'Language' },
  hero: {
    productAlt: 'GSE-3 enclosure: black anodised, finned aluminium with M12 and FAKRA connectors and the Global Storm mark etched on the side',
    capTitle: 'GSE-3 · bespoke enclosure for special projects (MVP-stage)',
    capLine: 'HurricaneOS also runs on x86-64 and supported ARM boards with TPM 2.0',
    fromPrice: 'From {price} / active device / month · €300/mo minimum · EUR, excl. VAT · B2B',
    posterAlt: 'HurricaneOS console at the login prompt after a complete boot',
    lamp: 'online',
    watch: 'Watch it boot · 14s',
    metaFlow: 'boot → login → online',
    metaUnedited: 'unedited',
    metaReal: 'real recording',
    metaVm: 'recorded in a VM',
    consoleCap: 'A complete HurricaneOS start-up — bootloader to login prompt. After enrolment the fleet is operated: no SSH, no console, no site visit. Local console of the recording VM; production devices expose no management interface.',
  },
  boot: {
    homeIndex: 'Console', homeTitle: 'A real boot, start to login.', homeCaption: 'boot → login → online',
    homeLink: 'Watch the full boot on Platform →',
    index: '01 / Boot', title: 'Watch it boot.',
    desc: 'The console output of a complete HurricaneOS start-up, from the bootloader to the login prompt. Unedited, 14 seconds.',
    frameLabel: 'tty1 · hurricaneos · boot',
    caption: 'Console capture of a HurricaneOS boot, recorded in a virtual machine. Muted.',
    fallback: 'Your browser cannot play this video. It shows the HurricaneOS console start-up ending at the login prompt.',
    fallbackLink: 'Download the recording (WebM, 285 KB)',
    playLabel: 'Play the HurricaneOS boot recording',
    points: [
      { term: 'Two OS slots.', text: 'The bootloader chooses between Root A and Root B. A new operating system is written to the standby slot; if it fails to boot, the device falls back to the previous one automatically.' },
      { term: 'Identity in hardware.', text: 'At first boot the device generates its private key inside the TPM 2.0. The key never leaves the chip, so the device cannot be cloned.' },
      { term: 'Locked down by default.', text: 'Deny-by-default firewall, isolated containers, and serial/COM and other I/O interfaces disabled until a capability is granted.' },
    ],
  },
  sections: {
    pillars: '01 / Platform', architecture: '02 / On the device', update: '03 / OS updates', pipeline: '04 / Delivery',
    console: '05 / Control plane', hardware: '06 / Hardware', compare: '07 / Alternatives', field: 'Field report',
    pricing: 'Pricing', cta: 'Get started', facts: 'Company record', people: 'Founders', contact: 'Contact', faq: 'FAQ',
  },
  pillarsMore: 'How the platform works →',
  field: {
    tag: 'STS Kapitan Głowacki · underway', unit: 'Field unit', inService: 'In service',
    shipAlt: 'STS Kapitan Głowacki under sail in open water with whitecaps',
    engineAlt: 'Ship engine room with a Volvo Penta D6-300 and bulkhead-mounted control panels',
    deviceAlt: 'Industrial box PC from our hardware partner installed above cable runs, power LED lit, CAN terminal blocks connected',
    quoteLead: 'Partner hardware, not ours.',
  },
  hardware: {
    photoAlts: ['GSE-3 enclosure, connector side: M12 and FAKRA connectors on an anodised panel', 'GSE-3 enclosure standing on end, showing the cooling fins and connector column'],
    photoCaption: 'Route 03 · GSE-3, a bespoke build for special projects — MVP-stage, not a certified catalogue product.',
    photoTag: '03 · In-house · bespoke',
    recHeader: 'Recommended route',
    recRows: [
      { label: 'Status', value: 'Certified off-the-shelf, validated against the OS' },
      { label: 'Range', value: 'Industrial gateways · vision nodes · DIN-rail compute · vehicle units' },
      { label: 'Requires', value: 'UEFI firmware · TPM 2.0' },
    ],
    recProfile: 'Pricing',
    moreLink: 'Compare the three hardware routes →',
    recNote: 'We recommend starting here. Bring your own board instead, or ask about a bespoke build for a punishing environment.',
  },
  pricing: {
    formulaLabel: 'How a bill is calculated',
    formula: ['monthly bill = max(', 'graduated device charge', ', monthly minimum )'],
    featured: 'Recommended', from: 'from', perDevice: '/ device / mo', launchNoTel: 'Launch band, your own telemetry',
    minimum: 'Monthly minimum', trialCta: 'Request a free trial', paidTrialCta: 'Ask for a paid trial', supportedCta: 'Request a quote', customCta: 'Talk to us',
    bringupLabel: 'One-off bring-up',
    exampleTitle: 'Worked example · 250 devices, your own telemetry',
    exampleTotalLabel: 'Device charge', perMonth: '/ mo',
    exampleNote: 'Above the {min} minimum, so the device charge is billed. Below it, you pay the minimum — a floor, not an extra charge.',
    noTel: 'Your own', tel: 'Ours', table: '€ / active device / month', bringupFrom: 'from',
  },
  teaser: { pricingLink: 'See full pricing →', archLink: 'See the full architecture →', trial: 'Free trial', supported: 'Supported profile, from', custom: 'Custom profile, from', minimum: 'min.', terms: 'Terms' },
  people: { linkedin: 'LinkedIn profile of' },
  diagrams: {
    note: 'Drawn from the HurricaneOS user manual.',
    anatomy: {
      title: "What's on the device",
      desc: 'Every image carries the same four partitions. The TPM holds the identity; the runtime only grants what an application declares.',
      disk: 'Disk · eMMC or NVMe/SSD · ≥ 16 GB',
      growsNote: 'expands to fill the disk on first boot',
      parts: [
        { name: 'EFI', role: 'Bootloader', meta: 'selects slot A or B' },
        { name: 'Root A', role: 'Operating system', meta: 'running' },
        { name: 'Root B', role: 'Operating system', meta: 'standby — next OS update' },
        { name: 'Data', role: 'Apps, images, identity', meta: 'survives OS updates' },
      ],
      tpm: { name: 'TPM 2.0', role: 'Hardware identity', meta: 'key generated inside · never leaves' },
      runtime: { name: 'Application runtime', items: ['Isolated containers', 'Deny-by-default firewall', 'I/O disabled by default', 'Hardware via capability broker'] },
      link: { name: 'Cloud control plane', meta: 'mutual TLS · TPM-backed identity' },
      running: 'running',
    },
    update: {
      title: 'An OS update that falls back instead of bricking',
      desc: 'Operating-system updates are delivered over the air by Global Storm only. Application data is never touched.',
      steps: [
        { k: '1', name: 'OTA image arrives', meta: 'delivered by Global Storm' },
        { k: '2', name: 'Written to the standby slot', meta: 'running slot untouched' },
        { k: '3', name: 'Bootloader switches slot', meta: 'EFI selects the new OS' },
      ],
      decision: 'Boots?', yes: 'yes', no: 'no',
      yesOut: 'Runs the new OS', noOut: 'Falls back to the previous slot — automatically',
      dataNote: 'Data partition: never touched by an OS update',
    },
    pipeline: {
      title: 'From git push to a running container',
      desc: 'You never SSH into a device to deploy. A new build never ships by itself — you choose which build goes live.',
      lanes: ['Your team', 'Global Storm cloud', 'Your fleet'],
      nodes: [
        { k: 'git push', name: 'Push to the connected branch', meta: 'standard Git' },
        { k: 'build', name: 'Multi-arch image', meta: 'Intel + ARM, per service' },
        { k: 'registry', name: 'Private registry', meta: 'your images are never public' },
        { k: 'scan', name: 'CVE scan', meta: 'per service, by severity' },
        { k: 'deploy', name: 'Pick a succeeded build → Deploy', meta: 'manual · 1 device or 10,000' },
        { k: 'pull', name: 'Each device pulls its CPU variant', meta: 'attached devices only' },
        { k: 'run', name: 'Isolated container', meta: 'not installed → installing → running' },
      ],
      gate: 'manual gate', back: 'health · logs · status → dashboard', mtls: 'mutual TLS',
    },
  },
  legal: { back: '← Back to home' },
  notFound: { title: 'Page not found', desc: 'The page you were looking for does not exist.', home: 'Go to the home page →' },
  status: {
    eyebrow: 'System status',
    title: 'Status',
    desc: 'A live status page for the HurricaneOS control plane is on the way. In the meantime, incidents and planned maintenance are communicated directly to customers.',
    stateLabel: 'Status page',
    stateValue: 'Coming soon',
    note: 'For an operational issue affecting your fleet, contact us and we will respond directly.',
    back: '← Back to home',
  },
  footerLinks: { docs: 'Documentation', status: 'Status' },
  trust2: {
    eyebrow: 'Evidence for buyers',
    items: ['CRA & RED mapping — technical pack under NDA', 'CVE scan results for every build — in your dashboard'],
    link: 'See the compliance mapping →',
  },
  contactSteps: {
    title: 'What happens next',
    items: [
      'A 30-minute call about your hardware, your fleet and where it runs.',
      'We agree the route: a free trial on a board we already certify, or a paid trial on a leased unit from our hardware partner.',
      'Our engineers build and certify the OS image for your board. Updates after that are zero-touch.',
    ],
  },
};

const pl: Site = {
  meta: {
    home: { title: 'Prowadzony, niezmienny system edge', desc: 'HurricaneOS to w pełni prowadzony, niezmienny system operacyjny edge dla flot x86 i ARM. Dostawca z UE, hostowane w UE (w ramach EOG).' },
    platform: { title: 'Platforma HurricaneOS — niezmienny system dla flot edge', desc: 'Jak działa HurricaneOS: sloty A/B systemu z automatycznym powrotem, tożsamość sprzętowa w TPM 2.0 i potok od Git do floty ze skanem CVE.' },
    pricing: { title: 'Cennik', desc: 'Jawne ceny HurricaneOS za aktywne urządzenie miesięcznie, na profil sprzętowy. Darmowy 1-miesięczny trial. EUR bez VAT, dla firm.' },
    compliance: { title: 'Zgodność', desc: 'Techniczne odwzorowanie HurricaneOS wobec NIS2, aktu delegowanego RED i Cyber Resilience Act, w dobrej wierze.' },
    company: { title: 'Twórca HurricaneOS z Polski', desc: 'Global Storm sp. z o.o., Warszawa — inżynierowie stojący za HurricaneOS. Umów demo.' },
    legal: { title: 'Polityka prywatności', desc: 'Jak Global Storm przetwarza dane osobowe zbierane przez tę stronę.' },
    notFound: { title: 'Nie znaleziono strony', desc: 'Strona, której szukasz, nie istnieje.' },
    status: { title: 'Status', desc: 'Strona statusu płaszczyzny kontrolnej HurricaneOS — wkrótce.' },
  },
  nav: { menu: 'Menu', close: 'Zamknij', home: 'Global Storm — strona główna', lang: 'Język' },
  hero: {
    productAlt: 'Obudowa GSE-3: czarne anodowane, żebrowane aluminium ze złączami M12 i FAKRA oraz wygrawerowanym znakiem Global Storm',
    capTitle: 'GSE-3 · dedykowana obudowa do specjalnych projektów (faza MVP)',
    capLine: 'HurricaneOS działa też na x86-64 i wspieranych płytach ARM z TPM 2.0',
    fromPrice: 'Od {price} / aktywne urządzenie / miesiąc · minimum 300 €/mies. · EUR, bez VAT · B2B',
    posterAlt: 'Konsola HurricaneOS na ekranie logowania po pełnym rozruchu',
    lamp: 'online',
    watch: 'Zobacz rozruch · 14 s',
    metaFlow: 'rozruch → logowanie → online',
    metaUnedited: 'bez edycji',
    metaReal: 'prawdziwy zapis',
    metaVm: 'nagrane w maszynie wirtualnej',
    consoleCap: 'Pełne uruchomienie HurricaneOS — od bootloadera do ekranu logowania. Po wdrożeniu flotę prowadzimy my: bez SSH, bez konsoli, bez wyjazdu w teren. Lokalna konsola maszyny wirtualnej z nagrania; urządzenia produkcyjne nie udostępniają interfejsu zarządzania.',
  },
  boot: {
    homeIndex: 'Konsola', homeTitle: 'Prawdziwy rozruch, aż do logowania.', homeCaption: 'rozruch → logowanie → online',
    homeLink: 'Zobacz pełny rozruch na stronie Platforma →',
    index: '01 / Rozruch', title: 'Zobacz, jak startuje.',
    desc: 'Zapis konsoli pełnego uruchomienia HurricaneOS — od bootloadera do ekranu logowania. Bez edycji, 14 sekund.',
    frameLabel: 'tty1 · hurricaneos · rozruch',
    caption: 'Zapis konsoli rozruchu HurricaneOS, nagrany w maszynie wirtualnej. Bez dźwięku.',
    fallback: 'Twoja przeglądarka nie odtworzy tego wideo. Pokazuje ono uruchomienie konsoli HurricaneOS, zakończone ekranem logowania.',
    fallbackLink: 'Pobierz nagranie (WebM, 285 KB)',
    playLabel: 'Odtwórz nagranie rozruchu HurricaneOS',
    points: [
      { term: 'Dwa sloty systemu.', text: 'Bootloader wybiera między Root A i Root B. Nowy system zapisywany jest do slotu zapasowego; jeśli się nie uruchomi, urządzenie automatycznie wraca do poprzedniego.' },
      { term: 'Tożsamość w sprzęcie.', text: 'Przy pierwszym rozruchu urządzenie generuje klucz prywatny wewnątrz TPM 2.0. Klucz nigdy nie opuszcza układu, więc urządzenia nie da się sklonować.' },
      { term: 'Domyślnie zablokowany.', text: 'Zapora „domyślnie odmawiaj”, izolowane kontenery, a porty szeregowe/COM i inne interfejsy I/O wyłączone, dopóki nie zostanie przyznane uprawnienie.' },
    ],
  },
  sections: {
    pillars: '01 / Platforma', architecture: '02 / Na urządzeniu', update: '03 / Aktualizacje OS', pipeline: '04 / Dostarczanie',
    console: '05 / Płaszczyzna kontrolna', hardware: '06 / Sprzęt', compare: '07 / Alternatywy', field: 'Raport z terenu',
    pricing: 'Cennik', cta: 'Rozpocznij', facts: 'Dane firmy', people: 'Założyciele', contact: 'Kontakt', faq: 'FAQ',
  },
  pillarsMore: 'Jak działa platforma →',
  field: {
    tag: 'STS Kapitan Głowacki · w rejsie', unit: 'Jednostka w terenie', inService: 'W służbie',
    shipAlt: 'STS Kapitan Głowacki pod żaglami na otwartym morzu, z grzywaczami',
    engineAlt: 'Maszynownia statku z silnikiem Volvo Penta D6-300 i panelami sterowania na grodzi',
    deviceAlt: 'Przemysłowy komputer od naszego partnera sprzętowego zamontowany nad wiązkami kabli, z zapaloną diodą zasilania i podłączonymi zaciskami CAN',
    quoteLead: 'Sprzęt partnerski, nie nasz.',
  },
  hardware: {
    photoAlts: ['Obudowa GSE-3 od strony złączy: M12 i FAKRA na anodowanym panelu', 'Obudowa GSE-3 ustawiona pionowo, widoczne żebra chłodzące i kolumna złączy'],
    photoCaption: 'Droga 03 · GSE-3, dedykowana konstrukcja do specjalnych projektów — faza MVP, nie certyfikowany produkt katalogowy.',
    photoTag: '03 · Nasz · dedykowany',
    recHeader: 'Zalecana droga',
    recRows: [
      { label: 'Status', value: 'Certyfikowany sprzęt z półki, zwalidowany z systemem' },
      { label: 'Zakres', value: 'Bramy przemysłowe · węzły wizyjne · komputery na szynę DIN · jednostki pojazdowe' },
      { label: 'Wymaga', value: 'Firmware UEFI · TPM 2.0' },
    ],
    recProfile: 'Cena',
    moreLink: 'Porównaj trzy drogi do sprzętu →',
    recNote: 'Od tego zalecamy zacząć. Możesz też wykorzystać własną płytę albo zapytać o dedykowaną konstrukcję na brutalne warunki.',
  },
  pricing: {
    formulaLabel: 'Jak liczony jest rachunek',
    formula: ['rachunek miesięczny = max(', 'opłata stopniowana za urządzenia', ', minimum miesięczne )'],
    featured: 'Zalecany', from: 'od', perDevice: '/ urządzenie / mies.', launchNoTel: 'próg Launch, Twoja telemetria',
    minimum: 'Minimum miesięczne', trialCta: 'Poproś o darmowy trial', paidTrialCta: 'Zapytaj o trial płatny', supportedCta: 'Poproś o wycenę', customCta: 'Porozmawiajmy',
    bringupLabel: 'Jednorazowe uruchomienie',
    exampleTitle: 'Przykład · 250 urządzeń, Twoja telemetria',
    exampleTotalLabel: 'Opłata za urządzenia', perMonth: '/ mies.',
    exampleNote: 'Powyżej minimum {min}, więc rozliczana jest opłata za urządzenia. Poniżej płacisz minimum — próg dolny, nie dodatkowa opłata.',
    noTel: 'Twoja', tel: 'Nasza', table: '€ / aktywne urządzenie / miesiąc', bringupFrom: 'od',
  },
  teaser: { pricingLink: 'Zobacz pełny cennik →', archLink: 'Zobacz pełną architekturę →', trial: 'Darmowy trial', supported: 'Profil wspierany, od', custom: 'Profil własny, od', minimum: 'min.', terms: 'Warunki' },
  people: { linkedin: 'Profil LinkedIn:' },
  diagrams: {
    note: 'Na podstawie instrukcji użytkownika HurricaneOS.',
    anatomy: {
      title: 'Co jest na urządzeniu',
      desc: 'Każdy obraz ma te same cztery partycje. TPM przechowuje tożsamość; środowisko uruchomieniowe przyznaje tylko to, co aplikacja zadeklaruje.',
      disk: 'Dysk · eMMC lub NVMe/SSD · ≥ 16 GB',
      growsNote: 'rozszerza się na cały dysk przy pierwszym rozruchu',
      parts: [
        { name: 'EFI', role: 'Bootloader', meta: 'wybiera slot A lub B' },
        { name: 'Root A', role: 'System operacyjny', meta: 'uruchomiony' },
        { name: 'Root B', role: 'System operacyjny', meta: 'zapasowy — kolejna aktualizacja' },
        { name: 'Data', role: 'Aplikacje, obrazy, tożsamość', meta: 'przetrwa aktualizacje OS' },
      ],
      tpm: { name: 'TPM 2.0', role: 'Tożsamość sprzętowa', meta: 'klucz generowany wewnątrz · nie opuszcza układu' },
      runtime: { name: 'Środowisko aplikacji', items: ['Izolowane kontenery', 'Zapora „domyślnie odmawiaj”', 'I/O domyślnie wyłączone', 'Sprzęt przez broker uprawnień'] },
      link: { name: 'Chmurowa płaszczyzna kontrolna', meta: 'wzajemny TLS · tożsamość z TPM' },
      running: 'uruchomiony',
    },
    update: {
      title: 'Aktualizacja systemu, która wraca do poprzedniej zamiast uszkodzić urządzenie',
      desc: 'Aktualizacje systemu operacyjnego dostarcza przez sieć wyłącznie Global Storm. Dane aplikacji nigdy nie są naruszane.',
      steps: [
        { k: '1', name: 'Przychodzi obraz OTA', meta: 'dostarcza Global Storm' },
        { k: '2', name: 'Zapis do slotu zapasowego', meta: 'działający slot nietknięty' },
        { k: '3', name: 'Bootloader przełącza slot', meta: 'EFI wybiera nowy system' },
      ],
      decision: 'Startuje?', yes: 'tak', no: 'nie',
      yesOut: 'Działa nowy system', noOut: 'Powrót do poprzedniego slotu — automatycznie',
      dataNote: 'Partycja danych: aktualizacja OS nigdy jej nie narusza',
    },
    pipeline: {
      title: 'Od git push do działającego kontenera',
      desc: 'Nie logujesz się na urządzenie przez SSH, żeby wdrożyć. Nowy build nigdy nie wysyła się sam — to Ty wybierasz, który trafia na flotę.',
      lanes: ['Twój zespół', 'Chmura Global Storm', 'Twoja flota'],
      nodes: [
        { k: 'git push', name: 'Push do podłączonej gałęzi', meta: 'standardowy Git' },
        { k: 'build', name: 'Obraz wieloarchitekturowy', meta: 'Intel + ARM, per usługa' },
        { k: 'registry', name: 'Prywatny rejestr', meta: 'Twoje obrazy nigdy nie są publiczne' },
        { k: 'scan', name: 'Skan CVE', meta: 'per usługa, według wagi' },
        { k: 'deploy', name: 'Wybierz udany build → Deploy', meta: 'ręcznie · 1 urządzenie lub 10 000' },
        { k: 'pull', name: 'Urządzenie pobiera wariant dla swojego CPU', meta: 'tylko przypisane urządzenia' },
        { k: 'run', name: 'Izolowany kontener', meta: 'not installed → installing → running' },
      ],
      gate: 'ręczna bramka', back: 'stan · logi · status → dashboard', mtls: 'wzajemny TLS',
    },
  },
  legal: { back: '← Powrót na stronę główną' },
  notFound: { title: 'Nie znaleziono strony', desc: 'Strona, której szukasz, nie istnieje.', home: 'Przejdź na stronę główną →' },
  status: {
    eyebrow: 'Status systemu',
    title: 'Status',
    desc: 'Strona statusu na żywo dla płaszczyzny kontrolnej HurricaneOS jest w przygotowaniu. W międzyczasie o incydentach i planowanych pracach informujemy klientów bezpośrednio.',
    stateLabel: 'Strona statusu',
    stateValue: 'Wkrótce',
    note: 'W razie problemu operacyjnego dotyczącego Twojej floty skontaktuj się z nami — odpowiemy bezpośrednio.',
    back: '← Powrót na stronę główną',
  },
  footerLinks: { docs: 'Dokumentacja', status: 'Status' },
  trust2: {
    eyebrow: 'Dowody dla kupujących',
    items: ['Odwzorowanie CRA i RED — pakiet techniczny pod NDA', 'Wyniki skanu CVE każdego buildu — w Twoim dashboardzie'],
    link: 'Zobacz odwzorowanie zgodności →',
  },
  contactSteps: {
    title: 'Co dalej',
    items: [
      '30-minutowa rozmowa o Twoim sprzęcie, flocie i miejscu, w którym działa.',
      'Ustalamy drogę: darmowy trial na płycie, którą już certyfikujemy, albo trial płatny na wynajętej jednostce od naszego partnera sprzętowego.',
      'Nasi inżynierowie budują i certyfikują obraz OS dla Twojej płyty. Późniejsze aktualizacje są zero-touch.',
    ],
  },
};

export const site: Record<Locale, Site> = { en, pl };
