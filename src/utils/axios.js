import axios from 'axios'
axios.defaults.baseURL = '/api'
axios.interceptors.request.use(
    (config) => {
        console.log(config)
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