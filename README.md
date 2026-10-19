# Engineering Notes

真实工程问题的排查记录：现象、假设、实验、结果与设计取舍。

作者：[ychy7001](https://github.com/ychy7001) · 个人站：[blog.ails.ltd](https://blog.ails.ltd/)

## 文章

| 日期 | 文章 | 主题 |
| --- | --- | --- |
| 2026-10-19 | [API 首字等待几十秒，后台却只统计 6 秒：一次公网入口延迟排查](articles/api-ingress-latency/index.md) | API 网关、Cloudflare Tunnel、流式响应、网络诊断 |

## 内容说明

文章源文件使用 Markdown；配图和可以公开的实验数据与正文放在同一目录。原始日志、真实域名/IP、账号标识、凭证及内部运行配置不进入本仓库。

实测结果注明测试条件，不将单次测量当作长期性能承诺。文章后续有新证据时，会更新正文并保留 Git 修改记录。

本仓库尚未授予通用转载或代码使用许可证；如需转载，请联系作者。

## 站点与发布

[三渠道站点方案](docs/site-plan.md) · [社区发布工具核查](docs/publishing.md)


## 新增文章

在 `articles/<slug>/index.md` 编写正文，并将配图放在同一目录。文件开头使用以下元数据：

```yaml
---
title: 文章标题
date: "2026-10-19"
description: 一句话概括问题与结果。
tags: [网络诊断, API 网关]
---
```

本地预览需要 Node.js 22.22 或更高版本：

```bash
npm ci
npm run dev
```

提交前运行 `npm run build`。向 `main` 推送后，GitHub Actions 自动构建和发布个人站；在 Actions 中确认部署成功。博客园同步将在账号开通并验证接口后接入。
