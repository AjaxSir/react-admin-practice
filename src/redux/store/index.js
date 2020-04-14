import { createStore, combineReducers } from 'redux'
import user from '../reducer'

export default createStore(combineReducers({ user }))