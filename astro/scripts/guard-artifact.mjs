// Fail the build if the Pages artifact would ship something that must never be public:
//  - anywhere in dist/: agent/instruction files, commercial or raw font files, Jekyll leftovers;
//  - inside dist/docs/ (the docs project): any third-party font/analytics reference or the old
//    GA4 id, in any text file. (The privacy policy under dist/legal/ may legitimately NAME
//    processors, so content checks are limited to the docs.)
// Usage: node scripts/guard-artifact.mjs [dist]    (also imported by merge-docs.mjs)
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const BAD_NAME = /(^|\/)(AGENTS\.md|CLAUDE\.md|_config\.yml|Gemfile(\.lock)?|\.kiro|\.agents)(\/|$)|\.(otf|ttf|eot)$|eurostile/i;
const BAD_DOCS_TEXT = /G-M2N1SW21M1|googletagmanager|google-analytics|gtag\(|fontshare|fonts\.googleapis|fonts\.gstatic|eurostile|AGENTS\.md/i;
const TEXT = /\.(html|css|js|mjs|json|xml|txt|svg|vtt|map|webmanifest)$/i;

const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]));

export function guardArtifact(dist) {
  const problems = [];
  for (const f of walk(dist)) {
    const rel = path.relative(dist, f).split(path.sep).join('/');
    if (BAD_NAME.test(rel)) problems.push(`forbidden file in artifact: ${rel}`);
    if (rel.startsWith('docs/') && TEXT.test(rel)) {
      const m = fs.readFileSync(f, 'utf8').match(BAD_DOCS_TEXT);
      if (m) problems.push(`forbidden reference "${m[0]}" in ${rel}`);
    }
  }
  return problems;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const dist = path.resolve(process.argv[2] || 'dist');
  const problems = guardArtifact(dist);
  if (problems.length) { console.error('guard-artifact FAILED:\n  ' + problems.join('\n  ')); process.exit(1); }
  console.log(`guard-artifact: ${walk(dist).length} files checked, nothing forbidden.`);
}
