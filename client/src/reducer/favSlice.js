import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    favList:[]

}

const favSlice = createSlice({
    name: 'fav',
    initialState,
    reducers: {
        savefav:(state , action)=>{
            state.favList.push(action.payload)
        },

        deletefav:(state ,action)=>{
            const index=state.favList.findIndex((item)=> item.id === action.payload);
            if (index > -1) {
                state.todoList.splice(index, 1);
              }
        }    
    }
});

export const {savefav ,deletefav} = favSlice.actions
export const selectfavList = state => state.fav.favList
export default favSlice.reducer