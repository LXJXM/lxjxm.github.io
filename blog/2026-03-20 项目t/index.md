---
slug: claude-md-ie9-constraints
date: 2026-03-20
title: 用 CLAUDE.md 管理项目级 AI 开发约束
authors: [breeze]
tags: [Claude, AI编程, CLAUDE.md, IE9, VS Code]
---

# 用 CLAUDE.md 管理项目级 AI 开发约束

> 场景：多项目合集中，只对特定子目录启用 IE9 兼容约束。

---

## 核心结论

把约束写进 `CLAUDE.md`，放在**需要生效的目录里**。Claude Code 会自动读取，无需任何额外配置。

---

## IE9 兼容约束模板

新建文件 `CLAUDE.md`，内容如下：

```markdown
# 开发约束

## 浏览器兼容性
必须兼容 IE9，禁止使用以下内容：
- ES6+ 语法：let/const、箭头函数、模板字符串、Promise、class 等
- IE9 不支持的 CSS：flexbox、calc()、CSS 自定义属性 var(--xxx)

## 技术栈
页面已引入 jQuery，DOM 操作、事件绑定、AJAX 请求优先使用 jQuery。

## 代码风格
保持简洁工整，注释准确说明意图，避免冗余。
```

---

## 目录结构

`CLAUDE.md` 放在哪个目录，约束就在哪个目录生效。

**单项目：放根目录**

```
my-project/
├── CLAUDE.md   ← 放这里
└── src/
```

**多项目合集：放子目录**

```
SCRIPTS-AND-PAGES/
├── pages/
│   └── wx-mini-game/
│       ├── CLAUDE.md  ← 只对这个子目录生效
│       └── index.html
└── scripts/           ← 不受影响
```

Claude Code 会从当前文件目录**逐级向上**查找并合并所有 `CLAUDE.md`，天然支持多层级约束叠加。

---

## 为什么不做成 Skill？

| 方式 | 适用场景 |
|------|----------|
| `CLAUDE.md` | 项目级约束，随项目走，按需启用 ✓ |
| Skill | 跨项目复用的通用技能（如文件处理流程） |

这份约束是**项目决策**（IE9、jQuery 已引入），不是通用技能，放 `CLAUDE.md` 是正确姿势。

---

## 适用工具

- VS Code + Claude Code 插件（`Anthropic.claude-code`）
- Trae