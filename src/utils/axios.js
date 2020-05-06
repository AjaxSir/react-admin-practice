import axios from 'axios'
axios.defaults.baseURL = process.env.BASE_API
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
        return res
    },
    (err) => {
        return Promise.reject(err)
    }
)
export default axios