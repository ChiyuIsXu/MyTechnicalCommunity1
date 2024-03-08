```vue
// 针对项 
@select="handleSelect"
 index -> key
 key path
 2-4-2  ['2', '2-4', '2-4-2']
 
 
 // 针对折叠菜单 
 @open="handleOpen"
 const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
@close="handleClose"
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
```

```
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
  
  <el-menu-item index="1">Processing Center</el-menu-item>
  
  <el-sub-menu index="2">
  
  const activeIndex = ref('1')
  
  const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
```

`select` 事件是 HTML DOM 中的一个事件，它在用户选择文本框（input 或 textarea）中的文本时触发。当用户在文本框中选中文本时，该事件会被触发，并返回选中的文本信息。

在文本框中选中文本时，会触发一系列事件，包括 `selectstart`、`selectionchange` 和 `select`。其中，`selectstart` 事件在用户开始选中文本时触发，`selectionchange` 事件在文本选择发生变化时触发，而 `select` 事件则在文本选择结束时触发。这些事件的顺序是先 `selectstart`，然后是多次 `selectionchange`，最后是 `select`。

需要注意的是，`select` 事件只能应用于文本框元素，如 input 和 textarea，而不能应用于其他元素。此外，`select` 事件也不支持冒泡，因此不会影响到其它元素。

总之，`select` 事件是 HTML DOM 中的一个事件，它在用户选择文本框中的文本时触发，并返回选中的文本信息。



`key` 和 `keyPath` 在 `<el-menu>` 组件中具体指代被选中菜单项的唯一标识和路径，通过这两个参数，你可以获取用户选择的菜单项信息，并作出相应的响应。





```
 el-menu-item-group
```





```
active-text-color="#ffd04b"
text-color="#fff"
```



```
:collapse="isCollapse"
```

```
:popper-offset="16"
```