import React from 'react';
import ReactDOM from 'react-dom/client';
import Arr from './coponent/dz1';
import NumGenerator from './coponent/dz3';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Arr />
    <NumGenerator />
  </React.StrictMode>
);

