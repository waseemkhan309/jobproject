/* eslint-disable no-unused-vars */
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Home from './pages/Home'
import Banqat from './pages/Banqat'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/banquate' element={<Banqat />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App