import React from 'react'
// import { connect } from 'react-redux'
// import { getUsers } from '../../reducers/'
import User from '../User/'


const Users = ( { usersData,...props } ) => {
    console.log(usersData)
    usersData = usersData.map( ( user, index ) => <User key = { index } 
                                                        userId = { user.id } 
                                                        name = { user.name }
                                                        address = { user.address }
                                                        email = { user.email }
                                                        phone = { user.phone }/>
                                                        )
  return (
    <div className = "uk-child-width-1-4@m uk-grid-match " uk-grid = "true">
        { usersData }
    </div>  
    )
  }

  export default Users
