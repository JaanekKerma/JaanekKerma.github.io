# Jaanek Kerma — Developer Portfolio

A static, responsive portfolio built with [Astro](https://astro.build/) and hosted on GitHub Pages.

**Development preview:** https://jaanekkerma.github.io/preview/

## Local development

Use Node.js 24:

```bash
npm install
npm run dev
npm run build
npm run preview
```

Preview build validation:

```bash
ASTRO_PREVIEW=true npm run build
node scripts/check-preview.mjs
```

## Branches

- `develop`: Active development, automated build checks and Pages preview at `/preview/`.
- `main`: Production source, unchanged until release approval.

## Structure

- `src/data/projects.ts` — Typed project content and public play/download URLs.
- `src/components/` — Project visuals and cards.
- `src/pages/` — Homepage, project index, and generated detail pages.
- `src/layouts/` — Shared metadata, navigation, and footer.
- `src/styles/` — Site-wide style system.
- `public/media/` — Locally hosted screenshots and animation assets.
- `scripts/check-preview.mjs` — Verifies routes, subpath assets and approved external destinations.

## Public-link policy

Link to source repositories only when GitHub confirms they are public. Never expose private repositories or private employer work. Public itch.io play/download pages may be linked without sharing source code.

## Before launch

Complete approved CV and background details, optimize large animations, verify mobile presentation and accessibility, and merge an approved release to `main`.
