import Cookie from 'js-cookie'

export function SetCookie(name, key) {
    return Cookie.set(name, key)
}
export function GetCookie(name) {
    return Cookie.get(name)
}

export function removeCookie(params) {
    if (typeof params === 'object') {
        for (let key in params) {
            Cookie.remove(key)
        }
    } else {
        Cookie.remove(params)
    }

}