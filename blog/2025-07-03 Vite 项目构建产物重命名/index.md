---
slug: Vite 项目构建产物重命名
title: Vite 项目构建产物重命名
authors: [breeze]
tags: [开发体验, 工程化, Vite]
---

## 前言
在实际开发场景中，我们可能会有这样的需求：期望构建生成的 HTML 文件不再使用默认的 `index.html` 名称，而是自定义文件名。同时，又希望在开发环境下仍保持原有的文件命名，以保障开发流程的顺畅性。

## 实现
采用自定义插件的形式实现我们的需求

```ts
// vite.config.ts

// ...
// highlight-next-line
import type { PluginOption } from "vite";
// ...


// 自定义插件
// highlight-start
type RenameHtmlPlugin = () => PluginOption;
const renameHtmlPlugin: RenameHtmlPlugin = () => {
  return {
    name: "rename-index-html",
    enforce: "post",
    generateBundle(_, bundle) {
      bundle["index.html"].fileName = "lock.html";
    },
  };
};
// highlight-end

export default defineConfig(({ command }) => {
  return {
    // ...
    plugins: [
        // ...
        // highlight-next-line
        renameHtmlPlugin(),
    ],
    // ...
  };
});

```

## 参考
- [【Vite】修改构建后的 index.html 文件名](https://blog.csdn.net/Superman_H/article/details/140335001)

