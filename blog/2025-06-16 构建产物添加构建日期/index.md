---
slug: 在构建产物添加构建日期
title: 在构建产物中添加构建日期
authors: [breeze]
tags: [vite, 工程化]
---

## 前言

测试人员在测试的时候无法确认测试环境中的代码是否是最新的代码。因此在构建的产物中添加构建日期，方便知道产物的构建时间。

<!-- truncate -->

## 实现

### Vite
1. 安装 `vite-plugin-html` 插件

```bash
pnpm install vite-plugin-html -D
```
2. 配置 `vite.config.ts `

```ts
import { createHtmlPlugin } from 'vite-plugin-html'; // 引入依赖

export default defineConfig({
    // ...
    plugins: [
        // ...
        createHtmlPlugin({
            minify: false, // 是否压缩index.html文件，这里选择不压缩
            pages: [
                {
                    template: 'index.html',
                    filename: 'index.html',
                    injectOptions: {
                        data: {
                            buildTime: new Date().toLocaleString() // 这里就是记录的当前打包的时间。前面的键位名称‘buildTime’需要个index.html文件中的相对应
                        }
                    }
                }
            ]
        })
        // ...
    ],
})
```
```html
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8">
            <meta name="build-time" content="<%- buildTime %>" />
            <title>Vite Example</title>
        </head>
        <body></body>
    </html>
```


### Webpack
1. 安装依赖

```bash
pnpm install html-webpack-plugin -D
pnpm install webpack -D
```

2. 配置
```js
    // webpack.common.js
    const HtmlWebpackPlugin = require('html-webpack-plugin');
    // highlight-next-line
    const webpack = require('webpack');

    module.exports = {
      // ... 其他配置
      plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.html', // 你的 HTML 模板文件
          // 其他配置项
        }),
        // highlight-start
        new webpack.DefinePlugin({
          'BUILD_TIME': JSON.stringify(new Date().toLocaleString())
        }),
        // highlight-end
      ],
    };
```
```html
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8">
            <!--  highlight-next-line -->
            <meta name="build-time" content="<%= BUILD_TIME %>" />
            <title>Webpack Example</title>
        </head>
        <body></body>
    </html>
```

## 参考
- [vue3 vite.config.ts 如何增加构建时间](https://www.cnblogs.com/wjs0509/p/17891258.html)
- [vite-plugin-html](https://github.com/vbenjs/vite-plugin-html/tree/main)