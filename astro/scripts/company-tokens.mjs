// Remark plugin: fills {{company.<key>}} tokens in Markdown text, link text and link URLs from the single
// company data source (src/data/company.ts), choosing the locale from the content file's path. This keeps the
// privacy policy's controller block identical to the footer and /company/#registry — one source, no drift.
import { companyTokens } from '../src/data/company.ts';

const TOKEN = /\{\{company\.([a-zA-Z]+)\}\}/g;

export default function companyTokensPlugin() {
  return (tree, file) => {
    const p = String(file.path ?? '').replaceAll('\\', '/');
    const locale = p.includes('/content/pl/') ? 'pl' : p.includes('/content/en/') ? 'en' : null;
    if (!locale) return;
    const tokens = companyTokens(locale);
    const fill = (s) => s.replace(TOKEN, (_, k) => {
      if (!(k in tokens)) throw new Error(`company-tokens: unknown token {{company.${k}}} in ${p}`);
      return tokens[k];
    });
    const walk = (n) => {
      if (typeof n.value === 'string' && (n.type === 'text' || n.type === 'inlineCode')) n.value = fill(n.value);
      if (n.type === 'link' && typeof n.url === 'string') n.url = fill(n.url);
      if (n.children) n.children.forEach(walk);
    };
    walk(tree);
  };
}
