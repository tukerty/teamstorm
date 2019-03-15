const express = require('express')
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const shortid = require('shortid');
server.listen(11221);
app.use(express.static('public'))

const colors = [
  {
    colorCode: '#1E88E5', colorName: 'BLUE'
  },
  {
    colorCode: '#e53935', colorName: 'RED'
  },
  {
    colorCode: '#43A047', colorName: 'GREEN'
  },
  {
    colorCode: '#FDD835', colorName: 'YELLOW'
  }
]

class Game {
  constructor() {
    this.rooms = []
  }
  addRoom(room) {
    this.rooms.push(room)
  }
  getRoomById(id) {
    return this.rooms.find(room => { return room.id == id })
  }
}

class Room {
  constructor(id) {
    this.id = id
    this.players = []
  }
  addPlayer(player){
    this.players.push(player)
  }
  getPlayerById(id){
    return this.players.find(player => { return player.id == id })
  }
}

class Player {
  constructor(id, username, color) {
    this.id = id
    this.username = username
    this.color = {
      colorCode: color.colorCode,
      colorName: color.colorName
    }
    this.position = {
      x: 0,
      y: 0
    }
  }
  setPosition(x,y){
    this.position = {
      x: x,
      y: y
    }
  }
  setColor(color){
    this.color = color
  }
}

let game = new Game()

io.on('connection', function (socket) {
  socket.on('login', data => {
    let player = new Player(socket.id, data.username, { colorCode: '#000000', colorName: 'BLACK' })
    if (!data.roomId) {
      socket.roomId = shortid.generate()
      let room = new Room(socket.roomId)
      player.setColor(colors[room.players.length])
      room.addPlayer(player)
      game.addRoom(room)
    }
    else {
      console.log(data.roomId)
      socket.roomId = data.roomId
      player.setColor(colors[game.getRoomById(data.roomId).players.length])
      game.getRoomById(data.roomId).addPlayer(player)
    }
    socket.emit('login_success', {
      player, roomId:socket.roomId
    })
    setInterval(() => {
      socket.emit('room_update', {
        game: game.getRoomById(socket.roomId)
      })
    },10)
  });
  socket.on('mousemove', data => {
    if (socket.roomId){
      game.getRoomById(socket.roomId).getPlayerById(socket.id).setPosition(data.x, data.y)
    }
  })
});