import React from 'react'
import * as styles from './styles'
import workspace from '../../../assets/images/workspace.svg'
import Form from './Form'
import {Logo} from '../../components'

const Signin = () => (
  <div style={styles.wrapper}>
    <div style={styles.presentation}>
      <img 
        style={styles.workspace}
        src={workspace} alt=""/>
      <div style={styles.phrase}> Your space to be <span style={{fontWeight: 700}}>master</span>, <br/>find your favorite <span style={{fontWeight: 700}}>community</span> and start teaching</div>
    </div>
    <div style={styles.sidebar}>
      <div style={{width: '17rem'}}>
        <div style={{margin: '1rem auto'}}>
          <div style={{fontSize: '1.225rem'}}>Let's go in road</div>
          <div style={{fontWeight: '300', fontSize:'1.125rem', margin: '1rem auto', lineHeight:'1.625rem'}}>
            New here? Join to the best community <span style={{fontWeight: '500'}}>creating your account.</span>
          </div>
        </div>
        <Form />
        <div style={{fontWeight: 300, margin: '0 0 4rem 0'}}>
          Forgot password?
        </div>
      </div>
    </div>
  </div>
)

export default Signin