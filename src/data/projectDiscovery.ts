export type ProjectCollection = 'game-jam' | 'university';

export interface ProjectDiscoveryMeta {
  collection: ProjectCollection;
  tags: string[];
}

/**
 * Discovery categories and tags for public portfolio projects.
 * Keep in sync with the actual project descriptions; do not infer tags.
 */
export const projectDiscovery: Record<string, ProjectDiscoveryMeta> = {
  'fortunes-gate': {
    collection: 'game-jam',
    tags: ['Game Jam', 'Solo', 'Unity', 'C#', '3D', 'Strategy', 'Math', 'First Person', 'WebGL'],
  },
  'site-zero': {
    collection: 'university',
    tags: ['University', 'Team', 'Unreal', 'FPS', 'First Person', 'Shooter', '3D', 'PvP', 'Multiplayer'],
  },
  'takstrid': {
    collection: 'university',
    tags: ['University', 'Team', 'Unreal', 'C++', 'Horror', 'Audio', 'Accessibility'],
  },
  'grim-farmlore': {
    collection: 'university',
    tags: ['University', 'Team', 'Unity', 'C#', 'RPG', '2D', 'UI', 'Dialogue', 'Android', 'Farming'],
  },
  'tic-tac-toe': {
    collection: 'university',
    tags: ['University', 'Solo', 'Unity', '2D', 'UI', 'Puzzle', 'Mobile'],
  },
  'ninja-frog-saga': {
    collection: 'university',
    tags: ['University', 'Solo', 'Unity', '2D', 'Platformer', 'HTML5'],
  },
};

export const projectCollections = [
  {
    id: 'game-jam' as const,
    label: 'Game Jam',
    description: 'Time-boxed experiments focused on new mechanics, fast iteration and playable systems.',
  },
  {
    id: 'university' as const,
    label: 'University',
    description: 'Solo coursework and team-developed game projects from my game development studies.',
  },
];
