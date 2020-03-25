import React, { Component } from 'react'
import SocketBox from './SocketBox'
import SketchBox from './SketchBox'
import ArvattavaSana from './ArvattavaSana';


export default class ParentBox extends Component {
    render() {
        return (
            <div id="parentbox">
               <SocketBox />
               <SketchBox />
            <ArvattavaSana />
            </div>
        )
    }
}
