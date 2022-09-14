import React, { useRef, useState } from "react";

const Search = (props) => {
    const inputValueSearch = useRef(null);
    let users = props.userName;
    const showSearch=props.showSearch

    const [value, setValue] = useState("");

    const filterSearch = users.filter((int) => {
        return int.name.toLowerCase().includes(value.toLowerCase()) || int.sername.toLowerCase().includes(value.toLowerCase()) || int.age.toLowerCase().includes(value.toLowerCase());
    });



    return (
        <div className={showSearch ? 'serchContainer' : ''}>
            <input
                type="text"
                onChange={(event) => setValue(event.target.value)}
                placeholder="search"
                ref={inputValueSearch}
                className='inputSearch'
            />
            <table className={value ? '' : 'classSearchTable'}>
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
        </div>
    );
};

export default Search;
