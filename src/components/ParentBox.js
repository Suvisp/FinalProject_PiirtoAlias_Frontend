import NavBar from "./NavBar";
import React from 'react';
import Button from '@material-ui/core/Button';
import SocketBox from './SocketBox'
import SketchBox from './SketchBox'
import ListausPelaajat from './ListausPelaajat'
import ArvattavaSana from './ArvattavaSana'
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
                    <NavBar randomWord={this.state.randomWord}  />
                </nav>
                <div onSubmit={this.handleSubmit}>
                    <div className="container">
                        <SketchBox />
                        <SocketBox sana={this.state.randomWord} />
                        <ListausPelaajat />
                            {/* <--tähän komp. chätissä olevat pelaajien tiedot kuten nimi ja pisteet */}
                    </div>
                    <section id="arvattavasana">
                        {/* <p>Klikkaa nappia ja ryhdy piirtämään {'\n'}</p> */}
                        <Button variant="contained" color="primary" onClick={this.handleSubmit}>Arvo sana</Button>
                        {/* <ArvattavaSana sana2={this.state.randomWord} /> */}
                    </section>
                </div>
            </div>
        )
    }
}

