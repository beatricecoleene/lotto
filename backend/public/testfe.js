import React, { useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3000"); // Connect to your backend

const Register = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    email: "",
    password: "",
    birthdate: "",
    contact_num: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Emit "registerUser" event to backend
    socket.emit("registerUser", formData);

    // Listen for response
    socket.on("accountCreated", (data) => {
      setMessage(data.message);
    });

    socket.on("creationError", (error) => {
      setMessage(error.message);
    });
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="user_name" placeholder="Username" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <input type="date" name="birthdate" onChange={handleChange} required />
        <input type="text" name="contact_num" placeholder="Contact Number" onChange={handleChange} required />
        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Register;
