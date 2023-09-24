import React from 'react' 
import UpdateUser from './UpdateUser';
import USERS_API from '../API/UsersApi';

function User({ users, getUsers}) {


  const handleGetUsers = () => {
    getUsers()
  }


  

  function deleteUser(id){
    fetch(`${USERS_API}/${id}`, {
      method: 'DELETE',
    }).then(() => getUsers())}

    console.log('Render User component');

  return (
    <div id='userCard' className='card'>
       {users.map((user,index) =>(
        <div className='user-container' key ={index}>
         <div className='user'>
          Name: {user.name} <br></br>
          Job Title: {user.jobTitle} <br></br>
          Company Name: {user.companyName} <br></br><br></br>
          <button 
          className='btn btn-danger' 
          onClick={() =>deleteUser(user.id)} 
            >🗑</button>
         </div>
          <UpdateUser
           user={user} 
           getUsers={handleGetUsers}/>
        </div> 
      ))}
    </div>
  )
}


export default User