import React from 'react';
import {StrictMode} from "react";
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import NavigationHeader from "./Components/HeadrNav";
import  './Style/Style.css'

const root = ReactDOM.createRoot(document.getElementById('root'));


        root.render(
            <StrictMode>
                <BrowserRouter>
                    <NavigationHeader/>
                </BrowserRouter>
            </StrictMode>
        );


