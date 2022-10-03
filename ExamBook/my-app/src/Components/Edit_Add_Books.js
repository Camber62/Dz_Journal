import React, {useRef, useState} from "react";
import GeneratorId from './ID'

const EditBooks = (props) => {
    const modalWindow = props.modalWindow
    const setModalWindow = props.setModalWindow
    const books = props.books
    const setBooks = props.setBooks
    const buttonElement = props.buttonElement
    const [error, setError] = useState(false)


    const inputValueAge = useRef(null);
    const inputValueName = useRef(null);
    const inputValuePages = useRef(null);
    const inputValueAuthor = useRef(null);
    const inputValuePublishing = useRef(null);
    const inputValueNumberCopies = useRef(null);


    for (let i = 0; i < books.length; i++) {
        if (modalWindow === true && i === buttonElement) {
            inputValueName.current.value = books[i].name
            inputValuePages.current.value = books[i].numberPages
            inputValueAge.current.value = books[i].age
            inputValueAuthor.current.value = books[i].author
            inputValuePublishing.current.value = books[i].publishing
            inputValueNumberCopies.current.value = books[i].numberCopies
        }


    }

    const EditBooksBtn = () => {
        const newBooks = books.map((post, index) => {
            if (index !== buttonElement) {
                return post

            }
            return {
                ...post,
                name: inputValueName.current.value,
                author: inputValueAuthor.current.value,
                age: inputValueAge.current.value,
                publishing: inputValuePublishing.current.value,
                numberPages: inputValuePages.current.value,
                numberCopies: inputValueNumberCopies.current.value,

            }


        });


        if (inputValueName.current.value !== "" &&
            inputValuePages.current.value !== "" &&
            inputValueAge.current.value !== "" &&
            inputValueAuthor.current.value !== "" &&
            inputValuePublishing.current.value !== "" &&
            inputValueNumberCopies.current.value !== "") {
            setError(false)

        } else
            setError(true)

        setBooks(newBooks)
        setModalWindow(false)
    }


    const UnitGenerId = (books) => {
        let max = 1
        for (let i = 0; i < books.length; i++) {     //добавление id
            if ((books)[i].id > max) {
                max = (books)[i].id
            }
        }
        return max + 1
    }

    const AddBooksBtn=()=>{
        if (inputValueName.current.value !== "" &&
            inputValuePages.current.value !== "" &&
            inputValueAge.current.value !== "" &&
            inputValueAuthor.current.value !== "" &&
            inputValuePublishing.current.value !== "" &&
            inputValueNumberCopies.current.value !== "") {
            setError(false)
            setBooks(books.concat([
                    {
                        id:GeneratorId(books),
                        name: inputValueName.current.value,
                        author: inputValueAuthor.current.value,
                        age: inputValueAge.current.value,
                        publishing: inputValuePublishing.current.value,
                        numberPages: inputValuePages.current.value,
                        numberCopies: inputValueNumberCopies.current.value,
                    }

                ])

            )
        }else setError(true)
    }



    return (
        <>
        <div className={'modal'}>
            <div className="modalForm">
                <input placeholder='Name' type="text" ref={inputValueName}/>
                <input placeholder='Author' type="text" ref={inputValueAuthor}/>
                <input placeholder='Age' type="text" ref={inputValueAge}/>
                <input placeholder='publishing' type="text" ref={inputValuePublishing}/>
                <input placeholder='NumberPages' type="text" ref={inputValuePages}/>
                <input placeholder='numberCopies' type="text" ref={inputValueNumberCopies}/>
                <button onClick={EditBooksBtn}>Edit</button>
                <button onClick={AddBooksBtn}>Add</button>
            </div>
        </div>

                <h2 className={error ? 'error' : 'none'}>Error.Enter the correct values</h2>
            </>
    )
}


export default EditBooks