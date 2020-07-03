import React, { Component } from 'react';
import './signup.style.scss';
import FormInputComponent from '../../form-components/form-input/form-input.component';
import ButtonInputComponent  from '../../form-components/button-input/button-input.component';

class SignUpComponent extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSignUp = event => {
        event.preventDefault();
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({[name]: value});
    }

    render() {
        return (
            <div className="sign-up">
                <h2 className="title">Don't have an account?</h2>
                <span>Create a new account with email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSignUp}>
                    <FormInputComponent
                        name="name"
                        type="text" 
                        required 
                        onChange={this.handleChange}
                        value={this.state.name}
                        label="Name"
                    ></FormInputComponent>
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
                    <FormInputComponent
                        name="confirmPassword"
                        type="password" 
                        required 
                        onChange={this.handleChange}
                        value={this.state.confirmPassword}
                        label="Confirm Password"
                    ></FormInputComponent>

                    <ButtonInputComponent type="Submit">Sign Up</ButtonInputComponent>
                </form>
            </div>
        );
    }
}

export default SignUpComponent;
