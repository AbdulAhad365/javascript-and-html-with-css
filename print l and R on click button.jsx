// import Pokemon from './Pokemon'
import React from 'react'
import { useState } from 'react';
// import Pajination from './Pajination'
const App=()=>{
  const [left,setLeft]=useState(1);
  const [right,setRight]=useState(0);
  const [overAll,setOverall]=useState([]);

//left
const r=()=>{
  setOverall(overAll.concat("R "));
  setRight(right+1);
}
//right
const l=()=>{
  setOverall(overAll.concat("L "));
  setLeft(left+1);
}
return(
  <div>
    {/* <p>Left:</p> */}
    <span>{left}</span>
    <button onClick={l}>Left</button>
    <span>{right}</span>
    <button onClick={r}>right</button>
    <p>{overAll}</p>
    
  </div>
)
}
export default App
