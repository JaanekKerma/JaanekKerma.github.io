import { defineConfig } from 'astro/config';

const isPreviewBuild = process.env.ASTRO_PREVIEW === 'true';

export default defineConfig({
  site: 'https://jaanekkerma.github.io',
  base: isPreviewBuild ? '/preview/' : '/',
  output: 'static',
});
