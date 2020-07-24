import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Signup from "./Components/Signup";
import Signin from "./Components/Signin"


export default function App() {
  return (
    <div className="App">
      <nav>
      <div className='nav-link'>
      <Link to="/src/Components/Signup" style={{paddingLeft: 13, textDecoration: 'none', color: 'black'}}>Home</Link>
      <Link to="/src/Components/Signin" style={{paddingLeft: 13, textDecoration: 'none', color:'black'}}>Signin</Link>
      </div>
      </nav> 
         <Route exact path="/src/Components/Signup" component={Signup} />
        <Route exact path="/src/Components/SignIn" component={Signin} />
           </div>
      
  );
};


 
