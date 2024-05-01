import React, { useState } from "react";
import "../register/Registration.css"; // Assuming you have a CSS file for register component

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const PASSWORD_MIN_LENGTH = 6; // Minimum password length

const isEmailValid = (email) => EMAIL_REGEX.test(email);

const isPasswordValid = (password) => password.length >= PASSWORD_MIN_LENGTH;

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // Define confirmPassword state
  const [userNameError, setUserNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handleInputChange = (e, setter, setError) => {
    setter(e.target.value);
    setError(""); // Clear error when input value changes
  };

  const validateDetails = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    const errors = [];

    if (userName === "") {
      errors.push(`Enter your name please.`);
      setUserNameError("Enter your name please.");
    } else {
      setUserNameError("");
    }

    if (!isEmailValid(email)) {
      errors.push("Please enter a valid email address.");
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }

    if (!isPasswordValid(password)) {
      errors.push(`Password must be at least ${PASSWORD_MIN_LENGTH} characters.`);
      setPasswordError(`Password must be at least ${PASSWORD_MIN_LENGTH} characters.`);
    } else {
      setPasswordError("");
    }

    if (password !== confirmPassword) {
      errors.push("Passwords do not match.");
      setConfirmPasswordError("Passwords do not match.");
    } else {
      setConfirmPasswordError("");
    }

    if (errors.length === 0) {
      // Perform form submission logic here
      console.log("Form submitted  successfully!"); // Placeholder for actual submission
    } else {
      console.log(errors.join("\n"));
    }
  };

  return (
    <div className="center-container">
      <div className="register-container">
        <h1 className="welcome-text">Welcome zozo</h1>
        <p className="register-details-text">
          Please enter your details below
        </p>

        <label className="input-label">Full Name</label>
        <div className="input-container">
          <span className="validation-error">{userNameError}</span>
          <input
            type="text"
            className="register-input"
            placeholder="Enter your cute name"
            value={userName}
            onChange={(e) => handleInputChange(e, setUserName, setUserNameError)}
          />
        </div>

        <label className="input-label">User Email</label>
        <div className="input-container">
          <span className="validation-error">{emailError}</span>
          <input
            type="email"
            className="register-input"
            placeholder="zozo@gmail.com"
            value={email}
            onChange={(e) => handleInputChange(e, setEmail, setEmailError)}
          />
        </div>

        <label className="input-label">Password</label>
        <div className="input-container">
          <span className="validation-error">{passwordError}</span>
          <input
            type="password"
            className="register-input"
            placeholder="Password"
            value={password}
            onChange={(e) => handleInputChange(e, setPassword, setPasswordError)}
          />
        </div>

        <label className="input-label">Confirm Password</label>
        <div className="input-container">
          <span className="validation-error">{confirmPasswordError}</span>
          <input
            type="password"
            className="register-input"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => handleInputChange(e, setConfirmPassword, setConfirmPasswordError)}
          />
        </div>

        <button className="register-button" onClick={validateDetails}>
          Create Account
        </button>

        <p className="login-text">
          Already have an account?
          <a href="/login" className="login-link">
            Login Now
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
