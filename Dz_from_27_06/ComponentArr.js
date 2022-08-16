import "./styles.css";
import React, { useRef, useState } from "react";

export default function Arr() {
    const inputRef = useRef(null);
    const [Arrs, setArrs] = useState(["Пицца", "Суши", "Пирожки"]);
    let NewArrs = [];

    function onClickDelete() {

        NewArrs = Arrs.filter((element, index) => index < Arrs.length - 1);
        setArrs(NewArrs);


        console.log(Arrs);
    }

    function onClickAdd() {
        NewArrs = [...Arrs, inputRef.current.value];
        setArrs(NewArrs);

        console.log(Arrs);
    }

    return (
        <div className="App">
            <input ref={inputRef} placeholder="Please, write" type="text" />
            <button onClick={onClickDelete}>Delete</button>
            <button onClick={onClickAdd}>Add</button>

            <ul>
                {Arrs.map((car,index) => {
                    return <li key={index}>{car}</li>;
                })}
            </ul>

            <h1>Задание 2.</h1>
        </div>
    );
}
