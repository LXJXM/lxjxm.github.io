---
slug: Markdown 语法总结
title: Markdown 语法总结
authors: [breeze]
tags: [Markdown, 最佳实践]
---

<!-- truncate -->

## 基础语法

### 标题

要创建标题，从行首开始使用一个或多个井号 (#) 符号，后面跟一个空格和标题文本。井号的数量表示标题的级别，一个井号表示最大级别的标题，六个井号表示最小级别的标题。

```
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
```

### 文本格式化

_Italic_：使用 (\*) 或 (\_) 包裹文本，使其变为 斜体。

**Bold**：使用 (\*\*) 或 (\_\_) 包裹文本，使其变为 粗体。

**_Bold and Italic_**：使用 (\*\*\*) 或 (\_\_\_) 包裹文本，使其变为 粗斜体。

### 列表

Markdown 支持有序和无序列表。无序列表用星号 (\*) 或短横线 (-) 加空格创建；有序列表用数字加点 (.) 加空格创建。

```
Unordered List:
- Item 1
- Item 2
- Item 3

Ordered List:
1. First item
2. Second item
3. Third item
```

要创建嵌套列表，将每个项目缩进一个制表符。例如：

```
- Parent item
    - Child item 1
    - Child item 2
    - Child item 3
- Parent item 2
    - Child item 1
```

- Parent item
  - Child item 1
  - Child item 2
  - Child item 3
- Parent item 2
  - Child item 1

### 链接和图片

创建链接，使用方括号 [] 包裹链接文本，用圆括号 () 包裹链接地址。
插入图片的方式和链接相同，但需要在开头加上 ! 符号。

```
Link:
[Link text](https://www.example.com)

Image:
![Alt text](image-url)
```

[百度一下](https://www.baidu.com)

![百度一下](https://www.baidu.com/img/flexible/logo/pc/result.png)

### 引用块

引用块用于引用来自其他地方的文本，通常用于引用他人的言论或引用其他信息。在 Markdown 中，引用块使用大于号 (>) 符号开头，后面跟一个空格和文本内容。

```
> This is a quote block.
```

> Every man is a poet when he is in love. — Plato

对于包含多个段落的引用块，在每个段落前添加 (>) 。

```
> This is a quote block.
>
> This is a quote block.
```

> 每个人都有属于自己的一片森林，也许我们从来不曾去过，但它一直在那里，总会在那里。
> 迷失的人迷失了，相逢的人会再相逢。
> — 村上春树

## 进阶语法

### 表格

在 Markdown 里创建表格，你可以用竖线 (|) 来分隔列，用短横线 (-) 来分隔表头和表体。不过，手动创建表格有些麻烦，因为竖线必须垂直对齐。所以，我建议使用表格生成工具来简化这个过程。

```
| Column 1 | Column 2 | Column 3 |
| -------- | -------- | -------- |
| R1, C1   | R1, C2   | R1, C3   |
| R2, C1   | R2, C2   | R2, C3   |

```

| Column 1 | Column 2 | Column 3 |
| -------- | -------- | -------- |
| R1, C1   | R1, C2   | R1, C3   |
| R2, C1   | R2, C2   | R2, C3   |

### 代码块

要创建代码块，使用三个反引号 (```)，然后跟上代码所写的编程语言。接着，在反引号之间插入你的代码。

````
```javascript
console.log('Hello, World!');
```
````

渲染后输出长这样：

```javascript
console.log("Hello, World!");
```

### 水平分界线

要创建水平分界线，使用三个短横线 (---) 或三个星号 (\*\*\*) 或 三个下划线 (\_\_\_) 。
水平分界线通常用于分隔内容的不同部分，使文档更加清晰易读。

```
---
***
___
```

---

### 脚注

Markdown 也支持脚注，这有助于在不打断内容流畅性的情况下，为文本添加额外信息或说明。要添加脚注，请使用以下语法：

1. 在想添加脚注引用的地方放置一个尖括号 (^)。
2. 在方括号 [] 中添加脚注文本，后面紧跟一个冒号 (:)。
3. 在单独的一行添加脚注内容，缩进一个制表符

```
A progressively enhanced `<a href>` wrapper to enable navigation with client-side routing[^1].
```

当您渲染 Markdown 文档时，脚注引用将被替换为链接到页面底部脚注内容的上标数字。

A progressively enhanced `<a href>` wrapper to enable navigation with client-side routing[^1].

[^1]: [React Router Link](https://reactrouter.com/api/components/Link#summary)

### 任务列表

Markdown 还允许你创建任务列表，这对于跟踪需要完成的项很有用。要创建任务列表，使用连字符 (-)、空格和方括号 [] 来创建复选框。要标记一项为已完成，在方括号内添加一个

```
- [ ] Task 1
- [x] Task 2
- [ ] Task 3
```

- [ ] Task 1
- [x] Task 2
- [ ] Task 3

## 高效书写

### 快捷键

- Ctrl + B: **Bold**
- Ctrl + I: **_Italic_**
- Ctrl + K: [Add a link](https://www.xxx.com)

### 插件
- Markdown All in One: 此扩展为 Markdown 添加了许多实用功能，如目录、实时预览和自动完成。
- Code Spell Check: 通过检测和突出显示语法错误和拼写错误来提高准确性。
- markdownlint: 这个扩展会检查你的 Markdown 内容是否存在语法错误和格式问题，通过高亮显示常见错误，帮助你写出更好的 Markdown。
- Word Count：它统计你的 Markdown 内容中的字数、字符数和行数。字数统计是一个有用的工具，可以追踪你的进度，并确保你的内容符合你的字数目标。
- Markdown Emoji：它提供了一库 emoji，你可以轻松地添加到你的 Markdown 内容中。Markdown Emoji 是一种有趣且简单的方式，为你的写作增添个性并吸引你的读者。
### 最佳实践
- 不要使用过多的标题层级：使用标题将内容划分为不同部分，但不要使用过多的标题。过多的标题会使文章看起来杂乱无章。尽量使用两级或三级的标题。
- 使用列表：使用列表将复杂信息分解为更小更容易管理的部分