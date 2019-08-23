import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '@/todo/actions/actions'

class Header extends Component {
    addItem = ()=>{
       this.props.actions.addItem(this.refs.text.value)
       this.refs.text.value = ''
    }
    keyDownhandler= (event)=>{
       let code = event.keyCode
       if(code == 13){
            this.addItem()
       }
    }
    render() {
        return (
            <div>
                待做事项：
                <input type="text" name="" id="" ref='text' onKeyDown={this.keyDownhandler}/>
                {' '}
                <button onClick={this.addItem}>添加</button>
            </div>
        )
    }
}

export default connect(
    null,
    (dispatch)=>{
       return {
        "actions" : bindActionCreators(actions,dispatch)
       }
    }
)(Header)
