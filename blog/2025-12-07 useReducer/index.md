---
slug: useReducer
date: 2025-12-07
title: useReducer 详解
authors: [breeze]
tags: [React, useReducer, 状态管理]
---


# useReducer 详解

## 基本语法

```javascript
const [state, dispatch] = useReducer(reducer, initialArg, init?)
```

## 什么是 Reducer？

### 命名由来

初看 "Reducer" 这个词，你可能会联想到英语中 "reduce" 的含义——"减少、简化、折叠"。但实际上，`useReducer` 的命名源自 JavaScript 数组的 [reduce()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) 方法。

![](https://cdn.nlark.com/yuque/0/2025/png/29446804/1765084481232-cc184fc9-6a08-4d95-9626-269ab370c50f.png)

在数组的 `reduce()` 方法中，传入的回调函数被称为 "reducer"。它接受 `累积值` 和 `当前值`，然后返回 `新的累积值`。

React 中的 reducer 遵循相同的模式：它接受 `当前状态` 和 `action`，然后返回 `新的状态`。随着用户的不断交互，action 会持续累积并更新状态。

### 官方定义

> 对于拥有许多状态更新逻辑的组件来说，过于分散的事件处理程序可能会令人不知所措。对于这种情况，你可以将组件的所有状态更新逻辑整合到一个外部函数中，这个函数叫作 **reducer**。

## 使用规范

1. **reducer 必须是纯函数**：它应该只负责计算并返回下一个状态，不应该执行任何副作用（如显示消息、发送请求等），这些操作应该在事件处理程序中完成。

2. **每个 action 描述单一的用户交互**：即使这个交互会引发多个数据的变化，也应该用一个 action 来表示。

## useState vs useReducer 对比

| 维度 | useState | useReducer |
|------|----------|------------|
| **代码体积** | 初始代码量少，上手简单 | 需要预先编写 reducer 函数和 action 定义。但当多个事件处理程序以相似方式修改状态时，反而能减少代码量 |
| **可读性** | 逻辑简单时可读性好；逻辑复杂时会使组件臃肿 | 将状态更新逻辑与事件处理程序分离，复杂场景下更清晰 |
| **可调试性** | 出现问题时难以定位原因 | 可以在 reducer 中打印日志，追踪每次状态更新的来源（哪个 action 触发的） |
| **可测试性** | 测试需要依赖组件环境 | reducer 是独立的纯函数，可以单独进行单元测试 |

## 何时使用 useReducer？

- 组件有多个相关联的状态
- 状态更新逻辑复杂
- 多个事件处理程序需要以相似方式修改状态
- 需要更好的可调试性和可测试性

---

## 学习检验

能够流利回答以下问题，即可认为掌握了 `useReducer`：

1. 为什么会有 useReducer？它的出现是为了解决什么问题？
2. 它的具体用法是什么？什么场景下应该使用？
3. 相比 useState，它有哪些优点和缺点？

---

## 参考资料

- [Hooks FAQ – React](https://zh-hans.legacy.reactjs.org/docs/hooks-faq.html#how-to-avoid-passing-callbacks-down)
- [Hooks | Taro 文档](https://docs.taro.zone/docs/3.x/hooks#usereducer)
- [迁移状态逻辑至 Reducer 中 – React 中文文档](https://zh-hans.react.dev/learn/extracting-state-logic-into-a-reducer)
- [useReducer – React 中文文档](https://zh-hans.react.dev/reference/react/useReducer)
