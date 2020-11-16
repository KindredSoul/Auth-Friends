import React from 'react';
import {Route, Link} from 'react-router-dom'
import './App.css';
import Login from './components/Login'
import PrivateRoute from './utils/PrivateRouter';
import FriendsList from './components/FriendsList';

function App() {
  return (
    <div className="App">
      <Link to ="/login">Log In</Link>
      <Route path="/login"><Login /></Route>
      <PrivateRoute path="/friends" component={FriendsList} />
    </div>
  );
}

export default App;
