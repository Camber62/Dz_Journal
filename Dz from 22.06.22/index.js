import React ,{useState}from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// 1
// root.render(
//     <HelloWorld/>
// )
//
// function HelloWorld (){
//     let [User_name,setUsername] = useState('Alexey')
//     console.log(User_name)
//     function clickMe(){
//         setUsername('Mo')
//
//     }
//    return(
//         <div>
//             <div>Hi {User_name}!</div>
//             <button onClick={clickMe}>More</button>
//         </div>
//     );
//
// }

root.render(
    <Cont/>
)


function Cont(){
    const [count,setCont] =useState(0)
    function clickOne(i){
        setCont(count+i)
    }
    function clickTwo(i){
        setCont(count-i)
    }

    return (
        <div>
            <div>Значение:{count}</div>
            <button onClick={()=>clickOne(1)}>+1</button>
            <button onClick={()=>clickTwo(2)}>-1</button>
        </div>
    )

}




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();