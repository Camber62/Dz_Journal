import React, {useRef, useState} from "react";
import DeleteTable from "./deleteTable";
import Sort from "./SortTable";
import Search from "./search";

export default function Table() {
    const inputValueName = useRef(null);
    const inputValueSurName = useRef(null);
    const inputValueAge = useRef(null);
    let [users, setUsers] = useState([]);

    const CklickAdd = (event) => {

        let imgADd = event.target

        function rotationImg() {
            let rotation = 0
            let rondom = Math.floor(Math.random() * (100 - 1)) + 1;                       //анимация при добвлоение

            rotation += rondom;
            imgADd.style.cssText = 'transform: rotate(' + rotation + 'deg);animation: 3s ;';

            console.log(rotation)

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
            rotationImg()
        } else {
            return;
        }

    };
    return (
        <div className='container'>
            <>
                <Search userName={users} userFunction={setUsers}/>
            </>
            <div className="form">
                <input placeholder="user" ref={inputValueName}/>
                <input placeholder="surname" ref={inputValueSurName}/>
                <input placeholder="age" ref={inputValueAge}/>
                <button onClick={CklickAdd} name="button" className='buttonAdd'>
                    <img className='buttonImg' alt='img'
                         src="https://img.icons8.com/material-rounded/24/000000/plus-math--v1.png"/>
                </button>
            </div>
            <div>
                <table>
                    <tr>
                        <th onClick={() => {
                            Sort(users,setUsers,'name')
                        }}>Name
                        </th>
                        <th onClick={() => {
                            Sort(users,setUsers,'sername')
                        }}>SurName
                        </th>
                        <th onClick={() => {
                            Sort(users,setUsers,'age')
                        }}>Age
                        </th>
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