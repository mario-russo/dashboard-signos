import axios from 'axios'
const token = localStorage.getItem('token')

// axios.defaults.baseURL = import.meta.env.VITE_URL_API

export  const api = axios.create({
  baseURL: import.meta.env.VITE_URL_API,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization':token,
  },
})



// export default api