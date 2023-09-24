import React, { useState} from 'react';
import USERS_API from '../API/UsersApi';
 
export function NewUserForm({ getUsers}) {
  const [newUserName, setNewUserName] = useState('');
  const [newUserJobTitle, setNewUserJobTitle] = useState('');
  const [newUserCompanyName, setNewUserCompanyName] = useState('');
 



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
    <div className='container'>
    <form>
    <h3> POST New User Form</h3>
    <label>Name</label>
    <input 
    placeholder='Enter Name' 
    onChange={(e) => setNewUserName(e.target.value)} />
    <br></br>
    <label>Job Title</label>
    <input 
    placeholder='Enter Job Title' 
    onChange={(e) => setNewUserJobTitle(e.target.value)}/>
    <br></br>
    <label>Company Name</label>
    <input 
    placeholder='Enter Company Name' 
    onChange={(e) => setNewUserCompanyName(e.target.value)}/>
    <br></br>
    <button 
    className='btn btn-success' 
    onClick={(e) => postNewUser(e)}
      >Submit</button>
  </form>
  </div>
  );
}

export default NewUserForm;
