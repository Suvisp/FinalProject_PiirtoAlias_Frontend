import React, { Component } from 'react'
import ReactDOM from "react-dom";
import CanvasDraw from "react-canvas-draw";

ReactDOM.render(<CanvasDraw />, document.getElementById("root"));
export default class Piirtoalusta extends Component {
    state = {
        color: "red",
        width: "98vw",
        height: 500,
        brushRadius: 6,
        lazyRadius: 5
      };
    render() {
        return (
            <div id="piirtoalusta">
                <CanvasDraw 
                brushColor={this.state.color} 
                canvasWidth={this.state.width} 
                brushRadius={this.state.brushRadius} 
                lazyRadius={this.state.lazyRadius} />
            </div>
        )
    }
}
// style={{width: "800px"}}
