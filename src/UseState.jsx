import React, { useState } from 'react'

const UseState = ()=> {

  let [count,setCount] = useState(0);

  let [bgcolor,setBgColor] = useState('light');

  const add = ()=>{
    count = count+1;
    setCount(count);
    console.log(count);
  }

  const minus = ()=>{
    count = count-1;
    setCount(count);
    console.log(count);
  }

  const bgColor = ()=>{
    setBgColor((bgcolor==='light')?'dark':'light');
  }

  return (
    <div className='UseStateFunctionTest'>
      <p>Count Value: {count}</p>
      <button onClick={add}>Increment</button>
      <button onClick={minus}>Decrement</button>
      <button onClick={bgColor} style={{background: bgcolor==='light'?'#eaeaea':'#000',color: bgcolor==='light'?'#000':'#fff'}}>change</button>
    </div>
  )
}

export default UseState