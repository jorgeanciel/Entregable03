import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getRandomNumber } from './utils/getRandomNumber';
import Card from './components/Card';
import rickAnMortyImg from './assets/rickAndMorty.jpg';

import ResidentList from './components/ResidentList';

const App = () => {
  const [locationInfo, setLocationInfo] = useState(null);
  const [idInputValue, setIdInputValue] = useState('');

  const getLocationRandom = () => getRandomNumber(1, 126);

  const loadLocationInfo = async (idLocation) => {
    const url = `https://rickandmortyapi.com/api/location/${idLocation}`;
    try {
      const res = await axios.get(url);
      setLocationInfo(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const idHandleChange = (e) => {
    const newValue = e.target.value;

    if (/^\d*$/.test(newValue)) setIdInputValue(newValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (idInputValue) loadLocationInfo(idInputValue);
    else loadLocationInfo(getLocationRandom());
  };

  useEffect(() => {
    loadLocationInfo(getLocationRandom());
  }, []);

  return (
    <div className="bg-green-200 font-mono">
      <img className="w-full  h-96" src={rickAnMortyImg} alt="" />
      <h2 className="text-center p-10 font-bold tracking-widest text-2xl text-pink-600">
        Discover which inhabitants exist on each planet...
      </h2>
      <form className="flex justify-center m-0 p-0 gap-5" onSubmit={handleSubmit}>
        <input
          className="text-pink-600 font-bold w-80 rounded-2xl text-center bg-yellow-100 shadow-xl hover:shadow-white transition duration-500 ease-in-out hover:bg-black transform hover:-translate-y-1 hover:scale-110"
          type="search"
          name="id-location"
          value={idInputValue}
          onChange={idHandleChange}
          placeholder="Enter number 1 - 126"
        />
        <input
          type="submit"
          value="search"
          className="text-2xl text-yellow-500 cursor-pointer "
        />
      </form>

      {locationInfo && <Card {...locationInfo} />}
      {locationInfo && <ResidentList residents={locationInfo.residents} />}
    </div>
  );
};

export default App;
