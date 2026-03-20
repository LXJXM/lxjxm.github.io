---
slug: claude-mcp-chrome-devtools
date: 2026-03-20
title: 用 chrome-devtools-mcp 让 Claude 直接调试浏览器
authors: [breeze]
tags: [Claude, MCP, chrome-devtools, VS Code]
---

# 用 chrome-devtools-mcp 让 Claude 直接调试浏览器

> 系列：我在用的 Claude MCP 工具 · 第一篇

AI 写代码有个天然的盲点：它看不到代码在浏览器里跑起来是什么样的。`chrome-devtools-mcp` 补上了这一块——它是 Chrome 官方团队发布的 MCP server，让 Claude 能直接读 console、抓网络请求、截图、录性能 trace。

## 安装

需要 Node.js v20.19+ 和 Chrome 稳定版。在 Claude Code 里运行：

```bash
claude mcp add chrome-devtools -- npx chrome-devtools-mcp@latest
```



## 连接已有的浏览器

默认会启动一个新的 Chrome 实例。更实用的方式是在安装命令里加上 `--autoConnect` 参数，直接接管你正在用的 Chrome，不需要重新登录。连接时浏览器会弹出权限确认，点允许即可。

## 隐私提示

连接状态下，浏览器的 Cookie、本地存储、页面内容都会暴露给 Claude，避免同时访问涉及敏感信息的页面。不想上报使用统计的话，加上 `--no-usage-statistics` 参数。

---

*GitHub: [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp)*
