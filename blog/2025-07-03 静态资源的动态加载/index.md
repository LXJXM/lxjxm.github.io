---
slug: 静态资源的动态加载
title: 静态资源的动态加载
authors: [breeze]
tags: [开发体验, 资源处理]
---

## 背景
最近开发一款屏保项目时遇到了一个问题：一个用于展示天气的组件拥有几十种需要展示的天气图标。

按照常规处理，一般是直接引入图片，然后根据后端返回的状态，来展示不同的图片，像下面这样：

```tsx
import weatherIcon1 from './assets/weather-icon-1.webp';
import weatherIcon2 from './assets/weather-icon-2.webp';
import weatherIcon3 from './assets/weather-icon-3.webp';
// ... 其他天气图标

const WeatherIcon = ({ weatherState }) => {
  const iconMap = {
    'clear-sky': weatherIcon1,
    'few-clouds': weatherIcon2,
    'scattered-clouds': weatherIcon3,
    // ... 其他映射关系
  };

  const icon = iconMap[weatherState];
  if (!icon) {
    throw new Error(`Unknown weather state: ${weatherState}`);
  }

  return <img src={icon} alt={weatherState} />;
};
```
<!-- todo  -->



## 参考
- [深入解析 import.meta.url：与 new URL() 的关系及 Vite 中的 base 路径影响](https://juejin.cn/post/7512671108396548146)