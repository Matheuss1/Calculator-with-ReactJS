import React from 'react';

import Operators from './Operators/Operators'

import './skeyboard.scss';
import './skey.scss';

const keys = [7, 8, 9, 4, 5, 6, 1, 2, 3, '.', 0, '='];

export default function Keyboard({ expr, setExpr }) {
  console.log(expr);
  return (
    <div className='keyboard'>
      {keys.map(item => <p key={item} className='btns' onClick={
        expr.length >= 20 ? () => setExpr(expr) : () => setExpr(expr.push(item))
      }>{item}</p>)}

      {/* another callback function, nested to give
          back the operators*/}
      <Operators expr2={expr} setExpr2={setExpr} />
    </div>

  )
}
