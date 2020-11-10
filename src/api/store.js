import request from '@/utils/axios'
export function fetchStoreList() {
    return request({
        url: '/auth/region/regionStoreCascade',
        method: 'get'
    })
}