import React from "react";

import { auth, createuserProfileDocument } from '../../firebase/firebase.utilities';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

import './sign-up.styles.scss';

class SignUp extends React.Component {

    constructor() {
        super();
        this.state = { email: '', displayName: '', password: '', confirmPassword: '' };
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        if (password !== confirmPassword) { alert("Password doesn't match!"); return; }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createuserProfileDocument(user, {displayName});
            this.setState({
                email: '',
                displayName: '',
                password: '',
                confirmPassword: ''
            });
        } catch (error) {
            console.log(error)
        }

    }
    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }
    render() {
        const { displayName, email, password, confirmPassword } = this.state;

        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        autoComplete='displayName'
                        label='Display Name'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput
                        type='email'
                        autoComplete='email'
                        label='Email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput
                        type='password'
                        autoComplete='password'
                        label='Password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput
                        type='password'
                        autoComplete='confirmPassword'
                        label='Confirm Password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        required
                    />
                    <CustomButton type='submit'>Sign Up</CustomButton>
                </form>
            </div>
        );
    }
}
export default SignUp;