import React from 'react'
import LoginForm from "../../Components/Admin/LoginForm";
import { Navigate } from 'react-router-dom';

const Login = () => {
  const token=localStorage.getItem('admin')
  return token?(<Navigate to={'/admin/dashboard'}/>): (
    <>
    <LoginForm/>
    </>
  )
}

export default Login