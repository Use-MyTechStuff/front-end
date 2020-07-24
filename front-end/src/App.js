import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Signup from "./Components/Signup";
import Signin from "./Components/Signin"


export default function App() {
  return (
    <div className="App">
      <nav>
      <h1>New User Form</h1>
      <div className='nav-link'>
      <Link to="/src/Components/Signup">Home</Link>
      <Link to="/src/Components/Signin">SignIn</Link>
      </div>
      </nav> 
         <Route path="/src/Components/Signup" component={Signup} />
        <Route path="/src/Components/SignIn" component={Signin} />
           </div>
      
  );
};


 
