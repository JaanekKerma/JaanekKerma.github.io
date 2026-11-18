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

A GitHub Actions workflow checks that `develop` builds. The deployment workflow is configured to publish **only from `main`**, once GitHub Pages is enabled under **Settings → Pages → Build and deployment → Source: GitHub Actions** and we deliberately merge the approved site.

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
