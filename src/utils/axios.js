import axios from 'axios'
import { GetCookie } from '@/utils/cookie'

axios.defaults.baseURL = '/api'
axios.interceptors.request.use(
    (config) => {
        if (GetCookie('token')) {
            config.headers['Authorization'] = 'Bearer ' + GetCookie('token')
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

axios.interceptors.response.use(
    (res) => {
        return res && res.data
    },
    (err) => {
        return Promise.reject(err)
    }
)
export default axios