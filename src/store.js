import cartReducer from "./reducer/cartSlice";
import favReducer from "./reducer/favSlice";
import { combineReducers, createStore } from "redux";

const reducer = combineReducers({
  carts: cartReducer,
  fav: favReducer
});
const initialState = {};
const store = createStore(reducer, initialState);
export default store;