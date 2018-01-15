import axios from 'axios';

export function submitNewPost(post) {
  return dispatch => {
    return axios.post('/api/posts', post);
  }
}

export function getPosts() {
  return dispatch => {
    return axios.get('/api/posts').then((res) => res.data.posts);
  }
}
