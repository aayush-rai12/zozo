import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './components/Home/Home';
import ExampleComponent from './components/Home/Home';
// import Login from './components/login/login';
// import Register from './components/register/Registration';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Login />
    <Register /> */}
    <ExampleComponent />
  </React.StrictMode>
);
