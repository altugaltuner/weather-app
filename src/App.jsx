import { useState } from 'react'
import './App.scss'
import LeftTop from '../Components/LeftTop/LeftTop'
import Navbar from '../Components/Navbar/Navbar'
import Activities from "../Components/Activities/Activities"

function App() {

  return (
    <div className='app-main'>
      <LeftTop />
      <div className='app-row'>
        <Navbar />
        <Activities />
      </div>
    </div>
  )
}

export default App
