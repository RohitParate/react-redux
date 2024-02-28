import React, { useEffect } from 'react'
import { useUsers } from '../../hooks/user.hook';


const UserList = () => {
   const {usersData, getUserDataFromApi} = useUsers()

   useEffect(() => {
    getUserDataFromApi()
   },[])
    return (
        <>
            {!!usersData.length && <>
                <ul>
                    {usersData.map((user, index) =>
                        <li key={index}>{user.name}</li>
                    )}
                </ul>
            </>}
        </>
    )
}

export default UserList