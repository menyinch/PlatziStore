import React, { useContext } from 'react';

import { AppContext } from '../context/AppContext';
import useGoogleAddress from '../hooks/useGoogleAddress';

import Map from '../components/Map';

import '../styles/components/Success.css';

const Success = () => {
  const { state } = useContext(AppContext);
  const { buyer } = state;
  const location = useGoogleAddress(
    buyer[0].address,
    buyer[0].city,
    buyer[0].state,
    buyer[0].country
  );

  return (
    <div className='Success'>
      <div className='Success-content'>
        <h2>{`${buyer.name}, Gracias por tu compra`}</h2>
        <span>Tu pedido llegará en 3 días a tu dirección</span>
        <div className='Success-map'>
          <Map data={location} />
        </div>
      </div>
    </div>
  );
};

export default Success;
