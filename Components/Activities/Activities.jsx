import React, { useState, useEffect } from 'react';
import "./Activities.scss";


function Activities() {

    const aquapark = "/../../src/assets/aquapark.png";
    const beach = "/../../src/assets/beach.png";
    const wood1 = "/../../src/assets/wood1.png";
    const wood2 = "/../../src/assets/wood2.png";

    return (
        <div className='activities-main'>
            <h2 className='activities-main-h2'>Activities in your area</h2>
            <div className='pic-div'>
                <div className='pic-div-one'>
                    <img src={aquapark} alt="" srcset="" />
                    <p className='pic-div-p'>2km away</p>
                </div>
                <div className='pic-div-one'>
                    <img src={beach} alt="" srcset="" />
                    <p className='pic-div-p'>1.5km away</p>
                </div>
                <div className='pic-div-one'>
                    <img src={wood1} alt="" srcset="" />
                    <p className='pic-div-p'>3km away</p>
                </div>
                <div className='pic-div-one'>
                    <img src={wood2} alt="" srcset="" />
                    <p className='pic-div-p'>2km away</p>
                </div>
            </div>
        </div>)
}

export default Activities;