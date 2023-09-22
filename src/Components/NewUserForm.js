import React, { useState, useEffect } from 'react';
import USERS_API from '../API/UsersApi';

export function NewUserForm() {
  const [newUserName, setNewUserName] = useState('');
  const [newUserJobTitle, setNewUserJobTitle] = useState('');
  const [newUserCompanyName, setNewUserCompanyName] = useState('');
  const [users,setUsers] = useState('')

  function getUsers(){
    fetch(USERS_API)
    .then(data => data.json())
    .then(data => setUsers(data))
  }
  
  useEffect(() => {
    getUsers()
  }, []);

  function postNewUser(e){
    e.preventDefault()
  
    fetch(USERS_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: newUserName,
        jobTitle: newUserJobTitle,
        companyName: newUserCompanyName
      })
    }).then(() => getUsers())
  }


  return (
    <form>
    <h3> POST New User Form</h3>
    <label>Name</label>
    <input onChange={(e) => setNewUserName(e.target.value)} ></input>
    <label>Job Title</label>
    <input onChange={(e) => setNewUserJobTitle(e.target.value)}></input>
    <label>Company Name</label>
    <input onChange={(e) => setNewUserCompanyName(e.target.value)}></input>
    <button onClick={(e) => postNewUser(e)}>Submit</button>
  </form>
  );
}

export default NewUserForm;
