import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getUsers } from '../../reducers/'
import User from '../User/'


const Users = ( { users, getUsers,...props } ) => {

  useEffect( () => {
    if( users.length === 0 ) getUsers() } , [ users ] )
    users = users.map( ( user, index ) => <User key = { index } 
                                                userId = { user.id } 
                                                name = { user.name }/> )
  return (
    <div className = "users">
      { users }
    </div>
    )
}

const mapStateToProps = ( state ) => {
  return {
    users: state.data.users
  }
}

export default connect( mapStateToProps,{ getUsers } )(Users)