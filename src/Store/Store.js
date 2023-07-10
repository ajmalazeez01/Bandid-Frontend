import { configureStore } from "@reduxjs/toolkit"
import BandReducer from "./Slices/BandIdSlice"
import UserReducer from "./Slices/UserIdSlice"

export default configureStore({
    reducer : {
    //    admin :
    //    user :
       band : BandReducer,
       user : UserReducer
    
    },
})