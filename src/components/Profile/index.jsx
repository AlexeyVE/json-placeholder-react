import React, { useEffect } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getCurrentUserPosts, getCurrentUserAlbums } from '../../reducers/'
import Posts from '../Posts/'
import Albums from '../Albums/'

const Profile = ( { getCurrentUserAlbums, getCurrentUserPosts, posts, albums, ...props } ) => {
  let userId = props.match.params.userId, name = props.match.params.userName
  useEffect( () => {
    if( posts.length === 0 ) getCurrentUserPosts( userId )
    if( albums.length === 0 ) getCurrentUserAlbums( userId )  
  },[ posts,albums ])
  alert(userId)
  return (
    <div>
      <h4> { name } </h4>
      <Posts posts = { posts }/>
      <Albums albums = { albums } />
    </div>
    )
}

const mapStateToProps = ( state ) => {
  return { 
    posts: state.data.posts,
    albums: state.data.albums,
  }
}

export default compose( connect( mapStateToProps, { getCurrentUserPosts,getCurrentUserAlbums } ),
                        withRouter)( Profile )

