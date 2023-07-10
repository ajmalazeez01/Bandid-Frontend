import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProtectedRoute from '../Helpers/ProtectedRoute'
import UserLayouts from '../Layoutes/UserLayouts'
import Signup from '../Pages/User/Signup'
import HomePages from '../Pages/User/HomePages'
import LoginForm from '../Pages/User/Login'

const UserRoute = () => {
  return (
    <div>
      
      <Routes>

                <Route path = "/signup" element = {<Signup/>} />
                <Route path = "/login" element = {<LoginForm/>} />

                <Route
                element={<ProtectedRoute type={"user"} redirect={"/user/login"} />}
                >

                <Route path = "/" element = {<UserLayouts/>}>
                <Route path = "/home" element = {<HomePages/>} />
                </Route>

                </Route>

                
      </Routes>

    </div>
  )
}

export default UserRoute