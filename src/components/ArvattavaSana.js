import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { getAllWords } from '../restclient';
import './ArvattavaSana.css';

class ArvattavaSana extends Component {
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
    }
//nappia painamalla esittää random sanan piirtäjää varten
    render() {
        return (
            <div className="sana-otsikko" onSubmit={this.handleSubmit}>
                <h3>Click on the Button & Start to Draw {'\n'}</h3>
                {/* <button title="Press me" onPress={this.handleSubmit}></button> */}
                    <Button color="primary" onSubmit={this.handleSubmit}>Press Me</Button>
                    {/* <div className="sana"> */}
                    <div value={this.state.randomWord}>
                    </div>
            </div>
        )
    }
}
export default ArvattavaSana;