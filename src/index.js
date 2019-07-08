// const React = require('react');
// const ReactDOM = require('react-dom');
import React from 'react'
import ReactDOM from 'react-dom'

import Hello from './components/Hello'
// const mydiv = React.createElement('div',{},'这是我的div');//虚拟DOM元素

// const mydiv = <div>这是我的div1231</div>;//虚拟DOM元素
const person = {
    name:'ljc',
    age:'24'
}

ReactDOM.render(<div>
    <Hello {...person}></Hello>
</div>,document.getElementById('app'));

