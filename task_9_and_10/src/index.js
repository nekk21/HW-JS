import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const USERS_STATE = {
  users: [],
}

function reduser(state = USERS_STATE, action) {
  switch (action.type) {
    case 'RECIVED':
      return {
        ...state,
        users: action.users,
      } //Object.assign({}, state, { users: action.users })

    default:
      return state
  }
}

const store = createStore(reduser)

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
