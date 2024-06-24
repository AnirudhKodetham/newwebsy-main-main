import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css"; // Import the CSS file

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();



  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "user" && password === "user") {
      sessionStorage.setItem("username", username)
      sessionStorage.setItem("password", password)
      navigate("/home");
    } else if (username === "admin" && password === "admin") {
      sessionStorage.setItem("username", username)
      sessionStorage.setItem("password", password)
      navigate("/admin");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>
      <form className= "login-form"onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};

export default Login;
