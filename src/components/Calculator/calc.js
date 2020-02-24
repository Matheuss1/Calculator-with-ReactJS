import React, { Component } from 'react';

import Screen from '../Screen/Screen';
import Keyboard from '../Keyboard/Keyboard';


import './scalc.scss';

export default class calc extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       expression: []
    }
  }
  
  render() {
    return (
      <div className="Container">
        <Screen expression={this.state.expression}/>
        <Keyboard expr={this.state.expression} setExpr={
          (expr) => this.setState({expr})}/>
      </div>
    )
  }
}
