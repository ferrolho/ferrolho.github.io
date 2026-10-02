import { getCollection, type CollectionEntry } from 'astro:content';

export function projectYears(d: { date: Date; years?: string }) {
  return d.years ?? String(d.date.getFullYear());
}

export function formatStars(n: number) {
  return n >= 1000 ? `${(n / 1000).toFixed(1)}k` : String(n);
}

export function formatDate(d: Date, opts: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short', year: 'numeric' }) {
  return d.toLocaleDateString('en-GB', opts);
}

const visible = ({ data }: { data: { draft?: boolean } }) => import.meta.env.DEV || !data.draft;

/** Projects, newest first. Drafts only show up in `npm run dev`. */
export async function getProjects() {
  const all = await getCollection('projects', visible);
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getFeatured() {
  const all = await getProjects();
  return all
    .filter((p) => p.data.featured !== undefined)
    .sort((a, b) => (a.data.featured ?? 0) - (b.data.featured ?? 0));
}

export async function getPosts() {
  const all = await getCollection('blog', visible);
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getPublications() {
  const all = await getCollection('publications');
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export type Project = CollectionEntry<'projects'>;
