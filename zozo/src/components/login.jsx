import React, { useState } from "react";
import "../index.css";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const PASSWORD_MIN_LENGTH = 6; // Minimum password length

const isEmailValid = (email) => EMAIL_REGEX.test(email);

const isPasswordValid = (password) => password.length >= PASSWORD_MIN_LENGTH;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateDetails = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    const errors = [];

    if(email!=="" || password !==""){

        if (!isEmailValid(email)) {
          errors.push("Please enter a valid email address.");
        }

        if (!isPasswordValid(password)) {
          errors.push(`Password must be at least ${PASSWORD_MIN_LENGTH} characters.`);
        }

        if (errors.length === 0) {
          // Perform form submission logic here
          console.log("Form submitted  successfully!"); // Placeholder for actual submission
        }
    }
    else{
      alert("Please enter login Details");
    }
  };

  return (
    <div className="center-container">
      <div className="login-container">
        <h1 className="welcome-text">Welcome zozo</h1>
        <p className="login-details-text">
          Please enter your login details below
        </p>

        {/* Display validation errors below each input field */}
        {email && !isEmailValid(email) && (
          <p className="validation-error">Please enter a valid email address.</p>
        )}

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

        {password && !isPasswordValid(password) && (
          <p className="validation-error">
            Password must be at least {PASSWORD_MIN_LENGTH} characters.
          </p>
        )}

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
