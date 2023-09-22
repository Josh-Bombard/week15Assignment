import React, {useState} from 'react'
import USERS_API from '../API/UsersApi'


export default function UpdateUser({getUsers, user}) {
  const [updatedName, setUpdatedName] = useState('');
  const [updatedJobTitle, setUpdatedJobTitle] = useState('');
  const [updatedCompanyName, setUpdatedCompanyName] = useState('');

  function updateUser(e, userObject){
    e.preventDefault();
    
      let updatedUserObject = {
        ...userObject,
        name: updatedName,
        jobTitle: updatedJobTitle,
        companyName: updatedCompanyName
      }
    
      fetch(`${USERS_API}/${userObject.id}`, {
        method: 'PUT',
        body: JSON.stringify(updatedUserObject),
        headers: {
          'Content-Type':'application/json'
        }
      }).then(() => getUsers())
    }

  return (
    <form>
    <h3>Update this user</h3>
    <label>Update Name</label>
    <input onChange={(e) => setUpdatedName(e.target.value)} ></input><br></br>
    <label>Update Job Title</label>
    <input onChange={(e) => setUpdatedJobTitle(e.target.value)}></input><br></br>
    <label>Update Company Name</label>
    <input onChange={(e) => setUpdatedCompanyName(e.target.value)}></input><br></br>
    <button onClick={(e) => updateUser(e, user)} >Update User</button>
  </form>
  )
}