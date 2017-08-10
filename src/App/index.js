import React from 'react'
import { Signin } from './Auth'
import { Route, Switch } from 'react-router-dom'
import Editor from './Editor'

const App = () => (
  <Switch>
    <Route path='/editor' component={Editor} />
    <Route path='/' component={Signin} />
  </Switch>
)

export default App