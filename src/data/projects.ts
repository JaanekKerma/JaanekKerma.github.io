export type ProjectVisual = 'fortune' | 'arena' | 'tictactoe' | 'desktop';
export type ProjectCategory = 'game' | 'software';

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  visual: ProjectVisual;
  eyebrow: string;
  timeframe: string;
  role: string;
  stack: string[];
  summary: string;
  lead: string;
  context: string;
  challenge: string;
  systems: { title: string; description: string }[];
  notes: string[];
  links: { label: string; href: string; primary?: boolean }[];
  featured?: boolean;
  detailed?: boolean;
}

export const projects: Project[] = [
  {
    slug: 'fortunes-gate',
    title: "Fortune's Gate",
    category: 'game',
    visual: 'fortune',
    eyebrow: '3D strategy · Game jam · 2026',
    timeframe: 'Official Unity Game Jam 2026',
    role: 'Solo developer, AI-assisted workflow',
    stack: ['Unity', 'C#', 'Blender', 'WebGL'],
    summary:
      'A three-dimensional strategy game where arithmetic gates turn approaching enemies into your chosen lucky number.',
    lead:
      'A tower-defense problem with a mathematical twist: instead of destroying incoming enemies, you transform their values.',
    context:
      "Created as a solo entry for the Official Unity Game Jam 2026. The game is playable in the browser and available for Windows. Its core idea is simple: choose a Lucky Number, then build arithmetic gates that make incoming values match it before they reach the Nexus.",
    challenge:
      'Keep a three-dimensional network of enemy routes understandable while giving the player meaningful decisions about gate placement, numerical transformations, and limited resources.',
    systems: [
      {
        title: 'Arithmetic as the combat system',
        description:
          'Four placeable gate operators (+1, −1, ×2, ÷2) can be chained. Matching a target value locks that enemy against further arithmetic changes.',
      },
      {
        title: 'Three-dimensional route planning',
        description:
          'Enemies travel along branching and merging paths through a navigable 3D space. Players position gates after studying the paths ahead.',
      },
      {
        title: 'Forecasting and progression',
        description:
          'Incoming wave forecasts, resource management, and thirteen Lucky Number difficulties create a strategy problem that changes between runs.',
      },
    ],
    notes: [
      'Includes continuous and tactical gameplay flows.',
      'Supports keyboard and mouse, keyboard-only, and gamepad controls.',
      'English and Russian interfaces, with a built-in Almanac.',
      'Creative direction and final decisions were made by the developer with generative-AI assistance across parts of production.',
    ],
    links: [
      { label: 'Play on itch.io', href: 'https://ruscemp.itch.io/fortunes-gate', primary: true },
      { label: 'Source repository', href: 'https://github.com/Ruscemp/UnityGameJam2026' },
    ],
    featured: true,
    detailed: true,
  },
  {
    slug: 'site-zero',
    title: 'Site Zero',
    category: 'game',
    visual: 'arena',
    eyebrow: 'Unreal · FPS · University project',
    timeframe: '9-week university project',
    role: 'University team project',
    stack: ['Unreal Engine', 'First-person gameplay', 'Multiplayer concept'],
    summary:
      'A competitive 1v1 first-person arena looter-shooter set in a dystopian construction site.',
    lead:
      'A fast-paced arena shooter built around movement, aim, and split-second resource decisions.',
    context:
      'Site Zero pits two enhanced operatives against one another over unstable Electrum energy in an abandoned construction site. It was developed as a nine-week university project.',
    challenge:
      'The existing portfolio describes a combination of movement, high-stakes combat, and looting. The exact individual programming contributions will be documented in the next content pass.',
    systems: [
      { title: 'Competitive arena design', description: 'The documented concept centers on a direct 1v1 confrontation.' },
      { title: 'Movement and decisions', description: 'Fast movement, precision, and risk-taking are central to the stated gameplay experience.' },
    ],
    notes: ['Technical implementation details and individual team responsibilities still need verification before final publication.'],
    links: [
      { label: 'Original project page', href: 'https://jaanekkerma.wixsite.com/portfolio/my-projects/unreal-shooter', primary: true },
    ],
    featured: true,
  },
  {
    slug: 'tic-tac-toe',
    title: 'Tic Tac Toe',
    category: 'game',
    visual: 'tictactoe',
    eyebrow: 'Unity · Mobile UI · University project',
    timeframe: '2-week university project',
    role: 'Solo developer',
    stack: ['Unity', 'C#', 'Photoshop'],
    summary:
      'A space-themed, mobile-optimized take on a classic game, with custom visual assets and animated UI.',
    lead:
      'A small project focused on the details that make a familiar interaction feel cohesive.',
    context:
      'Built solo as a two-week university assignment. The existing portfolio documents Unity gameplay and interface logic, with original space-themed artwork produced in Photoshop.',
    challenge:
      'Turn a familiar three-by-three board game into a mobile-friendly experience with a consistent visual identity.',
    systems: [
      { title: 'Gameplay implementation', description: 'Game flow and interface logic were built in Unity.' },
      { title: 'Visual system', description: 'A cohesive space theme and animated UI were created with custom Photoshop assets.' },
    ],
    notes: ['The original Wix page has further visual material that can be migrated after asset review.'],
    links: [
      { label: 'Original project page', href: 'https://jaanekkerma.wixsite.com/portfolio/my-projects/tic-tac-toe', primary: true },
    ],
    featured: true,
  },
  {
    slug: 'wpf-settings',
    title: 'WPF Settings App',
    category: 'software',
    visual: 'desktop',
    eyebrow: 'Desktop software · C#',
    timeframe: 'Independent software project',
    role: 'C# / WPF application',
    stack: ['C#', 'WPF', 'INI files'],
    summary:
      'A desktop application for reading and writing configuration data in INI files.',
    lead:
      'A practical software project about making configuration easier to inspect and edit.',
    context:
      'This repository contains a C# WPF desktop application for reading and writing INI configuration files. Its README currently provides a short feature description.',
    challenge:
      'Expose configuration files through a desktop interface rather than requiring direct manual editing.',
    systems: [
      { title: 'Desktop application', description: 'The project uses Windows Presentation Foundation (WPF) with C#.' },
      { title: 'Configuration persistence', description: 'The repository describes reading and writing INI files.' },
    ],
    notes: ['A deeper technical account and screenshots should be added only after reviewing the current implementation.'],
    links: [
      { label: 'View GitHub repository', href: 'https://github.com/Ruscemp/WPF_Settings_App', primary: true },
    ],
    featured: true,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
export const projectBySlug = (slug: string) => projects.find((project) => project.slug === slug);
