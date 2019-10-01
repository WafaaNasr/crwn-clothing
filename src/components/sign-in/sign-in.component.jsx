import React from "react";

import FormInput from '../form-input/form-input.component';

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
                    <FormInput name='email' label='Email' required type='email' value={this.state.email} handleChange={this.handleChange} />
                    <FormInput name='password' required label='Password' type='password' value={this.state.password} handleChange={this.handleChange} />
                    <input name='submit' type='submit' value='Submit Form' />
                </form>
            </div>
        )
    }
}

export default SignIn;