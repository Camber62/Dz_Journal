import React, {useState} from "react";
import EditBooks from './Edit_Add_Books'
import * as Icon from "react-icons/fi";
import Checkbox from "react-custom-checkbox";

const Books = (props) => {
    const toDoList = props.toDoList
    const SetToDoList = props.SetToDoList
    const modalWindow = props.modalWindow
    const setModalWindow = props.setModalWindow
    const [buttonElement, setButtonElement] = useState()
    const [value, setValue] = useState("");
    // const [cloneBooks, setCloneBooks] = useState([]);
    const [checkbox, setCheckbox] = useState(null)
    const clickEdit = (element) => {
        setButtonElement(Number(element.target.id))
        // setModalWindow(true)

    }

    const clickDelete = (element) => {
        const newToDoList = toDoList.filter(function (entry, index) {
            return index !== Number(element.target.id);
        });
        SetToDoList(newToDoList);

    };


    return (
        <>

            <div className='Books'>
                <EditBooks
                    modalWindow={modalWindow}
                    setModalWindow={setModalWindow}
                    value={value}
                    setValue={setValue}
                    // setClonBooks={setCloneBooks}
                    toDoList={toDoList}
                    SetToDoList={SetToDoList}
                    buttonElement={buttonElement}

                />

                <table>
                    <tr>
                        <th>Completed</th>
                        <th>Todo...</th>
                        <th>Delete/Edit</th>
                    </tr>


                    {toDoList.map((int, element) => {
                        return (
                            <tr key={element}>

                                <td>
                                    <Checkbox
                                    checked={false}
                                    icon={
                                        <div
                                            style={{
                                                display: "flex",
                                                flex: 1,
                                                backgroundColor: "#174A41",
                                                alignSelf: "stretch",
                                            }}
                                        >
                                            <Icon.FiCheck color="white" size={20}
                                            />
                                        </div>}
                                    borderColor="#174A41"
                                    borderRadius={20}
                                    style={{overflow: "hidden",}}
                                    size={20}
                                    onChange={(value) => {
                                        int.checked = !value
                                        // console.log(toDoList)
                                    }}
                                    // labelStyle={checkbox ? {textDecoration:'line-through'}:{textDecoration:'none'}}
                                />
                                </td>

                                <td className={int.checked ? 'block' : 'decoration'}>{int.todo}</td>
                                <td>
                                    <button className='buttonDel'
                                            id={element}
                                            onClick={clickDelete}
                                    >Delete
                                    </button>
                                    <button className='buttonEdit'
                                            id={element}
                                            onClick={clickEdit}
                                    >Edit
                                    </button>

                                </td>

                            </tr>
                        );
                    })}
                </table>
            </div>

        </>
    )
}


export default Books