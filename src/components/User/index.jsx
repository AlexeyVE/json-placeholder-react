import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
// import { connect } from 'react-redux'
// import { getCurrentUserPosts } from '../../reducers/'



export default ({ name, userId }) => {
  return (
    <div className = "user">
      <div>
       <NavLink to = { `/profile/${userId}/${name}`} >
        { name }
       </NavLink> 
      </div>
    </div>
    )
}

