import React, {useState} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import Visitor from "./Visitor";
import Books from "./Books";

const NavigationHeader = () => {
    const [modalWindow, setModalWindow] = useState(false)


    const [books, SetBooks] = useState([
        {
            id: 1,
            name: 'Воина и Мир',
            author: 'Лев Толстой',
            age: 1865,
            publishing: "Русский вестник",
            numberPages: 1300,
            numberCopies: 5
        }
    ])
    const [visitor, setVisitor] = useState([
        {
            id: 1,
            name: 'Anonimys',
            phone: `8 123 122 12 12`,

        }
    ])




    return (
        <>
            <div className="main">
                <header>
                    <div className='nav'>
                        <Link to="/">Books</Link>
                        <Link to="/Visitor">Visitor</Link>
                        <Link to="/Cards">Cards</Link>
                        <Link to="/Statistics">Statistics</Link>
                        {/*<Link to="/Books">Favorite</Link>*/}
                    </div>
                </header>
                <Routes>
                    <Route path="/"
                           element={<Books modalWindow={modalWindow} setModalWindow={setModalWindow} SetBooks={SetBooks}
                                           books={books}/>}/>
                    <Route path="/Visitor" element={<Visitor visitor={visitor} setVisitor={setVisitor}/>}/>
                </Routes>
            </div>
            <footer>Footer</footer>
        </>
    );
}


export default NavigationHeader