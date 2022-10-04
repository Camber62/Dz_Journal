import React from "react";


const Search = (visitor, setVisitor, value,setClonVisitor ) => {

    const filterSearch = visitor.filter((int) => {
        return int.name.toLowerCase().includes(value.toLowerCase());
    });
    setClonVisitor(filterSearch)
}
export default Search

