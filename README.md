# Jaanek Kerma — Portfolio

This is the source for **https://jaanekkerma.github.io**, a personal portfolio built with [Astro](https://astro.build/) and intended for hosting on GitHub Pages.

> **Status:** Initial Astro foundation. The complete design and content migration are still in progress. The existing Wix portfolio remains the source of published portfolio content until launch.

## Development

Use Node.js 24 or another version supported by the current Astro release.

```bash
npm install
npm run dev
npm run build
npm run preview
```

The site is static and does not require a backend.

## Branches

- `main`: Stable, publicly deployed site once launch is approved.
- `develop`: Integration branch for new portfolio work.
- `feature/*`: Optional branches for larger changes, reviewed and merged into `develop`.

The `develop` branch runs build checks and a preview deployment to **https://jaanekkerma.github.io/preview/**. The preview is intentionally marked `noindex`, has a development banner, and is distinct from the eventual production website. The root address displays a simple temporary landing page until the portfolio is approved.

For GitHub Pages preview deployment, set **Settings → Pages → Build and deployment → Source: GitHub Actions** once. If GitHub restricts deployment to protected branches, allow `develop` in the `github-pages` environment.

The separate production deployment workflow is configured to publish **only from `main`**, after we deliberately merge the approved site. The single GitHub Pages domain can only have one active deployment at a time; before production launch, we will combine root production and the `/preview/` build into a single Pages artifact to preserve both environments.

## Preview validation

```bash
ASTRO_PREVIEW=true npm run build
node scripts/check-preview.mjs
```

The link checker ensures that preview navigation, image paths, and generated routes stay under `/preview/`.

## Project layout

- `src/layouts/`: Shared page layout.
- `src/pages/`: Astro routes.
- `src/styles/`: Global design tokens and styles.
- `public/`: Static assets.

## Work remaining before launch

- Audit and migrate content from https://jaanekkerma.wixsite.com/portfolio.
- Choose and implement the final visual design.
- Add project entries, imagery, CV, and appropriate contact links.
- Perform accessibility, responsive, and SEO checks.
- Generate and commit `package-lock.json` for reproducible dependency installs; CI currently uses `npm install`.
- Verify GitHub Pages configuration, deploy, and test the public site.

The current homepage is only a temporary foundation, not the approved final portfolio.
