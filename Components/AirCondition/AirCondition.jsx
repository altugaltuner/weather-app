import React, { useState, useEffect } from 'react';
import "./AirCondition.scss";

function AirCondition() {

    const temperatureImg = "../../src/assets/temperature.png";
    const windLogo = "../../src/assets/Windy.png";
    const chanceRain = "../../src/assets/chance-rain.png";
    const sunLogo = "../../src/assets/sun-logo.png";

    const daysOfWeek = [
        { id: 1, day: 'Paz', img: windLogo },
        { id: 2, day: 'Pzt', img: windLogo },
        { id: 3, day: 'Sal', img: chanceRain },
        { id: 4, day: 'Çar', img: windLogo },
        { id: 5, day: 'Per', img: sunLogo },
        { id: 6, day: 'Cum', img: temperatureImg },
        { id: 7, day: 'Cmt', img: sunLogo }
    ];

    const [activeDayId, setActiveDayId] = useState(daysOfWeek[0].id);



    const handleScroll = (direction) => {
        const currentIndex = daysOfWeek.findIndex(day => day.id === activeDayId);  // İndex'i doğru şekilde bul
        if (direction === 'left' && currentIndex > 0) {
            setActiveDayId(daysOfWeek[currentIndex - 1].id);  // Bir önceki günün id'sini aktar
            console.log(currentIndex, "if");
        } else if (direction === 'right' && currentIndex < daysOfWeek.length - 1) {
            setActiveDayId(daysOfWeek[currentIndex + 1].id);  // Bir sonraki günün id'sini aktar
            console.log(currentIndex, "else");
        }
        console.log(currentIndex, "fefe");
    };

    const handleClick = (day) => {
        setActiveDayId(day.id);
        console.log("sett", day);
    };


    return (
        <div className='air-condition'>
            <div className="days-scroll-container">
                <button className="scroll-button left" onClick={() => handleScroll('left')}>{'<'}</button>

                <div className="day-list">
                    {daysOfWeek.map((day) => (
                        <div key={day.id} className={`day ${activeDayId === day.id ? 'active' : ''}`} onClick={() => handleClick(day)}>
                            {day.day}
                            <img src={day.img} alt="" />
                        </div>
                    ))}
                </div>
                <button className="scroll-button right" onClick={() => handleScroll('right')}>{'>'}</button>
                <div className='clock-of-day'>8:00PM GMT</div>

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
        </div>
    )
}

export default AirCondition;