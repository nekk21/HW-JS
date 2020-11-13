import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { applyMiddleware, compose, createStore } from 'redux'
import { Provider } from 'react-redux'
import { rootReducer } from './redux/rootReducer'
import createSagaMiddleware from 'redux-saga'
import { sagaWatcher } from './redux/saga'

const saga = createSagaMiddleware()
const store = createStore(rootReducer, compose(applyMiddleware(saga)))

saga.run(sagaWatcher)

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
