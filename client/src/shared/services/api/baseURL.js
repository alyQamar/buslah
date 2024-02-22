import axios from 'axios';

const baseUrl = axios.create({ baseURL: process.env.BASE_URL });

export default baseUrl;
