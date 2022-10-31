// import React, {useRef, useState} from "react";
// import GeneratorId from './GeneratorId'
// import Sort from "./Sort";
// import Search from "./Search";
//
// const Visitor = (props) => {
//     const visitor = props.visitor
//     const setVisitor = props.setVisitor
//     const [error, setError] = useState(false)
//     const [value, setValue] = useState("");
//     const [clonVisitor, setClonVisitor] = useState([]);
//     const [modalEditClose, setModalEditClose] = useState(false);
//     const[idNumber,setIdNumber]=useState()
//
//
//     const [optionValue, setOptionValue] = useState('id')
//     const inputValueName = useRef(null);
//     const inputValuePhone = useRef(null);
//     const inputValueNameEditVisition = useRef(null);
//     const inputValuePhoneEditVisition = useRef(null);
//
//
//     const newVictors = () => {
//
//         if (inputValueName.current.value !== "" &&
//             inputValuePhone.current.value !== ""
//         ) {
//             setError(false)
//             setVisitor(visitor.concat([
//                     {
//                         id: GeneratorId(visitor),
//                         name: inputValueName.current.value,
//                         phone: inputValuePhone.current.value,
//
//                     }
//
//                 ])
//             )
//         } else setError(true)
//         // console.log(visitor)
//     }
//
//     const clickEditVisition=(e)=>{
//         setIdNumber(Number(e.target.getAttribute("id")))
//         setModalEditClose(true)
//
//     }
//
//
//
//
//     for (let i = 0; i < visitor.length; i++) {
//         if (modalEditClose === true && i === idNumber) {
//             inputValueNameEditVisition.current.value = visitor[i].name
//             inputValuePhoneEditVisition.current.value = visitor[i].phone
//
//         }
//     }
//
//
//
//
//
//
//     const EditVisition=()=>{
//         const newVisition = visitor.map((post, index) => {
//             if (index !== idNumber) {
//                 return post
//
//             }
//             return {
//                 ...post,
//                 name: inputValueNameEditVisition.current.value,
//                 phone: inputValuePhoneEditVisition.current.value,
//             }
//
//         });
//         setVisitor(newVisition)
//         setModalEditClose(false)
//     }
//
//
//     return (<>
//             <div className={modalEditClose?'modalFormEditVisition':'none'}>
//                 <div className='inputEditVisition'>
//                     <input type="text" ref={inputValueNameEditVisition}/>
//                     <input type="text" ref={inputValuePhoneEditVisition}/>
//                 <button onClick={()=>{EditVisition()}}>edit</button>
//                 </div>
//             </div>
//             <div className='victors'>
//                 <div className='title_victors'>
//                     <div className='title_victors_one'><h2 style={{color: '#378e9f'}}>ALL VICTORS:</h2>
//                     </div>
//
//                     <div className="add_Visitor">
//                         <input type="text" placeholder='Name' ref={inputValueName}/>
//                         <input type="text" placeholder='phone' ref={inputValuePhone}/>
//                         <button className='btn_victors_add' onClick={newVictors}>New victors</button>
//
//                         <h2 className={error ? 'error' : 'none'}>Error.Enter the correct values</h2>
//                     </div>
//
//
//                 </div>
//                 <div className='sort_search'>
//                     <div className='sort'>
//                         Sort by:
//                         <select onChange={e => {
//                             setOptionValue(e.target.value)
//                         }} className='victors_sort' name="select" size="1">
//                             <option selected value="id">Id</option>
//                             <option value="name">Name</option>
//                             <option value="phone">Phone</option>
//                         </select>
//                         <button onClick={()=>{Sort(visitor,setVisitor,optionValue)}}>Sort</button>
//                     </div>
//                     <div className='search'>
//                         Search
//                         <input type="search" onChange={(event) => setValue(event.target.value)}/>
//                         <button className='btn_Search' onClick={()=>{Search(visitor,setVisitor,value,setClonVisitor)}}>Search</button>
//                     </div>
//                 </div>
//                 <table>
//                     <tr>
//                         <th>ID</th>
//                         <th>Name</th>
//                         <th>Phone</th>
//                         <th>Edit</th>
//                     </tr>
//                     {(value==='' ? visitor:clonVisitor).map((int, element) => {
//                         return (
//                             <tr key={element}>
//                                 <td>{int.id}</td>
//                                 <td>{int.name}</td>
//                                 <td>{int.phone}</td>
//                                 <td>
//
//                                     <button className='buttonEdit'
//                                             id={element}
//                                         onClick={clickEditVisition}
//                                     >Edit
//                                     </button>
//
//                                 </td>
//                             </tr>
//                         );
//                     })}
//                 </table>
//             </div>
//         </>
//     )
//
// }
//
//
// export default Visitor