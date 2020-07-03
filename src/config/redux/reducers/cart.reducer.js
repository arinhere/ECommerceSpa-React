import { actionTypes } from '../actionTypes';

const checkToggle = {
    isClicked: false
};

const CartReducer = ( state = checkToggle, action ) => {
    switch(action.type) {
        case actionTypes.SET_CART_DROPDOWN:
            return {
                ...state,
                isClicked: !state.isClicked
            }
        default:
            return checkToggle;
    }
}

export default CartReducer