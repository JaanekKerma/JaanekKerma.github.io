import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const root = 'dist';
const required = [
  'index.html', 'projects/index.html', 'contact/index.html',
  'projects/fortunes-gate/index.html',
  'projects/site-zero/index.html',
  'projects/takstrid/index.html',
  'projects/grim-farmlore/index.html',
  'projects/tic-tac-toe/index.html',
  'projects/ninja-frog-saga/index.html',
  'favicon.svg', 'robots.txt',
];
const failures = [];
for (const path of required) {
  if (!existsSync(join(root, path))) failures.push('Missing required production file: ' + path);
}
const listFiles = (dir) => readdirSync(dir).flatMap((name) => {
  const full = join(dir, name);
  return statSync(full).isDirectory() ? listFiles(full) : [full];
});
if (existsSync(join(root, 'projects/wpf-settings/index.html'))) {
  failures.push('Disallowed employer project route was generated');
}

const approvedRepositories = new Set([
  'jaanekkerma/jaanekkerma.github.io',
  'ruscemp/roguelike-game',
  'ruscemp/unreal3drendering'
]);
const allowedHosts = new Set([
  'jaanekkerma.github.io', 'github.com', 'www.linkedin.com',
  'ruscemp.itch.io', 'chhuusko.itch.io', 'formsubmit.co'
]);
for (const file of listFiles(root).filter((p) => p.endsWith('.html'))) {
  const html = readFileSync(file, 'utf8');
  const path = relative(root, file);
  if (/name="robots"\s+content="noindex|content="noindex,\s*nofollow"/i.test(html)) {
    failures.push(path + ': production must remain indexable');
  }
  if (/wixsite\.com|jaanekkerma\.wixsite|github\.com\/Ruscemp\/UnityGameJam2026|WPF_Settings_App/i.test(html)) {
    failures.push(path + ': retired website or private project reference');
  }
  for (const match of html.matchAll(/\b(?:href|src)="(\/(?!\/)[^"]+)"/g)) {
    if (match[1].startsWith('/preview/')) failures.push(path + ': preview-only internal link ' + match[1]);
  }
  for (const match of html.matchAll(/\b(?:href|src|action)="(https:\/\/[^"]+)"/g)) {
    const url = new URL(match[1]);
    if (!allowedHosts.has(url.hostname)) failures.push(path + ': unexpected destination ' + url.hostname);
    if (url.hostname === 'github.com') {
      const parts = url.pathname.split('/').filter(Boolean);
      if (parts.length >= 2 && !approvedRepositories.has(parts.slice(0,2).join('/').toLowerCase())) {
        failures.push(path + ': non-public source repository link ' + parts.slice(0,2).join('/'));
      }
    }
  }
}
if (existsSync(join(root, 'index.html'))) {
  const home = readFileSync(join(root, 'index.html'), 'utf8');
  if (!home.includes('Projects worth')) failures.push('Production homepage does not contain portfolio content');
  if (home.includes('DEVELOPMENT PREVIEW')) failures.push('Preview marker present on production homepage');
}
if (failures.length) throw new Error('Production validation failed:\n' + failures.join('\n'));
console.log('Production output verified: nine pages, safe links, no preview noindex, and locally available assets.');
