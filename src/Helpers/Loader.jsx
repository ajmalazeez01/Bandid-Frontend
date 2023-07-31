import React from 'react';
import ReactLoading from 'react-loading';

const Loader = ({ type, color }) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh', // Set the desired height for the container
    }}
  >
    <ReactLoading type={type} color={color} height={'10%'} width={'5%'} />
  </div>
);

export default Loader;
