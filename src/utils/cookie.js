import Cookie from 'js-cookie'

export function SetCookie(name, key) {
    return Cookie.set(name, key)
}
export function GetCookie(name) {
    return Cookie.get(name)
}