import React, { Component } from 'react'
import io from 'socket.io-client'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class SocketBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chatMessage: "",
            chatMessages: [],
            points: 0
        };
    }

    componentDidMount() {
        this.socket = io('http://localhost:3000/') //avataan socket-yhteys kun sivu komponentti on latautunut
        this.socket.on("chat message", msg => {
            this.setState({ chatMessages: [...this.state.chatMessages, msg] }) //lisätään lähetetty viesti chatMessages-arrayhyn
        })
    }

    submitChatMessage() {
        this.socket.emit('chat message', this.state.chatMessage) //lähetetään chat-viesti
        if (this.state.chatMessage == this.props.sana) { //ennen viestin lisäämistä stateen tarkastetaan mätsääkö sana                           
            alert('sanat mätsää!')                      //propsina tulleen arvotun piirrettävän sanan kanssa
            this.osuma();
        } else {
            this.setState({ chatMessage: "" })
        }
    }

    osuma = () => {
        this.setState({ points: this.state.points + 1 }, () => { //kun arvaus menee oikein, lisätään yksi piste pointsin stateen.
            console.log(this.state.points)
        });
        this.addPointsToSessionStorage();
        console.log('tähän vielä joku funktio vuoron vaihtumisesta??') //tässä kutsutaan vielä tekemätöntä funktiota millä saadaan vuoro vaihdettua
    }
    //lisää pisteet SessionStorageen
    addPointsToSessionStorage() {
        let scores = parseInt(sessionStorage.getItem("scores"));
        sessionStorage.setItem("scores", this.state.points + 1);
        //näyttää kertyneet pisteet sivulla
        document.getElementById("scores").innerHTML = `Pisteeni: ${sessionStorage.getItem("scores")}`;
    }

    render() {
        const chatMessages = this.state.chatMessages.map(chatMessage => <p key={chatMessage}>{chatMessage}</p>) //mäpätään chatMessages ja luodaan taulukon jokaisesta
        return (                                                                                                //itemistä <Text>- elementti
            <div id="socketbox">
                <div id="keskustelu">
                    {chatMessages}
                </div>
                <div id="viestitys">
                    <TextField id="filled-basic" label="viestisi..." variant="filled" value={this.state.chatMessage} //voidaan lähettää viesti esim enteriä painamalla
                        onChange={e => { this.setState({ chatMessage: e.target.value }); }} /> 
                        {/* //muutetaan chatMessagen steittiä sitä mukaan, kun kirjoitetaan */}
                    <Button variant="contained" color="primary" id="sending" onClick={() => this.submitChatMessage()}>Lähetä</Button>
                    <div id="scores" value="Scores:">PISTEENI: 0 </div>
                </div>
                
            </div>
        )
    }
}
