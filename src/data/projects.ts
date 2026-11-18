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
  coverImage?: string;
  coverAlt?: string;
  teamSize?: number;
  wixOriginal?: {
    subtitle?: string;
    idea?: string;
    concept?: string;
    myRole?: string;
    sourcePage?: string;
  };
  gallery?: { title: string; description: string; url: string; alt: string; }[];
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
    coverImage: "media/site-zero/cover.png",
    coverAlt: "Site Zero original Wix portfolio cover artwork",
    teamSize: 9,
    wixOriginal: {
      "subtitle": "FPS - University - 9 weeks",
      "idea": "Site Zero is about sharp decisions, faster reflexes, and learning how to outthink your opponent while the bullets are flying.\n\nInstead of pre-set loadouts, players start each round with only a basic pistol with bonuses for farming drones. To gain the upper hand, the players need to take down AI-controlled drones and reach the central lootbox to gather Batteries. These are used to unlock and upgrade new weapons in real time, forcing quick thinking and adaptability throughout each match.",
      "concept": "Site Zero is a competitive 1v1 first-person arena looter shooter where fast movement, smart decisions, and precise aim decide the winner. Matches take place inside a partially-built industrial site, filled with vertical spaces, tight corridors, and open arenas. It’s a place built for creative movement, smart positioning, and calculated risk-taking. ",
      "myRole": "Programmer",
      "sourcePage": "https://jaanekkerma.wixsite.com/portfolio/my-projects/unreal-shooter"
    },
    gallery: [
      {
        "title": "Gameplay",
        "description": "Each round resets the playing field. There’s no long-term power gain between matches, which means every fight is decided by how well you adapt in the moment. The game loop balances PvP and PvE, with players choosing whether to hunt safer drones on the outskirts or dive into riskier central fights for bigger rewards.",
        "url": "media/site-zero/gameplay.gif",
        "alt": "Gameplay"
      },
      {
        "title": "Site Zero Area",
        "description": "Matches take place inside a partially-built industrial site, filled with vertical spaces, tight corridors, and open arenas. It’s a place built for creative movement, smart positioning, and calculated risk-taking. ",
        "url": "media/site-zero/arena.avif",
        "alt": "Site Zero Area"
      }
    ],

    title: 'Site Zero',
    category: 'game',
    visual: 'arena',
    eyebrow: 'Unreal · FPS · University project',
    timeframe: '9-week university project',
    role: 'Programmer · Nine-person team',
    stack: ['Unreal Engine', 'First-person gameplay', 'Multiplayer concept'],
    summary: "Site Zero is a competitive 1v1 first-person arena looter shooter where fast movement, smart decisions, and precise aim decide the winner. Set in a gritty dystopian future, enhanced operatives fight in high-stakes duels over unstable Electrum energy, inside an abandoned construction site.",
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
    coverImage: "media/takstrid/cover.gif",
    coverAlt: "Takstrid original Wix portfolio cover artwork",
    teamSize: 2,
    wixOriginal: {
      "subtitle": "Action/Horror - University -   10 weeks",
      "idea": "The player finds themselves on a rooftop during a stormy night with no idea how they got there. A brief voiceover explains that a monster is chasing them, but then everything is told through sound. The goal is to survive each round, where the danger increases with each round - the fence around the edges of the roof disappears until there is nothing left to prevent the player from falling to their death. The monster is an unidentified, terrifying creature that moves erratically, but always reveals itself through sound.",
      "concept": "The game takes place on a large roof where the player navigates only through sound. The player can perform two actions: move in different directions and shoot. By listening to the strength of the wind, the monster's breathing, footsteps and roars, as well as background sounds (highway, forest, waterfall), the player orients himself in the world. The game has no graphics, everything is represented through sound.",
      "myRole": "Developer. Responsibility here was not strictly defined between me and Elin (the other delevoper) and thus both of us were responsible for all. But the initial idea for this game was mine.",
      "sourcePage": "https://jaanekkerma.wixsite.com/portfolio/my-projects/takstrid"
    },
    gallery: [],

    title: 'Takstrid',
    category: 'game',
    visual: 'takstrid',
    eyebrow: 'Audio-first · Action / horror · University project',
    timeframe: '10-week university project',
    role: 'Co-developer · Original concept · Two-person team',
    stack: ['Unreal Engine', 'C++', 'Spatial audio', 'Accessibility'],
    summary: "Takstrid is a sound-driven action-horror adventure created primarily for blind players. Navigate a dangerous rooftop, follow the sound of the wind and the monster, avoid hazards and defeat the enemy - a completely new experience where your ears are your main weapon and where horror is created through sound.",
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
      'I originated the concept and shared development responsibilities with one other developer.',
      'The original Wix portfolio includes this project; gameplay media and detailed team credits are pending migration.',
    ],
    links: [
      { label: 'Original Wix project page', href: 'https://jaanekkerma.wixsite.com/portfolio/my-projects/takstrid', primary: true },
    ],
    featured: true,
  },
  {
    slug: 'grim-farmlore',
    coverImage: "media/grim-farmlore/cover.png",
    coverAlt: "Grim Farmlore original Wix portfolio cover artwork",
    teamSize: 3,
    wixOriginal: {
      "subtitle": "RPG - University - 5 weeks",
      "idea": "Grim Farmlore was created to blend classic farming simulation with dark fantasy RPG elements. The goal was to create a mobile experience where players manage a farm while uncovering a mysterious narrative, making meaningful choices, and surviving in a cursed, story-rich world.",
      "concept": "Grim Farmlore is a mobile RPG and farming simulator set in a dark fantasy world where players manage a cursed farm while uncovering ancient secrets and battling enemies. The game blends narrative-driven exploration, strategic farming, and branching dialogues.",
      "myRole": "I was solely responsible for designing and implementing several core systems in the game, including the main menu, dialogue system, and interactable objects. My work covered both programming and integration of visual/audio effects, along with writing the story used in in-game dialogues and managing scene structure.",
      "sourcePage": "https://jaanekkerma.wixsite.com/portfolio/my-projects/grim-farmlore"
    },
    gallery: [
      {
        "title": "Main Menu Implementation",
        "description": "This animated main menu was fully designed and programmed by me. I handled everything from layout and button functionality to visual transitions, sound effects, and localization integration, ensuring a smooth and responsive user experience that fits the game’s dark fantasy atmosphere.",
        "url": "media/grim-farmlore/main-menu.gif",
        "alt": "Main Menu Implementation"
      },
      {
        "title": "Settings Panel Development",
        "description": "I designed and programmed the game’s settings panel, including audio sliders, graphics quality control, and language selection with localization support. The system was built in Unity using custom scripts to ensure all settings persist and apply correctly across sessions, enhancing user accessibility and gameplay experience.",
        "url": "media/grim-farmlore/settings.png",
        "alt": "Settings Panel Development"
      },
      {
        "title": "Dialogue System with Ink Integration",
        "description": "I implemented a branching dialogue system using the Ink narrative scripting language and integrated it into Unity. This system supports dynamic conversations, player choices, and real-time updates to the game state, enabling immersive storytelling and flexible narrative design.",
        "url": "media/grim-farmlore/dialogue.png",
        "alt": "Dialogue System with Ink Integration"
      },
      {
        "title": "Randomized Spawning System",
        "description": "I developed a flexible spawning system in Unity that dynamically populates areas with randomized enemies and objects. The system accounts for spawn bounds, movement parameters, combat stats, and spawn frequency—allowing for varied encounters and procedural gameplay without manual placement.",
        "url": "media/grim-farmlore/spawning.png",
        "alt": "Randomized Spawning System"
      }
    ],

    title: 'Grim Farmlore',
    category: 'game',
    visual: 'farmlore',
    eyebrow: 'Dark fantasy · Farming RPG · University project',
    timeframe: '5-week university project',
    role: 'Gameplay, UI & dialogue programming · Three-person team',
    stack: ['Unity', 'C#', 'Ink', 'Android'],
    summary: "Grim Farmlore is a dark fantasy mobile game that combines RPG mechanics with farming simulation. Players cultivate a cursed farm, interact with NPCs, and explore a rich, story-driven world filled with mystery, combat, and choices that shape their journey.",
    lead:
      'Farming and storytelling meet a darker world of mysteries, encounters and character interactions.',
    context:
      'Grim Farmlore is a pixel-art RPG and farming simulation developed as an academic Android project by a three-person team. Its world connects farm management, village characters, dark-forest exploration, enemies and story-driven interactions.',
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
    coverImage: "media/tic-tac-toe/cover.gif",
    coverAlt: "Tic Tac Toe original Wix portfolio cover artwork",
    teamSize: 1,
    wixOriginal: {
      "subtitle": "Puzzle - University - 2 Weeks",
      "idea": "The goal was to reimagine the classic Tic-Tac-Toe game with a fun, thematic twist. I chose a playful Space Party theme to add personality and visual interest, while still focusing on clean mechanics and mobile-friendly interaction. The idea was to make a simple game feel dynamic and polished through animation, sound, and cohesive design.",
      "concept": "As part of a university assignment, I developed a mobile-friendly Tic-Tac-Toe game with a cohesive Space theme. The goal was to create an engaging user experience using consistent visuals and smooth animations, bringing a playful twist to a classic game through stylized graphics and animated UI transitions.",
      "myRole": "I was solely responsible for the entire project, handling everything from concept to completion. I designed and developed the game using Unity for implementation and Photoshop for creating all visual assets.",
      "sourcePage": "https://jaanekkerma.wixsite.com/portfolio/my-projects/tic-tac-toe"
    },
    gallery: [
      {
        "title": "UI Animation & Game Logic Integration in Unity",
        "description": "This screenshot showcases my implementation of animated UI transitions using Unity’s Animator and Timeline systems. I programmed custom game state logic to control panel visibility (e.g., Game Over, Restart, Choose a Side) and tied animations to these transitions via code. I structured the UI hierarchy and animations programmatically to ensure smooth, responsive user feedback throughout gameplay.",
        "url": "media/tic-tac-toe/ui-animation.jpg",
        "alt": "UI Animation & Game Logic Integration in Unity"
      },
      {
        "title": "Main Menu Screen – UI Setup & Player Selection",
        "description": "This image shows the main menu screen where players select their side. I implemented the UI logic and transitions using Unity’s Animator system, and scripted the interaction to connect player choice with game state initialization. The visual layout and functionality were fully designed and programmed by me to support a cohesive user experience within the space-themed interface.",
        "url": "media/tic-tac-toe/main-menu.png",
        "alt": "Main Menu Screen – UI Setup & Player Selection"
      }
    ],

    title: 'Tic Tac Toe',
    category: 'game',
    visual: 'tictactoe',
    eyebrow: 'Unity · Mobile UI · University project',
    timeframe: '2-week university project',
    role: 'Solo developer · Concept to completion',
    stack: ['Unity', 'C#', 'Photoshop'],
    summary: "A mobile-optimized Tic-Tac-Toe game created as a university assignment, featuring a cohesive Space theme and playful animated UI. \n\nI designed and developed the entire project solo, using Unity for gameplay mechanics and interface logic, and Photoshop for all custom visual assets.",
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
