import React, { Component } from 'react'

//评论框
export default class Cmtbox extends Component {
    render() {
        return (
            <div>
                <label>评论人:</label><br/>
                <input type="text" ref='user'/><br/>
                <label>评论内容</label><br/>
                <textarea cols="30" rows="4" ref='content'></textarea><br/>
                <input type="button" value="发表评论" onClick={this.postComment}/>
            </div>
        )
    }
    postComment = ()=>{
        //1.获取到评论人和评论内容
        //2.从 本地存储中，先获取到之前的评论数组
        //3.把最新的这条评论 unshift进去
        //4.再把最新的评论数组，保存到本地存储中
        let cmtinfo = {user:this.refs.user.value,content:this.refs.content.value}
        let list = JSON.parse(localStorage.getItem('cmts') || '[]')
        list.unshift(cmtinfo)
        localStorage.setItem('cmts',JSON.stringify(list))

        this.refs.user.value = this.refs.content.value = ''
        this.props.reload()
    }
}
