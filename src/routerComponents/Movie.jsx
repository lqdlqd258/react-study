import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MovieDetail from "@/routerComponents/MovieDetail"

export default class Movie extends Component {
    constructor(props){
        super()
        this.state = {
            list:[
                {
                    id:'1',
                    movie:'哈利波特1'
                },
                {
                    id:'2',
                    movie:'哈利波特2'
                },
                {
                    id:'3',
                    movie:'哈利波特3'
                },
                {
                    id:'4',
                    movie:'哈利波特4'
                }
            ]
        }
    }
    render() {
        return (
            <Router>
            <div>
                <ul>
                    {this.state.list.map((item,index)=>{
                        return (
                            <Link to={`/MovieDetail?aid=${item.movie}`} key={index}>
                            <li>{item.movie}</li>
                            </Link>
                        )
                    })}
                </ul>
                <Route path="/MovieDetail" component={MovieDetail} />
            </div>
            </Router>
        )
    }
}
