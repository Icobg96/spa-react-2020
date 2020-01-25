import React,{ useState } from 'react';

const FunctionalComponent = props => {
    const [count, setCount] = useState(1);
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            {props.children}
            <div>{count}</div>
            <button className="btn btn-primary" type="button" onClick={() => setCount(count + 1)}> Increment </button>
            <button className="btn btn-primary" type="button" onClick={() => setCount(count - 1)}> Decement </button>
        </div>
    )
}
export default FunctionalComponent;