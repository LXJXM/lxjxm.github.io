---
slug: vite-tailwindcss
title: Vite 项目中使用 Tailwind CSS 
authors: [breeze]
tags: [vite, tailwindcss, 最佳实践]
---

👉 [快速使用](#快速使用)

<!-- truncate -->

## 安装 & 配置
**-01-** 

安装 tailwindcss 相关依赖

```bash
pnpm install tailwindcss @tailwindcss/vite
```

**-02-**

配置 Vite 插件

```ts
// vite.config.ts

import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```

**-03-**

在入口 CSS 文件中引入 Tailwind CSS

```css
/* src/index.css */

@import "tailwindcss";
```


## 使用优化

### 插件
Tailwind CSS IntelliSense 用于提供自动补全、悬停预览、代码检查等功能

**-01-**

配置 vscode 插件安装提示，提示其他开发者安装 Tailwind CSS IntelliSense 插件
```json
// .vscode/extensions.json

{
  "recommendations": [
    "bradlc.vscode-tailwindcss"
  ]
}
```
**-02-**

配置 `tailwindCSS.classFunctions` ，开启类名函数提示。

:::tip

**tailwindCSS.classFunctions** 是一个用于指定函数名的配置项。编辑器或工具识别这些函数后，可为其中的 Tailwind CSS 类名提供自动补全、悬停预览、代码检查等功能。每个条目是仅匹配函数名的正则表达式模式。

:::

```json
// .vscode/settings.json

{
  "tailwindCSS.classFunctions": ["tw", "clsx","twClsx","twMerge","tw\\.[a-z-]+"]
}
```

### 工具函数
在使用 Tailwind CSS 进行开发时，合理运用工具函数能显著提升开发效率与体验。接下来，为大家介绍几个常用的工具函数库。
- `clsx`: 一个轻量级的工具库，用于条件性地组合 CSS 类名，使动态类名管理更加简洁和直观。
- `tailwind-merge`: 一个用于智能合并 Tailwind CSS 类名的库，它可以避免类名冲突，确保样式按预期生效。


**-01-**

安装依赖
```bash
pnpm install clsx tailwind-merge
```

**-02-**

封装工具函数
```ts
// utils/tw.ts

import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * 合并多个类名
 * @param inputs
 * @returns
 */
export function twClsx(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

### 格式化
有代码洁癖的你，是否因为类名顺序混乱不堪而苦恼。

使用 `@prettier/plugin-tailwindcss` 插件，可以完美解决令人头疼的排序问题。

**-01-**

安装依赖
```bash
pnpm install -D prettier prettier-plugin-tailwindcss
```

**-02-**

配置 `prettier` 插件

```json
// .prettierrc

{
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

## 快速使用

**-01-** 安装依赖
```bash
pnpm install tailwindcss @tailwindcss/vite clsx tailwind-merge
```
```bash
pnpm install -D prettier prettier-plugin-tailwindcss
```

**-02-** 配置
```css
/* src/index.css */
@import "tailwindcss";
```

```ts
// vite.config.ts

import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```

```json
// .vscode/extensions.json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss"
  ]
}
```

```json
// .vscode/settings.json

{
  "tailwindCSS.classFunctions": ["tw", "clsx","twClsx","twMerge","tw\\.[a-z-]+"]
}
```

```ts
// utils/tw.ts

import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * 合并多个类名
 * @param inputs
 * @returns
 */
export function twClsx(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

```json
// .prettierrc

{
  "plugins": ["prettier-plugin-tailwindcss"]
}
```
## 参考
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [Get started with Tailwind CSS](https://tailwindcss.com/docs/installation/using-vite)
- [tailwind-merge](https://github.com/dcastil/tailwind-merge)
- [prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)
