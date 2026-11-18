# Portfolio visual directions — initial concepts

These are alternative directions for the redesigned portfolio, not final mockups. Each would be responsive, accessible, and built using Astro with little default client-side JavaScript.

## A — Technical Minimalist

- **Look:** light/off-white or neutral graphite, spacious grid, crisp type, disciplined color accents.
- **Hero:** name, profession, one-sentence value proposition, concise links.
- **Projects:** structured cards with category, role, stack, key result, and image.
- **Strengths:** recruiter-friendly, credible for game engineering and general software roles, fast and maintainable.
- **Risk:** less visually memorable without high-quality screenshots and tasteful personality.

## B — Game Systems / Cinematic

- **Look:** dark graphite/navy, cinematic project photography, restrained glow, fine technical lines.
- **Hero:** full-bleed or large image from a selected game, plus minimal intro and CTA.
- **Projects:** large alternating case-study panels; subtle transitions; project visuals take priority.
- **Strengths:** memorable for game studios, rich media presentation.
- **Risk:** can overemphasize games and feel heavy for general IT recruiting.

## C — Hybrid Engineering Studio (recommended starting point)

- **Look:** dark neutral base, off-white typography, one accent color, large screenshots bounded by clean modular cards.
- **Hero:** immediate identity and key technologies; one flagship game + one software-system card.
- **Projects:** separate Games and Software filters, with a consistent technical case-study template.
- **Details:** architecture illustrations, challenging problem/solution notes, annotated screenshots, short demos; optional interactive micro-details.
- **Strengths:** balances credible engineering with game-development identity and visual interest.
- **Risk:** requires care to avoid competing visual styles between game media and software diagrams.

## Shared requirements

- Mobile first, legible and fast-loading.
- Keyboard accessibility, color contrast, reduced-motion support.
- Avoid empty visual gimmicks, autoplay, artificial progress meters, unverified statistics.
- Use project assets already owned and explicitly permitted for portfolio use.
- Add a selected project via data, without duplicating page templates.
- Static Astro build and GitHub Pages deployment.

## Decision record

- **Decision:** Pending user review.
- **Recommendation:** C as the baseline, optionally with A's restrained navigation and typography.
- **Next output after decision:** Detailed homepage wireframe and first implemented design iteration.
