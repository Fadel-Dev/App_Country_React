import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import Card from './Card';


const Countries = () => {
    const continents = ["Africa", "Europe", "America", "Asia", "Oceani"];

    const [rangeValue, setRangeValu] = useState();
    const [myContinent, setMyContinent] = useState("");

    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all").then((res) => {
            settData(res.data)
        })
    }

    )

    const [data, settData] = useState([]);
    return (
        <div>
            <h1>Our Countries</h1>
            <input type="range" id='countri' min="1" max="250"
                defaultValue={setRangeValu}
                onChange={(e) => setRangeValu(e.target.value)}
            />

            {
                continents.map((continent, index) =>
                    <>
                        <input type="radio" name='continent' id={continent}
                            onChange={(e) => setMyContinent(e.target.id)}
                        />
                        <label htmlFor='continent' key={index}>{continent}</label>
                    </>
                )
            }

            <ul>
                {
                    data
                        .filter((country) => country.region.includes(myContinent))
                        .slice(0, rangeValue).map((country, index) =>
                            <Card key={index} country={country} />


                        )
                }
            </ul>


        </div>
    );
};

export default Countries;