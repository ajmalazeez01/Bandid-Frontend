import { createSlice } from "@reduxjs/toolkit"

const UserIdSlice=createSlice({
    name:'user',
    initialState:{
        name : '',
        mobile : '',
        email : '',
        image : '',
    },
    reducers:{
        addUserId:(state,action)=>{
            state.name=action.payload.name
            state.mobile=action.payload.mobile
            state.email=action.payload.email
            state.image=action.payload.image
        },
    }
       
})
// console.log(BandIdSlice)

export const {addUserId}=UserIdSlice.actions
export default UserIdSlice.reducer;