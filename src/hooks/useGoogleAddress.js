import { useState, useEffect } from 'react';
import axios from 'axios';

const useGoogleAddress = (address, city, state, country) => {
  const [map, setMap] = useState({});
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}${city}${state}${country}&key=AIzaSyB4Rrluc9G5NDsDw9RVO9n5S4VLoyHJ1Is`;

  useEffect(async () => {
    const response = await axios(API);
    setMap(response.data.results[0].geometry.location);
  }, []);

  return map;
};

export default useGoogleAddress;
