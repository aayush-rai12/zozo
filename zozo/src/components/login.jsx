import React, { useState } from "react";
import "../index.css";


const isEmailValid = (email) => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return regex.test(email);
};

const isPasswordValid = (password) => {
  const regex = /^.{6,}$/;
  return regex.test(password);
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateDetails = () => {
    if(!isEmailValid(email)) {
      alert('Please enter a valid email address');
     
    }

    if(!isPasswordValid(password)) {
      alert('Please enter a valid password.');
     
    }
    alert('everything is going good.');
  };
  
  return (
    <div className="center-container">
      <div className="login-container">
        <h1 className="welcome-text">Welcome zozo</h1>
        <p className="login-details-text">
          Please enter your login details below
        </p>

        <label className="input-label">User Email</label>
        <div className="input-container">
          <input
            type="email"
            className="login-input"
            placeholder="zozo@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <label className="input-label">Password</label>
        <div className="input-container">
          <input
            type="password"
            className="login-input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="login-button" onClick={validateDetails}>
          Login
        </button>

        <p className="forgot-password-text">
          <a href="/forgot-password" className="forgot-password-link">
            Forgot your password?
          </a>
        </p>

        <p className="register-text">
          Don’t have an account?
          <a href="/register" className="register-link">
            Register Now
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
