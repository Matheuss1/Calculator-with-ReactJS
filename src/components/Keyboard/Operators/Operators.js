import React from 'react';

import './soperators.scss';

const operatorsList = ['AC', '÷', '*', '+', '-'];

export default function Operators({expr2, setExpr2}) {
  return (
    <div className="floatKeys">
      {operatorsList.map(item => <div key={item} className='oper' onClick={
        () => item === 'AC' ? 
          setExpr2(expr2.splice(0, expr2.length)) : item === '÷'
            ? setExpr2(expr2.push('/')) : setExpr2(expr2.push(item))
      }>{item}</div>)}
    </div>
  )
}
