import React from 'react'
import { Routes,Route } from 'react-router-dom';
import LoginForm from "../Pages/Admin/Login";
import LocationAndBands from '../Pages/Admin/LocationAndBands';
import ProtectedRoute from '../Helpers/ProtectedRoute';
import Dashboards from '../Pages/Admin/Dashboards';
import AdminLayouts from '../Layoutes/AdminLayouts';
import UserManages from '../Pages/Admin/UserManages';
import BandManges from '../Pages/Admin/BandManges';
import BandVerifys from '../Pages/Admin/BandVerifys';


const AdminRoute = () => {
  return (
    <div>
        
            <Routes>
                <Route path = "/login" element = {<LoginForm/>} />

                <Route
                element={<ProtectedRoute type={"admin"} redirect={"/admin/login"} />}
                >

                <Route path = "/" element = {<AdminLayouts/>}>
                <Route path = "dashboard" element = {<Dashboards/>} />
                <Route path = "location-and-bands" element = {<LocationAndBands/>} />
                <Route path = "userManage" element = {<UserManages/>} />
                <Route path = "bandManage" element = {<BandManges/>} />
                <Route path = "bandVerify" element = {<BandVerifys/>} />
                </Route>

                </Route>

                
           </Routes>
        
    </div>
  )
}

export default AdminRoute