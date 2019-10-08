import React from "react";

import FormInput from '../form-input/form-input.component';
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle } from '../../firebase/firebase.utilities';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor() {
        super();
        this.state = { email: '', password: '' };
    }
    handleSubmit = event => {
        event.preventDefault();
        this.setState({ email: '', password: '' });
    }
    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }
    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' label='Email' autoComplete='email' required type='email' value={this.state.email} handleChange={this.handleChange} />
                    <FormInput name='password' required autoComplete='password' label='Password' type='password' value={this.state.password} handleChange={this.handleChange} />
                    <div className='buttons'>
                        <CustomButton name='submit' type='submit' >Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;