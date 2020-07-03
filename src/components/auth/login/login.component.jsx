import React from 'react';
import { Component } from 'react';
import FormInputComponent from '../../form-components/form-input/form-input.component';
import ButtonInputComponent from '../../form-components/button-input/button-input.component';
import { signInWithGoogle }  from '../../../config/firebase/firebase.util';
import './login.styles.scss';

class LoginComponent extends Component {
    constructor(){
        super();
        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ email: '', password: '' });
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({[name]: value});
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInputComponent
                        name="email"
                        type="email" 
                        required 
                        onChange={this.handleChange}
                        value={this.state.email}
                        label="Email"
                    ></FormInputComponent>
                    <FormInputComponent 
                        name="password"
                        type="password" 
                        required 
                        onChange={this.handleChange}
                        value={this.state.password}
                        label="Password"
                    ></FormInputComponent>
                    <div>
                        <ButtonInputComponent type="submit">Submit</ButtonInputComponent>
                        <ButtonInputComponent onClick={ signInWithGoogle } isGoogleSignIn>Login with Google</ButtonInputComponent>
                    </div>
                </form>
            </div>
        );
    }

}

export default LoginComponent;