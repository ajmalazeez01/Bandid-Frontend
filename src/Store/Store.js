import { configureStore } from "@reduxjs/toolkit"
import BandReducer from "./Slices/BandIdSlice"

export default configureStore({
    reducer : {
    //    admin :
    //    user :
       band : BandReducer
    
    },
})