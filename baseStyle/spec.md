# className 的命名规则：

- 组件外壳：`所属阵营--组件名称 状态`
- 组件的子部分：`成分名称 状态`

## 例子（Toc 组件）

<div className="nav--Toc">         ----- 组件外壳
  <div className="TocItem">       ----- 组件的子部分 
  <div className="TocItem">       ----- 组件的子部分
  <div className="TocItem active">----- 组件的子部分
  <div className="TocItem">       ----- 组件的子部分

## 所属阵营（一个组件最多从属2个阵营）

1. nav  （）（成员：Toc、Navbar）
2. sprite（精灵组件）（流窜于各种大组件的寄生性小组件）（成员：IconItem）
3. custom (写业务逻辑时自定义)