import fetchData from '../api/'
import { dataFilter } from '../api/'

const GET_USERS = 'GET_USERS'
const GET_CURRENT_USER_POSTS = 'GET_CURRENT_USER_POSTS'
const GET_CURRENT_USER_ALBUMS = 'GET_CURRENT_USER_ALBUMS'
const GET_ALL_DATA = 'GET_ALL_DATA'

let initialState = {
  data: {},
  userPhoto:null,
  currentUserPosts: [],
  currentUserAlbums: [],
  isEmpty: true,
}

export default ( state = initialState, action ) => {
  switch ( action.type ) {
    case GET_ALL_DATA: 
      return { ...state, data:{ ...action.payload }, isEmpty: false }  
    case GET_CURRENT_USER_POSTS: 
      return {...state, currentUserPosts: [ ...action.payload ]}
    case GET_CURRENT_USER_ALBUMS: 
      return {...state, currentUserAlbums: [ ...action.payload ]}
    default: return state  
  }
}


// const get_users = ( payload ) => ({ type: GET_USERS, payload })

// export const getUsers = () => dispatch => {
//   api.getAllUsers().then( res => dispatch( get_users( res.data )))
//   .catch( err => console.log( err ))
// }

const get_data = ( payload ) => ({ type: GET_ALL_DATA, payload })

export const getData = () => ( dispatch ) => {
  fetchData().then( res => dispatch( get_data( res )))
}

const get_current_user_posts = ( payload ) => 
  ({ type: GET_CURRENT_USER_POSTS, payload })


const get_current_user_albums = ( payload ) => 
  ({ type: GET_CURRENT_USER_ALBUMS, payload })

export const getCurrentUserData = ( posts, albums, userId ) => ( dispatch ) => {
  dispatch(get_current_user_posts( dataFilter( posts, userId )))
  dispatch(get_current_user_albums( dataFilter( albums, userId)))
} 

