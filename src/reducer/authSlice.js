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
            state = {
                isAuthenticated: action.payload.isAuthenticated,
                userRole : action.payload.userRole,
                token : action.payload.token
            }
            sessionStorage.setItem("loginToken", action.payload.token)
            sessionStorage.setItem("isAuthenticated", action.payload.isAuthenticated)
            sessionStorage.setItem("userRole", action.payload.userRole)
            sessionStorage.setItem("favList", [])
            sessionStorage.setItem("cartList", [])
            return state;
        },
        deleteAuth:(state,action)=>{
            state.loginAuth={
                isAuthenticated : false,
                userType : "",
                token : ""
            }
            sessionStorage.clear()
            return state
        }
    }
});

export const {saveAuth,deleteAuth} = authSlice.actions
export const authDetails = state => state
export default authSlice.reducer