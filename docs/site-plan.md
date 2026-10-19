# 三渠道站点与发布方案

## 当前选择

- GitHub：公开仓库保存原创 Markdown、配图和脱敏实验数据。
- 个人站：[blog.ails.ltd](https://blog.ails.ltd/)，Astro 静态站点，由 GitHub Actions 构建、GitHub Pages 托管。
- 中文社区：优先博客园。作者尚未开通账号，按当前安排先完成个人站。

## 一份正文，自动构建

文章保存在 `articles/<slug>/index.md`，顶部包含标题、日期、摘要与标签。个人站直接读取这些 Markdown；没有第二份需要手工同步的正文。配图和公开 CSV 放在文章目录。

站点包含文章列表、正文目录、专题索引与关于页。向 main 推送后，Actions 执行 npm ci 和 npm run build，将 dist 部署到 Pages。部署记录见仓库 Actions。

本地运行：

```bash
npm ci
npm run dev
```

发布前可运行 `npm run build`，随后用 `npm run preview` 检查静态产物。

## 托管与域名

`blog.ails.ltd` 使用 CNAME 指向 `ychy7001.github.io`。GitHub Pages 承担静态访问，不消耗现有 API 中转服务器的套餐流量。现有服务器有能力托管静态文件；当前阶段无需增加常驻进程或数据库。

通过自定义域名固定文章地址，后续可根据实际读者访问体验迁移托管。API Tunnel 的测试结果不能直接用来判断静态博客的访问表现。部署机制参见 [GitHub Pages 官方文档](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)。

## 博客园接入

博客园官方博客公开的 [RSD 描述](https://www.cnblogs.com/cmt/rsd.xml)声明了 MetaWeblog 服务入口，证明平台有官方协议接入入口。具体核查见 [发布工具记录](publishing.md)。

开通账号后，先读取该博客自身的 RSD 配置，确认认证方式与权限，再验证创建草稿、回读正文、更新同一篇文章及图片上传。保存远端文章 ID，避免每次同步重复建稿。账号认证和实际写入尚未验证，当前不自动向社区发布。
