# Design direction C — Hybrid Engineering Studio / Iteration 01

**Branch:** develop only. **Publication:** not approved. **Date:** 2026-11-18.

## Purpose

Create a functional first visual iteration in Astro rather than a static mockup. Preserve the distinction between verified project facts and later editorial improvements. The site should work for both game-programming recruiters and broader software teams.

## Visual system

- Graphite/navy base and near-white editorial typography.
- Fresh pale-green accent used sparingly for interactions and important labels.
- Monospaced micro-labels, fine grid lines, numbered case studies.
- Code-and-engineering-inspired visual studies rendered directly as SVG/CSS; these are *illustrative diagrams*, **not** actual screenshots.
- Bright contact strip at the bottom for visual rhythm.
- Reduced-motion support and no auto-playing media.

## Implemented routes

- \`/\`: hero, latest flagship feature, 3 project cards, expertise, about, contact.
- \`/projects/\`: project index with progressive-enhancement category filtering.
- \`/projects/fortunes-gate/\`: full case-study iteration, supported by the itch.io release and GitHub.
- \`/projects/site-zero/\`, \`/projects/tic-tac-toe/\`: concise evidence-based pages using the same reusable template.

## Component/data approach

- \`src/data/projects.ts\`: typed project content and canonical links.
- \`src/components/ProjectVisual.astro\`: reusable inline illustrative vector artwork.
- \`src/components/ProjectCard.astro\`: responsive card template.
- \`src/layouts/SiteLayout.astro\`: page metadata and unified navigation/footer.
- \`src/pages/projects/[slug].astro\`: statically generated project detail routes.
- \`src/styles/global.css\`: tokens, typography, responsive layouts and focus states.

## Accuracy policy

- Fortune's Gate facts and mechanics: https://ruscemp.itch.io/fortunes-gate.
- Site Zero and Tic Tac Toe: existing Wix project/feature descriptions, no unverified personal technical credits.
- Site remains a **design iteration**, with explicit labels that visual studies are not screenshots.
- Avoid claiming the Stockholm University degree was formally awarded until verified.
- Exclude employer/client work from public project pages unless authorized.
- No public CV file has been added; no fabricated testimonials, metrics, images, or professional endorsements.

## Review questions for the next iteration

1. Keep this dark technical style, or make it brighter/more colorful?
2. Replace visual studies with the best available genuine project screenshots.
3. Decide final featured project order and how prominently software projects appear.
4. Approve detailed individual role descriptions, actual implementation challenges and results.
5. Add an approved CV file and optionally multilingual support.
6. Test a real published preview prior to replacing Wix.

## Validation

GitHub Actions builds the static Astro site for pushes to \`develop\`.
Only \`main\` has a deployment workflow. Merge/publish only after explicit approval.


## Iteration 02 — contrast and visual balance

Review feedback: the overall direction is good, but the nearly-black palette feels slightly too dark.
Changes: lift background surfaces into dark slate-blue, improve secondary-text contrast, and strengthen card and section separation. Keep the pale-green accent, typographic system, page architecture, and project artworks unchanged. This is a conservative refinement, not a new design direction.

Next: replace illustrative visuals with actual approved project media and continue factual case-study enrichment. Keep private employer/client projects excluded.

## Wix portfolio project migration — 2026-11-18

- Portfolio gallery: four legacy entries — Site Zero, Takstrid, Grim Farmlore, and Tic Tac Toe.
- Newer addition: Fortune's Gate. Five total projects and Astro case-study pages.
- Each page uses the same typed project-data template and has a distinct representative visual.
- Takstrid is an audio-first Unreal/C++ student project; user contributions involve sound.
- Grim Farmlore is a Unity/C#/Ink dark-fantasy mobile RPG from a five-person student team; the user contributed menu, dialogue, interactions, scene/gameplay systems, enemy spawning, and bug fixing.
- The two new visuals are abstract/illustrative, **not** original gameplay screenshots.
- Migrating original Wix screenshots and any additional detailed copy remains to be done; do not represent the current version as a complete asset transfer.
- Employer work remains excluded.

## Authenticated Wix content and media import

- The Wix connector exposed all four original `MyProjects` records and their gallery and hero images.
- All twelve media files are now stored locally in `public/media/` and displayed on the site.
- Original `concept`, `idea`, `myRole`, team size and individual gallery captions are preserved on project pages.
- Remaining polish: video transcode for Site Zero's ~25MB animated GIF, layout quality control, licensing/attribution review of decorative media.
