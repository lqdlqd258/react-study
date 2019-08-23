import React, { Component } from 'react'
let url = require('url')

export default class MovieDetail extends Component {
    render() {
        console.log(url.parse(this.props.location.search,true).query.aid);
        return (
            <div>
                电影详情{url.parse(this.props.location.search,true).query.aid}
            </div>
        )
    }
}
