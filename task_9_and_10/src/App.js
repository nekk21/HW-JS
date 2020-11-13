import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navibar from './Components/Navibar'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Main } from './Components/Main'
import { Users } from './Components/Users'

function App() {
  return (
    <>
      <Router>
        <Navibar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/users" component={Users} />
        </Switch>
      </Router>
    </>
  )
}

export default App
