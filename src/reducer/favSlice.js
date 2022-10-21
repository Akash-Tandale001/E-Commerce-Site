import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favList: [],
};

const favSlice = createSlice({
  name: "fav",
  initialState,
  reducers: {
    savefav: (state, action) => {
      state.favList.push(action.payload);
      const favListItem = sessionStorage.getItem("favList")
        ? JSON.parse(sessionStorage.getItem("favList"))
        : [];
      favListItem.push( {
        id: action.payload.id,
        imageurl: action.payload.imageurl,
        name: action.payload.name,
        price: action.payload.price,
      });
      sessionStorage.setItem("favList", JSON.stringify(favListItem)) 
       
      
    
    },

    deletefav: (state, action) => {
      const index = state.favList.findIndex(
        (item) => item.id === action.payload
      );
      if (index > -1) {
        state.favList.splice(index, 1);
      }
    },
  },
});

export const { savefav, deletefav } = favSlice.actions;
export const selectfavList = (state) => state.fav.favList;
export default favSlice.reducer;
