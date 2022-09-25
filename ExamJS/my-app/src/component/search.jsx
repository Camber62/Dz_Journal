import React, {useRef, useState} from "react";
import {CSSTransition} from "react-transition-group";

const Search = (props) => {
    const inputValueSearch = useRef(null);
    let users = props.userName;
    const showSearch = props.showSearch

    const [value, setValue] = useState("");

    const filterSearch = users.filter((int) => {
        return int.name.toLowerCase().includes(value.toLowerCase()) || int.sername.toLowerCase().includes(value.toLowerCase()) || int.age.toLowerCase().includes(value.toLowerCase());
    });


    return (

            <CSSTransition
                in={showSearch}
                timeout={300}
                classNames="alert"
                unmountOnExit
            >
                <div className='serchContainer'>

                    <input
                        type="text"
                        onChange={(event) => setValue(event.target.value)}
                        placeholder="search"
                        ref={inputValueSearch}
                        className='inputSearch'
                    />
                    <table className={value ? '' : 'classSearchTable'}>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Age</th>
                        <th>Rating</th>
                        {filterSearch.map((int, element) => {
                            return (
                                <tr key={element}>
                                    <td>{int.name}</td>
                                    <td>{int.sername}</td>
                                    <td>{int.age}</td>
                                    <td>{int.rating}</td>
                                </tr>
                            );
                        })}
                    </table>
                </div>
            </CSSTransition>
    );
};

export default Search;
