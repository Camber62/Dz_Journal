import React,{useState} from 'react';

const Count = () => {
    const [likes, seLike] = useState(0)

    function decrement() {
        seLike(likes - 1)
    }

    function increment() {
        seLike(likes + 1)
    }

    return (
        <div>
            <h1>{likes}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    );
};

export default Count;