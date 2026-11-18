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
// Drawer navigation must have two independent collapsed sections on every page.
for (const filename of allFiles(root).filter((f) => f.endsWith('.html'))) {
  const html = readFileSync(filename, 'utf8');
  for (const id of ['drawer-home-sections', 'drawer-project-pages']) {
    if (!html.includes('aria-controls="' + id + '"')) {
      broken.push(`${relative(root, filename)}: missing submenu toggle for ${id}`);
    }
    if (!new RegExp('id="' + id + '"[^>]*\\bhidden').test(html)) {
      broken.push(`${relative(root, filename)}: submenu must start collapsed: ${id}`);
    }
  }
}
const siteStyles = allFiles(root).filter((f) => f.endsWith('.css')).map((f) => readFileSync(f, 'utf8')).join('\n');
if (!/\.site-header\s*\{[^}]*position:\s*sticky/s.test(siteStyles)) {
  broken.push('Menu header must remain sticky while scrolling');
}

const navByPage = new Map([
  ['index.html', ['intro', 'work', 'behind-the-code']],
  ['projects/index.html', ['projects-overview', 'projects-gallery']],
  ['contact/index.html', ['contact-intro', 'contact-panels']],
]);
for (const filename of allFiles(root).filter((file) => file.endsWith('.html'))) {
  const page = relative(root, filename).replaceAll('\\', '/');
  const html = readFileSync(filename, 'utf8');
  const expected = navByPage.get(page)
    ?? (page.startsWith('projects/') ? ['project-top', 'project-overview', 'project-systems'] : []);
  const nav = html.match(/<nav class="main-nav"[^>]*>[\s\S]*?<\/nav>/)?.[0] ?? '';
  if (!nav) {
    broken.push(page + ': contextual page navigation is missing');
    continue;
  }
  for (const id of expected) {
    if (!nav.includes('href="#' + id + '"') || !html.includes('id="' + id + '"')) {
      broken.push(page + ': contextual section target missing: ' + id);
    }
  }
  if (nav.includes('href="/preview/projects/"') || nav.includes('href="/preview/contact/"')) {
    broken.push(page + ': old global navigation link remains');
  }
}


// The index must expose both groups, a text search, and combinable tag controls.
const indexHtml = readFileSync(join(root, 'projects/index.html'), 'utf8');
for (const requiredText of [
  'id="project-search"', 'id="projects-gallery"',
  'data-project-search', 'data-tag-filter', 'data-collection-filter',
  'data-results-count', 'data-clear-filters', 'data-project-empty',
  'data-collection-group="game-jam"', 'data-collection-group="university"',
]) {
  if (!indexHtml.includes(requiredText)) broken.push('Project search missing: ' + requiredText);
}
for (const expectedLabel of ['Solo', 'Team', 'Unity', 'Unreal', 'FPS', 'First Person']) {
  if (!indexHtml.includes('>' + expectedLabel + '<')) broken.push('Project filter missing tag: ' + expectedLabel);
}
if ((indexHtml.match(/<div\b[^>]*\bdata-project-item\b/g) ?? []).length !== 6) {
  broken.push('Expected six searchable project cards');
}


const projectPageNav = indexHtml.match(/<nav class="main-nav"[^>]*>[\s\S]*?<\/nav>/)?.[0] ?? '';
const contactPageNav = contact.match(/<nav class="main-nav"[^>]*>[\s\S]*?<\/nav>/)?.[0] ?? '';
for (const label of ['Top', 'Search &amp; Filter', 'Gallery']) {
  if (!projectPageNav.includes(label)) broken.push('Projects header label missing: ' + label);
}
if (!contactPageNav.includes('>Top<') || !contactPageNav.includes('>Contact<')) {
  broken.push('Contact header should contain Top and Contact');
}
if (indexHtml.includes('project-discovery-card-tags')) {
  broken.push('External project tag strip must not be rendered');
}
const searchCards = indexHtml.match(/<article class="project-card[^"]*">[\s\S]*?<\/article>/g) ?? [];
if (searchCards.length !== 6 || searchCards.some((card) => !card.includes('class="tag-row"'))) {
  broken.push('All six projects must render tags inside their own cards');
}
const startFeatured = homepage.indexOf('id="work"');
if (startFeatured < 0 || homepage.slice(0, startFeatured).includes('id="work" class="section-block')) {
  broken.push('Featured Work anchor should be on the section heading');
}

if (broken.length) {
  throw new Error('Invalid preview output:\n' + broken.join('\n'));
}
console.log('Preview verified: 9 pages, forbidden project absent, favicon, scoped links, and noindex metadata.');
