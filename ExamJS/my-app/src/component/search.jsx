import React, { useRef, useState } from "react";

const Search = (props) => {
    const inputValueSearch = useRef(null);
    let users = props.userName;

    const [value, setValue] = useState("");

    const filterSearch = users.filter((int) => {
        return int.name.toLowerCase().includes(value.toLowerCase());
    });



    return (
        <>
            <input
                type="text"
                onChange={(event) => setValue(event.target.value)}
                placeholder="search"
                ref={inputValueSearch}
            />
            <table className={value ? '' : 'classSearch'}>
                {filterSearch.map((int, element) => {
                    return (
                        <tr key={element}>
                            <td>{int.name}</td>
                            <td>{int.sername}</td>
                            <td>{int.age}</td>
                        </tr>
                    );
                })}
            </table>
        </>
    );
};

export default Search;
