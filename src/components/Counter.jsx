import React from 'react'
import ReactTypes from 'prop-types'

export default class Counter extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count:props.initCount
        }
    }
    static defaultProps={
        initCount:100
    }
    static propTypes={
        initCount:ReactTypes.number
    }
    //组件创建阶段的生命周期函数
    componentWillMount(){
        // console.log('虚拟DOM渲染之前和挂在之前的函数');
    }
    render(){
        // console.log(this.refs.h3 && this.refs.h3.innerHTML);
        return <div>
            <h1>这是Counter计数器</h1>
            <input type="button" value="+1" onClick={()=>{this.increment()}}/>
            <hr/>
            <h3 ref='h3'>当前数量是：{this.state.count}</h3>
            <hr/>
            <input type="text" value={this.state.count} onChange={this.changeTxt}/>
        </div>
    }
    componentDidMount(){
        // console.log('虚拟DOM已经被挂载');
    }
    //自定义函数
    increment(){
        // console.log(this);
        this.setState({
            count:this.state.count + 1
        })
    }
    changeTxt = (e)=>{
        console.log(e.target.value);
        this.setState({
            count:parseInt(e.target.value)
            // count:Number(e.target.value)
        })
    }
    //组件运行阶段的生命周期函数
    shouldComponentUpdate(nextProps,nextState){
       return true;
    }
    componentWillUpdate(){
        // console.log(this.refs.h3.innerHTML);
    }
    componentDidUpdate(){

    }
    componentWillReceiveProps(){
        
    }
}