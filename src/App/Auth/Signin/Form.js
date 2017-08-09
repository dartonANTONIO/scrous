import React from 'react'
import Radium from 'radium'
import * as styles from './styles'

const Form = () => (
  <form action="">
    <input 
      key='username'
      style={styles.input}
      placeholder='username'
      type="text"/>
    <input 
      key='password'
      style={styles.input}
      placeholder='password' 
      type="password"/>
    <button style={styles.button}>Sign in</button>
  </form>
)

export default Radium(Form)