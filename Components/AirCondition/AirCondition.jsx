import React, { useState, useEffect } from 'react';
import "./AirCondition.scss";

function AirCondition() {
    const temperatureImg = "../../src/assets/temperature.png";
    const windLogo = "../../src/assets/Windy.png";
    const chanceRain = "../../src/assets/chance-rain.png";
    const sunLogo = "../../src/assets/sun-logo.png";

    return (
        <div className='air-condition'>
            <div className='scroll-bar-air'>
                <p className='scroll-bar-p'>8:00PM GMT</p>
            </div>
            <div className='air-conditions-column-panel'>
                <h3>AIR CONDITIONS</h3>
                <div className='condition-one'>
                    <img src="" alt="" srcset="" />
                    <p className='air-condition-p'><img src={temperatureImg} alt="" srcset="" /> Real Feel</p>
                    <p className='conditions-stats'>30°C</p>
                </div>
                <div className='condition-one'>
                    <img src="" alt="" srcset="" />
                    <p className='air-condition-p'><img src={windLogo} alt="" srcset="" /> Wind</p>
                    <p className='conditions-stats'>0.8 km/hr</p>
                </div>
                <div className='condition-one'>
                    <img src="" alt="" srcset="" />
                    <p className='air-condition-p'><img src={chanceRain} alt="" srcset="" /> Chance of Rain</p>
                    <p className='conditions-stats'>%2</p>
                </div>
                <div className='condition-one'>
                    <img src="" alt="" srcset="" />
                    <p className='air-condition-p'><img src={sunLogo} alt="" srcset="" /> UV Index</p>
                    <p className='conditions-stats'>4</p>
                </div>
            </div>
        </div>)
}

export default AirCondition;