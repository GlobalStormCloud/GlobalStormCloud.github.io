// Structured site content, migrated VERBATIM from the Jekyll _i18n/en.yml + pl.yml.
// Pricing numbers here are the source of truth for every figure on the site.
// Region wording is "EU-hosted (within the EEA)" / "hostowane w UE (w ramach EOG)" — no AWS region.
import type { Locale } from '../i18n/ui';
import { company } from './company';

export interface Content {
  hero: { eyebrow: string; title: string; titleAccent: string; desc: string; cta: string; secondary: string; note: string[] };
  trust: { partnerLabel: string; partnerName: string; items: string[] };
  platform: { eyebrow: string; title: string; desc: string; note: string; items: { label: string; title: string; desc: string }[] };
  architecture: {
    title: string; desc: string;
    nodes: { label: string; sub: string; tag: string; state?: 'active' | 'staging' }[];
    notes: { term: string; text: string }[];
  };
  pipeline: { eyebrow: string; title: string; desc: string; steps: { label: string; title: string; desc: string; meta: string }[] };
  console: { eyebrow: string; title: string; desc: string; path: string; badge: string; stats: { label: string; value: string }[]; columns: string[]; rows: { id: string; version: string; bank: string; state: string; label: string; seen: string }[]; foot: string };
  compare: { eyebrow: string; title: string; desc: string; scrollHint: string; columns: string[]; rows: { axis: string; cells: { mark: 'yes' | 'no'; text: string }[] }[]; note: string };
  field: { eyebrow: string; title: string; narrative: string[]; spec: { label: string; value: string }[] };
  hardware: { eyebrow: string; title: string; desc: string; routes: { label: string; title: string; desc: string; examples: string }[]; onboarding: { title: string; requirementsLabel: string; requirements: string; startLabel: string; start: string; note: string } };
  pricing: PricingContent;
  faq: { eyebrow: string; title: string; desc: string; items: { q: string; a: string }[] };
  team: { eyebrow: string; title: string; desc: string; facts: { label: string; value: string }[]; people: { name: string; role: string; bio: string; linkedin: string }[] };
  contact: { eyebrow: string; title: string; desc: string; name: string; email: string; company: string; interest: string; interestOptions: string[]; message: string; submit: string; privacyNote: string; privacyNoteLink: string; success: string };
  registry: { title: string; rows: { label: string; value: string }[] };
  footer: { place: string; krsLabel: string; detailsLabel: string; desc: string; colPlatform: string; colCompany: string; colConnect: string; privacy: string; euHosted: string };
  compliance: { eyebrow: string; title: string; desc: string; cta: string };
  teasers: {
    architecture: { title: string; link: string };
    field: { eyebrow: string; title: string; caption: string; link: string };
    pricing: { eyebrow: string; title: string; desc: string; link: string };
    closing: { eyebrow: string; title: string; desc: string };
  };
}

interface PricingContent {
  eyebrow: string; title: string; desc: string; terms: string;
  trialName: string; trialPrice: string; trialUnit: string; trialDesc: string; startHere: string; trialCta: string;
  paidTrialName: string; paidTrialPrice: string; paidTrialUnit: string; paidTrialDesc: string; paidTrialLines: { label: string; value: string }[];
  tiersTitle: string; tiersNote: string;
  colTier: string; colDevices: string; colOwn: string; colOurs: string;
  profiles: { name: string; note: string; rows: { tier: string; devices: string; own: string; ours: string }[]; minLabel: string; minValue: string }[];
  minimumNote: string; calloutNote: string;
  bringupTitle: string; bringup: { label: string; price: string }[]; bringupNote: string;
  sameTitle: string; same: string[];
  addonsTitle: string; addons: { label: string; price: string }[];
  examplesTitle: string; examplesNote: string; colProfile: string; colBasis: string;
  examples: { profile: string; devices: string; own: string; ours: string; basis: string }[];
  examplesFoot: string;
  annualPrepay: string; volumeContact: string; fineprint: string; ctaTitle: string; ctaNote: string; cta: string;
}

const en: Content = {
  hero: {
    eyebrow: 'Edge Operating System · EU-hosted (within the EEA) · NIS2 / RED / CRA mapping published',
    title: 'Deploy code to edge hardware.',
    titleAccent: 'We handle the rest.',
    desc: 'HurricaneOS is a fully operated, immutable edge platform for x86 and ARM fleets. We run the OS — patching, rollouts, CVE response — so you ship application code, not embedded-Linux hires.',
    cta: 'Book a Demo',
    secondary: 'View Pricing',
    note: ['Survives power loss', 'Zero-touch OS updates', 'Published prices', 'x86 · ARM · UEFI'],
  },
  trust: {
    partnerLabel: 'Industrial engagements with',
    partnerName: 'PwC',
    items: ['In service at sea since June 2026 — STS Kapitan Głowacki', 'EU vendor · EU-hosted (within the EEA) · NIS2, RED and CRA mapping published', 'x86 · ARM · UEFI'],
  },
  platform: {
    eyebrow: 'The Platform',
    title: 'An operating system built for unattended hardware',
    desc: 'HurricaneOS eliminates the complexity between your code and your edge fleet. Push containers, not kernel patches.',
    note: 'Separately: for teams who need more than running their own code at the edge, we also take on data collection and processing engagements. That is a distinct offering, contracted on its own — it is not part of the OS subscription.',
    items: [
      { label: 'Survival', title: 'Built so an unclean shutdown has nothing to corrupt', desc: 'The system volume is mounted read-only, so an unclean shutdown has nothing to damage. Updates write to the idle bank and switch only after a health probe passes; if it fails, the bootloader returns to the bank that was working. No operator, no site visit.' },
      { label: 'Security', title: 'Hardware-backed identity, locked down by default', desc: 'Every device holds its own identity key in a TPM 2.0 — which we require to certify any hardware profile — and the identity is designed so it cannot be copied to another device. Device and cloud authenticate each other with mutual TLS, the firewall denies by default, applications run isolated in containers, and communication ports and other I/O interfaces stay closed until they are explicitly approved. These are table stakes for edge Linux and we treat them that way; where they matter is that they map directly onto RED Article 3.3 and the Cyber Resilience Act essential requirements, set out on the compliance page.' },
      { label: 'Operated', title: 'We run the platform. You write the application.', desc: 'OS patching, rollout scheduling, health monitoring and failure response are ours, not a console we hand you. Your team pushes code to a repository, every build is CVE-scanned and stored in your own private registry — never public — and it reaches the fleet. Most comparable platforms maintain their OS but leave you to operate it — which means hiring someone who knows embedded Linux, or discovering you needed one.' },
      { label: 'Sovereignty', title: 'An EU vendor, for buyers who have to care', desc: 'The OS, the control plane and the engineering are ours — built and operated from Poland, hosted within the EEA. For defence, critical infrastructure and NIS2-scoped operators, the jurisdiction of the vendor maintaining your boot chain is a procurement question — and every comparable platform we evaluated answers it from outside the EU. EU rules have teeth now: cybersecurity has been mandatory for new wireless connected products since August 2025, and Cyber Resilience Act reporting since September 2026.' },
    ],
  },
  architecture: {
    title: "What's actually on the device",
    desc: 'Four partitions, one of them writable. The system volume is mounted read-only, so a power cut during a write is not a failure mode — there is nothing to corrupt.',
    nodes: [
      { label: 'Cloud control plane', sub: 'fleet state · builds · deployments', tag: 'mTLS' },
      { label: 'OS bank A — read-only system volume', sub: 'currently booted', tag: 'active', state: 'active' },
      { label: 'OS bank B — receives the next image', sub: 'verified before switch', tag: 'staging', state: 'staging' },
      { label: 'Data partition', sub: 'the only writable volume', tag: 'rw' },
      { label: 'Hardware root of trust', sub: 'hardware-backed device identity', tag: 'TPM 2.0' },
    ],
    notes: [
      { term: 'Why two banks.', text: 'An update never touches the running system. It is written to the idle bank, verified, then booted. If the health probe fails, the bootloader falls back to the bank that was working.' },
      { term: 'Why read-only.', text: 'Field failures in unattended hardware are dominated by filesystem corruption after unclean shutdowns. Removing write access to the system volume removes the class of failure.' },
      { term: 'Why keys in hardware.', text: 'The device generates its identity key inside the TPM 2.0 chip and the key never leaves it, so the identity is designed not to be copied to another device.' },
    ],
  },
  pipeline: {
    eyebrow: 'Developer Experience',
    title: 'From commit to edge in one pipeline',
    desc: 'Your team pushes code. The platform builds it, scans it, and delivers it to your fleet — the Git workflow they already know.',
    steps: [
      { label: 'Push', title: 'Commit to Git', desc: 'Push to the branch you connected. Standard Git, no custom tooling — the build starts on its own.', meta: 'git push' },
      { label: 'Build', title: 'Multi-arch image', desc: 'Each service builds into a container image for Intel and ARM at once, stored in your own private registry — never public.', meta: 'intel + arm' },
      { label: 'Scan', title: 'CVE scan before it ships', desc: 'Every image is scanned for known vulnerabilities, with findings per service by severity and a link to each advisory. Caught at build time, not after an incident.', meta: 'per-build' },
      { label: 'Deploy', title: 'You choose the build', desc: 'Deployment is manual and deliberate — a new build never auto-ships. Pick a known-good build and roll it to one device or the whole fleet in one action.', meta: 'manual · reversible' },
      { label: 'Run', title: 'Devices converge', desc: 'Each device pulls the image for its own CPU, runs it in an isolated container, and streams health back. The previous OS slot stays for rollback.', meta: 'atomic · rollback' },
    ],
  },
  console: {
    eyebrow: 'Control Plane',
    title: 'Every device, every version, one view',
    desc: 'Fleet state is authoritative in the cloud and reconciled by the device. See every device\'s health, OS version and running containers, deploy a chosen build to one device or the whole fleet in a single action, and redeploy a known-good build to roll back — without sending anyone to site.',
    path: 'fleet / profiles / partner-industrial-pc',
    badge: '1284 devices',
    stats: [
      { label: 'On target version', value: '1276' },
      { label: 'Staging', value: '6' },
      { label: 'Rolled back', value: '2' },
      { label: 'Unreachable', value: '0' },
    ],
    columns: ['Device', 'OS version', 'Boot bank', 'State', 'Last seen'],
    rows: [
      { id: 'gs-3f9a21c4', version: '2.4.1', bank: 'A', state: 'ok', label: 'healthy', seen: '12s ago' },
      { id: 'gs-8b7e04d1', version: '2.4.1', bank: 'A', state: 'ok', label: 'healthy', seen: '34s ago' },
      { id: 'gs-1c55ba90', version: '2.4.2', bank: 'B', state: 'warn', label: 'staging', seen: '8s ago' },
      { id: 'gs-d024e7f6', version: '2.4.1', bank: 'A', state: 'ok', label: 'healthy', seen: '2m ago' },
      { id: 'gs-47ab9e02', version: '2.3.8', bank: 'A', state: 'info', label: 'reverted', seen: '1m ago' },
    ],
    foot: 'Illustration of a fleet view, not a product screenshot. Device identifiers and figures are illustrative.',
  },
  compare: {
    eyebrow: 'Alternatives',
    title: "How we differ from the platforms you're also evaluating",
    desc: 'The capable edge-Linux platforms are all good at this. We are not going to pretend otherwise, or claim security features every one of them has. Here is where the choice actually turns.',
    scrollHint: 'Scroll the table sideways to see every column →',
    columns: ['HurricaneOS', 'Snap-based OS', 'Container-fleet platform', 'Module-vendor OS'],
    rows: [
      { axis: 'Immutable system volume', cells: [{ mark: 'yes', text: 'Read-only by design' }, { mark: 'yes', text: 'Snap-based' }, { mark: 'yes', text: 'Read-only' }, { mark: 'yes', text: 'OSTree-based' }] },
      { axis: 'Automatic rollback on a failed update', cells: [{ mark: 'yes', text: 'Bootloader-level, no operator' }, { mark: 'no', text: 'Per-snap revert, not whole-image' }, { mark: 'yes', text: 'Host OS updates' }, { mark: 'yes', text: 'OSTree rollback' }] },
      { axis: 'Runs on hardware you already ship', cells: [{ mark: 'yes', text: 'x86-64 or supported ARM boards with TPM 2.0 — image built and certified per board' }, { mark: 'yes', text: 'Certified boards; enablement fee otherwise' }, { mark: 'yes', text: 'Supported device-type list' }, { mark: 'no', text: "Built around the vendor's own modules" }] },
      { axis: 'Who operates the fleet day to day', cells: [{ mark: 'yes', text: 'We do — patching, rollouts, monitoring, response' }, { mark: 'no', text: 'You do, in your own store and tooling' }, { mark: 'no', text: 'You do, in their dashboard' }, { mark: 'no', text: 'You do, in their cloud' }] },
      { axis: 'Vendor jurisdiction', cells: [{ mark: 'yes', text: 'Poland — EU' }, { mark: 'no', text: 'Non-EU' }, { mark: 'no', text: 'Non-EU' }, { mark: 'no', text: 'Non-EU' }] },
    ],
    note: "Compiled from each platform's published documentation as of October 2026. All are capable; every one does immutability properly — that is table stakes, not a differentiator; some can be cheaper per device at volume. The distinctions that survive scrutiny are hardware independence and where the vendor sits.",
  },
  field: {
    eyebrow: 'Field Report',
    title: "Running in a ship's engine room, at sea, since June",
    narrative: [
      'An engine room is a deliberately unkind place to put a computer. Sustained vibration from a running diesel, heat with nowhere to go, salt in the air, and power that comes and goes with the engine rather than with anyone\'s permission.',
      'The unit reads the engine\'s own CAN bus, a second CAN vibration sensor mounted on the block, and NMEA 0183 navigation data from the ship\'s instruments. It buffers locally and reconciles with the cloud when there is a link — which at sea there frequently is not.',
      'This deployment runs on partner hardware, not one of our own enclosures. That is the ordinary case: an industrial box PC from our hardware partner is entirely adequate here, and HurricaneOS does not care whose metal it is running on.',
    ],
    spec: [
      { label: 'Vessel', value: 'STS Kapitan Głowacki — sail training ship, built c. 1942' },
      { label: 'Engine', value: 'Volvo Penta D6-300' },
      { label: 'Data sources', value: 'Engine CAN bus · dedicated CAN vibration sensor · NMEA 0183 navigation' },
      { label: 'Hardware', value: 'Industrial box PC from our hardware partner — not our own build' },
      { label: 'Conditions', value: 'Vibration, heat, salt air, unscheduled power loss, intermittent connectivity' },
      { label: 'In service', value: 'Since June 2026' },
    ],
  },
  hardware: {
    eyebrow: 'Hardware',
    // Requirements & onboarding block, rendered under the Platform hardware section.
    onboarding: {
      title: 'Requirements and onboarding',
      requirementsLabel: 'Requirements',
      requirements: '64-bit x86-64 or a supported ARM board; UEFI boot (ARM boards boot through their vendor firmware); TPM 2.0; about 16 GB or more of eMMC or NVMe/SSD; 2 GB RAM or more; internet access at first boot.',
      startLabel: 'How it starts',
      start: 'You tell us your CPU architecture and boot storage; we build and supply the image for that hardware; your devices are pre-registered with us; each device then provisions itself on first power-on.',
      note: 'Initial bring-up is a deliberate, human-gated project — updates after that are zero-touch.',
    },
    title: 'Three ways to get the hardware under it',
    desc: 'Start on certified, off-the-shelf hardware from our hardware partner — the recommended route and already validated against the OS. Or bring your own x86 or ARM platform that meets the requirements. For a few genuinely punishing projects, we build bespoke hardware ourselves.',
    routes: [
      { label: 'Hardware partner', title: 'Start on HurricaneOS-ready hardware from our hardware partner', desc: "The recommended way to start. Industrial gateways, vision nodes, DIN-rail compute and vehicle units from our hardware partner's catalogue — certified off-the-shelf hardware, already validated against the OS. It covers most commercial requirements.", examples: 'Industrial PCs and edge gateways from our hardware partner' },
      { label: 'Your own', title: 'Bring the hardware you already ship', desc: '64-bit Intel or AMD with UEFI, or a supported ARM board (for example NVIDIA Jetson), in each case with a TPM 2.0 that meets the requirements. The TPM is a requirement, not a preference. We certify it and maintain it from there.', examples: 'Intel · AMD · ARM (e.g. NVIDIA Jetson) · TPM 2.0 required' },
      { label: 'In-house', title: 'Bespoke builds for special, demanding projects', desc: 'For a few genuinely punishing projects — salt spray, sustained vibration, shock and thermal extremes — we design and build the hardware ourselves, because nothing off the shelf survives it. These are MVP-stage, special-project builds, specified per project, not a certified catalogue product. Physical tamper-response options can be specified per project on these builds — scoped to your security requirements, not a catalogue option.', examples: 'Sealed aluminium enclosure · designed for shock and vibration · tamper-evident · special projects only' },
    ],
  },
  pricing: {
    eyebrow: 'Pricing',
    title: 'Published prices, per active device.',
    desc: 'A maintained OS update lane with CVE patching, billed per active device per month. Every standard rate is on this page.',
    terms: 'Prices in EUR, excluding VAT. For businesses only; a valid VAT ID is required. Published rates are indicative; binding terms are set in your contract.',
    // TRIAL MODEL — free and paid trial.
    // Free: €0 / 1 mo / ≤3 devices / eval-only / supported-profile-only / B2B / no shipped hardware.
    // Paid: €600 one-off / 3 mo + partner-hardware unit on €55/device/mo returnable lease + €950 return undertaking
    // (SIGNED undertaking, no cash held; charged only if the unit is not returned); €600 fee credited to
    // year 1 fees on conversion within 30 days of trial end (not paid out in cash; lease not credited); no auto-renew; hardware returned.
    trialName: 'Free trial', trialPrice: '€0', trialUnit: '1 month · up to 3 devices · evaluation only',
    trialDesc: 'The real OS for one month on a board we already certify — up to 3 devices, business customers, evaluation use only, not for production. We register and set up your devices with you; it is not instant self-serve. A board we have not yet certified needs a custom-profile bring-up first.',
    startHere: 'Request free trial', trialCta: 'Request a free trial →',
    paidTrialName: 'Paid trial', paidTrialPrice: '€600', paidTrialUnit: 'one-off · 3 months · partner hardware unit on returnable lease (€55/device/mo, billed separately)',
    paidTrialDesc: 'A hands-on pilot with an evaluation unit from our hardware partner on a returnable lease. The €600 fee is credited against your first-year fees if you convert within 30 days of trial end; it is not paid out in cash, and the lease is not credited. It does not auto-renew, and the unit is returned at trial end.',
    paidTrialLines: [
      { label: 'Hardware lease', value: '€55/device/mo (€165 over the 3 months)' },
      { label: 'Return undertaking', value: "€950 return undertaking — signed, nothing charged unless the unit isn't returned" },
    ],
    tiersTitle: 'Per active device, per month, per hardware profile',
    tiersNote: "Graduated tiers — each band's rate applies only to the devices inside it. Choose your telemetry (ours or your own) and your profile (supported or custom).",
    colTier: 'Tier', colDevices: 'Active devices', colOwn: 'Your own telemetry', colOurs: 'Our telemetry',
    profiles: [
      { name: 'Supported profile', note: 'Hardware we already certify — boards from our hardware partner, or your own board once we certify it. Shared maintenance makes it the lower-cost route to an operated fleet.', rows: [
        { tier: 'Launch', devices: '1–50', own: '€1.90', ours: '€2.80' },
        { tier: 'Production', devices: '51–250', own: '€1.40', ours: '€2.30' },
        { tier: 'Scale', devices: '251–1,000', own: '€1.20', ours: '€1.90' },
        { tier: 'Fleet', devices: '1,001+', own: '€0.95', ours: '€1.40' },
      ], minLabel: 'Monthly minimum per profile', minValue: '€300' },
      { name: 'Custom profile', note: 'Your own board, brought up and maintained as a dedicated profile — kernel and CVE backports.', rows: [
        { tier: 'Launch', devices: '1–50', own: '€3.70', ours: '€4.60' },
        { tier: 'Production', devices: '51–250', own: '€2.80', ours: '€3.70' },
        { tier: 'Scale', devices: '251–1,000', own: '€2.30', ours: '€3.25' },
        { tier: 'Fleet', devices: '1,001+', own: '€1.85', ours: '€2.80' },
      ], minLabel: 'Monthly minimum per profile', minValue: '€850' },
    ],
    minimumNote: "The monthly minimum is a floor, not an extra charge: below it you pay the minimum; above it you pay for your active devices at the rates above. Generous build and log allowances are included; we don't bill usage overages today.",
    calloutNote: 'Device count is metered; build and log allowances are fair-use, not billed today.',
    bringupTitle: 'Custom profile bring-up',
    bringup: [
      { label: 'Standard bring-up', price: 'from €15,000' },
      { label: 'Complex bring-up', price: '€25,000–30,000' },
      { label: 'Spread over 12 months', price: '€1,250/mo (12-month commitment)' },
      { label: '24-month commitment', price: '30% off bring-up' },
    ],
    bringupNote: 'A one-time engineering project to certify and maintain your board as its own profile. Pay up front, or spread it over a 12-month commitment.',
    sameTitle: 'Every paid plan includes',
    same: ['Container build + deploy pipeline', 'OTA for containers and OS images', 'Monthly OS update package', 'CVE and kernel maintenance', 'Automatic rollback', '30 container builds/mo', '200 MB container logs/device/mo', 'No device-count cap — you add devices as you grow'],
    addonsTitle: 'Add any time',
    addons: [
      { label: 'Priority security response', price: '+€200–500/profile/mo' },
      { label: 'Extended-hours cover', price: 'from €11,000/yr' },
      { label: '24/7 on-call', price: 'Quoted' },
      { label: 'Customer data hosting', price: 'Off by default · quoted when enabled' },
    ],
    examplesTitle: 'Worked examples',
    examplesNote: 'Monthly totals per hardware profile, graduated across the bands, shown for both telemetry options. The minimum is a floor: below it you pay the minimum; above it you pay for your active devices at the rates above.',
    colProfile: 'Profile', colBasis: 'What applies',
    examples: [
      { profile: 'Supported', devices: '10', own: '€300/mo', ours: '€300/mo', basis: 'Minimum applies' },
      { profile: 'Supported', devices: '250', own: '€375/mo', ours: '€600/mo', basis: 'Per-device charge' },
      { profile: 'Supported', devices: '2,500', own: '€2,700/mo', ours: '€4,125/mo', basis: 'Per-device charge' },
      { profile: 'Custom', devices: '200', own: '€850/mo', ours: '€850/mo', basis: 'Minimum applies' },
    ],
    examplesFoot: 'Supported 250 = 50 devices at Launch + 200 at Production. Supported 2,500 = the Launch, Production and Scale bands filled, then 1,500 at Fleet. Custom 200 charges to €605 (no telemetry) / €785 (telemetry), both below the €850 custom minimum, so the minimum is billed.',
    annualPrepay: 'Prepay annually and get two months free.',
    volumeContact: '10,000+ devices: contact sales.',
    fineprint: 'Billed per active device per month, per hardware profile. Existing contracts keep their terms until renewal. A device is one unit running our OS; sensors behind it are not counted. Cancel and you keep the last image, plus 90 days to push to your own fleet. We monitor and maintain the OS; your application is yours, and it cannot modify the OS. Hardware support depends on your hardware route and is set out in your contract. Extended-hours and 24/7 cover are available as add-ons.',
    ctaTitle: 'Custom hardware or 10,000+ devices?', ctaNote: "Tell us your board and fleet size and we'll quote the setup. Prepay annually and get two months free.", cta: 'Book a Demo →',
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Before you book a demo',
    desc: 'The questions buyers ask us first — answered plainly.',
    items: [
      { q: 'What counts as an "active device"?', a: "One physical unit running HurricaneOS and checking in with the control plane during the month. Sensors, cameras and peripherals wired behind that unit are not counted — only the device running our OS. A unit you've powered down and that stops checking in is not billed as active." },
      { q: 'What does the trial include?', a: "Two ways in. A free 1-month trial runs the real OS on a board we already certify — up to 3 devices, business customers, evaluation only, not for production. For a hands-on pilot with a unit in place, a 3-month paid trial is €600 and ships an evaluation unit from our hardware partner on a returnable lease (€55/device/mo), secured by a €950 return undertaking — a signed commitment to return the unit, with nothing charged unless it isn't returned. The €600 fee is credited against your first-year fees if you convert within 30 days of trial end; it is not paid out in cash, and the lease is not credited. The trial does not auto-renew, and the unit is returned at trial end. Either way you evaluate on real hardware, not a sandbox." },
      { q: '"Our telemetry" versus your own — what\'s the difference?', a: "With our telemetry we collect and process device health data for you through our EU pipeline. With your own telemetry you run your own data pipeline instead — but your container logs still pass through our EU log pipeline, because that's how we operate and repair the fleet. Either way the OS is fully operated by us." },
      { q: 'What happens after I book a demo?', a: 'A human onboarding, not instant self-serve. We talk through your hardware and fleet, then our engineers build and certify the OS image for your board. Bring-up is a deliberate, human-gated project — updates after that are zero-touch, but the initial image is something we build with you.' },
      { q: 'Can I run HurricaneOS on hardware I already ship?', a: "Usually yes. A 64-bit Intel or AMD platform with UEFI, or a supported ARM board, in each case with a TPM 2.0, can be certified as a supported profile. Where your board isn't already supported, a custom-profile bring-up certifies and maintains it as its own profile. The TPM is a hard requirement." },
      { q: 'Where do I get the golden image?', a: "Global Storm builds and supplies it. The image is specific to your hardware type — CPU architecture and boot storage (for example Intel with NVMe/SSD, or eMMC) — so it is not a public download. Request it through the contact form or from your account manager. Before first boot, your devices must be pre-registered with us: a device that is not registered will boot but will not be allowed to provision. The step-by-step flashing procedure comes with the user manual supplied with your device program." },
    ],
  },
  team: {
    eyebrow: 'Company',
    title: 'Built by engineers who deploy in the field',
    desc: 'We build the full software stack — the immutable operating system and the cloud control plane — and build bespoke hardware ourselves when a project demands it. Two founders, one codebase, no outsourced core.',
    facts: [
      { label: 'Founded', value: 'Warsaw, Poland — incorporated November 2023' },
      { label: 'Engagements', value: 'PwC — joint industrial engagements' },
      { label: 'In the field', value: 'Reading engine CAN and NMEA 0183 in the engine room of a sail training ship since June 2026' },
      { label: 'Discipline', value: 'Embedded systems · OS security · cloud-native delivery' },
    ],
    people: [
      { name: 'Wojtek', role: 'Co-Founder & Systems Architect', bio: 'Leads platform architecture and edge deployment strategy across industrial environments.', linkedin: 'https://www.linkedin.com/in/wojciech-zydecki' },
      { name: 'Mohsen', role: 'Co-Founder & Hardware Lead', bio: 'Designs rugged embedded platforms for demanding edge applications.', linkedin: 'https://www.linkedin.com/in/mohsen-shaali-91031268' },
    ],
  },
  contact: {
    eyebrow: 'Get Started',
    title: 'See HurricaneOS in action',
    desc: 'Book a 30-minute demo, or ask about a trial on a board we certify or a leased unit. No commitment to talk.',
    name: 'Name', email: 'Work Email', company: 'Company', interest: "I'm interested in...",
    interestOptions: ['Platform demo', 'Free trial (supported board)', 'Paid trial (partner hardware unit)', 'Custom hardware', 'Data collection & processing', 'Technical partnership', 'Just exploring'],
    message: 'Tell us about your use case', submit: 'Book my demo',
    privacyNote: 'Global Storm sp. z o.o. uses these details to reply to your enquiry and prepare a quote. Submissions are stored in Google Workspace, which may process them in the US. See our', privacyNoteLink: 'Privacy policy',
    success: "Thanks — we'll be in touch within one business day.",
  },
  // Full Art. 206 §1 KSH entry, rendered by sections/Registry.astro at /company/#registry (anchor id is frozen).
  // Values come from data/company.ts: the same source as the footer line and the privacy-policy controller block.
  registry: {
    title: 'Company details',
    rows: [
      { label: 'Company name', value: company.name },
      { label: 'Registered office and address', value: `${company.seat} · ${company.en.address}` },
      { label: 'Registry court', value: company.en.court },
      { label: 'KRS', value: company.krs },
      { label: 'NIP', value: company.nip },
      { label: 'REGON', value: company.regon },
      { label: 'Share capital', value: company.en.capital },
    ],
  },
  footer: {
    place: company.en.place,
    krsLabel: 'KRS',
    detailsLabel: 'Company details',
    desc: 'Immutable, operated edge operating system — on HurricaneOS-ready hardware from our hardware partner, your own, or bespoke builds for the harshest environments.',
    colPlatform: 'Platform', colCompany: 'Company', colConnect: 'Connect', privacy: 'Privacy', euHosted: 'Platform EU-hosted (within the EEA)',
  },
  compliance: { eyebrow: 'Compliance', title: 'HurricaneOS and EU regulation', desc: 'Three EU regimes touch connected devices, and which one binds you depends on what you do. A good-faith technical mapping, not legal advice.', cta: 'Talk to us' },
  teasers: {
    architecture: { title: "What's actually on the device", link: 'See the full architecture →' },
    field: { eyebrow: 'Field Report', title: 'Running in a ship\'s engine room, at sea, since June', caption: 'In service at sea since June 2026 on the STS Kapitan Głowacki.', link: 'Read the field report →' },
    pricing: { eyebrow: 'Pricing', title: 'Published prices. Free 1-month trial.', desc: 'Start free on a board we already certify for a month, or take a 3-month paid trial on a leased unit from our hardware partner. A supported fleet of 10 devices is €300/mo; 250 devices, €375/mo (your own telemetry). Every standard rate is published.', link: 'See full pricing →' },
    closing: { eyebrow: 'Get Started', title: 'See HurricaneOS in action', desc: 'Book a 30-minute demo, or ask about a trial on a board we certify or a leased unit. No commitment to talk.' },
  },
};

const pl: Content = {
  hero: {
    eyebrow: 'System operacyjny edge · hostowane w UE (w ramach EOG) · opublikowane odwzorowanie NIS2 / RED / CRA',
    title: 'Wdrażaj kod na sprzęt edge.',
    titleAccent: 'My zajmiemy się resztą.',
    desc: 'HurricaneOS to w pełni prowadzona, niezmienna platforma edge dla flot x86 i ARM. To my prowadzimy system — łatanie, wdrożenia, reakcję na CVE — więc Ty wysyłasz kod aplikacji, a nie zatrudniasz specjalistów od Linuksa wbudowanego.',
    cta: 'Umów demo',
    secondary: 'Zobacz cennik',
    note: ['Odporna na utratę zasilania', 'Zero-touch aktualizacje OS', 'Jawne ceny', 'x86 · ARM · UEFI'],
  },
  trust: {
    partnerLabel: 'Projekty przemysłowe z',
    partnerName: 'PwC',
    items: ['Na morzu od czerwca 2026 — STS Kapitan Głowacki', 'Dostawca z UE · hostowane w UE (w ramach EOG) · opublikowane odwzorowanie NIS2, RED i CRA', 'x86 · ARM · UEFI'],
  },
  platform: {
    eyebrow: 'Platforma',
    title: 'System operacyjny stworzony dla nienadzorowanego sprzętu',
    desc: 'HurricaneOS eliminuje złożoność między Twoim kodem a flotą edge. Wypychaj kontenery, nie łatki kernela.',
    note: 'Osobno: dla zespołów, które potrzebują czegoś więcej niż uruchamiania własnego kodu na brzegu sieci, prowadzimy też projekty zbierania i przetwarzania danych. To odrębna usługa, kontraktowana niezależnie — nie jest częścią subskrypcji systemu.',
    items: [
      { label: 'Przetrwanie', title: 'Zbudowany tak, by nagłe wyłączenie nie miało czego uszkodzić', desc: 'Wolumen systemowy montowany jest tylko do odczytu, więc nieczyste wyłączenie nie ma czego zepsuć. Aktualizacje zapisywane są na bezczynnym banku i przełączane dopiero po pomyślnej sondzie zdrowia; jeśli zawiedzie, bootloader wraca do banku, który działał. Bez operatora, bez wyjazdu w terenie.' },
      { label: 'Bezpieczeństwo', title: 'Tożsamość oparta na sprzęcie, domyślnie zablokowany dostęp', desc: 'Każde urządzenie trzyma własny klucz tożsamości w TPM 2.0 — którego wymagamy do certyfikacji każdego profilu sprzętowego — a tożsamość jest zaprojektowana tak, by nie dało się jej skopiować na inne urządzenie. Urządzenie i chmura uwierzytelniają się wzajemnie przez mTLS, zapora domyślnie blokuje ruch, aplikacje działają odizolowane w kontenerach, a porty komunikacyjne i inne interfejsy I/O pozostają zamknięte, dopóki nie zostaną jawnie zatwierdzone. To standard w Linuksie na brzegu sieci i tak go traktujemy; znaczenie ma to, że odwzorowuje się bezpośrednio na artykuł 3.3 RED i wymogi zasadnicze Cyber Resilience Act, opisane na stronie zgodności.' },
      { label: 'Obsługiwane', title: 'My prowadzimy platformę. Ty piszesz aplikację.', desc: 'Łatanie systemu, harmonogram wdrożeń, monitoring stanu i reakcja na awarie są po naszej stronie, a nie w konsoli, którą Ci wręczamy. Twój zespół wypycha kod do repozytorium, każdy build jest skanowany pod kątem CVE i przechowywany w Twoim prywatnym rejestrze — nigdy publicznym — a kod trafia na flotę. Większość porównywalnych platform utrzymuje swój system, ale prowadzenie floty zostawia Tobie — co oznacza zatrudnienie kogoś, kto zna Linuksa wbudowanego, albo odkrycie, że był potrzebny.' },
      { label: 'Suwerenność', title: 'Dostawca z UE, dla tych, którzy muszą o to pytać', desc: 'System, płaszczyzna kontrolna i inżynieria są nasze — tworzone i prowadzone z Polski, hostowane w ramach EOG. Dla obronności, infrastruktury krytycznej i podmiotów objętych NIS2 jurysdykcja dostawcy utrzymującego Twój łańcuch rozruchu to pytanie przetargowe — a każda porównywalna platforma, którą analizowaliśmy, odpowiada na nie spoza UE. Przepisy UE mają teraz zęby: cyberbezpieczeństwo jest obowiązkowe dla nowych bezprzewodowych produktów podłączonych do sieci od sierpnia 2025, a raportowanie z Cyber Resilience Act od września 2026.' },
    ],
  },
  architecture: {
    title: 'Co naprawdę znajduje się na urządzeniu',
    desc: 'Cztery partycje, jedna zapisywalna. Wolumen systemowy jest montowany tylko do odczytu, więc zanik zasilania w trakcie zapisu nie jest scenariuszem awarii — nie ma czego uszkodzić.',
    nodes: [
      { label: 'Chmurowa płaszczyzna kontrolna', sub: 'stan floty · buildy · wdrożenia', tag: 'mTLS' },
      { label: 'Bank systemu A — wolumen tylko do odczytu', sub: 'aktualnie uruchomiony', tag: 'aktywny', state: 'active' },
      { label: 'Bank systemu B — przyjmuje kolejny obraz', sub: 'weryfikowany przed przełączeniem', tag: 'przygotowanie', state: 'staging' },
      { label: 'Partycja danych', sub: 'jedyny zapisywalny wolumen', tag: 'rw' },
      { label: 'Sprzętowy korzeń zaufania', sub: 'tożsamość urządzenia oparta na sprzęcie', tag: 'TPM 2.0' },
    ],
    notes: [
      { term: 'Dlaczego dwa banki.', text: 'Aktualizacja nigdy nie dotyka działającego systemu. Zapisywana jest na bezczynnym banku, weryfikowana, a potem uruchamiana. Jeśli sonda zdrowia zawiedzie, bootloader wraca do banku, który działał.' },
      { term: 'Dlaczego tylko do odczytu.', text: 'Awarie w terenie w sprzęcie bez nadzoru zdominowane są przez uszkodzenia systemu plików po nieczystym wyłączeniu. Odebranie prawa zapisu do wolumenu systemowego usuwa całą tę klasę awarii.' },
      { term: 'Dlaczego klucze w sprzęcie.', text: 'Urządzenie generuje swój klucz tożsamości wewnątrz układu TPM 2.0, a klucz nigdy go nie opuszcza, więc tożsamość jest zaprojektowana tak, by nie dało się jej skopiować na inne urządzenie.' },
    ],
  },
  pipeline: {
    eyebrow: 'Doświadczenie dewelopera',
    title: 'Od commitu do brzegu w jednym pipelinie',
    desc: 'Twój zespół wypycha kod. Platforma buduje go, skanuje i dostarcza na flotę — w znanym już przepływie Git.',
    steps: [
      { label: 'Push', title: 'Commit do Git', desc: 'Wypchnij do podłączonej gałęzi. Standardowy Git, bez własnych narzędzi — build startuje sam.', meta: 'git push' },
      { label: 'Build', title: 'Obraz wieloarchitekturowy', desc: 'Każda usługa buduje się w obraz kontenera dla Intela i ARM naraz, w Twoim prywatnym rejestrze — nigdy publicznym.', meta: 'intel + arm' },
      { label: 'Skan', title: 'Skan CVE przed wysyłką', desc: 'Każdy obraz jest skanowany pod kątem znanych podatności, z wynikami per usługa według wagi i linkiem do każdego zalecenia. Wychwycone przy buildzie, nie po incydencie.', meta: 'przy buildzie' },
      { label: 'Deploy', title: 'Ty wybierasz build', desc: 'Wdrożenie jest ręczne i świadome — nowy build nigdy nie wysyła się sam. Wybierz sprawdzony build i wdróż go na jedno urządzenie lub całą flotę jednym działaniem.', meta: 'ręcznie · odwracalne' },
      { label: 'Run', title: 'Urządzenia zbiegają się', desc: 'Każde urządzenie pobiera obraz dla swojego CPU, uruchamia go w izolowanym kontenerze i odsyła stan. Poprzedni slot systemu zostaje do wycofania.', meta: 'atomowo · wycofanie' },
    ],
  },
  console: {
    eyebrow: 'Płaszczyzna kontrolna',
    title: 'Każde urządzenie, każda wersja, jeden widok',
    desc: 'Stan floty jest źródłem prawdy w chmurze i jest uzgadniany przez urządzenie. Zobacz zdrowie, wersję systemu i działające kontenery każdego urządzenia, wdróż wybrany build na jedno urządzenie lub całą flotę jednym działaniem i wdróż ponownie sprawdzony build, aby wycofać zmiany — bez wysyłania kogokolwiek w teren.',
    path: 'flota / profile / partner-industrial-pc',
    badge: '1284 urządzenia',
    stats: [
      { label: 'Na wersji docelowej', value: '1276' },
      { label: 'Przygotowanie', value: '6' },
      { label: 'Wycofane', value: '2' },
      { label: 'Nieosiągalne', value: '0' },
    ],
    columns: ['Urządzenie', 'Wersja OS', 'Bank rozruchu', 'Stan', 'Ostatni kontakt'],
    rows: [
      { id: 'gs-3f9a21c4', version: '2.4.1', bank: 'A', state: 'ok', label: 'sprawne', seen: '12 s temu' },
      { id: 'gs-8b7e04d1', version: '2.4.1', bank: 'A', state: 'ok', label: 'sprawne', seen: '34 s temu' },
      { id: 'gs-1c55ba90', version: '2.4.2', bank: 'B', state: 'warn', label: 'przygotowanie', seen: '8 s temu' },
      { id: 'gs-d024e7f6', version: '2.4.1', bank: 'A', state: 'ok', label: 'sprawne', seen: '2 min temu' },
      { id: 'gs-47ab9e02', version: '2.3.8', bank: 'A', state: 'info', label: 'wycofane', seen: '1 min temu' },
    ],
    foot: 'Ilustracja widoku floty, nie zrzut ekranu produktu. Identyfikatory urządzeń i liczby są przykładowe.',
  },
  compare: {
    eyebrow: 'Alternatywy',
    title: 'Czym różnimy się od platform, które też rozważasz',
    desc: 'Solidne platformy Linuksa na brzegu sieci są w tym dobre. Nie będziemy udawać inaczej ani przypisywać sobie funkcji bezpieczeństwa, które ma każda z nich. Oto gdzie wybór faktycznie się rozstrzyga.',
    scrollHint: 'Przewiń tabelę w bok, aby zobaczyć wszystkie kolumny →',
    columns: ['HurricaneOS', 'System oparty na snapach', 'Platforma flotowo-kontenerowa', 'System dostawcy modułów'],
    rows: [
      { axis: 'Niezmienny wolumen systemowy', cells: [{ mark: 'yes', text: 'Tylko do odczytu z założenia' }, { mark: 'yes', text: 'Oparty na snapach' }, { mark: 'yes', text: 'Tylko do odczytu' }, { mark: 'yes', text: 'Oparty na OSTree' }] },
      { axis: 'Automatyczny powrót po nieudanej aktualizacji', cells: [{ mark: 'yes', text: 'Na poziomie bootloadera, bez operatora' }, { mark: 'no', text: 'Wycofanie snapa, nie całego obrazu' }, { mark: 'yes', text: 'Aktualizacje systemu hosta' }, { mark: 'yes', text: 'Rollback OSTree' }] },
      { axis: 'Działa na sprzęcie, który już wysyłasz', cells: [{ mark: 'yes', text: 'x86-64 lub wspierane płyty ARM z TPM 2.0 — obraz budowany i certyfikowany dla każdej płyty' }, { mark: 'yes', text: 'Płyty certyfikowane; poza nimi opłata' }, { mark: 'yes', text: 'Lista wspieranych typów urządzeń' }, { mark: 'no', text: 'Zbudowany wokół własnych modułów dostawcy' }] },
      { axis: 'Kto prowadzi flotę na co dzień', cells: [{ mark: 'yes', text: 'My — łatanie, wdrożenia, monitoring, reakcja' }, { mark: 'no', text: 'Ty, we własnym store i narzędziach' }, { mark: 'no', text: 'Ty, w ich dashboardzie' }, { mark: 'no', text: 'Ty, w ich chmurze' }] },
      { axis: 'Jurysdykcja dostawcy', cells: [{ mark: 'yes', text: 'Polska — UE' }, { mark: 'no', text: 'Poza UE' }, { mark: 'no', text: 'Poza UE' }, { mark: 'no', text: 'Poza UE' }] },
    ],
    note: 'Opracowane na podstawie publicznej dokumentacji każdej platformy, stan na październik 2026. Wszystkie są solidne; każda poprawnie realizuje niezmienność — to standard, nie wyróżnik; część może być tańsza za urządzenie przy wolumenie. Różnice, które wytrzymują analizę, to niezależność sprzętowa i to, gdzie siedzi dostawca.',
  },
  field: {
    eyebrow: 'Raport z terenu',
    title: 'Pracuje w maszynowni żaglowca, na morzu, od czerwca',
    narrative: [
      'Maszynownia to z natury nieprzyjazne miejsce dla komputera. Ciągłe wibracje pracującego diesla, ciepło, które nie ma gdzie ujść, sól w powietrzu i zasilanie, które pojawia się i znika wraz z silnikiem, a nie za czyimś pozwoleniem.',
      'Urządzenie czyta magistralę CAN silnika, drugi czujnik wibracji na CAN zamontowany na bloku oraz dane nawigacyjne NMEA 0183 z przyrządów statku. Buforuje lokalnie i uzgadnia stan z chmurą, gdy jest łącze — a na morzu często go nie ma.',
      'To wdrożenie działa na sprzęcie partnerskim, nie na naszej obudowie. I to jest przypadek typowy: przemysłowy komputer od naszego partnera sprzętowego jest tu w pełni wystarczający, a HurricaneOS nie interesuje, czyj to metal.',
    ],
    spec: [
      { label: 'Jednostka', value: 'STS Kapitan Głowacki — żaglowiec szkoleniowy, zbudowany ok. 1942' },
      { label: 'Silnik', value: 'Volvo Penta D6-300' },
      { label: 'Źródła danych', value: 'Magistrala CAN silnika · dedykowany czujnik wibracji CAN · nawigacja NMEA 0183' },
      { label: 'Sprzęt', value: 'Przemysłowy komputer od naszego partnera sprzętowego — nie nasza konstrukcja' },
      { label: 'Warunki', value: 'Wibracje, ciepło, zasolone powietrze, nieplanowane zaniki zasilania, przerywana łączność' },
      { label: 'W służbie', value: 'Od czerwca 2026' },
    ],
  },
  hardware: {
    eyebrow: 'Sprzęt',
    onboarding: {
      title: 'Wymagania i wdrożenie',
      requirementsLabel: 'Wymagania',
      requirements: '64-bitowy x86-64 lub wspierana płyta ARM; rozruch UEFI (płyty ARM startują przez firmware producenta); TPM 2.0; ok. 16 GB lub więcej eMMC albo NVMe/SSD; 2 GB RAM lub więcej; dostęp do internetu przy pierwszym uruchomieniu.',
      startLabel: 'Jak to wygląda',
      start: 'Podajesz architekturę CPU i nośnik rozruchowy; budujemy i dostarczamy obraz dla Twojego sprzętu; Twoje urządzenia są wstępnie u nas rejestrowane; każde urządzenie konfiguruje się samo przy pierwszym włączeniu.',
      note: 'Pierwsze uruchomienie to świadomy projekt z udziałem człowieka — późniejsze aktualizacje są zero-touch.',
    },
    title: 'Trzy drogi do sprzętu pod spodem',
    desc: 'Zacznij na certyfikowanym, gotowym sprzęcie naszego partnera sprzętowego — to zalecana droga, już zwalidowana z systemem. Albo wykorzystaj własną platformę x86 lub ARM, która spełnia wymagania. Dla kilku naprawdę brutalnych projektów budujemy dedykowany sprzęt sami.',
    routes: [
      { label: 'Partner sprzętowy', title: 'Zacznij na sprzęcie HurricaneOS-ready od naszego partnera sprzętowego', desc: 'Zalecany sposób na start. Bramy przemysłowe, węzły wizyjne, komputery na szynę DIN i jednostki pojazdowe z katalogu naszego partnera sprzętowego — certyfikowany sprzęt z półki, już zwalidowany z systemem. Pokrywa większość komercyjnych wymagań.', examples: 'Komputery przemysłowe i bramy edge od naszego partnera sprzętowego' },
      { label: 'Twój', title: 'Wykorzystaj sprzęt, który już wysyłasz', desc: '64-bitowa platforma Intel lub AMD z UEFI albo wspierana płyta ARM (na przykład NVIDIA Jetson), w każdym przypadku z TPM 2.0 spełniającym wymagania. TPM to wymóg, nie preferencja. Certyfikujemy ją i od tego momentu utrzymujemy.', examples: 'Intel · AMD · ARM (np. NVIDIA Jetson) · wymagany TPM 2.0' },
      { label: 'Nasz', title: 'Dedykowane konstrukcje do specjalnych, wymagających projektów', desc: 'Dla kilku naprawdę brutalnych projektów — zasolenie, długotrwałe wibracje, udary i skrajne temperatury — projektujemy i budujemy sprzęt sami, bo nic z półki tego nie wytrzyma. To konstrukcje w fazie MVP, pod specjalne projekty, specyfikowane per projekt, nie certyfikowany produkt katalogowy. Opcje reakcji na naruszenie fizyczne specyfikujemy per projekt w tych konstrukcjach — pod Twoje wymagania bezpieczeństwa, nie z katalogu.', examples: 'Szczelna obudowa aluminiowa · projektowana pod udary i wibracje · z detekcją naruszenia · tylko specjalne projekty' },
    ],
  },
  pricing: {
    eyebrow: 'Cennik',
    title: 'Jawne ceny, za aktywne urządzenie.',
    desc: 'Utrzymywana ścieżka aktualizacji OS z łataniem CVE, rozliczana za aktywne urządzenie miesięcznie. Każda standardowa stawka jest na tej stronie.',
    terms: 'Ceny w EUR, bez VAT. Tylko dla firm; wymagany ważny numer VAT. Opublikowane stawki mają charakter informacyjny; wiążące warunki określa umowa.',
    trialName: 'Darmowy trial', trialPrice: '0 €', trialUnit: '1 miesiąc · do 3 urządzeń · tylko do ewaluacji',
    trialDesc: 'Prawdziwy system przez miesiąc na płycie, którą już certyfikujemy — do 3 urządzeń, dla firm, wyłącznie do oceny, nie do produkcji. Rejestrujemy i konfigurujemy urządzenia razem z Tobą; to nie jest natychmiastowy self-service. Płyta, której jeszcze nie certyfikowaliśmy, wymaga najpierw uruchomienia profilu własnego.',
    startHere: 'Poproś o trial', trialCta: 'Poproś o darmowy trial →',
    paidTrialName: 'Trial płatny', paidTrialPrice: '600 €', paidTrialUnit: 'jednorazowo · 3 miesiące · jednostka partnera w najmie (55 €/urządzenie/mies., płatne osobno)',
    paidTrialDesc: 'Pilotaż z jednostką ewaluacyjną od naszego partnera sprzętowego w najmie, do zwrotu po trialu. Opłata 600 € jest zaliczana na poczet opłat pierwszego roku, jeśli przejdziesz na plan w ciągu 30 dni od końca trialu; nie jest wypłacana gotówką, a najem nie jest zaliczany. Trial nie odnawia się sam, a jednostka wraca po jego zakończeniu.',
    paidTrialLines: [
      { label: 'Najem sprzętu', value: '55 €/urządzenie/mies. (165 € przez 3 miesiące)' },
      { label: 'Zobowiązanie do zwrotu', value: '950 € — podpisane zobowiązanie do zwrotu, nic nie pobieramy, jeśli jednostka wróci' },
    ],
    tiersTitle: 'Za aktywne urządzenie, miesięcznie, na profil sprzętowy',
    tiersNote: 'Progi stopniowane — stawka każdego progu dotyczy tylko urządzeń w nim. Wybierz telemetrię (naszą lub własną) oraz profil (wspierany lub własny).',
    colTier: 'Próg', colDevices: 'Aktywne urządzenia', colOwn: 'Twoja telemetria', colOurs: 'Nasza telemetria',
    profiles: [
      { name: 'Profil wspierany', note: 'Sprzęt, który już certyfikujemy — płyty od naszego partnera sprzętowego lub Twoja własna płyta, gdy ją scertyfikujemy. Współdzielone utrzymanie to tańsza droga do prowadzonej floty.', rows: [
        { tier: 'Launch', devices: '1–50', own: '1,90 €', ours: '2,80 €' },
        { tier: 'Production', devices: '51–250', own: '1,40 €', ours: '2,30 €' },
        { tier: 'Scale', devices: '251–1 000', own: '1,20 €', ours: '1,90 €' },
        { tier: 'Fleet', devices: '1 001+', own: '0,95 €', ours: '1,40 €' },
      ], minLabel: 'Minimum miesięczne na profil', minValue: '300 €' },
      { name: 'Profil własny', note: 'Twoja własna płyta, uruchomiona i utrzymywana jako dedykowany profil — kernel i backporty CVE.', rows: [
        { tier: 'Launch', devices: '1–50', own: '3,70 €', ours: '4,60 €' },
        { tier: 'Production', devices: '51–250', own: '2,80 €', ours: '3,70 €' },
        { tier: 'Scale', devices: '251–1 000', own: '2,30 €', ours: '3,25 €' },
        { tier: 'Fleet', devices: '1 001+', own: '1,85 €', ours: '2,80 €' },
      ], minLabel: 'Minimum miesięczne na profil', minValue: '850 €' },
    ],
    minimumNote: 'Minimum miesięczne to próg dolny, nie dodatkowa opłata: poniżej płacisz minimum, powyżej płacisz za aktywne urządzenia według powyższych stawek. Hojne limity buildów i logów są wliczone; dziś nie rozliczamy przekroczeń.',
    calloutNote: 'Liczba urządzeń jest naliczana; limity buildów i logów to uczciwe korzystanie, dziś nierozliczane.',
    bringupTitle: 'Uruchomienie profilu własnego',
    bringup: [
      { label: 'Uruchomienie standardowe', price: 'od 15 000 €' },
      { label: 'Uruchomienie złożone', price: '25 000–30 000 €' },
      { label: 'Rozłożone na 12 miesięcy', price: '1 250 €/mies. (zobowiązanie na 12 miesięcy)' },
      { label: 'Zobowiązanie na 24 miesiące', price: '30% taniej za uruchomienie' },
    ],
    bringupNote: 'Jednorazowy projekt inżynierski, który certyfikuje i utrzymuje Twoją płytę jako osobny profil. Zapłać z góry lub rozłóż na zobowiązanie 12-miesięczne.',
    sameTitle: 'Każdy płatny plan zawiera',
    same: ['Potok budowania i wdrażania kontenerów', 'OTA dla kontenerów i obrazów OS', 'Comiesięczny pakiet aktualizacji OS', 'Utrzymanie CVE i kernela', 'Automatyczne wycofanie', '30 buildów kontenerów/mies.', '200 MB logów kontenerów/urządzenie/mies.', 'Bez limitu liczby urządzeń — dodajesz je w miarę wzrostu'],
    addonsTitle: 'Dodaj w każdej chwili',
    addons: [
      { label: 'Priorytetowa reakcja bezpieczeństwa', price: '+200–500 €/profil/mies.' },
      { label: 'Wsparcie w rozszerzonych godzinach', price: 'od 11 000 €/rok' },
      { label: 'Dyżur 24/7', price: 'Wycena' },
      { label: 'Hosting danych klienta', price: 'Domyślnie wyłączony · wycena po włączeniu' },
    ],
    examplesTitle: 'Przykłady wyliczeń',
    examplesNote: 'Miesięczne sumy na profil sprzętowy, naliczane stopniowo po progach, pokazane dla obu opcji telemetrii. Minimum to próg dolny: poniżej płacisz minimum, powyżej płacisz za aktywne urządzenia według powyższych stawek.',
    colProfile: 'Profil', colBasis: 'Co obowiązuje',
    examples: [
      { profile: 'Wspierany', devices: '10', own: '300 €/mies.', ours: '300 €/mies.', basis: 'Obowiązuje minimum' },
      { profile: 'Wspierany', devices: '250', own: '375 €/mies.', ours: '600 €/mies.', basis: 'Opłata za urządzenie' },
      { profile: 'Wspierany', devices: '2 500', own: '2 700 €/mies.', ours: '4 125 €/mies.', basis: 'Opłata za urządzenie' },
      { profile: 'Własny', devices: '200', own: '850 €/mies.', ours: '850 €/mies.', basis: 'Obowiązuje minimum' },
    ],
    examplesFoot: 'Wspierany 250 = 50 urządzeń w progu Launch + 200 w Production. Wspierany 2 500 = wypełnione progi Launch, Production i Scale, następnie 1 500 w Fleet. Własny 200 nalicza się do 605 € (bez telemetrii) / 785 € (z telemetrią), oba poniżej minimum 850 € dla profilu własnego, więc rozliczane jest minimum.',
    annualPrepay: 'Zapłać z góry za rok i zyskaj dwa miesiące gratis.',
    volumeContact: '10 000+ urządzeń: skontaktuj się z działem sprzedaży.',
    fineprint: 'Rozliczane za aktywne urządzenie miesięcznie, na profil sprzętowy. Istniejące umowy zachowują swoje warunki do odnowienia. Urządzenie to jedna sztuka z naszym OS; czujniki za nią nie są liczone. Po rezygnacji zostaje Ci ostatni obraz i 90 dni na wysyłkę na własną flotę. Monitorujemy i utrzymujemy system; Twoja aplikacja jest Twoja i nie może zmodyfikować systemu. Wsparcie sprzętu zależy od wybranej drogi do sprzętu i jest określone w Twojej umowie. Wsparcie w rozszerzonych godzinach i dyżur 24/7 są dostępne jako dodatki.',
    ctaTitle: 'Niestandardowy sprzęt lub 10 000+ urządzeń?', ctaNote: 'Podaj swoją płytę i wielkość floty, a wycenimy wdrożenie. Zapłać z góry za rok i zyskaj dwa miesiące gratis.', cta: 'Umów demo →',
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Zanim zamówisz demo',
    desc: 'Pytania, które kupujący zadają nam najpierw — odpowiedzi wprost.',
    items: [
      { q: 'Co liczy się jako „aktywne urządzenie”?', a: 'Jedna fizyczna jednostka z systemem HurricaneOS, zgłaszająca się do płaszczyzny kontrolnej w danym miesiącu. Czujniki, kamery i peryferia podłączone za tą jednostką nie są liczone — tylko urządzenie z naszym OS. Jednostka wyłączona, która przestaje się zgłaszać, nie jest rozliczana jako aktywna.' },
      { q: 'Co obejmuje trial?', a: 'Dwie drogi wejścia. Darmowy 1-miesięczny trial uruchamia prawdziwy system na płycie, którą już certyfikujemy — do 3 urządzeń, dla firm, wyłącznie do oceny, nie do produkcji. Na pilotaż z jednostką na miejscu 3-miesięczny trial płatny to 600 € i obejmuje jednostkę ewaluacyjną od naszego partnera sprzętowego w najmie, do zwrotu po trialu (55 €/urządzenie/mies.), z zabezpieczeniem w postaci zobowiązania do zwrotu na 950 € — podpisanego, bez pobierania środków, chyba że jednostka nie wróci. Opłata 600 € jest zaliczana na poczet opłat pierwszego roku, jeśli przejdziesz na plan w ciągu 30 dni od końca trialu; nie jest wypłacana gotówką, a najem nie jest zaliczany. Trial nie odnawia się sam, a jednostka wraca po jego zakończeniu. Tak czy inaczej oceniasz na realnym sprzęcie, nie w piaskownicy.' },
      { q: '„Nasza telemetria” a Twoja własna — jaka różnica?', a: 'Przy naszej telemetrii zbieramy i przetwarzamy dane o stanie urządzeń przez nasz unijny potok. Przy własnej telemetrii prowadzisz własny potok danych — ale logi kontenerów nadal przechodzą przez nasz unijny potok logów, bo tak prowadzimy i naprawiamy flotę. Tak czy inaczej OS jest w pełni prowadzony przez nas.' },
      { q: 'Co się dzieje po zamówieniu demo?', a: 'Wdrożenie z udziałem człowieka, a nie natychmiastowe self-serve. Omawiamy Twój sprzęt i flotę, a potem nasi inżynierowie budują i certyfikują obraz OS dla Twojej płyty. Uruchomienie to świadomy projekt z udziałem człowieka — późniejsze aktualizacje są zero-touch, ale pierwszy obraz budujemy wspólnie z Tobą.' },
      { q: 'Czy mogę uruchomić HurricaneOS na sprzęcie, który już wysyłam?', a: 'Zwykle tak. 64-bitowa platforma Intel lub AMD z UEFI albo wspierana płyta ARM, w każdym przypadku z TPM 2.0, może zostać certyfikowana jako profil wspierany. Gdy Twoja płyta nie jest jeszcze wspierana, uruchomienie profilu własnego certyfikuje ją i utrzymuje jako osobny profil. TPM to twardy wymóg.' },
      { q: 'Skąd wziąć obraz golden image?', a: 'Buduje go i dostarcza Global Storm. Obraz jest specyficzny dla Twojego typu sprzętu — architektury CPU i nośnika rozruchowego (na przykład Intel z NVMe/SSD albo eMMC) — więc nie jest publicznie do pobrania. Poproś o niego przez formularz kontaktowy lub opiekuna konta. Przed pierwszym uruchomieniem urządzenie musi być u nas wstępnie zarejestrowane: niezarejestrowane urządzenie wystartuje, ale nie zostanie dopuszczone do konfiguracji. Procedura wgrywania krok po kroku znajduje się w instrukcji użytkownika dostarczanej z programem urządzeń.' },
    ],
  },
  team: {
    eyebrow: 'Firma',
    title: 'Zbudowany przez inżynierów, którzy wdrażają w terenie',
    desc: 'Budujemy pełen stos programowy — niezmienny system operacyjny i chmurową płaszczyznę kontrolną — a dedykowany sprzęt tworzymy sami, gdy wymaga tego projekt. Dwóch założycieli, jedna baza kodu, rdzeń bez outsourcingu.',
    facts: [
      { label: 'Siedziba', value: 'Warszawa, Polska — zarejestrowana w listopadzie 2023' },
      { label: 'Współpraca', value: 'PwC — wspólne projekty przemysłowe' },
      { label: 'W terenie', value: 'Czyta CAN silnika i NMEA 0183 w maszynowni żaglowca szkoleniowego od czerwca 2026' },
      { label: 'Specjalizacja', value: 'Systemy wbudowane · bezpieczeństwo OS · dostarczanie cloud-native' },
    ],
    people: [
      { name: 'Wojtek', role: 'Współzałożyciel i architekt systemów', bio: 'Prowadzi architekturę platformy i strategię wdrożeń edge w środowiskach przemysłowych.', linkedin: 'https://www.linkedin.com/in/wojciech-zydecki' },
      { name: 'Mohsen', role: 'Współzałożyciel i lider sprzętu', bio: 'Projektuje wytrzymałe platformy wbudowane do wymagających zastosowań edge.', linkedin: 'https://www.linkedin.com/in/mohsen-shaali-91031268' },
    ],
  },
  contact: {
    eyebrow: 'Rozpocznij',
    title: 'Zobacz HurricaneOS w akcji',
    desc: 'Umów 30-minutowe demo albo zapytaj o trial na płycie, którą certyfikujemy, lub na wynajętej jednostce. Rozmowa do niczego nie zobowiązuje.',
    name: 'Imię', email: 'E-mail służbowy', company: 'Firma', interest: 'Interesuje mnie...',
    interestOptions: ['Demo platformy', 'Darmowy trial (wspierana płyta)', 'Trial płatny (jednostka sprzętu partnera)', 'Dedykowany sprzęt', 'Zbieranie i przetwarzanie danych', 'Partnerstwo techniczne', 'Na razie się rozglądam'],
    message: 'Opisz swój przypadek użycia', submit: 'Zamów moje demo',
    privacyNote: 'Global Storm sp. z o.o. wykorzysta te dane, aby odpowiedzieć na zapytanie i przygotować wycenę. Zgłoszenia są przechowywane w Google Workspace, który może je przetwarzać w USA. Zobacz naszą', privacyNoteLink: 'Politykę prywatności',
    success: 'Dziękujemy — odezwiemy się w ciągu jednego dnia roboczego.',
  },
  registry: {
    title: 'Dane rejestrowe spółki',
    rows: [
      { label: 'Firma', value: company.name },
      { label: 'Siedziba i adres', value: `${company.seat} · ${company.pl.address}` },
      { label: 'Sąd rejestrowy', value: company.pl.court },
      { label: 'KRS', value: company.krs },
      { label: 'NIP', value: company.nip },
      { label: 'REGON', value: company.regon },
      { label: 'Kapitał zakładowy', value: company.pl.capital },
    ],
  },
  footer: {
    place: company.pl.place,
    krsLabel: 'KRS',
    detailsLabel: 'Dane rejestrowe',
    desc: 'Niezmienny, prowadzony system operacyjny edge — na certyfikowanym sprzęcie od naszego partnera sprzętowego, Twoim własnym lub dedykowanych konstrukcjach na najtrudniejsze środowiska.',
    colPlatform: 'Platforma', colCompany: 'Firma', colConnect: 'Kontakt', privacy: 'Prywatność', euHosted: 'Platforma hostowana w UE (w ramach EOG)',
  },
  compliance: { eyebrow: 'Zgodność', title: 'HurricaneOS a regulacje UE', desc: 'Trzy reżimy UE dotyczą urządzeń podłączonych do sieci, a to, który wiąże Ciebie, zależy od tego, co robisz. Techniczne odwzorowanie w dobrej wierze, nie porada prawna.', cta: 'Porozmawiajmy' },
  teasers: {
    architecture: { title: 'Co naprawdę znajduje się na urządzeniu', link: 'Zobacz pełną architekturę →' },
    field: { eyebrow: 'Raport z terenu', title: 'Pracuje w maszynowni żaglowca, na morzu, od czerwca', caption: 'Na morzu od czerwca 2026 na STS Kapitan Głowacki.', link: 'Przeczytaj raport z terenu →' },
    pricing: { eyebrow: 'Cennik', title: 'Jawne ceny. Darmowy 1-miesięczny trial.', desc: 'Zacznij za darmo na płycie, którą już certyfikujemy, przez miesiąc albo weź 3-miesięczny trial płatny na wynajętej jednostce od naszego partnera sprzętowego. Wspierana flota 10 urządzeń to 300 €/mies.; 250 urządzeń — 375 €/mies. (przy własnej telemetrii). Każda standardowa stawka jest jawna.', link: 'Zobacz pełny cennik →' },
    closing: { eyebrow: 'Rozpocznij', title: 'Zobacz HurricaneOS w akcji', desc: 'Umów 30-minutowe demo albo zapytaj o trial na płycie, którą certyfikujemy, lub na wynajętej jednostce. Rozmowa do niczego nie zobowiązuje.' },
  },
};

export const content: Record<Locale, Content> = { en, pl };
