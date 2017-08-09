import React from 'react'
import { Signin } from './Auth'
import { Route } from 'react-router-dom'

const App = () => (
  <div>
    <Route path='/' component={Signin} />
  </div>
)

export default App