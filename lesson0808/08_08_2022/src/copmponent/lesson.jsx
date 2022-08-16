const letter = "l";

console.log(letter === "l");

if (letter === "l") {
    console.log(letter);
}

const str = "abs";
import { useState } from "react";
import "./styles.css";

export default function App() {
    // Объявление новой переменной состояния «count»
    const [state, setState] = useState(100500);
    // useState - специальная функция из React
    // она используется для того, чтобы создать
    // реактивные перменные
    /*
    const [переменная, функция_меняющая_переменную] = useState(
      начальное_значение
    );*/

    function onClick() {
        const newState = state === 100500 ? 500100 : 100500;

        setState(newState);
    }

    return (
        <div>
            <p>{state}</p>
            <button onClick={onClick}>Нажми на меня</button>
        </div>
    );
}

// Создатать компонент из двух элементов
// Первый div, второй button
// В div показывать число 100500
// Использовать useState
// По нажатию на button поменять число
// на 500100

import { useState } from "react";
import "./styles.css";

export default function App() {
    const cars = [
        {
            name: "BMV"
        },
        {
            name: "Lada"
        }
    ];

    return (
        <div>
            <ul>
                {cars.map((car) => {
                    return <li>{car.name}</li>;
                })}
            </ul>
        </div>
    );
}
