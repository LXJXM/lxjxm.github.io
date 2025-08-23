---
slug: 三方库中的语义化版本
title: 三方库中的语义化版本
authors: [breeze]
tags: [package.json]
---

在 `package.json` 里，我们下载的第三方依赖都配有一个版本号，这个版本号遵循的就是语义化版本规范。
语义化版本规范 (x.y.z)：

- x: 主版本 breaking updates 经过了重大的变更，不兼容之前的版本。
- y: 次要版本 一些功能的增强或更新 兼容之前的版本。
- z: 修订版本 修复了一些 bug 优化。
