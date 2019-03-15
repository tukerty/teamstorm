import React, { Component } from 'react';

class Music extends Component {
    state = {
      play: false
    }
    audio = new Audio('./bg.mp3')
  
    componentDidMount(){
      this.audio.volume = 0.5
      this.audio.loop = true

      this.setState({ play: !this.state.play }, () => {
        this.state.play ? this.audio.play() : this.audio.pause();
      });
    }

    render() {
      return (
        <div className="bgMusic">
        </div>
      );
    }
  }
  
  export default Music;