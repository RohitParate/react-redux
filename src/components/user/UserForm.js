import React, { useState } from 'react'
import { useUsers } from '../../hooks/user.hook';
const UserForm = () => {
  const { addUserData } = useUsers();
  const [user, setUser] = useState({
    name: '',
    email: '',
    mobile: 0
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //
    addUserData(user);
    setUser({
      name: '',
      email: '',
      mobile: 0
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Name :
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>Email :
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>mobile no:
          <input
            type="number"
            name="mobile"
            value={user.mobile}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Add User</button>
      </form>
    </>
  )
}

export default UserForm