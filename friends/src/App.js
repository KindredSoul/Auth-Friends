import React, { useEffect, useState } from 'react';
import {Route, Link} from 'react-router-dom'
import './App.css';
import { axiosWithAuth } from './utils/axiosWithAuth';
import Login from './components/Login'
import PrivateRoute from './utils/PrivateRouter';
import FriendsList from './components/FriendsList';

function App() {
  // useEffect(() => {
  //   axiosWithAuth()
  //   .get("http://localhost:5000/api/friends")
  //   .then(res => console.log(res))
  //   .catch(err => console.dir(err))
  // }, []);
  
  return (
    <div className="App">
      <Link to ="/login">Log In</Link>
      <Route path="/login"><Login /></Route>
      <PrivateRoute path="/friends" component={FriendsList} />
    </div>
  );
}

export default App;
