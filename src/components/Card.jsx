import React from 'react';

const Card = ({ name, type, dimension, residents }) => {
  return (
    <section className="">
      <ul className="flex justify-center">
        <div className="border border-black flex flex-row gap-16 p-5 m-8 rounded-2xl shadow-lg md:shadow-pink-600 bg-black">
          <h2 className="text-2xl text-pink-600">
            <span className="text-2xl text-yellow-600">Planet : </span> {name}
          </h2>
          <li className="text-2xl text-green-700">
            <span className="text-2xl text-yellow-600">Type : </span>
            {type}
          </li>
          <li className="text-2xl text-green-700">
            <span className="text-2xl text-yellow-600">Dimension : </span>
            {dimension}
          </li>
          <li className="text-2xl text-green-700">
            <span className="text-2xl text-yellow-600">Resident : </span>
            {residents.length}
          </li>
        </div>
      </ul>
    </section>
  );
};

export default Card;
