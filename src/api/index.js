import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const getPosts = () => {
  return axios.get(`${BASE_URL}/posts`);
}

export default {
  getPosts
};
