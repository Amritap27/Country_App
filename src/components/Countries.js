import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const url = 'https://restcountries.com/v3.1/all';

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const fetchCountries = async () => {
    const response = await fetch(url);
    const countries = await response.json();
    setCountries(countries);
    console.log(countries);
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <>
      <section className="grid">
        {countries.map((country) => {
          const { name, population, region, capital, flags } = country;
          return (
            <article key={name.official}>
              <div>
                <img src={flags.png} alt={flags.alt} />
                <div className="details">
                  <h4 className="country-name">Name: {name.common} </h4>
                  <h4>
                    {' '}
                    Population: <span>{population}</span>{' '}
                  </h4>
                  <h4>
                    {' '}
                    Region: <span>{region}</span>{' '}
                  </h4>
                  <h4>
                    {' '}
                    Capital: <span>{capital}</span>{' '}
                  </h4>
                  <Link to={`/countries/${name.common}`}>Learn more</Link>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Countries;
