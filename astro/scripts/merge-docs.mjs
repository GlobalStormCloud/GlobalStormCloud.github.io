// Build the documentation site (../docs-src, Starlight, base "/docs") and merge it into this
// site's dist/ as dist/docs/, so ONE GitHub Pages artifact serves the marketing site and the docs.
// Also publishes /sitemap.xml (the Jekyll site served that URL; @astrojs/sitemap writes
// sitemap-index.xml — same content, so crawlers that already know /sitemap.xml keep working).
//
// Run after `astro build` (npm run build:site does both). Fails loudly if anything is missing.
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { guardArtifact } from './guard-artifact.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const siteRoot = path.resolve(here, '..');
const dist = path.join(siteRoot, 'dist');
const docsRoot = path.resolve(siteRoot, '..', 'docs-src');
const docsDist = path.join(docsRoot, 'dist');

function die(msg) { console.error(`merge-docs: ${msg}`); process.exit(1); }

if (!fs.existsSync(path.join(dist, 'index.html'))) die('dist/index.html is missing — run `astro build` first.');
if (!fs.existsSync(path.join(docsRoot, 'package.json'))) die(`docs project not found at ${docsRoot}`);
if (!fs.existsSync(path.join(docsRoot, 'node_modules'))) die('docs dependencies are not installed — run `npm ci` in docs-src/.');

const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm';
const r = spawnSync(npm, ['run', 'build'], { cwd: docsRoot, stdio: 'inherit' });
if (r.status !== 0) die('docs build failed.');
if (!fs.existsSync(path.join(docsDist, 'index.html'))) die('docs build produced no index.html.');

const target = path.join(dist, 'docs');
fs.rmSync(target, { recursive: true, force: true });
fs.cpSync(docsDist, target, { recursive: true });

// Only the Starlight build output (docs-src/dist) is copied above — never the docs project's sources.
// Belt and braces: refuse to continue if anything forbidden is in the merged artifact.
const problems = guardArtifact(dist);
if (problems.length) die('artifact guard failed:\n  ' + problems.join('\n  '));

const idx = path.join(dist, 'sitemap-index.xml');
if (!fs.existsSync(idx)) die('sitemap-index.xml missing — is @astrojs/sitemap configured?');
fs.copyFileSync(idx, path.join(dist, 'sitemap.xml'));

const pages = (dir) => fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? pages(path.join(dir, e.name)) : e.name === 'index.html' ? [1] : []));
console.log(`merge-docs: dist/docs/ ready (${pages(target).length} pages); dist/sitemap.xml written.`);
