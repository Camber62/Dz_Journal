import React, {useRef, useState} from "react";
import ClickEdit from './modal'


const ComponentTdName = (props) => {
    const UseFunc = props.userFunction;
    const UseName = props.userName;

    const clickDelete = (event) => {
        let idButtonClick = event.target.id;
        idButtonClick = Number(idButtonClick);

        const newUseName = UseName.filter(function (entry, index) {
            return index !== idButtonClick;
        });
        UseFunc(newUseName);
    };







    return (
        <>
            {UseName.map((int, element) => {
                return (
                    <tr key={element}>
                        <td>{int.name}</td>
                        <td>{int.sername}</td>
                        <td>{int.age}</td>
                        <td>
                            <button className='buttonDel'
                                    id={element}
                                    onClick={clickDelete}
                            >
                            </button>
                            <button className='buttonEdit'
                                    id={element}
                                    // onClick={clickEdit}
                            >
                            </button>
                            <><ClickEdit /></>
                        </td>
                    </tr>
                );
            })}
        </>
    );
};

export default ComponentTdName;
