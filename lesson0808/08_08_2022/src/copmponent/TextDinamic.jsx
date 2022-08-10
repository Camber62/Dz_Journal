import React,{useState} from 'react';
import Text from "./Text";

const TextDin = () => {
    const [val, seValue] = useState(0)



    return (
        <div className='app'>
            <h2>{val}</h2>
            <input
                type="text"
                value={val}
                onChange={event => seValue(event.target.value)}
            />

        </div>
    );
};

export default TextDin;