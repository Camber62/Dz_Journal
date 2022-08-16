import {useRef, useState} from "react";










// const App =()=>{
//   const[num,setNum]=useState(0)
//   function onClik(){
//     setNum(inputRef.current.value)
//   }
//     const inputRef = useRef(null)
//
//   return(
//       <div>
//         <p>{num}</p>
//           <input ref={inputRef} placeholder='write' type="text"/>
//         <button onClick={onClik}>Click</button>
//       </div>
//   )
//
//
// }


// const NewArr = [...arr,2000]
// // arr.contact(2000)
// function onClik(){
//     setNum(NewArr)
// }

//4 метода
// добавить в конец push()
//добавть в начало unshift(...items)
//удалить из начала shift()
// удалить из конца pop()


// Props


const AppButton = (props) => {


    function onClik() {
        props.chang(123);
    }


    return (
        <div>
            <button onClick={onClik}>{props.titel}</button>
        </div>
    )
}


const App = () => {

    const [arr, setNum] = useState(0)


    return (
        <div>
            <p>{arr}</p>
            <AppButton chang={setNum} titel={'Click'}></AppButton>
        </div>
    )


}


export default App;

