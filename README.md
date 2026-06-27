# 征龙凌沧Mosasaurus

这是征龙凌沧Mosasaurus RoboMaster 实验室的静态网站，基于 Astro 构建。

站点第一版包含：

- `/blog/` 技术博客
- `/announcement/` 招新通知
- `/news/` 实验室新闻
- `/tools/` 在线工具

## 本地开发

```bash
pnpm install
pnpm dev
```

常用检查：

```bash
pnpm check
pnpm lint
pnpm build
```

## 投稿

投稿前请阅读 [CONTRIBUTING.md](./CONTRIBUTING.md)。

技术博客和在线工具索引页必须填写作者 GitHub 标签：

```yaml
authors:
  - name: "张三"
    github: "octocat"
```

在线工具的 HTML 本体放在 `public/tool-apps/<slug>/index.html`，索引说明放在 `src/content/tools/<slug>.md`。
