import React,{Component, useState} from "react";

function Counter_function() {
    const[count, setCount] = useState(0);

    return (
        <div>
        <h1>Gia tri: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Tang</button>
        <button onClick={() => setCount(count - 1)}>Giam</button>
        </div>
    )
}
export default Counter_function;