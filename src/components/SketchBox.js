import React, { Component } from 'react'
import Piirtoalusta from './Piirtoalusta'
import ArvattavaSana from './ArvattavaSana'

export default class SketchBox extends Component {
    render() {
        return (
            <div id="sketchbox">
                <ArvattavaSana /> 
                <Piirtoalusta />
            </div>
        )
    }
}
