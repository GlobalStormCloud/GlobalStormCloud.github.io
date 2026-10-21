// Astro integration: Polish typography pass over the built pages (dist/pl/**/*.html).
// Joins a number and its currency ("300 €", "6 000 zł") and the thousands groups of a number
// ("2 500", "10 000") with U+00A0, so an amount never breaks across lines on a narrow screen,
// whatever the source string looks like. Text nodes only: tags, attributes, <script> and <style>
// are never touched. Idempotent. English pages need no pass.
// Also binds Polish single-letter words (a, i, o, u, w, z) and the legal abbreviations art./ust./lit./
// sp./ul./nr to the word that follows, so a line never ends on "w" / "i" / "z" (a 'sierotka').
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const NB = '\u00a0';

/** Fix one text run (no markup in it). */
export function fixText(t) {
  return t
    .replace(/(\d) (?=(?:€|zł)(?![\p{L}\d]))/gu, `$1${NB}`) // number + currency sign
    .replace(/(\d) (?=\d{3}(?!\d))/g, `$1${NB}`) // thousands groups
    .replace(/(?<=^|[\s\u00a0(„"«])([AIOUWZaiouwz]) (?=[^\s\u00a0])/gu, `$1${NB}`) // single-letter words (sierotki)
    .replace(/(?<=^|[\s\u00a0(])(art\.|ust\.|lit\.|ul\.|sp\.|nr) (?=[\p{L}\d])/gu, `$1${NB}`) // legal / address abbreviations
    .replace(/(?<=lit\.\u00a0)([a-z]) (?=\S)/gu, `$1${NB}`); // "lit. f RODO": the letter stays with the statute name
}

/** Fix an HTML document: only text between tags, and never inside <script>/<style>. */
export function fixHtml(html) {
  let skip = null; // 'script' | 'style' while inside one
  return html
    .split(/(<[^>]+>)/)
    .map((seg) => {
      if (seg.startsWith('<')) {
        const m = seg.match(/^<(\/?)(script|style)\b/i);
        if (m) skip = m[1] ? null : m[2].toLowerCase();
        return seg;
      }
      return skip ? seg : fixText(seg);
    })
    .join('');
}

const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]));

export default function plTypography() {
  return {
    name: 'pl-typography',
    hooks: {
      'astro:build:done': ({ dir }) => {
        const root = path.join(fileURLToPath(dir), 'pl');
        if (!fs.existsSync(root)) return;
        let changed = 0;
        for (const f of walk(root).filter((x) => x.endsWith('.html'))) {
          const before = fs.readFileSync(f, 'utf8');
          const after = fixHtml(before);
          if (after !== before) { fs.writeFileSync(f, after); changed++; }
        }
        console.log(`[pl-typography] non-breaking spaces applied in ${changed} Polish page(s).`);
      },
    },
  };
}
