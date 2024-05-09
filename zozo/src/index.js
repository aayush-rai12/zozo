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
