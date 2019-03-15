import React, { Component } from 'react';
import openSocket from 'socket.io-client';
import GlitchEffect from 'react-glitch-effect';

import Talkbox from './components/Talkbox'
import Music from './components/Music'
import Playground from './components/Playground'

import './App.css';


const socket = openSocket('http://tukerty.ru:11221')

class App extends Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = {
      game: {
        players: []
      },
      me: {
        x: 0,
        y: 0
      },
      roomId: '',
      username: '',
      loginOpacity: 1,
      loginDisplay: 'block',
      colorOpacity: 0,
      colorDisplay: 'none',
      colorName: '',
      colorColor: '#FFF',
      playgroundOpacity: 0,
      playgroundDisplay: 'none'
    };
  }

  componentDidMount() {
    socket.on('login_success', (data) => {
      this.setState({
        colorDisplay: 'block',
        colorOpacity: 1,
        colorColor: data.player.color.colorCode,
        colorName: data.player.color.colorName,
        roomId: 'http://tukerty.ru:3000/' + data.roomId
      })
      setTimeout(() => {
        this.setState({ colorOpacity: 0 })
        setTimeout(() => {
          this.setState({
            colorDisplay: 'none',
            playgroundDisplay: 'flex',
            playgroundOpacity: 1
          })
        }, 200)
      }, 2000)
    })

    socket.on('room_update', (data) => {
      console.log(data)
      this.setState({game: data.game})
    })

  }


  handleMouseMove(event) {
    socket.emit('mousemove', {
      x: event.clientX - (window.innerWidth - 800) / 2,
      y: event.clientY - (window.innerHeight - 450) / 2,
    })
  }

  render() {
    return (
      <div className="app">
        <Music />
        <div className="center-container" style={{ opacity: this.state.loginOpacity, display: this.state.loginDisplay }}>
          <GlitchEffect>
            <h1>PROJECT&nbsp;TEAMSTORM</h1>
          </GlitchEffect>
          <div>
            <input className="loginField" value={this.state.username} onChange={event => this.setState({ username: event.target.value })} placeholder="Enter username..." />
            <button className="mainBigButton" onClick={() => {
              if (this.state.username !== '') {
                this.setState({ loginOpacity: 0 })
                setTimeout(() => {
                  this.setState({ loginDisplay: 'none' })
                  if (window.location.pathname.length > 1){
                    socket.emit('login', { username: this.state.username, roomId: window.location.pathname.slice(1) })
                  }
                  else{
                    socket.emit('login', { username: this.state.username })
                  }
                }, 200)
              }
            }}>LOGIN</button>
          </div>
        </div>

        <div className="center-container" style={{ opacity: this.state.colorOpacity, display: this.state.colorDisplay }}>
          <h2>YOUR COLOR IS</h2>
          <GlitchEffect>
            <h1 style={{ color: this.state.colorColor }}>{this.state.colorName}</h1>
          </GlitchEffect>
        </div>

        <Playground onMouseMove={this.handleMouseMove} roomId={this.state.roomId} game={this.state.game} style={{ opacity: this.state.playgroundOpacity, display: this.state.playgroundDisplay }} />
        <Talkbox style={{ opacity: this.state.loginOpacity }} />
      </div>
    );
  }
}

export default App;
