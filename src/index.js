// const React = require('react');
// const ReactDOM = require('react-dom');
import React from 'react'
import ReactDOM from 'react-dom'
import Hello from '@/components/Hello'
//父类
class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    sayHello(){
        console.log('打招呼');
    }
}
//子类
class Chinese extends Person{

}

let aa = new Chinese('ljc',20);
console.log(aa);
aa.sayHello();

const person = {
    name:'ljc',
    age:'24'
}
ReactDOM.render(<div>
    <Hello {...person}></Hello>
</div>,document.getElementById('app'));

