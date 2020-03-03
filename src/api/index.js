import axios from 'axios'

export const api = {

} 
const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/'
})

export default async () => {
  const users = await instance.get('/users'),
        posts = await instance.get('/posts'),
        albums = await instance.get('/albums'),
        comments = await instance.get('/comments'),
        photos = await instance.get('/photos')
 return { users, posts, albums, comments, photos }       
}
export const dataFilter = ( data, id ) => {
  return data = data.filter( el => el.userId == id )
}

export const randomUserPhoto = () => {
  let number = Math.round( Math.random() * 90 ),imgSrc
  (number > 45)
  ? imgSrc = `https://randomuser.me/api/portraits/women/${number}.jpg`
  : imgSrc =`https://randomuser.me/api/portraits/men/${number}.jpg`
  return imgSrc
}

// export const api = {
//   getAllUsers: () => instance.get('/users'),
//   getCurrentUserPosts: ( id ) => {
//     return instance.get('/posts', { params: {
//       userId: id
//     }})
//   },
//   // gelAllData:() => instance.all(['/users','/posts','/albums','/comments','/photos'])
//   // .then(instance.spread((...res) => 
//   // getCurrentUserAlbums: ( id ) => {
//   //   return instance.get('/albums',{ params: {
//   //     userId: id }})
//   // }
// }






