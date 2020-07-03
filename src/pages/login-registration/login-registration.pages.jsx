import React from 'react';
import { withRouter } from 'react-router-dom';
import LoginComponent from '../../components/auth/login/login.component';
import './../styles/pages.style.scss';
import SignUpComponent from '../../components/auth/signup/signup.component';

const LoginRegistrationComponent = () => (
    <div className="float-container">
        <div className="login_div">
            <LoginComponent />
        </div>
        <div className="login_div">
            <SignUpComponent />
        </div>
    </div>
);

export default withRouter(LoginRegistrationComponent);