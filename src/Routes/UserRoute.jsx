import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserLayouts from '../Layoutes/UserLayouts'
import Signup from '../Pages/User/Signup'
import Loginform from '../Components/Users/Loginform'
import HomePages from '../Pages/User/HomePages'

const UserRoute = () => {
  return (
    <div>
      
      <Routes>

                <Route path = "/signup" element = {<Signup/>} />
                <Route path = "/login" element = {<Loginform/>} />

                {/* <Route
                element={<ProtectedRoute type={"vendor"} redirect={"/band/login"} />}
                > */}

                <Route path = "/" element = {<UserLayouts/>}>
                <Route path = "/home" element = {<HomePages/>} />
                
                </Route>

                {/* </Route> */}

                
      </Routes>

    </div>
  )
}

export default UserRoute