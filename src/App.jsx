import { useState } from 'react'
import './App.scss'
import LeftTop from '../Components/LeftTop/LeftTop'
import Navbar from '../Components/Navbar/Navbar'

function App() {

  return (
    <div className='app-main'>
      <LeftTop />
      <Navbar />
    </div>
  )
}

export default App
