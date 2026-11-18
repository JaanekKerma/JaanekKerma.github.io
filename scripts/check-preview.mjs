import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const root = 'dist';
const required = [
  'index.html',
  'projects/index.html',
  'projects/fortunes-gate/index.html',
  'projects/site-zero/index.html',
  'projects/takstrid/index.html',
  'projects/grim-farmlore/index.html',
  'projects/tic-tac-toe/index.html',
  'favicon.svg',
];
if (existsSync(join(root, 'projects/wpf-settings/index.html'))) {
  throw new Error('Disallowed project page must not be generated.');
}
for (const file of required) {
  if (!existsSync(join(root, file))) throw new Error(`Missing preview file: ${file}`);
}
const allFiles = (dir) =>
  readdirSync(dir).flatMap((name) => {
    const fullPath = join(dir, name);
    return statSync(fullPath).isDirectory() ? allFiles(fullPath) : [fullPath];
  });
// Explicitly allow only repository URLs independently confirmed to be public.
// User and organization profile URLs (one path segment) remain allowed.
const publicRepositories = new Set([
  'JaanekKerma/jaanekkerma.github.io',
  'Ruscemp/Roguelike-game',
  'Ruscemp/Unreal3DRendering',
].map((name) => name.toLowerCase()));
const broken = [];
for (const filename of allFiles(root).filter((f) => f.endsWith('.html'))) {
  const html = readFileSync(filename, 'utf8');
  // Astro's preview build must not emit absolute links that escape /preview/.
  for (const match of html.matchAll(/\b(?:href|src)="(\/(?!\/)[^"]+)"/g)) {
    if (!match[1].startsWith('/preview/')) {
      broken.push(`${relative(root, filename)}: ${match[1]}`);
    }
  }
  for (const match of html.matchAll(/href="(https:\/\/github\.com\/[^"]+)"/g)) {
    const url = new URL(match[1]);
    const parts = url.pathname.split('/').filter(Boolean);
    if (parts.length >= 2) {
      const repoName = parts.slice(0, 2).join('/').toLowerCase();
      if (!publicRepositories.has(repoName)) {
        broken.push(`${relative(root, filename)}: repository visibility not approved: ${repoName}`);
      }
    }
  }
  if (!html.includes('noindex')) {
    broken.push(`${relative(root, filename)}: missing noindex directive`);
  }
}
if (broken.length) {
  throw new Error('Invalid preview output:\n' + broken.join('\n'));
}
console.log('Preview verified: 7 pages, forbidden project absent, favicon, scoped links, and noindex metadata.');
