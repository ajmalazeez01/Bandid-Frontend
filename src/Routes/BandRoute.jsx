import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProtectedRoute from '../Helpers/ProtectedRoute'
import BandLayouts from '../Layoutes/BandLayouts'
import Signup from '../Pages/BandPortal/Signup'
import LoginForm from '../Pages/BandPortal/Login'
import Dashboards from '../Pages/BandPortal/Dashboards'
import BandDetails from '../Pages/BandPortal/BandDetails'
import BandBookings from '../Pages/BandPortal/BandBookings'
import BandReviews from '../Pages/BandPortal/BandReviews'
import Error from '../Pages/error'
import VendorMessage from '../Pages/Message/vendorMessage'

const BandRoute = () => {
  return (
    <div>
      
      <Routes>
                <Route path = "/signup" element = {<Signup/>} />
                <Route path = "/login" element = {<LoginForm/>} />
                <Route path = "*" element = {<Error/>}   />

                <Route
                element={<ProtectedRoute type={"vendor"} redirect={"/band/login"} />}
                >
                <Route path = "message" element = {<VendorMessage/>} />

                <Route path = "/" element = {<BandLayouts/>}>
                <Route path = "dashboard" element = {<Dashboards/>} />
                <Route path = "bandDetail" element = {<BandDetails/>} />
                <Route path = "bandBooking" element = {<BandBookings/>} />
                <Route path = "bandReview" element = {<BandReviews/>} />
                </Route>

                </Route>

                
           </Routes>

    </div>
  )
}

export default BandRoute