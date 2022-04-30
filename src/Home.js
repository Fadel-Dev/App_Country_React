import React from 'react';
import { NavLink } from 'react-router-dom';
import Navigation from './Navigation';
import Countries from './Countries';

const Home = () => {
    return (
        <div>
            <Navigation />
            <h1>Here is our Home page </h1>
            <Countries />
        </div>
    );
};

export default Home;