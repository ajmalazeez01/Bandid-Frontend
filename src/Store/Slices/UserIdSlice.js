import { createSlice } from "@reduxjs/toolkit"

const UserIdSlice=createSlice({
    name:'user',
    initialState:{
        name : '',
    },
    reducers:{
        addUserId:(state,action)=>{
            state.name=action.payload.name
        },
    }
       
})
// console.log(BandIdSlice)

export const {addUserId}=UserIdSlice.actions
export default UserIdSlice.reducer;