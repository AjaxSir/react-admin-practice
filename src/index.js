import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import './icon'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

ReactDOM.render(
  <TransitionGroup>
    <CSSTransition appear={true} classNames="appAppear" timeout={500}>
      <App />
    </CSSTransition>
  </TransitionGroup>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
