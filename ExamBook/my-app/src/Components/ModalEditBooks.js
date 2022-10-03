import React, {useRef, useState} from "react";
const EditBooks=(props)=>{
    const ModalEdit=props.modalWindow
    const SetModalEdit=props.setModalWindow
    const editBooks=props.books
    const setEditBooks=props.SetBooks
    const buttonElement=props.buttonElement

    const inputValueAge = useRef(null);
    const inputValueName = useRef(null);
    const inputValueSurName = useRef(null);
    const inputValueRating = useRef(null);




    const EditClosedModal=()=>{
        const newBooks = editBooks.map((post, index) => {
            if (index !== buttonElement) {
                return post

            }
            return {
                ...post,
                name: inputValueName.current.value,
                sername: inputValueSurName.current.value,
                age: inputValueAge.current.value,
                rating: inputValueRating.current.value,
            }


        });


        setEditBooks(newBooks)
        SetModalEdit(false)
    }



    return (
        <div className={ModalEdit ? 'modal' : 'none'}>
            {/*<h2 className={error ? 'error' : 'none'}>Error.Enter the correct values</h2>*/}
            <div className="modalForm">
                <input placeholder='Edit Name' type="text" ref={inputValueName}/>
                <input placeholder='Edit SurName' type="text" ref={inputValueSurName}/>
                <input placeholder='Edit Age' type="text" ref={inputValueAge}/>
                <input placeholder='Edit Rating' type="text" ref={inputValueRating}/>
                <button onClick={EditClosedModal}>Edit</button>
            </div>
        </div>
    )
}



export default EditBooks