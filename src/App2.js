import './App.css'
import { useState, useEffect } from 'react'
import NewUserForm from './Components/NewUserForm';
import User from './Components/User';
import USERS_API from './API/UsersApi';

function App() {
  const [users, setUsers] = useState('')
  function getUsers(){
    fetch(USERS_API)
    .then(data => data.json())
    .then(data => setUsers(data))
  }
  
  useEffect(() => {
    getUsers()
  }, []);

return (
  <div className="App">
    {/* CODE BELOW: PART: 5.3 Connecting our POST */}

    <NewUserForm />
    <User />
    {/* CODE BELOW: PART 5.1: Connecting our GET  //  PART 5.4: Connecting our UPDATE */}

  </div>
)
}











export default App