/**
 * Internal site URLs must respect Astro's configured base path.
 * Production: /projects/
 * Development preview: /preview/projects/
 */
export function sitePath(path = ''): string {
  const rawBase = import.meta.env.BASE_URL || '/';
  const base = rawBase.endsWith('/') ? rawBase : rawBase + '/';
  const cleanPath = path.replace(/^\/+/, '');
  return base + cleanPath;
}
