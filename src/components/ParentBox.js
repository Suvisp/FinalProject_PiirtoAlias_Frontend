import NavBar from "./NavBar";
import React from 'react';

import SocketBox from './SocketBox'
import SketchBox from './SketchBox'
import Piirtoalusta from './Piirtoalusta'
import ArvattavaSana from './ArvattaSana'
import { getAllWords } from '../services/restClient'

export default class ParentBox extends React.Component {
    constructor() {
        super()
        this.state = {
            word: "",
            id: "",
            randomWord: "",
            allWords: []
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    //hakee kaikki sanat tietokannasta
    componentDidMount = () => {
        getAllWords().then(allWords => {
            this.setState({ allWords });
        }).catch(err => {
            console.error("Caught an error", err);
            this.setState({ error: err.message })
        });
    }
    //valitsee random sanan
    handleSubmit(event) {
        event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allWords.length)
        const randWord = this.state.allWords[randNum].word
        this.setState({ randomWord: randWord })
        // this.socket.emit(this.setState(randWord))
    }

    //nappia painamalla esittää random sanan piirtäjää varten
    render() {
        return (
            <div id="parentbox">
                <nav>
                    <NavBar />
                </nav>
                <div onSubmit={this.handleSubmit}>
                    <p>Hae sana & aloita piirtäminen {'\n'}</p>
                    <div>
                        <button onClick={this.handleSubmit}>Aloita peli</button>
                        <ArvattavaSana sana2={this.state.randomWord}/>
                    </div>
                    <div className="container">
                        <SocketBox sana={this.state.randomWord} />
                        <SketchBox />
                    </div>
                    <ArvattavaSana sana2={this.state.randomWord} />
                    <Piirtoalusta/>
                </div>
            </div>
        )
    }
}

