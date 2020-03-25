import React, { Component } from 'react'
import ReactDOM from "react-dom";
import CanvasDraw from "react-canvas-draw";

ReactDOM.render(<CanvasDraw />, document.getElementById("root"));
export default class Piirtoalusta extends Component {
    state = {
        color: "#ffc600",
        width: 400,
        height: 400,
        brushRadius: 10,
        lazyRadius: 12
      };
    render() {
        return (
            <div id="piirtoalusta">
                <CanvasDraw />
            </div>
        )
    }
}

