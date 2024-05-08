import { useState } from "react";
import { Users } from "./Users";

export const Form =() => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`hey  ${username}`);
    }


    return <form onSubmit={handleSubmit}>
        <div>
            <label> Username: </label>
            <input type='text' value={username} onChange={(event)=> setUsername(event.target.value)}></input>
<br />
<label> Password: </label>
            <input type='text' value={password} onChange={(event)=> setPassword(event.target.value)}></input>
            <button type="submit">Log in</button>
        </div>
        <Users></Users>
    </form>
}