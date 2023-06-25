import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BandLayouts from '../Layoutes/BandLayouts'
import Signup from '../Pages/BandPortal/Signup'
import LoginForm from '../Pages/BandPortal/Login'
import Dashboards from '../Pages/BandPortal/Dashboards'
import BandDetails from '../Pages/BandPortal/BandDetails'
import BandBookings from '../Pages/BandPortal/BandBookings'
import BandReviews from '../Pages/BandPortal/BandReviews'

const BandRoute = () => {
  return (
    <div>
      
      <Routes>
                <Route path = "/signup" element = {<Signup/>} />
                <Route path = "/login" element = {<LoginForm/>} />

                {/* <Route
                element={<ProtectedRoute type={"admin"} redirect={"/admin/login"} />}
                > */}

                <Route path = "/" element = {<BandLayouts/>}>
                <Route path = "dashboard" element = {<Dashboards/>} />
                <Route path = "bandDetail" element = {<BandDetails/>} />
                <Route path = "bandBooking" element = {<BandBookings/>} />
                <Route path = "bandReview" element = {<BandReviews/>} />
                </Route>

                {/* </Route> */}

                
           </Routes>

    </div>
  )
}

export default BandRoute