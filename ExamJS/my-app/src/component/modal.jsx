import React, {useRef, useState} from "react";

const ClickEdit=()=>{
    const [isModal, setModal] = React.useState(false);





    return(
        <div className='modal'>
            <div className="modalForm"><input type="text"/>
                <input type="text"/>
                <input type="text"/></div>
        </div>
    )
}


export default ClickEdit