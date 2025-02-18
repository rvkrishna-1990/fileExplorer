import React, { useState } from 'react';

const Counter = ()=>{
    const [counter, setCounter] = useState(0);
    const decrementCounter = ()=>{
        setCounter((prev)=>prev - 1);
        window.postMessage("increment", "*");
    }
    const incrementCounter = ()=>{
        setCounter((prev)=>prev + 1);
        window.postMessage("decrement", "*");
    }
    return (
        <div>
            <button className='increment' onClick={incrementCounter}>+</button>
            <p className='counterValue'>{counter}</p>
            <button className='decrement' onClick={decrementCounter}>-</button>
        </div>
    )
}

export default Counter;