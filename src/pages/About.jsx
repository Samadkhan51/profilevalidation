import React from "react";
import { useState } from "react";
function About(props){
    const [count,setCount] = useState(0);
    return(
        <>
        <h1>hello from about</h1>
        <h2>Count: {count}</h2>
        {count >= 10 && <p style={{color: 'red'}}>Max limit reached</p>}
        <button className="btn btn-danger" onClick={()=> setCount(count+1)}>+</button>
        {count == 0 ? 
        <button className="btn btn-primary disabled">-</button>
        :
        <button className="btn btn-primary" onClick={()=> setCount(count-1)}>-</button>
        }
        <button className="btn btn-warning" onClick={()=> setCount(0)}>Reset</button>
        </>
    );
}

export default About;