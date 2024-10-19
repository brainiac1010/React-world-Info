import './Country.css'
const Country = ({country}) => {
   
    const {name,flags,area,capital} = country;
  
    return (
        <div className='country' >
            <h3 >  {name.common} </h3>
         <img src={flags.png} alt="" />
         <h3> Captil : {capital}</h3>
         <h4> area: {area} KM</h4>

        </div>
    );
};

export default Country;