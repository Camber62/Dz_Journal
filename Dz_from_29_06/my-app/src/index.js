import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import Arr from './coponent/dz1';
import NumGenerator from './coponent/dz3';
import DivColor from "./coponent/dz2";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Arr/>
        <NumGenerator/>
        <DivColor/>
    </React.StrictMode>
);

