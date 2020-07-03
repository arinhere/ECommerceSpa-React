import React from 'react';
import './cartIcon.style.scss';
import { ReactComponent as CartIcon } from '../../assets/images/shopping-bag.svg';
import {connect} from 'react-redux';
import checkShoppingIconToggled from '../../config/redux/actions/cart.actions';


const CartIconComponent = ({checkShoppingIconToggled}) => {
    return (
        <div className="cart-icon" onClick={checkShoppingIconToggled}>
            <CartIcon className="shopping-icon" />
            <span className="item-count"> 0 </span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    checkShoppingIconToggled: () => dispatch(checkShoppingIconToggled())
})

export default connect(null, mapDispatchToProps)(CartIconComponent);