import React from "react";

const Sort = (user, setUser, field,) => {
    const copyUser = user.concat()
    const sortUser = copyUser.sort(
        (a, b) => {
            return a[field] > b[field] ? 1 : -1
        }
    )
    setUser(sortUser)

}


export default Sort