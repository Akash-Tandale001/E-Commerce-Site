import cartReducer from "./reducer/cartSlice";
import favReducer from "./reducer/favSlice";
import authReducer from "./reducer/authSlice";
import { combineReducers, createStore,applyMiddleware} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from "redux-thunk";

const middleware = [thunk]

const reducer = combineReducers({
  carts: cartReducer,
  fav: favReducer,
  authDetails: authReducer
});
const initialState = {};
const store = createStore(reducer, initialState,composeWithDevTools(applyMiddleware(...middleware)));
export default store;