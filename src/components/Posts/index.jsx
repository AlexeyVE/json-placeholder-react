import React from 'react'
import Post from '../Post/'

export default ( { posts } ) => {
  posts = posts.map( post => <Post key ={ post.id }
                                   postTitle = { post.title }
                                   postBody = { post.body }/>)
  return (
    <div className = "posts">
    <h3>Posts</h3>
      { posts } 
    </div>
  )
}