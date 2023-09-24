import React, {useState, useEffect} from 'react'
import User from './User'
import USERS_API from '../API/UsersApi'
import NewUserForm from './NewUserForm'


function UserList() {
  const [users, setUsers] = useState([])
 

  const getUsers = async () => {
    const response =  await fetch(USERS_API)
    const x = await response.json()
    console.log(x);
    setUsers(x)
  }
  useEffect(() => {
  getUsers();
}, [])

    return(
      <>
      <NewUserForm 
      getUsers={getUsers}/>
      
      <User 
      users={users} 
      setUsers={setUsers} 
      getUsers={getUsers} />
      </>
    )
}

export default UserList