/**
 * React component to display a list of all users.
 * Fetches user data from backend and provides navigation back to form.
 */

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function UsersPage() {
  // State to hold list of users
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  // Fetch users from backend on component mount
  useEffect(() => {
    axios
      .post("http://localhost:4002/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  return (
    <div style={{ padding: "1rem" }}>
      <h2>All Users</h2>

      {users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user._id}>
              <strong>{user.name}</strong> – {user.email}
            </li>
          ))}
        </ul>
      ) : (
        <p>No users found.</p>
      )}
      <button onClick={() => navigate("/")} style={{ marginTop: "1rem" }}>
        ⬅ Back to Form
      </button>
    </div>
  );
}

export default UsersPage;
