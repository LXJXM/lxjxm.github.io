---
slug: Git 常用指令总结
title: Git 常用指令总结
authors: [breeze]
tags: [CSS]
---

## 删除分支

:::note

- `-d`
- `--delete`

Delete a branch. The branch must be fully merged in its upstream branch, or in ***HEAD*** if no upstream was set with `--track` or `--set-upstream-to`.


:::

- 删除的分支分支必须已经完全合并到 ***远程分支***
- 如果未设置远程分支，则必须完全合并到 ***当前分支***


```bash
# 删除分支
git branch -d <branch-name>
# 等价于
git branch --delete <branch-name>

# 删除多个分支
git branch -d <branch-name> <branch-name2> <branch-name3>

## 强制删除分支-不管有没有合并
git branch -D <branch-name>
# 等价于
git branch --delete --force <branch-name>
```


## 参考
- [git-branch - List, create, or delete branches](https://git-scm.com/docs/git-branch)
