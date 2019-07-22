import React from 'react';

export default class BindEvent extends React.Component{
    constructor(){
        super()
        this.state = {
            msg:'你是猪吗',
            msg2:'🐖'
        }
    }
    render(){
        return <div>
            BindEvent组件
            <hr/>
            <button onClick={()=>this.show('🐖')}>按钮</button>
            <h3>{this.state.msg}<hr/>{this.state.msg2}</h3>
            </div>
    }
    show = (arg1)=>{
        console.log(arg1)
        this.setState({
            msg:'haha',
            msg2:'不是'
        },()=>{
            console.log(this.state)
        })
    }
}

