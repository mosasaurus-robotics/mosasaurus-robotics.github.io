# 投稿规范

## 本地开发

请使用 `pnpm`：

```bash
pnpm install
pnpm dev
```

提交 PR 前至少运行：

```bash
pnpm check
pnpm build
```

涉及 Astro/TypeScript 代码改动时，也运行：

```bash
pnpm lint
```

## 技术博客投稿

技术博客放在 `src/content/blog/`，文件名使用英文小写、数字和短横线，例如：

```text
src/content/blog/can-bus-debug-notes.md
```

推荐 frontmatter：

```yaml
---
title: CAN 总线调试记录
description: 一句话说明文章内容
pubDate: 2026-06-28
authors:
  - name: "张三"
    github: "octocat"
tags: ["CAN", "电控", "嵌入式"]
draft: false
toc: true
search: true
---
```

要求：

- `authors` 必填，`github` 填 GitHub 用户名，不带 `@`。
- `title` 控制在 60 个字符以内。
- `description` 写清楚文章内容，不要只写“学习记录”。
- 草稿使用 `draft: true`，正式发布改为 `draft: false`。

## 招新通知和实验室新闻

招新通知放在 `src/content/announcement/`。

实验室新闻放在 `src/content/news/`。

这两类内容的 `authors` 可选，其余写法和技术博客一致。

## 在线工具投稿

每个工具需要两部分：

```text
src/content/tools/<slug>.md
public/tool-apps/<slug>/index.html
```

工具索引 Markdown 示例：

```yaml
---
title: 在线 CAN 负载计算器
description: 估算 CAN 总线占用率和帧周期
pubDate: 2026-06-28
authors:
  - name: "张三"
    github: "octocat"
category: "步兵"
tags: ["CAN", "电控", "嵌入式"]
entry: "/tool-apps/can-load/index.html"
embed: true
hardwareApis: []
draft: false
---
```

说明：

- `entry` 必须指向 `/tool-apps/<slug>/index.html`。
- `authors` 必填，支持多人。
- `embed: true` 表示详情页内嵌 iframe，同时仍会提供新窗口打开。
- 如果工具使用串口、USB、HID、蓝牙等浏览器硬件 API，请填写 `hardwareApis`，例如 `["serial"]`。这类工具默认建议新窗口打开。

推荐工具分类：

- `英雄`
- `步兵`
- `哨兵`
- `工程`
- `飞镖`
- `雷达`
- `通用`
- `其他`

分类和标签第一版不做 CI 强制，但请尽量复用已有写法，避免同义词过多。

## 图片和资源

- Markdown 文章相关图片优先放在同目录的子目录中，便于迁移和审阅。
- 工具自己的图片、脚本、样式放在 `public/tool-apps/<slug>/` 内。
- 不要提交明显无用的大文件、构建产物或本地缓存。

## PR 检查清单

提交 PR 时请确认：

- 改动类型说明清楚：博客、招新、新闻、工具或站点代码。
- 技术博客和工具索引页已填写 `authors`。
- 工具 PR 附带截图或录屏，并说明浏览器/硬件依赖。
- 已运行 `pnpm check` 和 `pnpm build`。
- 没有修改无关文件。
