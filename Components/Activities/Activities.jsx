import React, { useState, useEffect } from 'react';
import "./Activities.scss";


function Activities() {

    const aquapark = "/../../src/assets/aquapark.png";
    const beach = "/../../src/assets/beach.png";
    const wood1 = "/../../src/assets/wood1.png";
    const wood2 = "/../../src/assets/wood2.png";

    return (
        <div className='activities-main'>
            <h2>Activities in your area</h2>
            <div className='pic-div'>
                <img src={aquapark} alt="" srcset="" />
                <img src={beach} alt="" srcset="" />
                <img src={wood1} alt="" srcset="" />
                <img src={wood2} alt="" srcset="" />
            </div>
        </div>)
}

export default Activities;