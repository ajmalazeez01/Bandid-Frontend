import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProtectedRoute from '../Helpers/ProtectedRoute'
import UserLayouts from '../Layoutes/UserLayouts'
import Signup from '../Pages/User/Signup'
import HomePages from '../Pages/User/HomePages'
import LoginForm from '../Pages/User/Login'
import ListPage from '../Pages/User/ListPage'
import BandDetail from '../Pages/User/BandDetail'
import BookingDetail from '../Pages/User/BookingDetail'
import AddReview from '../Pages/User/AddReview'
import ProfileBooking from '../Pages/User/ProfileBooking'
import UserProfiles from '../Pages/User/UserProfiles'
import PasswordReset from '../Pages/User/PasswordReset'
import SlotBooking from '../Pages/User/SlotBooking'
import Error from '../Pages/error'
import Messages from '../Pages/Message/Messages'

const UserRoute = () => {
  return (
    <div>
      
      <Routes>

                <Route path = "/signup" element = {<Signup/>} />
                <Route path = "/login" element = {<LoginForm/>} />
                <Route path = "/reset-password" element = {<PasswordReset/>} />
                <Route path = "*" element = {<Error/>}   />
                

                <Route
                element={<ProtectedRoute type={"user"} redirect={"/user/login"} />}
                >

                <Route path = "/" element = {<UserLayouts/>}>

                <Route path = "/home" element = {<HomePages/>} />
                <Route path = "/list/:name/" element = {<ListPage/>} />
                <Route path = "/band-detail/:id" element = {<BandDetail/>} />
                <Route path = "/message/:id" element = {<Messages/>}   />
                <Route path = "/slot-booking/:id/:name" element = {<SlotBooking/>} />
                <Route path = "/booking-detail/:id/:name" element = {<BookingDetail/>} />
                <Route path = "/review/:id" element = {<AddReview/>} />
                <Route path = "/profile" element = {<UserProfiles/>} />
                <Route path = "/profile-booking" element = {<ProfileBooking/>} />

                </Route>

                </Route>

                
      </Routes>

    </div>
  )
}

export default UserRoute