import { UseState, useState } from 'react';
export const Message = (props) => {
    const [message, setMessage] = useState('Welcome ha');
    return (
        <div>
            <h1>{message}</h1>
            <button onClick={()=> setMessage("Text here action")}> Click me</button>
        </div>
    );
}