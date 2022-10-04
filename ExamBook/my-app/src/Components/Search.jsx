import React from "react";


const Search = (visitor, setVisitor, value,setClonVisitor ) => {

    const filterSearch = visitor.filter((int) => {
        return int.name.toLowerCase().includes(value.toLowerCase())
        // ||
//             int.author.toLowerCase().includes(value.toLowerCase()) ||
//             int.publishing.toLowerCase().includes(value.toLowerCase()) ||
//             int.phone.toLowerCase().includes(value.toLowerCase());
// ;
    });
    setClonVisitor(filterSearch)
}
export default Search

