import React from 'react'
import {render} from 'react-dom'
import Header from '@/todo/components/Header'
import Main from '@/todo/components/Main'
//redux 1.提供createStore函数 2.提供bindActionCreator函数 3.提供applyMiddleware函数
import {createStore, applyMiddleware} from 'redux'

import reducer from '@/todo/reducer/index.jsx'
//react-redux 1.提供Provier组件 2.提供connect
import {Provider} from 'react-redux'


// let store = createStore(reducer);

// 增加中间件，方便测试
import {createLogger} from 'redux-logger'
//任何对state的改变之前，都会先执行中间件
let store = createStore(reducer,applyMiddleware(createLogger()));
// JSON.stringify(store.getState())
render(
    <Provider store={store}>
        <Header></Header>
        <Main></Main>
    </Provider>,
    document.querySelector('#app')
);