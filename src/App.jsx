import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './LandingPage'
import DevMode from './DevMode'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        
        <Route path='/dev' element={<DevMode />}/>
      </Routes>
    </BrowserRouter>
  )
}
