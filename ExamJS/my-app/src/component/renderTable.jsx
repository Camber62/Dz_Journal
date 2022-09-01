import React, {useRef, useState} from "react";
import DeleteTable from "./deleteTable";

export default function Table() {
    const inputValueName = useRef(null);
    const inputValueSurName = useRef(null);
    const inputValueAge = useRef(null);
    let [users, setUsers] = useState([]);

    const CklickAdd = (event) => {

        let imgADd = event.target

        function animationAdd() {
            imgADd.style.animation = 'spin .3s linear 0s';
        }


        if (
            inputValueName.current.value !== "" &&
            inputValueSurName.current.value !== "" && //провверка на пустоту
            inputValueAge.current.value !== ""
        ) {
            setUsers(
                users.concat([
                    {
                        name: inputValueName.current.value,
                        sername: inputValueSurName.current.value, //добавление в список
                        age: inputValueAge.current.value
                    }
                ])
            );
        } else {
            return;
        }

    };

    return (
        <div>
            <div className="form" style={{margin: "30px"}}>
                <input placeholder="user" ref={inputValueName}/>
                <input placeholder="surname" ref={inputValueSurName}/>
                <input placeholder="age" ref={inputValueAge}/>
                <button onClick={CklickAdd} name="button" className='buttonAdd'>
                    <img className='buttonImg' alt='img'
                         src="https://img.icons8.com/material-rounded/24/000000/plus-math--v1.png"/>
                </button>
            </div>
            <div style={{margin: "30px"}}>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>SurName</th>
                        <th>Age</th>
                        <th>Delete</th>
                    </tr>
                    <>
                        <DeleteTable userName={users} userFunction={setUsers}/>
                    </>
                </table>
            </div>
        </div>
    );
};