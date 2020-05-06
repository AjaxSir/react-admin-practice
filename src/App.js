import React from 'react'
import './App.css'
import routes from './routes'
import { renderRoutes } from 'react-router-config'
import { BrowserRouter, Switch } from 'react-router-dom'
// import './mock/login.js'

function App() {
  return (
    <BrowserRouter>
      <Switch> {renderRoutes(routes)} </Switch>
    </BrowserRouter>
  )
}

export default App
