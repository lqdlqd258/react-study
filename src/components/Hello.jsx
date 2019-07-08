import React from 'react'   //只能要大写的React
export default function Hello(props){

    return <div>这是Hello 组件 ---my name is {props.name}--- my age id {props.age}</div>
}

//把组件暴露出去
// export default Hello;