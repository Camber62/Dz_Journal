import React, { useState } from "react";

const NumGenerator = () => {
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(100);
    const [number, setNumber] = useState(0);




   function OnClick(){
       setNumber ( Math.floor(Math.random() * (max - min + 1) + min));

    }


    return (
        <div >
            <div id="title">Задание 3</div>
            <p id="rNum">{number}</p>
            <button onClick={OnClick}>"Rondom"</button>
        </div>
    );
};

export default NumGenerator