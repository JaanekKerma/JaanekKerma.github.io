export type ProjectVisual = 'fortune' | 'arena' | 'takstrid' | 'farmlore' | 'tictactoe';
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
    slug: 'takstrid',
    title: 'Takstrid',
    category: 'game',
    visual: 'takstrid',
    eyebrow: 'Audio-first · Action / horror · University project',
    timeframe: 'University game project',
    role: 'Audio implementation · Team project',
    stack: ['Unreal Engine', 'C++', 'Spatial audio', 'Accessibility'],
    summary:
      'An audio-only action-horror experience designed to be navigable and playable without sight.',
    lead:
      'When visuals cannot carry information, sound needs to become the interface, the feedback, and the world itself.',
    context:
      'Takstrid is a university game project built in Unreal Engine with C++. It was designed for players who cannot rely on visual cues, including blind players: orientation, threats, and interaction are communicated through sound instead of conventional graphics.',
    challenge:
      'Help players navigate and understand their surroundings without visual indicators, while preserving tension, precision, and a fair sense of agency.',
    systems: [
      {
        title: 'Audio as navigation',
        description:
          'Directional ambient landmarks such as a road, forest and waterfall, together with changes in wind, help communicate orientation and environmental boundaries.',
      },
      {
        title: 'Enemy presence and danger',
        description:
          'Breathing, footsteps, roars and a heartbeat convey the monster’s direction, distance or proximity, building suspense through the soundscape.',
      },
      {
        title: 'Action without a visual HUD',
        description:
          'Movement, obstacles and weapon use depend on audible feedback, allowing the player to make choices from the information the game provides through sound.',
      },
    ],
    notes: [
      'The experience was conceived without reliance on graphics, rather than as a conventional visually driven game with optional audio.',
      'My work involved sound implementation within the Unreal/C++ project.',
      'The original Wix portfolio includes this project; gameplay media and detailed team credits are pending migration.',
    ],
    links: [
      { label: 'Original Wix project page', href: 'https://jaanekkerma.wixsite.com/portfolio/my-projects/takstrid', primary: true },
    ],
    featured: true,
  },
  {
    slug: 'grim-farmlore',
    title: 'Grim Farmlore',
    category: 'game',
    visual: 'farmlore',
    eyebrow: 'Dark fantasy · Farming RPG · University project',
    timeframe: 'University team project',
    role: 'Gameplay, UI & dialogue programming · Five-person team',
    stack: ['Unity', 'C#', 'Ink', 'Android'],
    summary:
      'A dark-fantasy mobile farming RPG that combines village life, exploration, dialogue and monster encounters.',
    lead:
      'Farming and storytelling meet a darker world of mysteries, encounters and character interactions.',
    context:
      'Grim Farmlore is a pixel-art RPG and farming simulation developed as an academic Android project by a five-person team. Its world connects farm management, village characters, dark-forest exploration, enemies and story-driven interactions.',
    challenge:
      'Bring together a number of everyday gameplay interactions and narrative moments without losing coherence as the player moves among scenes and characters.',
    systems: [
      {
        title: 'Dialogue and narrative integration',
        description:
          'I integrated the Ink dialogue system with Unity and worked on dialogue/story content and interactions with NPCs.',
      },
      {
        title: 'Interactive game world',
        description:
          'I implemented and refined interactions involving doors, beds, character conversations, and visibility effects such as roof fading.',
      },
      {
        title: 'Scene and gameplay flow',
        description:
          'My contributions included scene layout and management, randomized enemy spawning, main-menu behavior and effects, audio integration, and bug fixing.',
      },
    ],
    notes: [
      'Created for Android using Unity and C#.',
      'My individual contributions are described separately from the overall team-developed game concept.',
      'Original project screenshots and media are not yet embedded in this Astro version.',
    ],
    links: [
      { label: 'Original Wix project gallery', href: 'https://jaanekkerma.wixsite.com/portfolio/my-projects', primary: true },
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

];

export const featuredProjects = projects.filter((project) => project.featured);
export const projectBySlug = (slug: string) => projects.find((project) => project.slug === slug);
