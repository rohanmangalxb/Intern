import './App.css'
import UserList from './components/userList'

function App() {

  const users = [
    { id: 1, name: "N", role: "Frontend Intern" },
    { id: 2, name: "A", role: "Full Stack Intern" },
    { id: 3, name: "rohan", role: "UI Designer" },
    { id: 4, name: "riya", role: "UI Designer" },
    { id: 5, name: "saksham", role: "UI Designer" },
    { id: 6, name: "bhavesh", role: "intern" },
    { id: 7, name: "aman", role: "intern" },
  ];

  return (
    <>
      <div className="body">

        <UserList users={users} />
      </div>

    </>
  )
}

export default App
