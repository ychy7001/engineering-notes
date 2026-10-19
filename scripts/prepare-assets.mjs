import { mkdir, readdir, copyFile } from 'node:fs/promises';
const posts = await readdir(new URL('../articles/', import.meta.url), { withFileTypes: true });
for (const post of posts.filter(p => p.isDirectory())) {
  const source = new URL(`../articles/${post.name}/`, import.meta.url);
  const target = new URL(`../public/articles/${post.name}/`, import.meta.url);
  await mkdir(target, { recursive: true });
  for (const file of await readdir(source)) {
    if (/\.(csv|png|jpg|jpeg|svg|webp|pdf)$/i.test(file)) await copyFile(new URL(file, source), new URL(file, target));
  }
}
