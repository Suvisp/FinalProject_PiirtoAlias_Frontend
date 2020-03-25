import React, { Component } from 'react'
import io from 'socket.io-client'


export default class ChatViesti extends Component {
    constructor(props)  {
        super(props);
        this.state = {
            chatMessage: "",
            chatMessages: [],
            points: 0
            
        };

    }

componentDidMount () {
    this.socket = io('http://192.168.1.5:3000/') //avataan socket-yhteys kun sivu komponentti on latautunut
    this.socket.on("chat message", msg  => {
        this.setState({chatMessages: [...this.state.chatMessages, msg]}) //lisätään lähetetty viesti chatMessages-arrayhyn
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
    this.setState({points: this.state.points + 1}, () => { //kun arvaus menee oikein, lisätään yksi piste pointsin stateen.
        console.log(this.state.points)
        // sessionStorage.setItem("points", this.state.points);
    });
    console.log('tähän vielä joku funktio vuoron vaihtumisesta?') //tässä kutsutaan vielä tekemätöntä funktiota millä saadaan vuoro vaihdettua
}


    render() {
    const chatMessages = this.state.chatMessages.map(chatMessage => <p key={chatMessage}>{chatMessage}</p>) //mäpätään chatMessages ja luodaan taulukon jokaisesta
        return (                                                                                                //itemistä <Text>- elementti
            <div>
                {chatMessages}
                <input 
                value={this.state.chatMessage} //voidaan lähettää viesti esim enteriä painamalla
                onChange={e => { this.setState({chatMessage: e.target.value});
                     //muutetaan chatMessagen steittiä sitä mukaan, kun kirjoitetaan
                }}/>
                <div>
                <button onClick={()=> this.submitChatMessage()}>Lähetä</button>
                </div> 
                
            </div>
        )
    }
}
