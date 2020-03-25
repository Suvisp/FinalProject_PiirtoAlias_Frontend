import React, { Component } from 'react'
import NavBar from "./NavBar";

export default class ParentBox extends Component {
    render() {
        return (
            <div id="parentbox">
            <nav>
                <NavBar />
            </nav> 
            </div>
        )
    }
}
