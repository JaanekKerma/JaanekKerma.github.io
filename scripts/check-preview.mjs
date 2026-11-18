import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const root = 'dist';
const required = [
  'index.html',
  'projects/index.html',
  'projects/fortunes-gate/index.html',
  'projects/site-zero/index.html',
  'projects/tic-tac-toe/index.html',
  'projects/wpf-settings/index.html',
  'favicon.svg',
];
for (const file of required) {
  if (!existsSync(join(root, file))) throw new Error(`Missing preview file: ${file}`);
}
const allFiles = (dir) =>
  readdirSync(dir).flatMap((name) => {
    const fullPath = join(dir, name);
    return statSync(fullPath).isDirectory() ? allFiles(fullPath) : [fullPath];
  });
const broken = [];
for (const filename of allFiles(root).filter((f) => f.endsWith('.html'))) {
  const html = readFileSync(filename, 'utf8');
  // Astro's preview build must not emit absolute links that escape /preview/.
  for (const match of html.matchAll(/\b(?:href|src)="(\/(?!\/)[^"]+)"/g)) {
    if (!match[1].startsWith('/preview/')) {
      broken.push(`${relative(root, filename)}: ${match[1]}`);
    }
  }
  if (!html.includes('noindex')) {
    broken.push(`${relative(root, filename)}: missing noindex directive`);
  }
}
if (broken.length) {
  throw new Error('Invalid preview output:\n' + broken.join('\n'));
}
console.log('Preview verified: 6 pages, favicon, scoped links, and noindex metadata.');
