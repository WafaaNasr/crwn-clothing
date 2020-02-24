import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { checkUserSesssion } from './redux/user/user.action';

import './App.css';

import HomePage from './pages/homePage/homepage.component';
import ShopPage from './pages/shop/shopPage.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page';
import CheckoutPage from './pages/checkout/checkout.component';

import Header from './components/header/header.component';

import { selectCurrentUser } from './redux/user/user.selector';

class App extends React.Component {

    componentDidMount() {
        const { checkUserSesssion } = this.props;
        checkUserSesssion();
    }

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/shop' component={ShopPage} />
                    <Route exact path='/checkout' component={CheckoutPage} />
                    <Route
                        exact
                        path='/signin'
                        render={() =>
                            this.props.currentUser ? (
                                <Redirect to='/' />
                            ) : (
                                    <SignInAndSignUpPage />
                                )
                        }
                    />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    checkUserSesssion: () => dispatch(checkUserSesssion())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);