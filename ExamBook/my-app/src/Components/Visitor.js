import React, {useRef, useState} from "react";
import GeneratorId from './GeneratorId'

const Visitor = (props) => {
    const visitor = props.visitor
    const setVisitor = props.setVisitor
    const [error, setError] = useState(false)

    const inputValueName = useRef(null);
    const inputValuePhone = useRef(null);



    const newVictors = () => {
        if (inputValueName.current.value !== "" &&
            inputValuePhone.current.value !== ""
        ) {
            setError(false)
            setVisitor(visitor.concat([
                    {
                        id: GeneratorId(visitor),
                        name: inputValueName.current.value,
                        phone: inputValuePhone.current.value,

                    }

                ])
            )
        } else setError(true)

        // console.log(visitor)
    }

    return (<>
            <div className='victors'>
                <div className='title_victors'>
                    <div className='title_victors_one'><h2 style={{color: '#378e9f'}}>ALL VICTORS:</h2>
                        <button className='btn_victors' onClick={newVictors}>New victors</button>
                    </div>

                    <div className="add_Visitor">
                        <input type="text" placeholder='Name' ref={inputValueName}/>
                        <input type="text" placeholder='phone' ref={inputValuePhone}/>
                        <h2 className={error ? 'error' : 'none'}>Error.Enter the correct values</h2>
                    </div>


                </div>
                <div className='sort_search'>
                    <div className='sort'>
                        Sort by:
                        <select name="select" size="1">
                            <option selected value="s1">Id</option>
                            <option value="s2">Name</option>
                            <option value="s3">Phone</option>
                        </select>
                    </div>
                    <div className='search'>
                        Search
                        <input type="search"/>
                        <button className='btn_Search'>Search</button>
                    </div>
                </div>
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Edit</th>
                    </tr>
                    {visitor.map((int, element) => {
                        return (
                            <tr key={element}>
                                <td>{int.id}</td>
                                <td>{int.name}</td>
                                <td>{int.phone}</td>
                                <td>

                                    <button className='buttonEdit'
                                            id={element}
                                        // onClick={clickEdit}
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


export default Visitor