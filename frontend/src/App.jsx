import { useEffect, useState } from "react";

const API_URL = "http://localhost:8080/api/users";

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const loadUsers = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setUsers(data));
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const addUser = () => {
    if (!name || !email) return;

    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email })
    })
      .then(res => res.json())
      .then(() => {
        setName("");
        setEmail("");
        loadUsers();
      });
  };

  return (
    <div>
      <h1>User List</h1>

      <div>
        <input
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <button onClick={addUser}>Add User</button>
      </div>

      {users.map(user => (
        <div key={user.id}>
          <p>{user.name} - {user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default App;