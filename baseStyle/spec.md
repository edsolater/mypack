# className 的命名规则：

- 组件外壳：`组件名称[--所属阵营] [状态]`
- 组件的子部分：`成分名称 状态`

## 例子（Toc 组件）

`<div className="Toc--nav">` ----- 组件外壳
`<div className="TocItem">` ----- 组件的子部分
`<div className="TocItem active">`----- 组件的子部分(含状态)

## 所属阵营（一个组件最多从属 2 个阵营）

1. `nav` （h 会引起路由改变的东西）（举例：Toc、Breadrumb）
2. `form` (各种交互控件)（举例：Switch、Radio、Checkbox、NumberSlider）
3. `data` (用于数据展示)
4. `popup`（给予用户反馈，只有当满足交互条件时才会出现的组件）
5. `----`（无阵营组件）（流窜于各种大组件的寄生性小组件，无法也不能独立存活）（举例：IconItem）
6. `widget`（独立于阵营，混沌属性）(示例： `<div className="Navbar--widget">`)
7. `layout` (格式与因业务需求临时取的 className 相同，其实就只是个排版的语义型 DIV)（用于布局的特殊组件，所属组件都是空壳）
8. `container` 相关组件的容器。（举例：Tabbar.Container）

## 组件收集

- 组件以`_`开头，以区分其他 className，并利用 vscode 的内置 autoimport，以增快开发速度。
- 所有子组件均可由其他组件代替，注意，替换行为必定伴随嵌套。
- 所有子组件也提供一个默认设置，这是类似于 JS 高阶函数中的回调一般的存在。
- 子组件均可同名在 css 中选择
- 子组件、样式 class 在 css 中以 lower-case 出现，js 中以 PascalCase 出现
- 组件的 slot 既接收 `()=><Component title="hello" />` 也接收 `<Component title="hello" />`

### 暂记（写完了要删除）

- 像 tabbar、menu 等的指示形线条属于组件的样式属性，用 css 控制（需要给个专门的 class）
- layout 组件不一定是“空壳”，可能是有位置信息的
- layout 组件可能是一个“空壳”，即完全没有内容，只有一个壳。子组件位既是 `props.children`
- TODO： 一项提案：layout 布局组件都有`antd <Container>`一般的规定嵌套的行为
- TOFIX: 内容够多时，想想格式排版问题
- ~~组件后置下划线的语义、区分作用，都比前置下划线明确~~
- ~~干脆不要下滑线了，只由大写与否区分组件 class.component 级组件均要有 date-component=true~~
- 组件的calss只由大小写加以区分，且组件的根DIV均要有data-component=true
- 子组件位的 class 与样式 class 相同（css 中为 camelCase）。（除第一层组件外，能容纳组件的一定是子组件位）

### Menu\_

- 组件阵营：`nav`
- 子组件位：
  - Item
  - ItemGroup
- 样式 class：activeIndicator
  ![位于antd首页](antd-menu.png)

### Toc\_

- 组件阵营：`nav`
- 子组件位：
  - Item
- 样式 class：activeIndicator
  ![位于antd首页](antd-toc.png)

### Tabbar\_

- 组件阵营：`nav`
- 子组件位
  - Item
  - Container: 承载各个 tab 的内容物，此子组件位在视觉层次上为必选项
- 样式 class：activeIndicator
  ![位于google搜索结果页](google-tabbar.png)

### Logo\_

- 描述：一般处于 Topbar 的左侧
- 组件阵营：`nav`
  ![位于优设网页左上角](uisdc-logo.png)

### Switch\_

- 组件阵营：`form`
- props:
  - `label`: 可点击的区域

### Radio\_

- 组件阵营：`form`
- props:
  - `label`: 可点击的区域

### Checkbox\_

- 组件阵营：`form`
- props:
  - `label`: 可点击的区域

### Slider\_（用于 NumberInput\_）

- 组件阵营：`form`
- props
  - max
  - min
  - step

### Text\_

- props:
  - tag: 选择文字包裹在什么标签里，默认 `'span'`
  - children: 内容文字

### NumberInput\_

- 组件阵营：`widget`(Slider\_ + Button\_ + Tooltip\_ + Text\_)
- 描述：数字输入框，数字滑块是一个名为“Slider\_”的 内置 组件
- props:
  - hasSlider: 是否有一个辅助型组件“Slider\_"（默认有 tooltip，当 hasNumberPanel 也开启时没有 tooltip）
  - SliderProps: （同 Slider\_ 的 props 内容）
  - hasText：是否显示数字
  - Text: (同 Text\_ 的 props 内容)

### sidebar

- 组件阵营：`layout`
- ~~可有属性：floating（float：left 是样式不是功能，所以不应该写入组件的 props）~~
  ![位于优设文章左侧](uisdc-sidebar.png)
  ![位于dribbble页面左侧](dribbble-floating-sidebar.png)

### topbar

- 组件阵营：`layout`
  ![位于antd首页](antd-Topbar.png)

### wrap

- 组件阵营：`layout`
- 描述：包裹器
