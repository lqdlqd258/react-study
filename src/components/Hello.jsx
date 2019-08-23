import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Hello extends Component {
    constructor(props,context){
        super()
        this.state={
            context:context.id
        }
    }
   static contextTypes = {
       id:PropTypes.number.isRequired
   }
    render() {
        return (
            <div>
                <h1>爷爷组件传递过来的值：{this.context.id}---{this.state.context}</h1>
                {this.props.name}
                <h5><input type="button" value="点击我改变父组件的d值" onClick={()=>{this.props.setd(this.props.d+1)}}/></h5>
                <input type="button" value="点击改变上下文" onClick={()=>{this.setState({context:this.context.id++})}}/>
            </div>
        )
    }
}

Hello.propTypes ={
    name:PropTypes.string.isRequired
}