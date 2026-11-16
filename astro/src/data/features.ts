/*
  FEATURE SWITCHES: the one place to turn prepared features on.
  Both default to false: with them off the built site is identical to the site without the feature.
  How to switch on and off: see "Feature switches" in astro/README.md.
*/
export const features = {
  /** Show the brief Neritic AI band on the Home page (EN + PL). */
  neriticAi: false,
  /** Show the outgoing link to neritic.ai inside the band. Leave false until neritic.ai is live. Has no effect while neriticAi is false. */
  neriticAiLink: false,
} as const;
