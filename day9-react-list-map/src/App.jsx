import './App.css'
import {  useState } from 'react'
import UserList from './components/userList'

function App() {



  const addUser = () => {
    let name = prompt("Enter name of user: ")
    let role = prompt("Enter role of user: ")

    if (!name || !role) return;

    const newuser =
    {
      id: users.length + 1,
      name,
      role
    }


    setUsers([...users, newuser]);

  }

  const [users, setUsers] = useState([
    { id: 1, name: "N", role: "Frontend Intern" },
    { id: 2, name: "A", role: "Full Stack Intern" },
    { id: 3, name: "rohan", role: "UI Designer" },
    { id: 4, name: "riya", role: "UI Designer" },
    { id: 5, name: "saksham", role: "UI Designer" },
    { id: 6, name: "bhavesh", role: "intern" },
    { id: 7, name: "aman", role: "intern" },
  ]);

  return (
    <>
      <div className="body">

        <UserList users={users} />

        <button className='newUser' onClick={addUser}>Add a user</button>
      </div>

    </>
  )
}

export default App
