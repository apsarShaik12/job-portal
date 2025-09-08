import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8080/api', // your Spring Boot backend
});

export const fetchJobs = () => API.get('/jobs');
export const postJob = (job) => API.post('/jobs', job);
export const registerUser = (user) => API.post('/users/register', user);
export const loginUser = (user) => API.post('/users/login', user);

export default API;
