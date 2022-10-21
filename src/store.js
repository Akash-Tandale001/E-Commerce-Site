import cartReducer from "./reducer/cartSlice";
import favReducer from "./reducer/favSlice";
import authReducer from "./reducer/authSlice";
import { combineReducers, createStore } from "redux";

const reducer = combineReducers({
  carts: cartReducer,
  fav: favReducer,
  authDetails: authReducer
});
const initialState = {};
const store = createStore(reducer, initialState);
export default store;