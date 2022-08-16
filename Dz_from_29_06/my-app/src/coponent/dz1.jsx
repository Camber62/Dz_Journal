import React, { useState } from "react";

 const Arr=()=> {
    const [BtnName,setBtnName]=useState('Open')
    const [Text,setText]=useState('')





    function onClick(){
        if(BtnName==='Open'){
            setBtnName('Hide')
            setText(<h1>Задание 1</h1>)
        }
        else{setBtnName('Open')
            setText('')

        }
    }





    return (
        <div className="App">
            <div>{Text}</div>
            <button onClick={onClick}>{BtnName}</button>


        </div>
    );
}



export default Arr