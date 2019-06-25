const React = require('react');
const ReactDOM = require('react-dom');

// const mydiv = React.createElement('div',{},'这是我的div');//虚拟DOM元素
const mydiv = <div>这是我的div1231</div>;//虚拟DOM元素
ReactDOM.render(mydiv,document.getElementById('app'));

