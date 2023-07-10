import React from 'react'
import SignupForm from '../../Components/Users/SignupForm'
import { Navigate } from 'react-router-dom'

const Signup = () => {
  const token=localStorage.getItem('user')
  return token?(<Navigate to={'/user/home'}/>): (
    <>
    <SignupForm/>
    </>
  )
}

export default Signup