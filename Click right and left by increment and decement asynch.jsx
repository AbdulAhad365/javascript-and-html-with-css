// import Pokemon from './Pokemon'
import React from 'react'
import { useState } from 'react';
// import Pajination from './Pajination'
const App = () => {
  const [left,setLeft]=useState(5);
  const [right,setRight]=useState(5);
  //for the left click
  const handleleft=()=>{
    if(left+1<=10){
    setLeft(left+1);
    setRight(right-1);
    }
}

  const handleRight=()=>{
    if(right+1<=10){
    setRight(right+1);
    setLeft(left-1);
  }
}
  return(
    <div>
      <h2>Game starts Now...</h2>
      <span>Left click</span>
      {/* <button onClick={()=>setLeft(left+1)}>left</button> */}
      <button onClick={handleleft}>left click</button>
      <span>{left}</span>
      <p>Right Click</p>
      <span>
        {/* <button onClick={()=>setRight(right+1)}>right</button> */}
        <button onClick={handleRight}>right click</button>
      </span>
      <span>{right}</span>
    </div>
  )
}
export default App
