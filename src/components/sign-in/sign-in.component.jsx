import React, { useState } from "react";
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from "../custom-button/custom-button.component";
import { googleSignInStart } from '../../redux/user/user.action';

import { SignInContainer, ButtonContainer } from './sign-in.styles';
import { auth } from '../../firebase/firebase.utilities';

const SignIn = ({ signInWithGoogle }) => {

    const [userCredentials, setUserCredentials] = useState({ email: '', password: '' });
    const { email, password } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();

        if (!(email && password)) return;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            setUserCredentials({ email: '', password: '' });
        }
        /// TODO: ADD Logger Like Sentry
        catch (error) {
            console.log(error);
        }
    }
    const handleChange = event => {
        const { name, value } = event.target;
        setUserCredentials({ ...userCredentials, [name]: value });
    }

    return (
        <SignInContainer>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput name='email' label='Email' autoComplete='email' required type='email' value={email} handleChange={handleChange} />
                <FormInput name='password' required autoComplete='password' label='Password' type='password' value={password} handleChange={handleChange} />
                <ButtonContainer>
                    <CustomButton name='submit' type='submit' >Sign In</CustomButton>
                    <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
                </ButtonContainer>
            </form>
        </SignInContainer>
    )
}
const mapDispatchToProps = dispatch => ({ signInWithGoogle: () => dispatch(googleSignInStart()) })
export default connect(null, mapDispatchToProps)(SignIn);