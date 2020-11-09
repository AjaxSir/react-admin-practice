import request from '@/utils/axios'
export function login(data) {
    return request({
        url: '/auth/hall/login',
        method: 'post',
        data
    })
}