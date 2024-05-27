
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


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ReactRouting from './routes/routing';
// import Home from './components/Home/Home'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <ReactRouting/>
    {/* <Home /> */}
  </React.StrictMode>
);
