import React, { useState, useEffect } from 'react';
import "./LeftTop.scss";

function LeftTop() {

    return (
        <div className='left-top-main'>
            <div className="select-cities-div">
                <select className="select-cities-div-select">
                    <option value="">Select Cities</option>
                    <option value="new-york">New York</option>
                    <option value="tokyo">Tokyo</option>
                    <option value="paris">Paris</option>
                </select>
            </div>
            <div className='weather-state'>Cloudy</div>
            <div className='temperature'>26C</div>
            <div className='todays-date'>Sunday | 12 Dec 2023</div>
        </div>)
}

export default LeftTop;