import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_COUNTRIES } from './queries';
import CountryDetails from './CountryDetails';
import './Country.css';
import Modal from './Modal';

const CountryList = () => {
  const { loading, error, data } = useQuery(GET_COUNTRIES);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = (code) => {
    setSelectedCountry(code);
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="container">
      <h1>List Of Countries</h1>
      <ul>
        {data.countries.map(({ code, name }) => (
          <li key={code}>
            {name}
            <button onClick={() => openModal(code)}>Details</button>
          </li>
        ))}
      </ul>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Country Details</h2>
        <p></p>
        {selectedCountry && <CountryDetails code={selectedCountry} />}
      </Modal>
    </div>

  );
};

export default CountryList;