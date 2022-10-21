import { createSlice } from '@reduxjs/toolkit'



const authSlice = createSlice({
    name: 'auth',
    initialState:{
        isAuthenticated : false,
        userType : "",
    },
    reducers: {
        saveAuth:(state , action)=>{
            state.loginAuth.push(action.payload)
        },   
    }
});

export const {saveAuth} = authSlice.actions
export const authDetails = state => state
export default authSlice.reducer