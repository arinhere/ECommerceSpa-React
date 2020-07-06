import { actionTypes } from '../actionTypes';

const checkToggle = {
    isCartIconClicked: false
};

const CartReducer = ( state = checkToggle, action ) => {
    switch(action.type) {
        case actionTypes.SET_CART_DROPDOWN:
            return {
                ...state,
                isCartIconClicked: !state.isCartIconClicked
            }
        default:
            return checkToggle;
    }
}

export default CartReducer