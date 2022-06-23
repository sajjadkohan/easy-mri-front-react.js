import React from 'react'
import "../styles/modal.css"
import "../styles/publicStyle.css"
import LoginCard from '../LoginCard'


const LoginModal = () => {
  return (
    <div className='modalPage'>
        <LoginCard className='anim'/>
    </div>
  )
}

export default LoginModal