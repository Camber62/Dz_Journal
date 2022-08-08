import logo from './logo.svg';
import './App.css';
import {useRef} from "react";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function array (event){
    let count = {}

    for(let i = 0 ; i < event.length; i++){
        const letter = event[i]

        if(count[letter]===undefined){
            count[letter]=0
        }
        count[letter]++
    }
    console.log(count)
}



function RenderComponent() {
const inputRef = useRef(null)
function onClick(){
    array(inputRef.current.value)

}



    return (
        <div className='render'>
            <input type="text" ref={inputRef}/>
            <div className="resault"/>
            <button onClick={onClick} type='submit'>resault</button>
        </div>
    )
}




// export default App;
export default RenderComponent;
