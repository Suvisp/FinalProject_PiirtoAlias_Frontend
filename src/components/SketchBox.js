import React, { Component } from 'react'
import Piirtoalusta from './Piirtoalusta'

export default class SketchBox extends Component {
    render() {
        return (
            <div id="sketchbox">
                <Piirtoalusta/>
            </div>
        )
    }
}
