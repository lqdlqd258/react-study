import React from 'react'
// import React,{Component} from 'react'
// class Movie extends Component{}
import ReactDOM from 'react-dom'
import Hello from '@/components/Hello'

//class 关键字创建组件
class Movie extends React.Component{
    constructor(){
        // 由于Movie组件，继承了 React.Component 这个父类，所以，自定义构造器中，必须调用super()
        super()
        //只有调用super()后，才能使用this关键字
        this.state = {
            msg:'大家好，我是class'
        } //这个this.state 相当于vue中的 data(){return{}}
    }
    render(){
        this.state.msg = '修改了'
        //在class 组件内部， this表示 当前组件的实例对象
        return <div>名字是:{this.props.name},年龄是:{this.props.age}--------------{this.state.msg}</div>;//或者不传jsx，就 return ull;
    }
}
const user = {
    age: 22,
    name: 'Tom'
}
ReactDOM.render(
<div>
<Movie {...user}></Movie>
{/* <Movie age={user.age} name={user.name}></Movie> */}
</div>
,document.getElementById('app'));

