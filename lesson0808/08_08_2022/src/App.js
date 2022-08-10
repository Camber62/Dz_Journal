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

function Array(event) {

    let count = {}

    for (let i = 0; i < event.length; i++) {
        const letter = event[i]

        if (count[letter] === undefined) {
            count[letter] = 0
        }
        count[letter]++
    }
    return(
        <div className="result">{count}</div>
    )
    // console.log(count)
}


function RenderComponent() {
    const inputRef = useRef(null)

    function onClick() {
        Array(inputRef.current.value)

    }


    return (
        <div className='render'>
            <input type="text" ref={inputRef}/>
            <button onClick={onClick} type='submit'>result</button>
            <Array/>
        </div>
    )
}


// export default App;
export default RenderComponent;
