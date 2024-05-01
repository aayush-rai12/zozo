import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './components/login/login';
import Register from './components/register/Registration';
// import Home from './components/Home/Home'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Login />
    <Register />
    {/* <Home /> */}
  </React.StrictMode>
);
