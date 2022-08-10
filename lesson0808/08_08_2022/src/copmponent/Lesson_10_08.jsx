import React, {useState} from 'react';

const Hello = () => {
    const [number, setNumber] = useState(100500)

    function Cklick() {
        if (number === 100500) {
            setNumber(500100)
        } else {
            setNumber(100500)
        }
    }


    return (
        <div>
            <div>{number}</div>
            <button onClick={Cklick}>Click</button>
        </div>
    );
};

const Massive = () => {

    const Letters = {
        a: 3,
        b: 0,
        q: 2,
    }
// 1
    //
    // for (let [key, value] of Object.entries(Letters)) {
    //     console.log(`letters:"${key}" count:${value}`);
    // }


    const countries = [];


    for (let key in Letters) {
        console.log(key, Letters[key])


        countries.push({
            letter: key,
            count: Letters[key]
        });
    }


    return (
        <div>
            <ul>
                {countries.map((int) => {
                        return <li>{int.letter}:{int.count}</li>
                    }
                )}
            </ul>
        </div>
    )

}


const Parent = () => {
    const name = "Alex"
    const user = {age:30}

    return (

        <Children user={user} name={name} test="100" />
    )
}
const Children = (props) => {
    console.log(props)
    return (
        <div>Hello{props.name}.Age: {props.user.age}</div>
    )
}


// export default Hello;
// export default Massive;
export default Parent;


// выводить данные из useState (обьект или массив ,реактивные)через MAP или Foreach