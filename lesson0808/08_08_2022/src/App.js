import logo from './logo.svg';
import './App.css';
    import React, {useRef,useState} from 'react';


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




function RenderComponent() {
    const inputRef = useRef(null)






    const countries = [];


    function Array(event) {

        let count = {}

        for (let i = 0; i < event.length; i++) {
            const letter = event[i]

            if (count[letter] === undefined) {
                count[letter] = 0
            }
            count[letter]++
        }


        for (let [key, value] of Object.entries(count)) {
            countries.push({
                Let: key,
                cou: count[key]
            });

            console.log(`${key}:${value}`);

        }

        console.log(count)
    }


    function onClick() {
        Array(inputRef.current.value)

    }


    return (
        <div className='render'>
            <input type="text" ref={inputRef}/>
            <button onClick={onClick} type='submit'>result</button>
            <div className="result">
                <ul>
                    {countries.map((int,element) => {
                            return <li key={element}>{int}</li>
                        }
                    )}
                </ul>
            </div>

            {/*<Array/>*/}
        </div>
    )
}


// export default App;
export default RenderComponent;
