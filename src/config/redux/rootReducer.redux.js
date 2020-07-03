import { combineReducers } from "redux";
import userReducer from "./reducers/users.reducer";
import cartReducer from "./reducers/cart.reducer";


export default combineReducers({
    user: userReducer,
    cart: cartReducer
});