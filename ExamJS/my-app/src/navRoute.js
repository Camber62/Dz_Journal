import React from 'react';
import {Route, Routes, Link} from "react-router-dom";
import Home from "../src/component/home";
import List from "../src/component/NavTable";
import Inform from "../src/component/inform";

const Main = () => {
    return (
        <>
            <header>
                <div className='logo'>Logo</div>
                <div className='nav'>
                    <Link to="/">Home</Link>
                    <Link to="/List">List</Link>
                    <Link to="/Inform">Inform</Link>
                </div>
            </header>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/List" element={<List/>}/>
                <Route path="/inform" element={<Inform/>}/>
            </Routes>
            <footer>Footer</footer>
        </>
    );
};
export default Main;