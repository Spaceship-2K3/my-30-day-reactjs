import { tenHighestPopulation } from "./data";
const handlePopulation = (num) => {
    const world = tenHighestPopulation[0].population;
    return (num / world) * 100;
};

const Ex3 = () => {
    return (
        <>
            <h1>World population</h1>
            <ul className="listCountry">
                {tenHighestPopulation.map((country) => {
                    return (
                        <li className="itemCountry" key={country.country}>
                            <span className="countryName">
                                {country.country}
                            </span>
                            <div className="countrySize">
                                <span
                                    className="countryLength"
                                    style={{
                                        width:
                                            handlePopulation(
                                                country.population
                                            ) + "%",
                                    }}
                                ></span>
                            </div>
                            <span className="countryPopulation">
                                {country.population}
                            </span>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default Ex3;
