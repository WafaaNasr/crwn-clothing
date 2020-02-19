import React, { useState } from "react";

import { auth, createuserProfileDocument } from '../../firebase/firebase.utilities';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

import { SignUpContainer } from './sign-up.styles.jsx';

const SignUp = () => {

    const [userCredentials, setUserCredentials] = useState({ email: '', displayName: '', password: '', confirmPassword: '' });
    const { displayName, email, password, confirmPassword } = userCredentials;

   const handleSubmit = async event => {
        event.preventDefault();
        if (password !== confirmPassword) { alert("Password doesn't match!"); return; }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createuserProfileDocument(user, { displayName });
            setUserCredentials({
                email: '',
                displayName: '',
                password: '',
                confirmPassword: ''
            });
        } catch (error) {
            console.log(error)
        }

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
export default SignUp;