// CountryData.js
import React from 'react';

const CountryData = ({ country,handleVisitedCountry, }) => {
    if (!country) return <div>No data available</div>; // Guard against undefined country
console.log("insiade country data " ,country,handleVisitedCountry)
    return (
        <div>
            <p><small>Country Data: {country?.name?.common || 'Unknown Country'}</small></p>
        </div>
    );
};

export default CountryData;
