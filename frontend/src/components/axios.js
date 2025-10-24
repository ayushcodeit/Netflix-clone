import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000', // Points to the backend
});

export default instance;
