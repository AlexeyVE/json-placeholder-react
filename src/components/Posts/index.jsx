import React from 'react'
import Post from '../Post/'

export default ( { posts } ) => {
  const postsList = posts.map( post => <Post key = { post.id }
                                   postTitle = { post.title }
                                   postBody = { post.body }/>)
  return (
    <ul className = "posts" uk-accordion="true">
      { postsList } 
    </ul>
  )
}
