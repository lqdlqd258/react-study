import React, { Component } from 'react'
import InfoBar from '@/todo/components/InfoBar'
import {connect} from 'react-redux';
import Item from './Item'
import { bindActionCreators } from 'redux';
import * as actions from '@/todo/actions/actions'

class Main extends Component {
    constructor({todos,actions}){
        super()
        this.state = {
            filter:"显示全部"
        }
    }
    //过滤todos，"显示全部" "显示已做" "显示未做"
    changeFilter = (txt)=>{
         this.setState({
             filter : txt
         })
    }
    render() {
        //可以用switch
        const fileteredTodos = (()=>{
            if(this.state.filter == "显示全部"){
                return this.props.todos
            }else if(this.state.filter == "显示已做"){
                return this.props.todos.filter((item)=>{
                    return item.done
                })
            }else if(this.state.filter == "显示未做"){
                return this.props.todos.filter((item)=>{
                    return !item.done
                })
            }
        })()
        return (
            <div>
                <ul>
                  {fileteredTodos.map((item,index)=>{
                      return <Item key={index} item={item} actions={this.props.actions}></Item>
                  })}
                </ul>
                <InfoBar todos={this.props.todos} changeFilter={this.changeFilter}></InfoBar>
            </div>
        )
    }
}

export default connect(
    (state)=>{
        return {
            "todos":state.todoReducer
        }
    },
    (dispatch)=>{
        return {
            "actions" : bindActionCreators(actions,dispatch)
        }
    }
)(Main)