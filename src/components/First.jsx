import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const First = () => {
  return (
    <div>
      <input type="text" placeholder='UserName'/>
      <br /><br />
      <input type="password" name="" id="" placeholder='PassWord'/>
      <br /><br />
      <a href=""><Button>Login</Button></a>
      <br /> <br /><br />
      <Typography variant="h3"> HUI HUI </Typography>
      <br /><br />
      <TextField variant="outlined" label="Username" /> <br />
      <TextField variant="standard" label="Username" /> <br />
      <TextField variant="filled" label="Username" /> <br />
      <Button variant="text" color='success' >wow</Button>
      <Button variant="contained" >toot</Button>
      <Button variant="standard" >obj</Button>
    </div>
  )
}

export default First
