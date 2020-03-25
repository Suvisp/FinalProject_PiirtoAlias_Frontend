import React, { Component } from 'react'
import SocketBox from './SocketBox'
import SketchBox from './SketchBox'

export default class ParentBox extends Component {
    render() {
        return (
            <div id="parentbox">
               <SocketBox />
               <SketchBox />
            </div>
        )
    }
}
