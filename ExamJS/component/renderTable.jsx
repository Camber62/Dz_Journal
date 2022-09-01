import React, { useRef, useState } from "react";
import DeleteTable from "./deleteTable";

export default function Table() {
    const inputValueName = useRef(null);
    const inputValueSurName = useRef(null);
    const inputValueAge = useRef(null);
    let [users, setUsers] = useState([]);

    const CklickAdd = (event) => {
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

    //  let imgADd = docu
    // img.style.transform = "rotate(-90deg)";

    return (
        <div>
            <div className="table" style={{ margin: "30px" }}>
                <input placeholder="user" ref={inputValueName}></input>
                <input placeholder="surname" ref={inputValueSurName}></input>
                <input placeholder="age" ref={inputValueAge}></input>
                <button onClick={CklickAdd} name="button">
                    <img src="https://img.icons8.com/material-rounded/24/000000/plus-math--v1.png" />
                </button>
            </div>
            <div style={{ margin: "30px" }}>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>SurName</th>
                        <th>Age</th>
                        <th>Delete</th>
                    </tr>
                    <>
                        <DeleteTable userName={users} userFunction={setUsers} />
                    </>
                </table>
            </div>
        </div>
    );
};

// const unitGenerId = () => {
//   let max = -1;
//   for (let i = 0; i < users.length; i++) {
//     //добавление id
//     if (users[i].id > max) {
//       max = users[i].id;
//     }
//   }

//   return max + 1;
// };
