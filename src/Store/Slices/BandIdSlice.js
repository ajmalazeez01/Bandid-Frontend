import { createSlice } from "@reduxjs/toolkit"

const BandIdSlice=createSlice({
    name:'band',
    initialState:{
        email : '',
        location : '',
        id : '',
    },
    reducers:{
        addBandId:(state,action)=>{
            state.email=action.payload.email
            state.location=action.payload.location
            state.id=action.payload.id
        },
    }
       
})
// console.log(BandIdSlice)

export const {addBandId}=BandIdSlice.actions
export default BandIdSlice.reducer;