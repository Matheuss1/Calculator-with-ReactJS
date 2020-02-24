import React, { Component } from 'react';

import './sscreen.scss'
import { evaluate, format } from 'mathjs';

const operatorsList = ['AC', '÷', '*', '+', '-', '.'];
var temp;

export default class Screen extends Component {

  render() {
    let calc = this.props.expression.join('');
    if (calc.length === 0) 
      temp = [];
    else if (calc.slice(-1)[0] === '=') {
      calc = [];
      calc.push(temp);
      while(this.props.expression.length > 0)
        this.props.expression.pop();

      this.props.expression.push(temp);
    }

    try {
      let result = evaluate(calc);

      if (result)
        temp = result;

      return (
        <div className="screen">
          <p className="result">{temp}</p>
          <p className="exp">{calc}</p>
        </div>
      )
    }
    catch {
      return (        
        <div className="screen">
          <p className="result">{temp}</p>
          <p className="exp">{calc}</p>
        </div>
      )
    }
  }
}
