import { createSlice } from "@reduxjs/toolkit"

const BandIdSlice=createSlice({
    name:'band',
    initialState:{
        id:"",
        email : '',
        location : '',
    },
    reducers:{
        addBandId:(state,action)=>{
            state.id=action.payload.id
            state.email=action.payload.email
            state.location=action.payload.location
        },
    }
       
})
// console.log(BandIdSlice)

export const {addBandId}=BandIdSlice.actions
export default BandIdSlice.reducer;