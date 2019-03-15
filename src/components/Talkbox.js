import React, { Component } from 'react';
import Typist from 'react-typist';

export default class Talkbox extends Component {
    render() {
      return (
        <div className="talkbox" style={this.props.style}>
            <Typist>
              <Typist.Delay ms={1000} />
                WELCOME, USER
              <Typist.Delay ms={1000} />
              <Typist.Backspace count={13} />
                IDENTIFY YOURSELF
              <Typist.Delay ms={1000} />
            </Typist>
            
          </div>
      );
    }
  }