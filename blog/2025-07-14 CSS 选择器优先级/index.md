---
slug: CSS 选择器优先级
title: CSS 选择器优先级
authors: [breeze]
tags: [CSS]
---

## 权重塔

权重从上到下递减

<table align="center">
    <tr align="center">
        <td colspan="3"> 
        👑
        皇帝：内联样式
        ```js 
        style="..."
        ```
        </td>
    </tr>
    <tr align="center">
        <td colspan="3">
        🗡️将军：ID 选择器
        ```css 
        #header {...}
        ```
        </td>
    </tr>
    <tr align="center">
        <td>
        ⚔️士兵：类选择器
        ```css 
        .class {...}
        ```
        </td>
        <td>
        🏹士兵：属性选择器
        ```css 
        [attr] {...}
        ```
        </td>
        <td>
        🛡️士兵：伪类选择器
        ```css 
        :hover {...}
        ```
        </td>
    </tr>
    <tr align="center">
        <td>
        🧑平民：元素选择器
        ```css 
        div {...}
        ```
        </td>
         <td>
        👩平民：伪类选择器
        ```css 
        ::before {...}
        ```
        </td>
        <td></td>
    </tr>
    <tr align="center">
        <td colspan="3"> 
        👑
        隐形人：通配符选择器
        ```css 
        * {...}
        ```
        </td>
    </tr>
</table>
