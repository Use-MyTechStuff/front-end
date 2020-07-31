import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import PrivateRoute from "./utils/PrivateRoute";

import NavBar from "./components/NavBar";
import Login from "./components/Login";
import SignUp from "./components/SignUp.js";
import Dashboard from "./components/Dashboard";
import TechList from "./components/rentalstuf/TechList";
import EditItem from "./components/rentalstuf/EditItem";
import RentItem from "./components/rentalstuf/RentItem";



function App() {
  const token = localStorage.getItem('token')
  return (
    <div className="App">
    <NavBar token={token}/>
      <Switch>
        <Route exact path='/' component={Login}/>
        <Route path='/signup' component={SignUp} />
        <PrivateRoute 
          exact path='/browse-rentals'
          component={TechList}
        />
        <PrivateRoute 
          exact
          path='/user-page/:user_id'
          component={Dashboard}
        />
        <PrivateRoute 
          exact
          path='/user-page/items/:id'
          component={EditItem}
        />
        <PrivateRoute
          exact
          path='/browse-rentals/:id'
          component={RentItem}
        />
      </Switch>
    </div>
  );
}

export default App;
