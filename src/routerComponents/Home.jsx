import React, { Component } from 'react'
import Hello from '@/components/Hello'

export default class Home extends Component {
    constructor(props){
        super()
        this.state = {
            d:12,
            name:'这是Hello组件'
        }
    }
    setd=(num)=>{
        this.setState({
            d:num
        })
    }
    changeval = ()=>{
        this.setState({
            name:'我改变了hello组件的名称'
        })
        console.log(this.state.name)
    }
    render() {
        return (
            <div>
                <h1>Home 有个d值:{this.state.d}</h1>
                <input type="button" value="点击改变父组件传递值" onClick={this.changeval}/>
                <hr/>
                <Hello name={this.state.name} setd={this.setd} d={this.state.d}></Hello>
            </div>
        )
    }
}
