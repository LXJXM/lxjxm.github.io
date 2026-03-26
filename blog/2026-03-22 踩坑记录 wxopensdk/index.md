---
slug: wxopensdk-script-loading-issue
date: 2026-03-22
title: 踩坑记录 wxopensdk
authors: [breeze]
tags: [微信开发, wxopensdk, 前端, JavaScript]
---

# 踩坑记录 wxopensdk

## 问题背景

在开发PC网页拉起微信小程序功能时，需要引入 `wxopensdk.js` 文件。官方提供的 SDK 地址为：

```javascript
https://res.wx.qq.com/connect/zh_CN/htmledition/js/wxopensdk.js
```

## 遇到的问题

按照常规做法，通常会将 JS 文件放在 `<head>` 标签底部引入，以保证脚本优先加载。但在引入 `wxopensdk.js` 时，这种做法会导致报错。

## 解决方案

将 `wxopensdk.js` 的引入放在 `<body>` 标签底部即可解决：

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>微信开放平台应用</title>
</head>
<body>
  <!-- 页面内容 -->
  
  <!-- wxopensdk 放在 body 底部 -->
  <script src="https://res.wx.qq.com/connect/zh_CN/htmledition/js/wxopensdk.js"></script>
</body>
</html>
```

## 原因分析

这个问题可能与 SDK 内部的实现机制有关。`wxopensdk.js` 在初始化时可能需要访问 DOM 元素或 `document.body` 对象。如果放在 `<head>` 中加载，此时 DOM 尚未构建完成，导致脚本执行失败。

