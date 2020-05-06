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
          name: '123',
          pwd: '123',
          isLoading: false,
        }
      default:
        return state
    }
  }
  const [state, dispatch] = useReducer(LoginReducer, initForm)
  const login = () => {
    console.log('点击执行login')
    dispatch({ type: 'login' })
    setTimeout(() => {
      dispatch({ type: 'error' })
    }, 1000)
  }
  return (
    <div>
      <span>{state.name}</span>
      <span>{state.pwd}</span>
      <span>{state.isLoading ? '1' : '0'}</span>
      <Button onClick={login}>Login</Button>
    </div>
  )
}
export default LoginForm
