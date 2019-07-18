import React from 'react'
//导入 评论项 子组件
import Subcmtlist from '@/components/Subcmtlist'


//父组件
export default class Cmtlist extends React.Component{
    constructor(){
        super()
        this.state = {
            CommentList:[
                {id:1,user:'张三',content:'哈哈1'},
                {id:2,user:'李四',content:'哈哈2'},
                {id:3,user:'王五',content:'哈哈3'},
                {id:4,user:'赵六三',content:'哈哈4'}
            ]
        }
    }
    render(){
        return <div>
            <h1 style={{color:'red',fontSize:'35px',fontWeight:200,textAlign:'center'}}>这是评论列表</h1>
            {this.state.CommentList.map((item)=>
               <Subcmtlist {...item} key={item.id}></Subcmtlist>
            )}
            </div>
    }
}