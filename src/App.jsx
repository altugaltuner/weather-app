import { useState } from 'react'
import './App.scss'
import LeftTop from '../Components/LeftTop/LeftTop'
import Navbar from '../Components/Navbar/Navbar'
import Activities from "../Components/Activities/Activities"
import DayForecast from "../Components/DayForecast/DayForecast"
import AirCondition from '../Components/AirCondition/AirCondition'
import bigSemiCloudyImg from '../src/assets/big-semi-cloudy.png'

function App() {

  return (
    <div className='app-main'>
      <div className='top-row'>
        {/* <LeftTop />
        <img src={bigSemiCloudyImg} alt="" srcset="" /> */}
      </div>
      <div className='app-row'>
        <Navbar />
        <div className='app-column'>
          <Activities />
          {/* <DayForecast /> */}
        </div>
        {/* <AirCondition /> */}
      </div>
    </div>
  )
}

export default App
