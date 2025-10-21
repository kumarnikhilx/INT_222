{/*import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  // GET Method - fetch all students
  const fetchStudents = async () => {
    try {
      const res = await axios.get("http://localhost:5000/students");
      setStudents(res.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  // POST Method - add new student
  const addStudent = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/add", { name, age });
      alert("Student added!");
      setName("");
      setAge("");
      fetchStudents(); // refresh list
    } catch (error) {
      console.error("Error adding student:", error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div style={styles.container}>
      <h1>📚 Student Management</h1>


      <form onSubmit={addStudent} style={styles.form}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
          required
        />
        <input
          type="number"
          placeholder="Enter age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          style={styles.input}
          required
        />
        <button type="submit" style={styles.button}>Add Student</button>
      </form>


      <h2>All Students</h2>
      <ul style={styles.list}>
        {students.map((s) => (
          <li key={s._id}>
            {s.name} — {s.age} years old
          </li>
        ))}
      </ul>
    </div>
  );
}

// 🎨 Simple inline styles
const styles = {
  container: {
    maxWidth: "600px",
    margin: "50px auto",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
  form: {
    marginBottom: "20px",
  },
  input: {
    margin: "5px",
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "8px 15px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#007bff",
    color: "white",
    cursor: "pointer",
  },
  list: {
    listStyleType: "none",
    padding: 0,
  },
};

export default App;*/}


/-------------------------------------*With Axios*----------------------------------------------------/

import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [editId, setEditId] = useState(null);

  // Fetch all students (GET)
  const fetchStudents = async () => {
    try {
      const res = await axios.get("http://localhost:5000/students");
      setStudents(res.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // Add new student (POST)
  const addStudent = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        // Update student
        await axios.put(`http://localhost:5000/update/${editId}`, { name, age });
        alert("Student updated!");
        setEditId(null);
      } else {
        // Add student
        await axios.post("http://localhost:5000/add", { name, age });
        alert("Student added!");
      }
      setName("");
      setAge("");
      fetchStudents();
    } catch (error) {
      console.error("Error adding/updating student:", error);
    }
  };

  // Delete student (DELETE)
  const deleteStudent = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/delete/${id}`);
      alert("Student deleted!");
      fetchStudents();
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  // Edit student (Prefill form)
  const editStudent = (student) => {
    setName(student.name);
    setAge(student.age);
    setEditId(student._id);
  };

  return (
    <div style={styles.container}>
      <h1>📚 Student Management System</h1>

      <form onSubmit={addStudent} style={styles.form}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
          required
        />
        <input
          type="number"
          placeholder="Enter age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          style={styles.input}
          required
        />
        <button type="submit" style={styles.button}>
          {editId ? "Update" : "Add"} Student
        </button>
      </form>

      <h2>All Students</h2>
      <ul style={styles.list}>
        {students.map((s) => (
          <li key={s._id} style={styles.listItem}>
            {s.name} — {s.age} years old
            <div>
              <button onClick={() => editStudent(s)} style={styles.editBtn}>Edit</button>
              <button onClick={() => deleteStudent(s._id)} style={styles.deleteBtn}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

// 🎨 Basic styling
const styles = {
  container: {
    maxWidth: "600px",
    margin: "50px auto",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
  form: {
    marginBottom: "20px",
  },
  input: {
    margin: "5px",
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "8px 15px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#007bff",
    color: "white",
    cursor: "pointer",
  },
  list: {
    listStyleType: "none",
    padding: 0,
  },
  listItem: {
    margin: "10px 0",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  editBtn: {
    backgroundColor: "#ffc107",
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "5px 10px",
    marginRight: "5px",
    cursor: "pointer",
  },
  deleteBtn: {
    backgroundColor: "#dc3545",
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "5px 10px",
    cursor: "pointer",
  },
};

export default App;
