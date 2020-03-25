import React from 'react';
import SocketBox from './SocketBox'
import SketchBox from './SketchBox'
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
            <div onSubmit={this.handleSubmit}>
                <p>Click on the Button & Start to Draw {'\n'}</p>
                <div>
                    <button onClick={this.handleSubmit}>Press me</button>
                </div>
                <ArvattavaSana sana2={this.state.randomWord} />
                <div className="container">
                <SocketBox sana={this.state.randomWord}/>
                <SketchBox />
                </div>
            </div>
        )
    }
}

