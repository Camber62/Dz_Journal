import React, {useState} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import Books from "./Books";

const NavigationHeader = () => {
    const [modalWindow, setModalWindow] = useState(false)


    const [toDoList, SetToDoList] = useState([
        {
            id: 1,
            todo: 'Воина и Мир',
            checked:false,
        }
    ])




    return (
        <>
            <div className="main">
                <header>
                    <div className='nav'>
                        <Link to="/">Books</Link>
                        <Link to="/Active">Visitor</Link>
                        <Link to="/Completed">Cards</Link>
                    </div>
                </header>
                <Routes>
                    <Route path="/"
                           element={<Books modalWindow={modalWindow} setModalWindow={setModalWindow} SetToDoList={SetToDoList}
                                           toDoList={toDoList}/>}/>
                </Routes>
            </div>
            <footer>Footer</footer>
        </>
    );
}


export default NavigationHeader