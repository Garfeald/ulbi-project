import React, {useState} from 'react';
import './Counter.scss'

const Counter = () => {
    const [counter, setCounter] = useState<number>(0)
    return (
        <div>
            <h1 className='counter'>{counter}</h1>
            <button onClick={() => setCounter(counter +1)}>COUNTER</button>
        </div>
    );
};

export default Counter;