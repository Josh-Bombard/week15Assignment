import React, {useState, useEffect} from 'react' 
import UpdateUser from './UpdateUser';
import USERS_API from '../API/UsersApi';

function User() {
  const [users, setUsers] = useState([{}]);

 function getUsers(){
    fetch(USERS_API)
    .then(data => data.json())
    .then(data => setUsers(data))
  }
  
  useEffect(() => {
    getUsers()
  }, []);

  

  function deleteUser(id){
    fetch(`${USERS_API}/${id}`, {
      method: 'DELETE',
    }).then(() => getUsers())}



  return (
    <div id='userCard' className='card'>
       {users.map((user,index) =>(
        <div className='user-container' key ={index}>
         <div >
          Name: {user.name} <br></br>
          Job Title: {user.jobTitle} <br></br>
          Company Name: {user.companyName} <br></br>
          <button onClick={() =>deleteUser(user.id)} >🗑</button>
         </div>
          <UpdateUser user={user} getUsers={getUsers}/>
        </div> 
      ))}
    </div>
  )
}


export default User