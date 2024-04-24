import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';
import exploreLogo from '../../src/assets/explore-logo.png';
import locationLogo from '../../src/assets/location-logo.png';
import settingsLogo from '../../src/assets/settings-logo.png';
import weatherLogo from '../../src/assets/weather-logo.png';
import profileLogo from '../../src/assets/profile.png';

const Navbar = () => {
    return (
        <nav className="navigation">

            <NavLink to="/profile" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
                <i className='i-logo-top'><img className='profile-class' src={profileLogo} alt="" srcset="" /></i>
            </NavLink>

            <NavLink to="/weather" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
                <i className='i-logo'><img className='logo-class' src={weatherLogo} alt="" srcset="" /></i>
                <p className='logo-titles'>Weather</p>
            </NavLink>

            <NavLink to="/explore" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
                <i className='i-logo'><img className='logo-class' src={exploreLogo} alt="" srcset="" /></i>
                <p className='logo-titles'>Explore</p>
            </NavLink>

            <NavLink to="/cities" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
                <i className='i-logo'><img className='logo-class' src={locationLogo} alt="" srcset="" /></i>
                <p className='logo-titles'>Cities</p>
            </NavLink>

            <NavLink to="/settings" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
                <i className='i-logo'><img className='logo-class' src={settingsLogo} alt="" srcset="" /></i>
                <p className='logo-titles'>Settings</p>
            </NavLink>

        </nav>
    );
};

export default Navbar;
