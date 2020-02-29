import React, { useEffect } from 'react';
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Users from './components/Users'
import Profile from './components/Profile'
import  { getData } from './reducers'

const App = ({ users, isEmpty, getData }) => {
  console.log(users)
  useEffect( () => { if( isEmpty ) getData() }, [ isEmpty ])
  if (isEmpty) return (<div>Loading.......</div>)
  return (
    <div className="App">
      <Route exact path = '/' render = { () => <Users usersData = { users.data }/>}/>
      <Route path = '/profile/:id/:name' render = { () => <Profile />}/>
    </div>
  );
} 

const mapStateToProps = ( state ) => {
  console.log('render')
  return {
    users : state.allData.data.users,
    isEmpty: state.allData.isEmpty
  }
}

 export default connect( mapStateToProps, { getData })( App )
