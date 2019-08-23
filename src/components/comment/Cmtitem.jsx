import React, { Component } from 'react'

export default class Cmtitem extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div style={{border:'1px solid #ccc',margin:'10px 0'}}>
                <h3>评论人:{this.props.user}</h3>
                <h5>评论内容:{this.props.content}</h5>
            </div>
        )
    }
}
