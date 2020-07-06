import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/images/shopping.svg';
import { auth } from '../../config/firebase/firebase.util';
import CartIconComponent from '../cart-icon/cartIcon.component';
import CartDropdownComponent from '../cart-dropdown/cart-dropdown.component';

const NavbarComponent = ({currentUser, isCartIconClicked}) =>{
    console.log('isCartIconClicked: ', isCartIconClicked);
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                {/* <img src={logo} alt="logo" /> */}
                <Logo />
            </Link>
            <div className="options">
                <Link className="option" to="/">HOME</Link>
                <Link className="option" to="/shop">SHOP</Link>                
                {
                    currentUser ? 
                    <div className="option" onClick={() => auth.signOut()}> LOG OUT </div>
                    :
                    <Link className="option" to="/login">LOGIN</Link>
                }
                <CartIconComponent />
            </div>
            {
                isCartIconClicked ? <CartDropdownComponent  /> : null
                
            }
        </div>
    );
}

const mapStateToProps = ({ user: {currentUser}, cart: { isCartIconClicked } }) => ({
    currentUser,
    isCartIconClicked
});

export default connect(mapStateToProps)(NavbarComponent);