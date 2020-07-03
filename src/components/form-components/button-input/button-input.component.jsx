import React from 'react';
import '../form-input/form-input.styles.scss';

const ButtonInputComponent = ( { children, isGoogleSignIn, ...otherProps } ) => (
    <button 
        className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
        {...otherProps}>
        {children}
    </button>
)

export default ButtonInputComponent;