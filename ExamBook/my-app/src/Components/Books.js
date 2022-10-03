import React from "react";
import EditBooks from './ModalEditBooks'
// import EditModal from "../../../../ExamJS/my-app/src/component/modal";

const Books = (props) => {
    const books = props.books
    const SetBooks = props.SetBooks
    const modalWindow = props.modalWindow
    const setModalWindow = props.setModalWindow
    let buttonElement



    const clickEdit=(element)=>{
        buttonElement=Number(element.target.id)
        setModalWindow(true)
    }

    const clickDelete = (element) => {
        const newBooks = books.filter(function (entry, index) {
            return index !== Number(element.target.id);
        });
        SetBooks(newBooks);
        // console.log(newBooks)

    };


    return (
        <>

            <div>
                <EditBooks
                    ModalEdit={modalWindow}
                    SetModalEdit={setModalWindow}
                    editBooks={books}
                    setEditBooks={SetBooks}
                    buttonElement={buttonElement}
                />
            </div>
            <table>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>Author</th>
                    <th>age</th>
                    <th>publishing</th>
                    <th>NumberPages</th>
                    <th>numberCopies</th>
                    <th>Delete</th>
                </tr>


                {books.map((int, element) => {
                    return (
                        <tr key={element}>
                            <td>{int.id}</td>
                            <td>{int.name}</td>
                            <td>{int.Author}</td>
                            <td>{int.age}</td>
                            <td>{int.publishing}</td>
                            <td>{int.NumberPages}</td>
                            <td>{int.numberCopies}</td>
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


        </>
    )
}


export default Books