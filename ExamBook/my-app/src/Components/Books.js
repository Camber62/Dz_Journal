import React, {useState} from "react";
import EditBooks from './Edit_Add_Books'

const Books = (props) => {
    const books = props.books
    const setBooks = props.SetBooks
    const modalWindow = props.modalWindow
    const setModalWindow = props.setModalWindow
    const [buttonElement,setButtonElement]=useState()


    const clickEdit=(element)=>{
        setButtonElement(Number(element.target.id))
        setModalWindow(true)

    }

    const clickDelete = (element) => {
        const newBooks = books.filter(function (entry, index) {
            return index !== Number(element.target.id);
        });
        setBooks(newBooks);
        // console.log(newBooks)

    };


    return (
        <>

            <div>
                <EditBooks
                    modalWindow={modalWindow}
                    setModalWindow={setModalWindow}

                    books={books}
                    setBooks={setBooks}

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
                            <td>{int.author}</td>
                            <td>{int.age}</td>
                            <td>{int.publishing}</td>
                            <td>{int.numberPages}</td>
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