import {actionTypes} from '../actionTypes';

const initialState = {
    currentUser: null
}
const userReducer = (state = initialState, action) =>{ 
    switch(action.type) {
        case actionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            };
        default:
            return initialState;
    }
}

export default userReducer;