import React from 'react';
import { NavLink } from 'react-router-dom';
import './Styles/Navigation.css'


const Navigation = () => {
    return (
        <div className='nav'>
            <ul>
                <NavLink to='/home'>
                    <li className='li'>Acceuille</li>
                </NavLink>
                <NavLink to='/about'>
                    <li className='li'>A propos</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;