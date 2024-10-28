
import React from 'react';
import CountryData from '../countryData/CountryData';

const CountryDetails = ( props ) => {
    const {country, handleVisitedCountry, handleVisitedFlags}=props
    if (!country) return <div>Loading country details...</div>; // Guard against undefined country

    return (
        <div>
            <h4>Country Detail</h4>
            <hr />
            {/* <CountryData
                country={country}
                handleVisitedCountry={handleVisitedCountry}
                handleVisitedFlags={handleVisitedFlags}
            > </CountryData> */}
<CountryData{...props}> </CountryData>
         
        </div>
    );
};

export default CountryDetails;
