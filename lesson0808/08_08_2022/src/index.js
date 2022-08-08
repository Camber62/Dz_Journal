import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import RenderComponent from "./App";

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <RenderComponent />
  </React.StrictMode>
);
