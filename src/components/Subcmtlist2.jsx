import React from 'react'
// import styles from '@/components/styles.js'
import Substyle from '@/css/Subcmtlist.scss';

export default function Subcmtlist(props){
    return  <div className={Substyle.item}>
    <h1 className={Substyle.user}>评论人：{props.user}</h1>
    <p className={Substyle.content}>评论内容：{props.content}</p>
    </div>
}