import React, {useRef, useState} from "react";
import DeleteTable from "./delete_edit_Table";
import Sort from "./SortTable";
import Search from "./search";
import SvgUp from './svgUp';


function Table(props) {
    const inputValueName = useRef(null);
    const inputValueSurName = useRef(null);
    const inputValueAge = useRef(null);
    const inputValueRating = useRef(null);
    let [users, setUsers] = useState([]);
    const [showSearch, setShowSearch] = useState(false);
    const [Error, setError] = useState(false);


    const CklickAdd = (event) => {

        let imgADd = event.target

        function rotationImg() {
            let rotation = 0
            let rondom = Math.floor(Math.random() * (100 - 1)) + 1;                       //анимация при добвлоение

            rotation += rondom;
            imgADd.style.cssText = 'transform: rotate(' + rotation + 'deg);animation: 3s ;';

            // console.log(rotation)
            // console.log(users)

        }

        if (
            inputValueName.current.value !== "" &&
            inputValueSurName.current.value !== "" && //провверка на пустоту
            inputValueAge.current.value !== "" &&
            inputValueRating.current.value!=="" &&
            inputValueRating.current.value <= 10
        ) {
            setUsers(
                users.concat([
                    {
                        name: inputValueName.current.value,
                        sername: inputValueSurName.current.value, //добавление в список
                        age: inputValueAge.current.value,
                        rating:inputValueRating.current.value
                    }
                ])
            );
            setError(false)
            rotationImg()
        } else {
            setError(true);
        }
    };

    props.setPropsUsers(users)

    return (


        <div className='container'>

            <div className="fromTable">
                <p className={Error? 'error':'none'}>Incorrect data, please enter the correct data</p>
                <div className="form">
                    <input placeholder="user" ref={inputValueName}/>
                    <input placeholder="surname" ref={inputValueSurName}/>
                    <input placeholder="age" ref={inputValueAge}/>
                    <input placeholder="rating" ref={inputValueRating}/>
                    <button onClick={CklickAdd} name="button" className='buttonAdd'>
                        <img className='but]tonImg' alt='img'
                             src="https://img.icons8.com/material-rounded/24/000000/plus-math--v1.png"/>
                    </button>
                </div>
                <div className={users.length === 0 ? 'classSearchTable' : ''}>
                    <table>
                        <tr>
                            <th onClick={(e) => {
                                Sort(users, setUsers, 'name', e)
                            }}>Name
                                <span className='sortUpSvg'><SvgUp/></span>

                            </th>
                                <th onClick={(e) => {
                                Sort(users, setUsers, 'sername', e)
                            }}>SurName <span className='sortUpSvg'><SvgUp/></span>

                            </th>
                            <th onClick={(e) => {
                                Sort(users, setUsers, 'age', e)
                            }}>Age <span className='sortUpSvg'><SvgUp/></span>

                            </th>
                            <th onClick={(e) => {
                                            Sort(users, setUsers, 'rating', e)
                            }}>Rating <span className='sortUpSvg'><SvgUp/></span>

                            </th>
                            <th>Delete/Edit</th>
                        </tr>
                        <>
                            <DeleteTable userName={users} userFunction={setUsers}/>
                        </>


                    </table>
                </div>
            </div>
            <>
                <svg onClick={() => setShowSearch(!showSearch)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"
                     width="38px" height="58px">
                    <path fill="#616161" d="M34.6 28.1H38.6V45.1H34.6z" transform="rotate(-45.001 36.586 36.587)"/>
                    <path fill="#616161" d="M20 4A16 16 0 1 0 20 36A16 16 0 1 0 20 4Z"/>
                    <path fill="#37474F" d="M36.2 32.1H40.2V44.400000000000006H36.2z"
                          transform="rotate(-45.001 38.24 38.24)"/>
                    <path fill="#64B5F6" d="M20 7A13 13 0 1 0 20 33A13 13 0 1 0 20 7Z"/>
                    <path fill="#BBDEFB"
                          d="M26.9,14.2c-1.7-2-4.2-3.2-6.9-3.2s-5.2,1.2-6.9,3.2c-0.4,0.4-0.3,1.1,0.1,1.4c0.4,0.4,1.1,0.3,1.4-0.1C16,13.9,17.9,13,20,13s4,0.9,5.4,2.5c0.2,0.2,0.5,0.4,0.8,0.4c0.2,0,0.5-0.1,0.6-0.2C27.2,15.3,27.2,14.6,26.9,14.2z"/>
                </svg>
                {/*{showSearch ? <Search showSearch={showSearch} userName={users} userFunction={setUsers}/> : null}*/}
                <Search showSearch={showSearch} userName={users} userFunction={setUsers}/>
            </>
        </div>
    );
};




export default Table;
