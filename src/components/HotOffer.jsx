import React from 'react';
import carData from '../data/car.json'; 
import '../styles/hot-offer.css';
import CarCard from './CarCard';

const HotOffer = () => {
 
  const isPending = false; 
  const error = null; 

  return (
    <>
      {isPending && <h6 className="text-center">Loading......</h6>}
      {error && <h6 className="text-center">{error}</h6>}

      {carData &&
        carData
          .slice(0, 6) // Display only the first 6 items
          .map((item) => <CarCard item={item} key={item.id} />)} 
    </>
  );
};

export default HotOffer;
