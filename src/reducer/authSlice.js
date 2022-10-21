import { createSlice } from '@reduxjs/toolkit'



const authSlice = createSlice({
    name: 'auth',
    initialState:{
        isAuthenticated : false,
        userRole : "",
        token : ""
    },
    reducers: {
        saveAuth: (state,action) => {
            // state = action.payload;
            state = {
                isAuthenticated: action.payload.isAuthenticated,
                userRole : action.payload.userRole,
                token : action.payload.token
            }
            sessionStorage.setItem("loginToken", action.payload.token)
            return state;
        },
        deleteAuth:(state,action)=>{
            state.loginAuth={
                isAuthenticated : false,
                userType : "",
                token : ""
            }
        }
    }
});

export const {saveAuth,deleteAuth} = authSlice.actions
export const authDetails = state => state
export default authSlice.reducer