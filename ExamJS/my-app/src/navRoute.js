import React, {useState} from 'react';
import {Route, Routes, Link} from "react-router-dom";
import Home from "../src/component/home";
import Favorite from "./component/Favorite";
import Table from "./component/renderTable";

const Main = (props) => {

    let [propsUsers, setPropsUsers] = useState()


    return (
        <>
            <div className="main">
                <header>
                    <div className='logo'>Logo</div>
                    <div className='nav'>
                        <Link to="/">Home</Link>
                        <Link to="/Table">Table</Link>
                        <Link to="/Favorite">Favorite</Link>
                    </div>
                </header>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/Table" element={<Table setPropsUsers={setPropsUsers}/>}/>
                    <Route path="/Favorite" element={<Favorite propsUsers={propsUsers}/>}/>
                </Routes></div>
            <footer>Footer</footer>
        </>
    );
};
export default Main;