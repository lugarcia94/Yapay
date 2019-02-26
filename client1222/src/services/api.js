import axios from 'axios';  
const api = axios.create({ baseURL: 'http://localhost:9004/users' });  
export default api;

