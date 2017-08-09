import React from 'react'

const Logo = () => {
  return(
    <div style={{display: 'flex', width: '1.6rem',
    flexDirection: 'column',
    alignItems: 'center'}}>
      <div style={{width: '60%', height: '.2rem', background: '#424242', borderRadius: '.15rem'}}></div>
      <div style={{width: '100%', height: '.2rem', background: '#27ae61', margin: '.4rem 0', borderRadius: '.15rem'}}></div>
      <div style={{width: '60%', height: '.2rem', background: '#424242', borderRadius: '.15rem'}}></div>
    </div>
  )
}
export default Logo