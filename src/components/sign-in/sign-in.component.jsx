import React from "react";

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
                    <input name='email' required type='email' value={this.state.email} onChange={this.handleChange} />
                    <label>Email</label>
                    <input name='password' required type='password' value={this.state.password} onChange={this.handleChange} />
                    <label>Password</label>
                    <input name='submit' type='submit' value='Submit Form' />
                </form>
            </div>
        )
    }
}

export default SignIn;