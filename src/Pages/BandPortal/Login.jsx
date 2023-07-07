import React from 'react'
import LoginForm from '../../Components/BandPortal/LoginForm'
import { Navigate } from 'react-router-dom'

const Login = () => {
  const token=localStorage.getItem('vendor')
  return token?(<Navigate to={'/band/dashboard'}/>): (
    <>
        <LoginForm/>
    </>
  )
  
}

export default Login