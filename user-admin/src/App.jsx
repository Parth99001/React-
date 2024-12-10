// import React, { Component } from 'react'
import Login from './components/Login'
import Home from './components/Home'
import { Route, Routes } from 'react-router'
import Admin from './components/Admin'

const App = () => {
  return (
    <Routes>
    <Route path ="/" element ={<Login/>}/> 
   <Route path ="/Home" element ={<Home/>}/>
   <Route path="/Admin" element={<Admin/>} />
    </Routes>
  )
}

export default App