
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MyApp
          </Typography>
          <Button color="inherit">
            <Link 
            to={'/l'}
            style={{ textDecoration: "none", color: "white"}}>
              Login
          </Link>
          </Button>
          <Button color="inherit">
            <Link 
            to={'/r'}
            style={{ textDecoration: "none", color: "white"}}>
              Registration
            </Link>
          </Button>
          <Button color="inherit">
          <Link 
            to={'/t'}
            style={{ textDecoration: "none", color: "white"}}>
              Table
          </Link>
          </Button>
          <Button color="inherit">
            <Link
            to={'/s'}
            style={{ textDecoration: "none", color: "white"}}>
              Hehe
            </Link>
          </Button>
          <Button color="inherit">
            <Link
            to={'/p'}
            style={{ textDecoration: "none", color: "white"}}>
              Three
            </Link>
          </Button>
          <Button color="inherit">
            <Link
            to={'/f'}
            style={{ textDecoration: "none", color: "white"}}>
              Form
            </Link>
          </Button>
          <Button color="inherit">
            <Link
            to={'/g'}
            style={{ textDecoration: "none", color: "white"}}>
              Cards
            </Link>
          </Button>
          <Button color="inherit">
            <Link
            to={'/a'}
            style={{ textDecoration: "none", color: "white"}}>
              Api
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar
