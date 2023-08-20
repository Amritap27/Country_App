import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './country.css';

const Country = () => {
  const [country, setCountry] = useState([]);
  const { name } = useParams();
  useEffect(() => {
    const fetchCountryData = async () => {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${name}`
      );
      const country = await response.json();
      setCountry(country);
      console.log(country);
    };
    fetchCountryData();
  }, [name]);

  return (
    <div>
      <section className="country">
        <Link to="/" className="btn btn-light">
          <i className="fas fa-arrow-left"></i> Back
        </Link>
        {country.map((c) => {
          const {
            flags,
            name,
            population,
            region,
            subregion,
            capital,
            area,
            tld,
            continents,
            timezones,
            // currencies,
            // languages,
            borders,
          } = c;
          return (
            <article key={name.common}>
              <div className="country-inner">
                <div className="flag">
                  <img src={flags.png} alt={flags.alt} />
                </div>
                <div className="country-details">
                  <div>
                    <h2>{name.common}</h2>
                    <h5>
                      Region: <span>{region}</span>
                    </h5>
                    <h5>
                      Sub region: <span>{subregion}</span>
                    </h5>
                    <h5>
                      Capital: <span>{capital}</span>
                    </h5>
                    <h5>
                      Area: <span>{area}</span>
                    </h5>
                  </div>
                  <div>
                    <h5>
                      Population: <span>{population}</span>
                    </h5>
                    <h5>
                      Continents: <span>{continents}</span>
                    </h5>
                    <h5>
                      Timezones : <span>{timezones}</span>
                    </h5>
                    <h5>
                      Top level domain: <span>{tld}</span>
                    </h5>
                    <h5>
                      <a
                        className="btn btn-outline-primary col-md-6 rounded-0 mx-2"
                        target="_blank"
                        rel="noreferrer"
                        role="button"
                        href={`https://maps.google.com/?q=${country.latlng}`}
                      >
                        Show Map
                      </a>
                    </h5>
                    {/* <h5>
                    native Name: <span>{name.nativeName}</span>
                  </h5>
                  <h5>
                    Currencies: <span>{currencies}</span>
                  </h5>
                  <h5>
                    Language: <span>{languages}</span>
                  </h5> */}
                  </div>
                </div>
              </div>
              <div>
                <h3>Border Countries: </h3>
                <div className="borders">
                  {borders.map((border) => {
                    return (
                      <ul key={border}>
                        <li>{border}</li>
                      </ul>
                    );
                  })}
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default Country;
