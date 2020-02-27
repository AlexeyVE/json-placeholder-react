import React from 'react';
import { Route } from 'react-router-dom'
import Users from './components/Users/'
import Profile from './components/Profile/'

export default ( props ) => {
  return (
    <div className="App">
       <Route exact path = '/' render = { () => <Users /> }/>
       <Route path = '/profile/:userName/:userId' render = { () => <Profile /> }/>
    </div>
  );
}

