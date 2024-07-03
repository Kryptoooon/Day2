import React from 'react'
import { Button, Slider, TextField, Typography } from '@mui/material'

const Registration = (props) => {
  return (
    <div style={{textAlign: "center", marginTop: "15%"}}>
      <TextField variant="filled" label="Name" value={props.name}/> <br /><br />
      <TextField variant="filled" label="Age" value={props.age}/> <br /><br />
      <TextField variant="filled" label="Email" value={props.email}/> <br /><br />
      <TextField variant="filled" label="Father's Name" value={props.father}/> <br /><br />
      <TextField variant="filled" label="Mother's Name" value={props.mother}/> <br />
      <br />
      <TextField variant="filled" label="Password" value={props.password}/> <br /><br />
      <TextField variant="filled" label="Confirm Password" value={props.password}/> <br /><br />
      <Button variant='contained'>Submit</Button>
    </div>
  )
}

export default Registration
