import axios from "axios";
// import {useNavigate} from "react-router-dom";

export const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 6000000,
  headers: {
    'Content-Type': 'application/json'
  }
})

api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    // const navigate = useNavigate();
    // if(error.response.status === '404') navigate('/', { replace: true })

    return Promise.reject(error)
  }
)