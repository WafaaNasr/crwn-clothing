import React from "react";

import FormInput from '../form-input/form-input.component';
import CustomButton from "../custom-button/custom-button.component";
import { auth, signInWithGoogle } from '../../firebase/firebase.utilities';

import { SignInContainer, ButtonContainer } from './sign-in.styles';

class SignIn extends React.Component {
    constructor() {
        super();
        this.state = { email: '', password: '' };
    }
    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;
        if (!(email && password)) return;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        }
        catch (error) {
            console.log(error);
        }
    }
    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }
    render() {
        return (
            <SignInContainer>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' label='Email' autoComplete='email' required type='email' value={this.state.email} handleChange={this.handleChange} />
                    <FormInput name='password' required autoComplete='password' label='Password' type='password' value={this.state.password} handleChange={this.handleChange} />
                    <ButtonContainer>
                        <CustomButton name='submit' type='submit' >Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
                    </ButtonContainer>
                </form>
            </SignInContainer>
        )
    }
}

export default SignIn;