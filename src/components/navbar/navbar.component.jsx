import React from 'react';
import logo  from '../../assets/images/shopping.png';
import {Button} from 'react-bootstrap';
import  history from '../../history';

export const NavbarComponent = () =>{
    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="nav-align">
                <Button variant="outline-primary" onClick={()=> history.push('/')}>Home</Button>&nbsp;
                {/* <Link variant="outline-primary" to="/shop">Shop</Link> */}
                <Button variant="outline-primary" onClick={()=> history.push('/shop')} >Shop</Button>
            </div>
        </div>
    );
}