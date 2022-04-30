import React from 'react';
import './Styles/Card.css';

const Card = ({ country }) => {
    return (
        <div className='first'>
            <div className='card'>
                <li> <img className='flag' src={country.flags.svg} />
                    <h3 className='name'>{country.translations.fra.common}</h3>
                    <h5 className='population'>{country.population.toLocaleString()}</h5>
                    <h4 className='continent'>{country.continents}</h4>

                </li>
            </div>
        </div>
    );
};

export default Card;