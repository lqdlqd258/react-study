import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import About from '@/routerComponents/About'
import Movie from '@/routerComponents/Movie'

export default class App extends Component {
    render() {
        return (
          <Router>
            <div>
                <ul>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/Movie">Movie</Link>
                </li>
                </ul>
                 <hr />
                <Route exact path="/" component={About} />
                <Route path="/Movie" component={Movie} />
            </div>
          </Router>
        )
    }
}
