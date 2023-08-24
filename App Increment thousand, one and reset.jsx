// import Pokemon from './Pokemon'
import React from 'react'
import { useState } from 'react';
// import Pajination from './Pajination'
// This is the right place to define a 
const Button=(props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)
const App=()=>{
  //Now, the value
  const [value,setValue]=useState(0);
  const Display=props=><div>
    {props.value}
  </div>

  return(
    <>
    <div>
      <Display value={value}/>
      <Button text={"Thousand"} handleClick={()=>setValue(value+1000)}/>
      <Button text={"reset"} handleClick={()=>setValue(0)}/>
      <Button text={"Increments"} handleClick={()=>setValue(value+1)}/>
    </div>
    </>
  )
}
export default App;
