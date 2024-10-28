// Country.js
import React, { useState } from 'react';
import './Country.css';
import CountryDetails from '../countryDetails/CountryDetails'; // Make sure to import with the correct case

const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
    const { name, flags, area, capital, independent, cca3, languages, population, currencies } = country;
    const [visited, setVisited] = useState(false); 

    // Toggle visited state
    const handleVisited = () => {
        setVisited(!visited);
    };

    // Pass the selected country to the parent function
    const passWithParams = () => {
        handleVisitedCountry(country);
    };

    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <h3 style={{ color: visited ? 'red' : 'white' }}>{name.common}</h3>
            <img src={flags.png} alt={`${name.common} flag`} />
            <h3>Capital: {capital ? capital[0] : 'N/A'}</h3>
            <h4>Area: {area} KM²</h4>
            <h4>Independent: {independent ? 'Yes' : 'No'}</h4>
            <p><small>Code: {cca3}</small></p>
            <h4>Languages: {languages ? Object.values(languages).join(', ') : 'N/A'}</h4>
            <h4>
                Currencies: 
                {currencies 
                    ? Object.values(currencies).map(currency => `${currency.name} (${currency.symbol})`).join(', ') 
                    : 'N/A'}
            </h4>
            <h3>Population: {population}</h3>
            <hr />
            
            <button onClick={passWithParams}>Mark Visited</button> 
            <br /><br />
            
            <button onClick={() => handleVisitedFlags(country.flags.png)}>Visited Flag</button>
            <br /><br />

            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            <p>{visited ? 'I have visited this country' : 'I want to visit this country'}</p>

            <hr />
           
            <CountryDetails 
                country={country}
                handleVisitedCountry={handleVisitedCountry}
                handleVisitedFlags={handleVisitedFlags}
            />
        </div>
    );
};

export default Country;
