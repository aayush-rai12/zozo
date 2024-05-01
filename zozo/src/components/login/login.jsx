import React, { useState } from "react";
import "./login.css";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const PASSWORD_MIN_LENGTH = 6; // Minimum password length

const isEmailValid = (email) => EMAIL_REGEX.test(email);

const isPasswordValid = (password) => password.length >= PASSWORD_MIN_LENGTH;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateDetails = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    const errors = [];

    if (!isEmailValid(email)) {
      errors.push("Please enter a valid email address.");
      setEmailError("Please enter a valid email address.");
    }

    if (!isPasswordValid(password)) {
      errors.push(`Password must be at least ${PASSWORD_MIN_LENGTH} characters.`);
      setPasswordError(`Password must be at least ${PASSWORD_MIN_LENGTH} characters.`);
    }

    if (errors.length === 0) {
      // Perform form submission logic here
      console.log("Form submitted successfully!"); // Placeholder for actual submission
    }
  };

  // Function to clear email error when input field value changes
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(""); // Clear email error when input value changes
  };

  // Function to clear password error when input field value changes
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError(""); // Clear password error when input value changes
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
          <span className="validation-error">{emailError}</span>
          <input
            type="email"
            className="register-input"
            placeholder="zozo@gmail.com"
            value={email}
            onChange={handleEmailChange} // Use handleEmailChange function
          />
        </div>

        <label className="input-label">Password</label>
        <div className="input-container">
          <span className="validation-error">{passwordError}</span>
          <input
            type="password"
            className="login-input"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange} // Use handlePasswordChange function
          />
        </div>

        <p className="forgot-password-text">
          <a href="/forgot-password" className="forgot-password-link">
            Forgot your password?
          </a>
        </p>

        <button className="login-button" onClick={validateDetails}>
          Login
        </button>

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
