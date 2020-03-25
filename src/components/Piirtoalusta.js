import React, { Component } from 'react'

export default class Piirtoalusta extends Component {
    render() {
        return (
            <div id="piirtoalusta">
                <div id="toolbar">
                    <div id="rad">
                        Radius <span id="radval">10</span>
                        <div id="decrad" class="radcontrol">-</div>
                        <div id="incrad" class="radcontrol">+</div>
                    </div>

                    <div id="colors"></div>

                    <div id="clear">Clear</div>
                </div>
                <canvas id="Canvas">
                    browser does not support
                </canvas>
                <script type="text/javascript" src="./canvas/main.js"></script>
                <script type="text/javascript" src="./canvas/radius.js"></script>
                <script type="text/javascript" src="./canvas/colors.js"></script>
                <script type="text/javascript" src="./canvas/save.js"></script>
                <script type="text/javascript" src="./canvas/clear.js"></script>
            </div>
        )
    }
}

