import React from 'react';
import {CSSTransition }from 'react-transition-group'
import {StrictMode} from "react";
import  {BrowserRouter}  from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './style/Style.css';
import Main from './navRoute';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <BrowserRouter>
            <Main/>
        </BrowserRouter>
    </StrictMode>
);