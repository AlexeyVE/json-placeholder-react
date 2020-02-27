import { api } from '../api/'

const GET_USERS = 'GET_USERS'
const GET_CURRENT_USER_POSTS = 'GET_CURRENT_USER_POSTS'
const GET_CURRENT_USER_ALBUMS = 'GET_CURRENT_USER_ALBUMS'

let initialState = {
  users: [],
  posts: [],
  albums: [],
}

export default ( state = initialState, action ) => {
  switch ( action.type ) {
    case GET_USERS: 
      return {...state, users: [...action.payload ] }
    case GET_CURRENT_USER_POSTS: 
      return {...state, posts: [...action.payload ] }
    case GET_CURRENT_USER_ALBUMS: 
      return {...state, albums: [...action.payload ] }
    default: return state  
  }
}


const get_users = ( payload ) => ({ type: GET_USERS, payload })

export const getUsers = () => dispatch => {
  api.getAllUsers().then( res => dispatch( get_users( res.data )))
  .catch( err => console.log( err ))
}

const get_current_user_posts = ( payload ) => 
  ({ type: GET_CURRENT_USER_POSTS, payload })

export const getCurrentUserPosts = ( userId ) => ( dispatch ) => {
  api.getCurrentUserPosts( userId )
  .then( res => dispatch(get_current_user_posts( res.data )))
  .catch( err => console.log( err ))
}

const get_current_user_albums = ( payload ) => 
  ({ type: GET_CURRENT_USER_ALBUMS, payload })

export const getCurrentUserAlbums = ( userId ) => ( dispatch ) => {
  api.getCurrentUserAlbums( userId )
  .then( res => dispatch( get_current_user_albums( res.data )))
  .catch( err => console.log( err ))
}  
