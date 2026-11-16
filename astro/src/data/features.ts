/*
  FEATURE SWITCHES: the one place to turn prepared features on.
  Both default to false: with them off the built site is identical to the site without the feature.
  How to switch on and off: see "Feature switches" in astro/README.md.
*/
export const features = {
  /** Show the brief Neritic AI band on the Home page (EN + PL). */
  neriticAi: false,
  /** Show every outgoing link to neritic.ai: in the band, in the nav (desktop and mobile menu) and in the footer. Leave false until neritic.ai is live. Has no effect while neriticAi is false. */
  neriticAiLink: false,
} as const;

/** The one test every outgoing neritic.ai link uses: the link switch counts only while the band switch is on. */
export const showNeriticLink: boolean = features.neriticAi && features.neriticAiLink;
