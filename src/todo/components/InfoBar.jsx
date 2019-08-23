import React, { Component } from 'react'


class InfoBar extends Component {
    countDone = ()=>{
        let sum = 0;
        this.props.todos.forEach((item)=>{
            item.done && sum++
        })
        return sum
    }
    render() {
        return (
            <div>
                共{this.props.todos.length}条
                已经完成{this.countDone()}条
                没完成{this.props.todos.length - this.countDone()}条
                <button onClick={()=>{this.props.changeFilter('显示全部')}}>显示全部</button>
                <button onClick={()=>{this.props.changeFilter('显示已做')}}>显示已做</button>
                <button onClick={()=>{this.props.changeFilter('显示未做')}}>显示未做</button>
            </div>
        )
    }
}

export default InfoBar