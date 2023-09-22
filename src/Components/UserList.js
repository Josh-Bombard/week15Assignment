import React, {useState, useEffect} from 'react'
import User from './User'
import USERS_API from '../API/UsersApi'
import NewUserForm from './NewUserForm'
import { createUser } from './createUser'

function UserList() {
  const [users, setUsers] = useState([])
 
useEffect(() => {
  const getUsers = async () => {
    const response =  await fetch(USERS_API)
    const x = await response.json()
    console.log(x);
    setUsers(x)
  }

  getUsers();
}, [])

 function deleteUser(id) {
  const response = fetch(`${USERS_API}/${id}`, {
    method:'DELETE'
  })

  setUsers(users.filter(usersInArray => usersInArray.id !== id))
 };

 function handleCreateUser() {
  createUser(users);
};

  let showUsers = users.map(usersInArray => <User key={usersInArray.id} users={usersInArray} setUsers={setUsers} deleteUser={deleteUser}/>)

    return(
      <>
      THIS IS THE API FOR PASSING PURPOSES
      <NewUserForm users={users} handleCreateUser={handleCreateUser}/>
      {showUsers}
      </>
    )
}

export default UserList