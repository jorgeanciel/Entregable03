import React from 'react';
import ResidentInfo from './ResidentInfo';

const ResidentList = ({ residents }) => {
  return (
    <section className="flex flex-wrap gap-10 justify-center">
      {residents.map((resident) => (
        <ResidentInfo key={resident} endPointResident={resident} />
      ))}
    </section>
  );
};

export default ResidentList;
