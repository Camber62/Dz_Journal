import React, {useRef,useState} from 'react';


const RenderComponent = () => {
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
                    {countries.map((int, element) => {
                            return (<li key={element}>{int}</li>)
                        }
                    )}
                </ul>
            </div>

        </div>
    )
}

export default RenderComponent;
