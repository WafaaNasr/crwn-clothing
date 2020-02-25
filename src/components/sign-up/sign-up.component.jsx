import React, { useState } from "react";
import { connect } from 'react-redux';

import { signUpStart } from "../../redux/user/user.action";
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

import { SignUpContainer } from './sign-up.styles.jsx';

const SignUp = ({ userSignUpStart }) => {

    const [userCredentials, setUserCredentials] = useState({ email: '', displayName: '', password: '', confirmPassword: '' });
    const { displayName, email, password, confirmPassword } = userCredentials;

    const handleSubmit = event => {
        event.preventDefault();
        if (password !== confirmPassword) { alert("Password doesn't match!"); return; }
        userSignUpStart({ email, password, displayName });
    }
    const handleChange = event => {
        const { name, value } = event.target;
        setUserCredentials({ ...userCredentials, [name]: value });
    }

    return (
        <SignUpContainer>
            <h2 className='title'>I do not have a account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    autoComplete='displayName'
                    label='Display Name'
                    name='displayName'
                    value={displayName}
                    onChange={handleChange}
                    required
                />
                <FormInput
                    type='email'
                    autoComplete='email'
                    label='Email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    required
                />
                <FormInput
                    type='password'
                    autoComplete='password'
                    label='Password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                    required
                />
                <FormInput
                    type='password'
                    autoComplete='confirmPassword'
                    label='Confirm Password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange}
                    required
                />
                <CustomButton type='submit'>Sign Up</CustomButton>
            </form>
        </SignUpContainer>
    );
}
const mapDispatchToProps = dispatch => ({
    userSignUpStart: userCredentials =>
        dispatch(signUpStart(userCredentials))
})
export default connect(null, mapDispatchToProps)(SignUp);