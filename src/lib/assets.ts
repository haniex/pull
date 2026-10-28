/** Prefix public-folder paths with Vite base (e.g. /pull/) */
export function publicUrl(path: string): string {
  const base = import.meta.env.BASE_URL || '/';
  const clean = path.replace(/^\//, '');
  return `${base}${clean}`;
}
