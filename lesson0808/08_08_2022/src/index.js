import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import RenderComponent from "./App";
import HomeLesson from "./HomeTest";

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    {/*<RenderComponent />*/}
      <HomeLesson/>
  </React.StrictMode>
);
