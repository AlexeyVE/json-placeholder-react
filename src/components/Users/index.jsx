import React from 'react'
// import { connect } from 'react-redux'
// import { getUsers } from '../../reducers/'
import User from '../User/'


const Users = ( { usersData,...props } ) => {
    usersData = usersData.map( ( user, index ) => <User key = { index } 
                                                userId = { user.id } 
                                                name = { user.name }/> )
  return (
    <div className = "users">
      { usersData }
    </div>
    )
  }

  export default Users
