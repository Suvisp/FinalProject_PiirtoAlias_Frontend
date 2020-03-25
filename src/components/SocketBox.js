import React, { Component } from 'react'
import Viestinlahetys from './ViestinLahetys'
import Chatviesti from './ChatViesti'
import ListausPelaajat from './ListausPelaajat'

export default class SocketBox extends Component {
    render() {
        return (
            <div id="socketbox">
                <ListausPelaajat />
                <Chatviesti />
                <Viestinlahetys />
            </div>
        )
    }
}
