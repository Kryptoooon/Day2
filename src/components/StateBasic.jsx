import { Button, TextField } from '@mui/material';
import React, { useState } from 'react'

var counter=0;
const StateBasic = () => {
  
  var [name, setName] = useState(0);
  const inputHandler1 = (e) => {
    console.log("dec");
    counter--;
    setName(counter);
  }
  const inputHandler2 = (e) => {
    console.log("inc");
    counter++;
    setName(counter);
  }
  return (
    <div style={{marginLeft: "0%", marginTop: "15%", textAlign: "center"}}>
      {name}
      <br />
      <Button variant='filled' onClick={inputHandler1}>DECREMENT</Button>
      <Button variant='filled' onClick={inputHandler2}>INCREMENT</Button>
    </div>
  )
}

export default StateBasic
