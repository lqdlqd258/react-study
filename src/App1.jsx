import React, { Component } from 'react'
import {HashRouter,Route,Link} from 'react-router-dom'
import PropTypes from 'prop-types'
//UI组件
//已经改成按需引入
// import { DatePicker } from 'antd';

//导入组件
import Home from './routerComponents/Home'
import Movie from './routerComponents/Movie'
import About from './routerComponents/About'

export default class App extends Component {
    getChildContext(){
        return {
            id:123
        }
    }
    static childContextTypes={
        id:PropTypes.number.isRequired
    }
    render() {
        //当使用HashRouter 把App根组件的元素包裹起来，网站就表示启用路由了
        return (
            <HashRouter>
                 <div>
                    <h1>这是网站的App根组件</h1>
                    <hr/>
                    {/* <DatePicker /> */}
                    <hr/>
                    <Link to='/home'>首页</Link>&nbsp;&nbsp;
                    <Link to='/movie/top250/10'>电影</Link>&nbsp;&nbsp;
                    <Link to='/about'>关于</Link>&nbsp;&nbsp;
                    <hr/>
                    <Route path='/home' component={Home}></Route>
                    {/* 注意默认情况下，路由中的规则是模糊匹配，如果 路由可以部分匹配成功，就会展示这个路由对应的组件 */}
                    {/* 可以共拓添加 exact 属性，表示启用精确匹配模式*/}
                    {/* 如果要匹配参数，可以在匹配规则中，使用:修饰符，表示这个位置匹配到的是参数 */}
                    <Route path='/movie/:type/:id' component={Movie} exact></Route>
                    <Route path='/about' component={About}></Route>
                </div>
            </HashRouter>
        )
    }
}