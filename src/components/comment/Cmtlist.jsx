import React from 'react'
import Cmtitem from './Cmtitem'
import Cmtbox from './Cmtbox'
//评论列表组件
export default class CmtList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            list:[
                {
                    user:'zs',
                    content:'123'
                },
                {
                    user:'ls',
                    content:'youqu'
                },
                {
                    user:'xiaohong',
                    content:'haha'
                }
            ]
        }
    }
    componentWillMount(){
        this.loadCmts();
    }
    render(){
        return <div>
          <h1>这是评论列表组件</h1>

          {/* 发表评论的组件 */}
            <Cmtbox reload={this.loadCmts}></Cmtbox>
          {/* 循环渲染一些评论内容组件 */}
          {this.state.list.map((item,index)=>{
              return <Cmtitem key={index} {...item}></Cmtitem>
          })}
        </div>
    }
    //从本地存储中拿评论列表
    loadCmts =()=>{
       let list = JSON.parse(localStorage.getItem('cmts') || '[]')
       this.setState({
           list
       })
    }
}