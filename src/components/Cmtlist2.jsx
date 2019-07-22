import React from 'react'
//导入 评论项 子组件
import Subcmtlist from '@/components/Subcmtlist2'
//导入样式表
import cssobj from '@/css/Cmtlist.scss'
//引入bootstrap
import 'bootstrap/dist/css/bootstrap.css';
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
            { /*className 只能有一个，否则后面的会覆盖前面的*/ }
            { /*拼接字符符串，两种方式*/ }
            { /*第一种*/ }
            <button className='btn btn-primary'>按钮</button>
            <div className='panel panel-primary'>按钮</div>
            <h1 className={cssobj.title+' test'}>这是评论列表</h1>
            { /*第二种*/ }
            <h1 className={[cssobj.title,'test'].join(' ')}>这是评论列表</h1>
            {this.state.CommentList.map((item)=>
               <Subcmtlist {...item} key={item.id}></Subcmtlist>
            )}
            </div>
    }
}