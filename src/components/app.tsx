import Header from "./header";
import React, { useState, useEffect } from 'react';

const App = () => {

    const [counter , setCounter] = useState(0);

    useEffect(() => {
        console.log("Component did mount");
        return () => {
            console.log("Component will unmount");
        }
    }, [counter]);

    const TODOS = [
        "Learn React",
        "Learn TypeScript",
        "Learn Webpack",
        "Build an app"
    ]
    return (
    <>
        <div className = "container">
            <h1>React App</h1> 
            <button onClick={() => setCounter(counter + 1)}>{counter}</button> 
        </div>
        {
            Math.random() > 0.5 ? <p>Random number is greater than 0.5</p> : <p>Random number is less than 0.5</p>
        }
        <ul>
            {TODOS.map((todo, index) => <li key={index}>{todo}</li>)}
        </ul>
        <Header message={"Hello World"} />
    </>)
};

export default App;