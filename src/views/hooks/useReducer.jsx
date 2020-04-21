import React, { useReducer } from 'react'
import { Button } from 'antd'
const LoginForm = () => {
  const initForm = {
    name: '',
    pwd: '',
    isLoading: false,
  }
  const LoginReducer = (state, action) => {
    switch (action.type) {
      case 'login':
        return {
          ...state,
          isLoading: true,
        }
      case 'error':
        return {
          ...state,
          name: '',
          pwd: '',
          isLoading: false,
        }
      default:
        return state
    }
  }
  const [state, dispatch] = useReducer(LoginReducer, initForm)
  const login = async () => {
    console.log('点击执行login')
    dispatch({ type: 'login' })
    console.log(state.isLoading)
  }
  return (
    <div>
      <span>{state.name}</span>
      <span>{state.pwd}</span>
      <Button onClick={login}>Login</Button>
    </div>
  )
}
export default LoginForm
