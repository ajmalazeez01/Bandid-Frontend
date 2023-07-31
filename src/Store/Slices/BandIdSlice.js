import { createSlice } from "@reduxjs/toolkit"

const BandIdSlice=createSlice({
    name:'band',
    initialState:{
        email : '',
        location : '',
    },
    reducers:{
        addBandId:(state,action)=>{
            state.email=action.payload.email
            state.location=action.payload.location
        },
    }
       
})
// console.log(BandIdSlice)

export const {addBandId}=BandIdSlice.actions
export default BandIdSlice.reducer;