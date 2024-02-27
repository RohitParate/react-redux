import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { addUsers, removeUsers } from '../redux/user/userAction';

function UserComponent() {
    const users = useSelector(state => state.users.users)
    const dispatch = useDispatch()
    // const [users, setUsers] = useState([]);
    const getUsers = async () => {
        try {
            const usersResponse = await axios.get('https://jsonplaceholder.typicode.com/users');
            if (usersResponse) {
                // setUsers(usersResponse.data);
                dispatch(addUsers(usersResponse.data));
            }
        } catch (error) {
            dispatch(removeUsers())
        }
    }
    useEffect(() => {
        getUsers()
    }, [])
    return (
        <>
            {!!users.length && <>
                <ul>
                    {users.map((user, index) =>
                        <li key={index}>{user.name}</li>
                    )}
                </ul>
            </>}
        </>

    )
}

export default UserComponent