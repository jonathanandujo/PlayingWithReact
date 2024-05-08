import { useState, useEffect} from 'react';
export const Users =() => {
    const [users, setUsers] = useState([]);
    
    //when loading
    useEffect(()=> {
        fetch('https://dummyjson.com/users')
        .then((response) => response.json())
        .then((data) => setUsers(data.users))
        .catch(err=> console.log(err));
    }, [])

    return <div>
        hey {users.length}
        <ul>
            {
                users.map(user => {
                    return <li key={user.id}> {user.username} + {user.password}</li>
                })
            }
        </ul>
    </div>
}



    