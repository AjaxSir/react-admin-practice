function getSeesionUserInfo() {
    return sessionStorage.getItem('userInfo') ?
        JSON.parse(sessionStorage.getItem('userInfo')) :
        {
            name: '',
            age: '',
            gender: '',
        }
} // 防止刷新数据丢失处理

const user_info = {
    name: getSeesionUserInfo().name,
    age: getSeesionUserInfo().age,
    gender: getSeesionUserInfo().gender,
}

export default function userInfoChange(state = user_info, action) {
    switch (action.type) {
        case 'SET_USER_INFO':
            sessionStorage.setItem('userInfo', JSON.stringify(action.info))
            return {...state, ...action.info }
        default:
            sessionStorage.setItem('userInfo', JSON.stringify(state))
            return state
    }
}