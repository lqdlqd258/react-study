import React from 'react'
export default function Subcmtlist(props){
    return  <div style={{border:'1px dashed #ccc',margin:'10px',padding:'10px',boxShadow:'0 0 10px #ccc'}}>
    <h1 style={{fontSize:'14px'}}>评论人：{props.user}</h1>
    <p>评论内容：{props.content}</p>
    </div>
}