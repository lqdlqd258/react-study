import React, { Component } from 'react'
import objcss from '../css/style.scss'

export default class Item extends Component {
    constructor(props){
        super()
        this.state = {
            edit : false
        }
    }
    show = () =>{
        if(this.state.edit){
            return <input type="text" ref='txt' autoFocus onBlur={()=>{this.blurhandler()}}/>
        }else{
            return <span>{this.props.item.content}</span>
        }
    }
    blurhandler(){
        this.setState({edit:false})
        this.props.actions.updateItem(this.props.item.id,this.refs.txt.value)
    }
    deleteItem(){
        if(confirm('真的要删除吗？')){
            this.props.actions.deleteItem(this.props.item.id)
        }
    }
    changeCheck = ()=>{
        this.props.actions.changeCheck(this.props.item.id)
    }
    render() {
        return (
            <div>
                <input type="checkbox" name="" id="" checked={this.props.item.done?'checked':''}  onChange={this.changeCheck}/>
                {' '}
                <span onDoubleClick={()=>{this.setState({edit:true})}} className={this.props.item.done?objcss.done:''}>
                {this.show()}
                </span>
                {' '}
                <button onClick={()=>{this.deleteItem()}}>X</button>
            </div>
        )
    }
}
