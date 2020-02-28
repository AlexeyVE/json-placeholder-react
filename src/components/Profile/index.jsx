import React, { useEffect } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter, NavLink } from 'react-router-dom'
import { getCurrentUserData } from '../../reducers'

import Posts from '../Posts/'
import Albums from '../Albums/'

const Profile = ( { getCurrentUserData, allPosts, allAlbums,...props } ) => {
  let userId = props.match.params.id,
      name = props.match.params.name
  useEffect(() => { getCurrentUserData( allPosts, allAlbums, userId ) },[ userId ])
  console.log(userId)
   return (
    <div>
      <h3>{ name }</h3>
      <NavLink to = "">-[ Back ]-</NavLink>
      <Posts posts = { props.currentUserPosts}/>
      <Albums albums = { props.currentUserAlbums }/>
    </div>
    )
}

const mapStateToProps = ( state ) => {
  return {
    currentUserAlbums: state.allData.currentUserAlbums,
    currentUserPosts: state.allData.currentUserPosts,
    allPosts: state.allData.data.posts.data,
    allAlbums: state.allData.data.albums.data,
  }
}

export default compose( connect( mapStateToProps,{ getCurrentUserData } ), 
                        withRouter )(Profile)



