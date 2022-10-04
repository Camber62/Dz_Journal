import React from "react";

const Sort = (user, setUser, field) => {
    const copyUser = user.concat()
    const sortUser = copyUser.sort(
        (a, b) => {
            return a[field] > b[field] ? 1 : -1
        }
    )
    setUser(sortUser)

    // const EventTarget = e.target.parentElement
    // const classAll = EventTarget.querySelectorAll('span')
    // for (let i = 0; i < classAll.length; i++) {
    //     classAll[i].classList.add('sortUpSvg')
    // }
    // e.target.querySelector('span').classList.remove('sortUpSvg')
    //
    // // console.log(e.target)

}


export default Sort