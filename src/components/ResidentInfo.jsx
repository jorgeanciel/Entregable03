import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ResidentInfo = ({ endPointResident }) => {
  const [residentInfo, setResidentInfo] = useState(null);

  const getLocationInfo = async () => {
    try {
      const res = await axios.get(endPointResident);
      setResidentInfo(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLocationInfo();
  }, []);

  return (
    <div>
      {residentInfo && (
        <article className="p-5 border border-green-400 py-0.5 rounded-md shadow-xl md:shadow-green-500 bg-gray-700">
          <div>
            <img src={residentInfo.image} alt={residentInfo.name} />
          </div>
          <h3 className="text-xl font-bold text-center text-green-600 pt-3">
            {residentInfo.name}
          </h3>
          <ul className="p-5 leading-7">
            <li className="text-yellow-500">
              <span className="p-5 font-semibold text-lg text-gray-500">Specie : </span>
              {residentInfo.species}
            </li>
            <li className="text-yellow-500">
              <span className="p-5 font-semibold text-lg text-gray-500">Status : </span>
              {residentInfo.status}
            </li>
            <li className="text-yellow-500">
              <span className="p-5 font-semibold text-lg text-gray-500">Origen : </span>
              {residentInfo.origin.name}
            </li>
            <li className="text-yellow-500">
              <span className="text-gray-500 font-semibold text-lg">
                Appearances in episodes :{' '}
              </span>
              {residentInfo.episode.length}
            </li>
          </ul>
        </article>
      )}
    </div>
  );
};

export default ResidentInfo;
