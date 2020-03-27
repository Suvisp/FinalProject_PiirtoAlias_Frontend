import React, { Component } from 'react'
import ReactDOM from "react-dom";
import CanvasDraw from "react-canvas-draw";
import Button from '@material-ui/core/Button';

ReactDOM.render(<CanvasDraw />, document.getElementById("root"));
export default class Piirtoalusta extends Component {
    state = {
        color: "red",
        width: "100vw",
        height: 500,
        brushRadius: 6,
        lazyRadius: 5
    };
    render() {
        return (
            <>
            <div id="piirtoalusta">
                <CanvasDraw ref={canvasDraw => (this.saveableCanvas = canvasDraw) }
                    brushColor={this.state.color}
                    canvasWidth={this.state.width}
                    brushRadius={this.state.brushRadius}
                    lazyRadius={this.state.lazyRadius} />
            </div>
            <div id="toolit">
                <button class="swatches" id="redbtn" onClick={() => {this.setState({color:"red"})}}>&#128396;</button>
                <button class="swatches" id="bluebtn" onClick={() => {this.setState({color:"blue"})}}>&#128396;</button>
                <button class="swatches" id="yellowbtn" onClick={() => {this.setState({color:"yellow"})}}>&#128396;</button>
                <button class="swatches" id="greenbtn" onClick={() => {this.setState({color:"limegreen"})}}>&#128396;</button>
                <Button id="clearbtn" variant="contained" color="primary" onClick={() => { this.saveableCanvas.clear(); }}>Tyhjennä</Button>
                <Button id="undobtn" variant="contained" color="primary" onClick={() => { this.saveableCanvas.undo(); }}>Kumoa</Button>
            </div>
            </>
        )
    }
}

// this.setState({color:"red", "blue", "limegreen", "yellow"})
