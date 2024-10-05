import { createSlice } from "@reduxjs/toolkit";


const AuthSlice = createSlice({
    name:"auth",
    initialState:{
        isAuthenticated:true,
    },
    reducers:{
        signUp:(state,action)=>{
            const payload = action.payload
            return {...state,isAuthenticated:true,payload}
        }
    }
})


export const {signUp} = AuthSlice.actions
export default AuthSlice.reducer