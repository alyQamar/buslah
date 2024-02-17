import axios from 'axios'


const baseUrl = axios.create({ baseURL: "http://localhost:8643" })

export default baseUrl
