// Countries.js
import { useEffect, useState } from "react";
import Country from "../country/country";
import './Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    // Fetch countries data from API on component mount
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, []);

    // Add a country to the visited list
    const handleVisitedCountry = (country) => {
        console.log('Add this to your visited country:', country);
        const newVisitedCountry = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountry);
    };

    // Handle visited flags (add or track visited flags)
    const handleVisitedFlags = (flag) => {
        console.log('Flag adding:', flag);
        const newVisitedFlag = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlag);
    };

    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            
            {/* Visited countries list */}
            <div>
                <h5>Visited countries list: {visitedCountries.length}</h5>
                <ul>
                    {visitedCountries.map(country => (
                        <li key={country.cca3}>{country.name.common}</li>
                    ))}
                </ul>
            </div>

            {/* Display visited flags */}
            <div className="flag-container">
                {visitedFlags.map((flag, index) => (
                    <img key={index} src={flag} alt="Visited Flag" />
                ))}
            </div>

            {/* Display all countries */}
            <div className="country-container">
                {countries.map(country => (
                    <Country
                        key={country.cca3}
                        country={country}
                        handleVisitedCountry={handleVisitedCountry}
                        handleVisitedFlags={handleVisitedFlags} // Fixed prop name
                    />
                ))}
            </div>
        </div>
    );
};

export default Countries;
