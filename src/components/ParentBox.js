import NavBar from "./NavBar";
import React from 'react';
import Button from '@material-ui/core/Button';
import SocketBox from './SocketBox'
import SketchBox from './SketchBox'
import ListausPelaajat from './ListausPelaajat'
import ArvattavaSana from './ArvattavaSana'
import { getAllWords } from '../services/restClient'
import io from 'socket.io-client'
// import ListausPelaajat from './ListausPelaajat';

export default class ParentBox extends React.Component {
    constructor() {
        super()
        this.state = {
            word: "",
            id: "",
            randomWord: "",
            allWords: [],
            // myTurnToDraw: true
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    //hakee kaikki sanat tietokannasta
    componentDidMount = () => {
        this.socket = io('http://localhost:3000/')
        this.socket.on("sana", wrd => {
            this.setState({ randomWord: [wrd] })
        })
        getAllWords().then(allWords => {
            this.setState({ allWords }, () => {
                this.handleSubmit();
            })

        }).catch(err => {
            console.error("Caught an error", err);
            this.setState({ error: err.message })
        });
    }
    //valitsee random sanan
    handleSubmit() {
        // event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allWords.length)
        const randWord = this.state.allWords[randNum].word
        this.setState({ randomWord: randWord }, () => {
            this.socket.emit('sana', this.state.randomWord)
            // this.socket.emit(this.setState(randWord))
        })
    }
//jos on piirustusvuorossa palauttaa seuraavan näkymän:
    render() {
        if (myTurnToDraw === true) {
            return (
                <div id="parentbox">
                    <nav>
                        <NavBar randomWord={this.state.randomWord} />
                    </nav>
                    <div onSubmit={this.handleSubmit}>
                        <div className="container">
                            {/* <ListausPelaajat />  */}
                            <SocketBox sana={this.state.randomWord} />
                            <SketchBox />
                            {/* <SocketBox sana={this.state.randomWord} /> */}
                            <ListausPelaajat />
                            {/* <--tähän komp. chätissä olevat pelaajien tiedot kuten nimi ja pisteet */}
                        </div>
                    </div>
                </div>
            )
        } else {
            //muille pelaajille tämä näkymä:
            return (

                <div id="parentbox">
                    <nav>
                        {/* <NavBar randomWord={this.state.randomWord} /> */}
                    </nav>
                    {/* <div onSubmit={this.handleSubmit}>
                        <div className="container"> */}
                    {/* <ListausPelaajat />  */}
                    <SocketBox sana={this.state.randomWord} />
                    <SketchBox />
                    {/* <SocketBox sana={this.state.randomWord} /> */}
                    <ListausPelaajat />
                    {/* <--tähän komp. chätissä olevat pelaajien tiedot kuten nimi ja pisteet */}
                </div>
            )
        }

    }
}

