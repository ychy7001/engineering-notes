import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { unified } from '@astrojs/markdown-remark';
export default defineConfig({
  site: 'https://blog.ails.ltd',
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap()],
  markdown: { processor: unified({ remarkPlugins: [() => tree => { if (tree.children[0]?.type === 'heading' && tree.children[0].depth === 1) tree.children.shift(); }] }), shikiConfig: { theme: 'github-light' } },
});
