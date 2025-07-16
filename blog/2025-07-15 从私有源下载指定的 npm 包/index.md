---
slug: 从私有源下载指定的 npm 包
title: 从私有源下载指定的 npm 包
authors: [breeze]
tags: [npm]
---

## 前言
在公司里，团队通常会有一些内部使用的工具包，这些包需要从私有源下载。下面以 `@lds/oss-upload`（用于将打包后的静态资源上传至 CDN）为例，总结一下从私有源下载指定 npm 包的具体配置方法。

## 配置

**- *01* -** 


在项目的根目录中新建 `.npmrc` 文件，配置 npm 镜像源。
```
@lds:registry=http://66.6.66.66/


# 模板
@[自定义包名]:registry="私有源地址"
```
上述代码的作用是为作用域为 @lds 的 npm 包指定自定义的镜像源，将该作用域下的包的下载地址设置为 http://66.6.66.66/

**- *02* -** 


下载指定的 npm 包

```bash
pnpm install @lds/oss-upload
```


## 参考
- [npm包 指定对应的包从私人仓库下载](https://blog.csdn.net/weixin_43416349/article/details/128986305)
