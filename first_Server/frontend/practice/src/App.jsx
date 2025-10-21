import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [users, setUsers] = useState([])

  // GET all users on button click
  const fetchUsers = () => {
    axios.get("http://localhost:3000/user")
      .then((res) => {
        console.log(res.data)
        setUsers(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  // POST a new user on button click
  const addUser = () => {
    axios.post("http://localhost:3000/user", {
      name: "Nikhil Kumar",
      age: 21,
      course: "B.TECH",
      marks: 90
    })
    .then((res) => {
      console.log(res.data)
      alert("User added successfully!")
    })
    .catch((err) => {
      console.log(err)
    })
  }

  return (
    <div className="App">
      <h1>React Axios Example</h1>
      
      <button onClick={fetchUsers}>Fetch Users</button>
      <button onClick={addUser}>Add User</button>

      <h2>Users List:</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name} - {user.age} - {user.course} - {user.marks}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
