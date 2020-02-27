import axios from 'axios'


const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/'
})

export const api = {
  getAllUsers: () => instance.get('/users'),
  getCurrentUserPosts: ( id ) => {
    return instance.get('/posts', { params: {
      userId: id
    }})
  },
  getCurrentUserAlbums: ( id ) => {
    return instance.get('/albums',{ params: {
      userId: id }})
  }
}
