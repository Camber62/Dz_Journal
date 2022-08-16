import React, { useRef, useState } from "react";





const Users={
    name:'Alex',
    age:30,
    lang:'rus'
}




const App=()=> {
    const inputRef = useRef(null)
    const [lang,setLang]=useState('Hi')


    function onClick(){
        if ( inputRef.current.value ==='rus') {
            setLang('Привет')
        }
        else if ( inputRef.current.value ==='eng') {
            setLang('Hi')
        }
        else if ( inputRef.current.value ==='spa') {
            setLang('Hola')
        }
        else {
            return alert('Please error')
        }
    }


    return (
        <div className="App">
            <input ref={inputRef} placeholder='Please, write language' type="text"/>
            <button onClick={onClick} type='submit'>result</button>
            <h1>{lang} {Users.name}</h1>
            <h2>Задание 1.</h2>
            <p>rus,eng,spa</p>
        </div>
    );


}
export default App