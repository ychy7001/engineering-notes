import type { MarkdownInstance } from 'astro';
export type PostMeta = { title: string; date: string; description: string; tags: string[] };
const modules = import.meta.glob<MarkdownInstance<PostMeta>>('../../articles/**/index.md', { eager: true });
export const posts = Object.entries(modules).map(([path, module]) => ({
  slug: path.split('/').at(-2)!, ...module.frontmatter, module,
})).sort((a, b) => b.date.localeCompare(a.date));
export const tags = [...new Set(posts.flatMap(post => post.tags))];
export const articleHref = (slug: string) => `/articles/${slug}/`;
