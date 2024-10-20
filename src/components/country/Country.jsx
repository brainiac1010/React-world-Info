import './Country.css';

const Country = ({ country }) => {
    console.log(country);

    const { name, flags, area, capital, languages, population,currencies } = country;

    return (
        <div className='country'>
            <h3>{name.common}</h3>
            <img src={flags.png} alt={`${name.common} flag`} />
            <h3>Capital: {capital ? capital[0] : 'N/A'}</h3>
            <h4>Area: {area} KM²</h4>
            <h4>Languages: {languages ? Object.values(languages).join(', ') : 'N/A'}</h4>
            <h4>
                Currencies: 
                {currencies ? Object.values(currencies).map(currency => `${currency.name} (${currency.symbol})`).join(', ') : 'N/A'}
            </h4>
            <h3>population : {population}</h3>
        </div>
    );
};

export default Country;
