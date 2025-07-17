import React, { useState } from "react";
import axios from "axios";

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4002/create-user",
        formData
      );
      console.log(response);
      setMessage(`${response.data.name} is created`);
    } catch (err) {
      console.error(err);
      setMessage(`Error while creating user.`);
    }
  };

  return (
    <div>
      <div style={{ padding: "20px" }}>
        <h2>Create User</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" style={{ marginTop: "10px" }}>
            Create
          </button>
        </form>
        {message && <p>{message}</p>}
      </div>
      <a href="http://localhost:5173/users">All users</a>
    </div>
  );
};

export default UserForm;
