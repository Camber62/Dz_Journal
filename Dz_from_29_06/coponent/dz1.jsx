import "./styles.css";
import React, { useRef, useState } from "react";

export default function Arr() {
    const [BtnName,setBtnName]=useState('Open')
    const [Text,setText]=useState('')





    function onClick(){
        if(BtnName==='Open'){
            setBtnName('Hide')
            setText('Hi')
        }
        else{setBtnName('Open')
            setText('')

        }
    }





    return (
        <div className="App">
            <div>{Text}</div>
            <button onClick={onClick}>{BtnName}</button>


            <h1>Задание .</h1>
        </div>
    );
}
