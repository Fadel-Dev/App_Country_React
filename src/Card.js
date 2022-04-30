import React from 'react';
import './Styles/Card.css';

const Card = ({ country }) => {
    return (
        <div className='card'>
            <li> <img className='flag' src={country.flags.svg} />
                <h1 className='name'>{country.translations.fra.common}</h1>
                <h2 className='population'>{country.population.toLocaleString()}</h2>
                <h3 className='continent'>{country.continents}</h3>

            </li>
        </div>
    );
};

export default Card;