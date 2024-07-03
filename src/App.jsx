import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import First from './components/First'
import Registration from './components/Registration'
import Tab from './components/Tab'
import Navbar from './components/Navbar'
import { Form, Route, Routes } from 'react-router-dom'
import StateBasic from './components/StateBasic'
import Three from './components/Three'
import FormBasics from './components/FormBasics'
import GridCard from './components/GridCard'
import ApiGet from './components/ApiGet'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1>Login Page</h1> */}
      {/* <First/>
      <Registration/> */}
      {/* <Tab/> */}
      <Navbar/>
      <Routes>
        <Route path='/s' element={<StateBasic/>}/>
        <Route path='/l' element={<First/>}/>
        <Route path='/r' element={<Registration name="rarar"/>}/>
        <Route path='/t' element={<Tab/>}/>
        <Route path='/p' element={<Three/>}/>
        <Route path='/f' element={<FormBasics/>}/>
        <Route path='/g' element={<GridCard/>}/>
        <Route path='/a' element={<ApiGet/>}/>
      </Routes>

    </>
  )
}

export default App
