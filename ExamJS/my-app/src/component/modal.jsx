import React, {useRef, useState} from "react";

const EditModal = (props) => {
    const modal = props.ModalEdit  // булевое на модалку
    const SetModalEdit = props.SetModalEdit// функция модалки
    const inputValueAge = useRef(null);
    const inputValueName = useRef(null);
    const inputValueSurName = useRef(null);
    const editUser = props.editUser   // id кнопки по которому ищу элемент
    const setEditUser = props.setEditUser   // функция id
    const UseFunc = props.UseFunc   // функция основного массива
    const UseName = props.UseName    // основной массив


    for (let i = 0; i < UseName.length; i++) {
        if (modal === true && i === Number(editUser)) {
            inputValueName.current.value = UseName[i].name
            inputValueSurName.current.value = UseName[i].sername
            inputValueAge.current.value = UseName[i].age
        }


// console.log(inputValueAge.current.value)
    }


    let idUser = Number(editUser)


    const EditClosedModal = () => {
        const newUsers = UseName.map((post, index) => {
            if (index !== idUser) {
                return post
            }
            // console.log(post)

            return {
                ...post,
                name: inputValueName.current.value,
                sername: inputValueSurName.current.value,
                age: inputValueAge.current.value,
            }
        });


        UseFunc(newUsers)
        SetModalEdit(false)

    }


    return (
        <div className={modal ? ' modal' : 'none'}>
            <div className="modalForm">
                <input placeholder='Edit Name' type="text" ref={inputValueName}/>
                <input placeholder='Edit SurName' type="text" ref={inputValueSurName}/>
                <input placeholder='Edit Age' type="text" ref={inputValueAge}/>
                <button onClick={EditClosedModal}>Edit</button>
            </div>
        </div>
    )
}


export default EditModal