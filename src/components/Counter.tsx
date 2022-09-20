import React, {useState} from 'react';
import classes from './Counter.module.scss'

const Counter = () => {
    const [counter, setCounter] = useState<number>(0)
    return (
        <div>
            <div className={classes.counter}>{counter}</div>
            <button onClick={() => setCounter(counter +1)}>COUNTER</button>
        </div>
    );
};

export default Counter;