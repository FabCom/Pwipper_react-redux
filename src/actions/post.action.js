import axios from 'axios'

export const GET_POSTS = "GETS_POSTS"

export const getPosts = () => {
  return (dispatch) => {
    return axios
    .get("http://localhost:1337/posts?_sort=created_at:desc")
    .then((res) => {
      dispatch({type: GET_POSTS, payload: res.data})
    })
    .catch((err) => console.log(err))
  }
}