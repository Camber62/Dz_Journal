import React, {useState} from "react";
import EditBooks from './Edit_Add_Books'
import Sort from "./Sort";

const Books = (props) => {
    const books = props.books
    const setBooks = props.SetBooks
    const modalWindow = props.modalWindow
    const setModalWindow = props.setModalWindow
    const [buttonElement,setButtonElement]=useState()
    const [value, setValue] = useState("");
    const [clonBooks, setClonBooks] = useState([]);

    const clickEdit=(element)=>{
        setButtonElement(Number(element.target.id))
        setModalWindow(true)

    }

    const clickDelete = (element) => {
        const newBooks = books.filter(function (entry, index) {
            return index !== Number(element.target.id);
        });
        setBooks(newBooks);

    };

    return (
        <>

            <div className='Books'>
                <EditBooks
                    modalWindow={modalWindow}
                    setModalWindow={setModalWindow}

                    value={value}
                    setValue={setValue}
                    setClonBooks={setClonBooks}

                    books={books}
                    setBooks={setBooks}

                    buttonElement={buttonElement}

                />

            <table>
                <tr>
                    <th value="id" onClick={(e)=>{Sort(books,setBooks,e.target.getAttribute("value"))}}>id</th>
                    <th value="name" onClick={(e)=>{Sort(books,setBooks,e.target.getAttribute("value"))}}>Title</th>
                    <th value="author" onClick={(e)=>{Sort(books,setBooks,e.target.getAttribute("value"))}}>Author's name</th>
                    <th value="age" onClick={(e)=>{Sort(books,setBooks,e.target.getAttribute("value"))}}>Publishing year</th>
                    <th value="publishing" onClick={(e)=>{Sort(books,setBooks,e.target.getAttribute("value"))}}>The name of the publisher</th>
                    <th value="numberPages" onClick={(e)=>{Sort(books,setBooks,e.target.getAttribute("value"))}}>Number of pages</th>
                    <th value="numberCopies" onClick={(e)=>{Sort(books,setBooks,e.target.getAttribute("value"))}}>The number of copies in the library</th>
                    <th>Delete</th>
                </tr>


                {(value==='' ? books:clonBooks).map((int, element) => {
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
            </div>

        </>
    )
}


export default Books