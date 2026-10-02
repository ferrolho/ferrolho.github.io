import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPosts, getProjects } from '../lib/format';
import { site } from '../data/site';

export async function GET(context: APIContext) {
  const posts = await getPosts();
  const projects = await getProjects();
  return rss({
    title: site.name,
    description: site.description,
    site: context.site!,
    items: [
      ...posts.map((p) => ({ title: p.data.title, pubDate: p.data.date, description: p.data.description, link: `/blog/${p.id}/` })),
      ...projects.map((p) => ({ title: `Project: ${p.data.title}`, pubDate: p.data.date, description: p.data.summary, link: `/projects/${p.id}/` })),
    ].sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf()),
  });
}
