import { actionTypes } from "../actionTypes";

const checkShoppingIconToggled = () => ({
    action: actionTypes.SET_CART_DROPDOWN 
    // We dont need to pass any payload as we just need to set toggle
});

export default checkShoppingIconToggled;