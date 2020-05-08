import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { checkUserSesssion } from './redux/user/user.action';

import HomePage from './pages/homePage/homepage.component';
import ShopPage from './pages/shop/shopPage.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page';
import CheckoutPage from './pages/checkout/checkout.component';

import Header from './components/header/header.component';

import GlobalStyle from './globalStyles';

import { selectCurrentUser } from './redux/user/user.selector';

const App = ({ checkUserSesssion, currentUser }) => {

    useEffect(() => {
        checkUserSesssion();
    }, [checkUserSesssion]);

    return (
        <div>
            <GlobalStyle />
            <Header />
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/shop' component={ShopPage} />
                <Route exact path='/checkout' component={CheckoutPage} />
                <Route
                    exact
                    path='/signin'
                    render={() =>
                        currentUser ? (
                            <Redirect to='/' />
                        ) : (
                                <SignInAndSignUpPage />
                            )
                    }
                />
            </Switch>
        </div>
    );
};
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