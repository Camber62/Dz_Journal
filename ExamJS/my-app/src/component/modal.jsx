import React, {useRef, useState} from "react";

const EditModal = (props) => {
    const modal=props.ModalEdit
    const SetModalEdit=props.SetModalEdit

    const EditClosedModal = () => {
        SetModalEdit(false)
    }


    console.log()
    return (
        <div className={modal ? ' modal' : 'none'}>
            <div className="modalForm"><input type="text"/>
                <input type="text"/>
                <input type="text"/>
                <button onClick={EditClosedModal} >Edit</button>
            </div>
        </div>
    )
}


export default EditModal