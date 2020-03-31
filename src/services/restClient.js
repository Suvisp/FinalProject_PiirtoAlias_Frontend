import Axios from 'axios';
import io from 'socket.io-client'

const apiUrl = 'http://piirtoalias-ebenv.eba-aben5pj4.eu-central-1.elasticbeanstalk.com/'

const socket = io(apiUrl)
var users = {};

console.log(socket.id);

socket.on('connect', () => {
//   console.log(socket.id);
    // socket.username = data; 
    // sockets[socket.id] = socket; 
    // users[data] = socket.id
});

//hae kaikki sanat tietokannasta --> ArvattavaSana
let getAllWords = async () => {
    let result = await Axios.get(apiUrl + 'words')
    return result.data;
}
let getAllScores = async () => {
    let result = await Axios.get(apiUrl + 'scores')
    return result.data;
}
let getPlayers = async () => {
    let result = await Axios.get(apiUrl + 'players')
    return result.data;
}
let getPlayer = async (id) => {
    let result = await Axios.get(apiUrl + 'players/:id')
    return result.data;
}
let insertPlayer = async (newplayer) => {
    // users[data] = newplayer;
    let result = await Axios.post(apiUrl + 'players')
    return result.data;
}
let updatePlayer = async (player,id) => {
    // users[data]  = player;
    let result = await Axios.put(apiUrl + 'players/:id')
    return result.data;
}



export { getAllWords, getAllScores, getPlayers, getPlayer, insertPlayer, updatePlayer}

