export const SITE_TITLE = 'anbora';
export const SITE_DESCRIPTION = 'Notes on software, systems, and whatever else I am tinkering with.';
export const AUTHOR = 'Anders Bo Rasmussen';
export const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/anras573' },
] as const;

/** Prefix an internal path with the configured base (`/blog/`). */
export function url(path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.replace(/^\//, '');
  return `${base}/${clean}`;
}
