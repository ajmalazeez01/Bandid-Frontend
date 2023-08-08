import { createSlice } from "@reduxjs/toolkit"

const UserIdSlice=createSlice({
    name:'user',
    initialState:{
        name : '',
        email : '',
        search : '',
    },
    reducers:{
        addUserId:(state,action)=>{
            state.name=action.payload.name
            state.email=action.payload.email
            // state.search=action.payload.search
            
        },
    }
       
})
// console.log(BandIdSlice)

export const {addUserId}=UserIdSlice.actions
export default UserIdSlice.reducer;