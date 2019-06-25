//假设main.js还是我们的入口文件

//1.    这两个导入的时候，接收的成员名称，必须这么写
import React from 'react';//创建组件,虚拟DOM元素，生命周期
import ReactDOM from 'react-dom';//把创建好的组件和虚拟DOM放到页面上展示

//2.    创建虚拟DOM元素
//参数1：创建的元素类型(标签)，字符串形式，表示元素的名称
//参数2：是一个对象({})或 null ，表示 当前这个 DOM 元素属性
//参数3：子节点(包括 其它虚拟DOM 获取文本子节点)
//参数n..：其他子节点

//<h1 id="myh1" title="this is a h1">这是一个大大的H1</h1>
// const myh1 = React.createElement('h1',null,'这是一个大大的H1');
const myh1 = React.createElement('h1',{id:'myh1',title:'this is a h1'},'这是一个大大的H1');
const mydiv = React.createElement('div',null,'这是div',myh1);

// const mytest = <div>123321</div>
//3.    使用ReactDOM 把虚拟DOM 渲染到页面上
//参数1：要渲染的那个虚拟DOM元素（本质是一个对象）
//参数2：指定页面上的DOM元素，当作容器
ReactDOM.render(mydiv,document.getElementById('app'));
//Target container is not a DOM element.