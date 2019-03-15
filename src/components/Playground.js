import React, { Component } from 'react';
import GlitchEffect from 'react-glitch-effect';

export default class Playground extends Component {
  render() {
    return (
      <div className="playground" style={this.props.style} onMouseMove={this.props.onMouseMove}>
      { this.props.game.players[0] !== undefined ? 
        <div className="field field1">
          <svg style={{top:this.props.game.players[0].position.y,left:this.props.game.players[0].position.x}} className="cursor" id="Layer_1" version="1.0" viewBox="0 0 24 24"><path fill={this.props.game.players[0].color.colorCode} d="M7,2l12,11.2l-5.8,0.5l3.3,7.3l-2.2,1l-3.2-7.4L7,18.5V2"/></svg>
          
        <GlitchEffect duration = '15s'>
          <svg className="playericon" viewBox="0 100 600 400"><path fill={this.props.game.players[0].color.colorCode} d="M448.8,161.925l-35.7-35.7l-160.65,160.65l35.7,35.7L448.8,161.925z M555.899,126.225l-267.75,270.3l-107.1-107.1
                l-35.7,35.7l142.8,142.8l306-306L555.899,126.225z M0,325.125l142.8,142.8l35.7-35.7l-142.8-142.8L0,325.125z"/>
          </svg>
        </GlitchEffect>
          <div className="playerName">
          {this.props.game.players[0].username}
          </div>
        </div>
        : null }
        { this.props.game.players[1] !== undefined ? 
          <div className="field field2">
          <svg style={{top:this.props.game.players[1].position.y,left:this.props.game.players[1].position.x}} className="cursor" id="Layer_1" version="1.0" viewBox="0 0 24 24"><path fill={this.props.game.players[1].color.colorCode} d="M7,2l12,11.2l-5.8,0.5l3.3,7.3l-2.2,1l-3.2-7.4L7,18.5V2"/></svg>
            
          <GlitchEffect duration = '12s'>
          <svg className="playericon" viewBox="0 100 600 400"><path fill={this.props.game.players[1].color.colorCode} d="M448.8,161.925l-35.7-35.7l-160.65,160.65l35.7,35.7L448.8,161.925z M555.899,126.225l-267.75,270.3l-107.1-107.1
                  l-35.7,35.7l142.8,142.8l306-306L555.899,126.225z M0,325.125l142.8,142.8l35.7-35.7l-142.8-142.8L0,325.125z"/>
            </svg>
        </GlitchEffect>
            <div className="playerName">
            {this.props.game.players[1].username}
            </div>
          </div>
        : <div className="field field2"></div> }
        { this.props.game.players[2] !== undefined ? 
          <div className="field field3">
          <svg style={{top:this.props.game.players[2].position.y,left:this.props.game.players[2].position.x}} className="cursor" id="Layer_1" version="1.0" viewBox="0 0 24 24"><path fill={this.props.game.players[2].color.colorCode} d="M7,2l12,11.2l-5.8,0.5l3.3,7.3l-2.2,1l-3.2-7.4L7,18.5V2"/></svg>
            
          <GlitchEffect duration = '19s'>
          <svg className="playericon" viewBox="0 100 600 400"><path fill={this.props.game.players[2].color.colorCode} d="M448.8,161.925l-35.7-35.7l-160.65,160.65l35.7,35.7L448.8,161.925z M555.899,126.225l-267.75,270.3l-107.1-107.1
                  l-35.7,35.7l142.8,142.8l306-306L555.899,126.225z M0,325.125l142.8,142.8l35.7-35.7l-142.8-142.8L0,325.125z"/>
            </svg>
        </GlitchEffect>
            <div className="playerName">
            {this.props.game.players[2].username}
            </div>
          </div>
        :  <div className="field field3"></div> }

        { this.props.game.players[3] !== undefined ? 
          <div className="field field4">
          <svg style={{top:this.props.game.players[3].position.y,left:this.props.game.players[3].position.x}} className="cursor" id="Layer_1" version="1.0" viewBox="0 0 24 24"><path fill={this.props.game.players[3].color.colorCode} d="M7,2l12,11.2l-5.8,0.5l3.3,7.3l-2.2,1l-3.2-7.4L7,18.5V2"/></svg>
            
          <GlitchEffect duration = '21s'>
          <svg className="playericon" viewBox="0 100 600 400"><path fill={this.props.game.players[3].color.colorCode} d="M448.8,161.925l-35.7-35.7l-160.65,160.65l35.7,35.7L448.8,161.925z M555.899,126.225l-267.75,270.3l-107.1-107.1
                  l-35.7,35.7l142.8,142.8l306-306L555.899,126.225z M0,325.125l142.8,142.8l35.7-35.7l-142.8-142.8L0,325.125z"/>
            </svg>
        </GlitchEffect>
            <div className="playerName">
            {this.props.game.players[3].username}
            </div>
          </div>
        :  <div className="field field4"></div> }
      
        <div className="inviteLink">
          <GlitchEffect>
            <h3>INVITE LINK</h3>
          </GlitchEffect>
          <input className="inviteInput" value={this.props.roomId} onFocus={(event) => event.target.select()}/>
        </div>
      </div>
    );
  }
}