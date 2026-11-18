import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const root = 'dist';
const required = [
  'index.html',
  'projects/index.html',
  'contact/index.html',
  'projects/fortunes-gate/index.html',
  'projects/site-zero/index.html',
  'projects/takstrid/index.html',
  'projects/grim-farmlore/index.html',
  'projects/tic-tac-toe/index.html',
  'projects/ninja-frog-saga/index.html',
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
const allowedExternalHosts = new Set(['jaanekkerma.github.io', 'github.com', 'www.linkedin.com', 'ruscemp.itch.io', 'chhuusko.itch.io', 'formsubmit.co']);
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
  for (const match of html.matchAll(/\b(?:href|src)="(https:\/\/[^"]+)"/g)) {
    const url = new URL(match[1]);
    if (!allowedExternalHosts.has(url.hostname)) broken.push(`${relative(root, filename)}: unapproved external host: ${url.hostname}`);
  }
  if (!html.includes('noindex')) {
    broken.push(`${relative(root, filename)}: missing noindex directive`);
  }
}
const homepage = readFileSync(join(root,'index.html'),'utf8');
const contact = readFileSync(join(root,'contact/index.html'),'utf8');
const workStart = homepage.indexOf('id="work"');
const workEnd = homepage.indexOf('</section>', workStart);
const featured = workStart >= 0 && workEnd > workStart ? homepage.slice(workStart,workEnd) : '';
if (!featured) broken.push('Featured section missing');
for (const name of ["Site Zero","Takstrid"]) {
  if (!featured.includes(name)) broken.push('Featured section missing '+name);
}
for (const name of ["Grim Farmlore","Tic Tac Toe","Ninja Frog Adventure Saga"]) {
  if (featured.includes(name)) broken.push('Unexpected homepage feature '+name);
}
if (!homepage.includes('fortunes-gate')) broken.push('Flagship feature missing');
if (!contact.includes('name="message"') || !contact.includes('name="email"') || !contact.includes('formsubmit.co/')) {
  broken.push('Contact form missing delivery endpoint or fields');
}
if (!contact.includes('076 212 69 22')) broken.push('Contact phone number missing');
if (broken.length) {
  throw new Error('Invalid preview output:\n' + broken.join('\n'));
}
console.log('Preview verified: 9 pages, forbidden project absent, favicon, scoped links, and noindex metadata.');
