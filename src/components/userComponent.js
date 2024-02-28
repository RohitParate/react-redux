import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addUsers, removeUsers } from '../redux/user/userAction';
import { useUsers } from '../hooks/user.hook';
import UserForm from './user/UserForm';
import UserList from './user/UserList';

function UserComponent() {
    return (
        <>
            {/* {!!users.length && <>
                <ul>
                    {users.map((user, index) =>
                        <li key={index}>{user.name}</li>
                    )}
                </ul>
            </>} */}
            <UserForm/>
            <UserList/>
        </>

    )
}

export default UserComponent