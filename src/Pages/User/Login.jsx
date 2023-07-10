import React from 'react'
import Loginform from '../../Components/Users/Loginform'
import { Navigate } from 'react-router-dom'

const Login = () => {
  const token=localStorage.getItem('user')
  return token?(<Navigate to={'/user/home'}/>): (
    <>
    <Loginform/>
    </>
  )
}

export default Login