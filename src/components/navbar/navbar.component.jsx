import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/images/shopping.svg';
import { auth } from '../../config/firebase/firebase.util';
import CartIconComponent from '../cart-icon/cartIcon.component';
import CartDropdownComponent from '../cart-dropdown/cart-dropdown.component';

const NavbarComponent = ({currentUser}) =>{
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
            <CartDropdownComponent />
        </div>
    );
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(NavbarComponent);