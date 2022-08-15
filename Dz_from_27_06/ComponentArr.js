import React, {useRef, useState} from 'react';
import React from 'react';
import ReactDOM from 'react-dom/client';


const Arrs = ["Пицца", "Суши", "Пирожки"];

const Arr = () => {


    const inputRef = useRef(null);


    function onClickDelete() {
        Arrs.pop();
        console.log(Arrs);
    }

    function onClickAdd() {
        Arrs.push(inputRef.current.value);
        console.log(Arrs);
    }


    const listItems = Arrs.map((number) =>
        <li>{number}</li>
    );


    return (
        <div className="App">
            <input ref={inputRef} placeholder="Please, write" type="text"/>
            <button onClick={onClickDelete}>Delete</button>
            <button onClick={onClickAdd}>Add</button>

            <ul>
                {listItems}
            </ul>

            <h1>Задание 2.</h1>
        </div>
    );


}
export default Arr