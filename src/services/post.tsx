import axios from 'axios';

export function getPost(postId: number) {
  return axios.get('https://jsonplaceholder.typicode.com/posts/' + postId);
}

export function getComments(postId: number) {
  return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
}
