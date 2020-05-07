export function setUserInfo(info) {
    return {
        type: 'SET_USER_INFO',
        info,
    }
}
export function removeUserInfo(info) {
    sessionStorage.removeItem('userinfo')
    return {
        type: 'REMOVE_USER_INFO',
        info
    }
}