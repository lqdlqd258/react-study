import React, { Component } from 'react'
//react-redux 1.提供Provier组件 2.提供connect
import {connect} from 'react-redux'

import * as actions from '@/actions/actions'
//redux 1.提供createStore函数 2.提供bindActionCreator函数
import { bindActionCreators } from "redux"

class App extends Component {
    constructor(props){
        super()
        console.log(props.actions)
    }
    changetext(){
        let value = Number(this.refs.addtext.value)
        this.props.actions.addtext(value);
        // this.props.actions.addtext(value);
        // this.props.actions.addtext(value)
    }
    render() {
        return (
            <div>
                <h1>{this.props.v}</h1>
                <button onClick={()=>{this.props.actions.reduce()}}>-1</button>
                {' '}
                <button onClick={()=>{this.props.actions.add()}}>+1</button>
                <hr/>
                <input type="text" ref='addtext'/>
                {' '}
                <button onClick={()=>{this.changetext()}}>添加</button>
            </div>
        )
    }
}

export default connect(
    (state)=>{
        let obj = {}
        let v = ['v']
        v.map((item,index)=>{
            obj[item] = state[item]
        })
       return obj
    },
    (dispatch)=>{
        return {
            actions: bindActionCreators(actions,dispatch)
        }
    }
)(App)