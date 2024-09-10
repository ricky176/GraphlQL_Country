import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_COUNTRIES } from './queries';
import CountryDetails from './CountryDetails';
import './Country.css'; 

const CountryList = () => {
  const { loading, error, data } = useQuery(GET_COUNTRIES);
  const [selectedCountry, setSelectedCountry] = useState(null);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="container">
      <h1>List Of Countries</h1>
      <ul>
        {data.countries.map(({ code, name }) => (
          <li key={code}>
            {name}
            <button onClick={() => setSelectedCountry(code)}>Details</button>
          </li>
        ))}
      </ul>
      {selectedCountry && <CountryDetails code={selectedCountry} />}
    </div>
  );
};

export default CountryList;