import React from 'react'
import styles from '@/components/styles.js'

export default function Subcmtlist(props){
    return  <div>
    <h1>评论人：{props.user}</h1>
    <p>评论内容：{props.content}</p>
    </div>
}