import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({ data }) => {
  const mapstyles = {
    height: '50vh',
    width: '100%',
  };

  const defaultCenter = {
    lat: data.lat,
    lng: data.lng,
  };

  return (
    <LoadScript googleMapsApiKey='AIzaSyB0nhu3gVcDmpq_UK6-s6a4j3qrh28I_ZU'>
      <GoogleMap mapContainerStyle={mapstyles} zoom={9} center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
