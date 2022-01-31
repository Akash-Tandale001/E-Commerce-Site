import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    itemList:[]

}

const cartSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        saveitem:(state , action)=>{
            state.itemList.push(action.payload)
        },

        deleteitem:(state ,action)=>{
            const index=state.itemList.findIndex((item)=> item.id === action.payload);
            if (index > -1) {
                state.itemList.splice(index, 1);
              }
        }    
    }
});

export const {saveitem ,deleteitem} = cartSlice.actions
export const selectitemList = state => state.carts.itemList
export default cartSlice.reducer