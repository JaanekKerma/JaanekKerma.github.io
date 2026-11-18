# Portfolio migration audit — 2026-11-18

**Status:** Working inventory, not final approved portfolio copy.  
**Existing site:** https://jaanekkerma.wixsite.com/portfolio  
**New repository:** https://github.com/JaanekKerma/JaanekKerma.github.io  
**Development branch:** `develop`

## 1. Objectives

Replace the Wix portfolio with a fast, accessible, maintainable Astro website hosted on GitHub Pages. Showcase both game programming and general software development; make the user's role, technical decisions, and evidence of completed work obvious to recruiters. Do not deploy unfinished work from `develop`.

## 2. Verified Wix homepage inventory

Source: the existing Wix homepage as rendered in an authenticated browser tab on 2026-11-18.

- Header/branding: Jaanek Kerma; 'Video Game Developer' and 'Programmer'.
- Main navigation: Home, My Projects, and anchored About/Experience/Education/Hobbies links.
- Featured project: **Site Zero**, described as a 1v1 first-person arena shooter, university project, nine weeks; [project page](https://jaanekkerma.wixsite.com/portfolio/my-projects/unreal-shooter).
- Featured project: **Tic Tac Toe**, described as a solo university Unity project, two weeks, mobile-friendly with space-themed UI; [project page](https://jaanekkerma.wixsite.com/portfolio/my-projects/tic-tac-toe).
- [All projects landing page](https://jaanekkerma.wixsite.com/portfolio/my-projects).
- Skills shown: primary C#; secondary Java and C++; Unity and Unreal Engine 5.
- Public contact channels: GitHub (Ruscemp), LinkedIn, and email. Instagram is also linked.
- About copy: game-development studies at Stockholm University, earlier C# programming experience, and growing interest in LLMs/AI.
- Wix branding/banner is currently visible.

### Previously identified portfolio projects needing full-page verification

Earlier exploration identified **Takstrid** and **Grim Farmlore** as additional projects. Their detailed descriptions, roles, tech stacks, and asset rights **have not been reconfirmed during this audit**. Do not publish invented technical details.

### Known content updates / accuracy flags

- The Wix About section says university studies began in **2023**. Confirm dates against up-to-date records before publishing.
- The degree/examination is still in progress in the most recent discussion. Do not describe a degree as formally awarded until confirmed.
- Previous industry C# experience is mentioned but role title, dates, nature of work, and permitted public description should be checked before drafting specifics.
- Prefer direct GitHub/LinkedIn/email links and a downloadable approved CV.
- Avoid publishing source or imagery from private, proprietary, group, or employer work without confirming publication rights.

## 3. Candidate additions from GitHub

Repository contents were checked, but inclusion is **not yet approved**.

| Candidate | Source | Evidence/next step | Suggested role |
| --- | --- | --- | --- |
| Fortune's Gate | [UnityGameJam2026](https://github.com/Ruscemp/UnityGameJam2026) | Unity project structure, docs, and assets exist; confirm final itch.io URL and screenshots | Likely flagship game-programming case study |
| WPF settings app | [WPF_Settings_App](https://github.com/Ruscemp/WPF_Settings_App) | C# WPF repository with README and application solution; confirm whether public presentation is appropriate | General software-engineering candidate |
| Timetable app | [TimeTableV2](https://github.com/Ruscemp/TimeTableV2) | Java project structure exists; inspect actual features and project maturity | Supporting software project if strong enough |
| Incremental game | [IncrementalGame](https://github.com/Ruscemp/IncrementalGame) | Unity project structure exists; evaluate completeness | Optional game project |
| Roguelike | [Roguelike-game](https://github.com/Ruscemp/Roguelike-game) | C# source files exist; assess readiness and architecture | Optional programming exercise |
| Unreal graphics | [Unreal3DRendering](https://github.com/Ruscemp/Unreal3DRendering) | Unreal project directory exists; assess work and permissions | Optional technical showcase |

We should curate roughly **3–5 strong case studies** for the homepage, with a broader archive behind them. Do not automatically showcase every repository.

## 4. Content model for each project

Fields:

- `title`, `slug`, `shortDescription`, `category`, `status`
- `period`, `duration`, `role`, `teamSize`
- `tools`, `languages`, `engine`
- `responsibilities` and `technicalHighlights` (specific, evidence-backed)
- `challenges`, `solutions`, `results`, `lessons`
- `heroImage`, `screenshots`, `video`
- `repositoryUrl`, `playUrl`, `downloadUrl`
- `featured`, `displayOrder`

All fields can be optional where data is unavailable. Astro content collections are the preferred implementation.

## 5. Prioritized sitemap

1. **Home:** introduction, featured projects, technical capabilities, CV/contact CTA.
2. **Projects:** filterable gallery by Games / Software / Experiments.
3. **Project detail:** role, context, architecture, implementation, outcome, media, relevant links.
4. **About:** concise education and experience timeline, not a generic biography.
5. **CV / Contact:** approved resume, GitHub, LinkedIn, email. Avoid unnecessary forms/backend.

## 6. Recommended improvements

1. Lead with the type of work sought: *gameplay / systems programmer, open to general software development and testing*.
2. Prioritize technical proof over genre descriptions or aspirational adjectives.
3. Keep homepage light; no giant auto-playing videos.
4. Use authentic project media, captions, and proper credits.
5. Provide strong accessibility: semantic HTML, keyboard navigation, contrast, reduced motion, meaningful image alt text.
6. Make the site easy to maintain with a single reusable project template and typed project data.
7. Add social preview metadata, SEO descriptions, sitemap, and favicon.
8. Review desktop and mobile layouts and link health before release.

## 7. Migration checklist

- [x] Create new organization/repository.
- [x] Initialize Astro on `develop`; protect `main` from unfinished publication.
- [x] Verify Wix homepage and gather headline/featured-project information.
- [x] Inventory likely GitHub additions.
- [ ] Review all Wix subpages and extract authoritative project details and eligible imagery.
- [ ] Confirm current CV, education wording, and professional experience details.
- [ ] Decide which projects to feature or archive.
- [ ] Approve one design direction; implement reusable components.
- [ ] Build and populate case studies; check media rights.
- [ ] Validate production build, link integrity, accessibility, performance, and mobile navigation.
- [ ] Publish approved site using GitHub Pages.

## 8. Immediate next step

Review [design-directions.md](./design-directions.md), choose the preferred aesthetic, and build its homepage and project page as a first design iteration on `develop`. Retain the existing Wix portfolio until publication.
