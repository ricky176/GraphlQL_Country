import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_COUNTRY_DETAILS } from './queries';
import './Country.css';

const CountryDetails = ({ code }) => {
  const { loading, error, data } = useQuery(GET_COUNTRY_DETAILS, {
    variables: { code },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { country } = data;

  return (
    <div className="details">
      <p><strong>Country Name:</strong> {country.name}</p>
      <p><strong>Native Name:</strong> {country.native}</p>
      <p><strong>Capital:</strong> {country.capital}</p>
      <p><strong>Currency:</strong> {country.currency}</p>
      <p><strong>Languages:</strong> {country.languages.map(lang => lang.name).join(', ')}</p>
    </div>
  );
};

export default CountryDetails;