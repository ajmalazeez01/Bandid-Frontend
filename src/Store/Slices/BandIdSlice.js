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
        removeBandId(state){
            state.email = null
            state.location = null
        }
    }
       
})
// console.log(BandIdSlice)

export const {addBandId,removeBandId}=BandIdSlice.actions
export default BandIdSlice.reducer;