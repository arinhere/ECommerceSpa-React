import React from 'react';
import './cart-dropdown.styles.scss';
import ButtonInputComponent from '../form-components/button-input/button-input.component';

const CartDropdownComponent = () => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items"></div>
            <ButtonInputComponent>Checkout</ButtonInputComponent>
        </div>
    );
}

export default CartDropdownComponent;