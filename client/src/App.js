import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { checkUserSesssion } from './redux/user/user.action';

import Header from './components/header/header.component';

import GlobalStyle from './globalStyles';

import { selectCurrentUser } from './redux/user/user.selector';
import Spinner from './components/spinner/spinner.component';

const HomePage = lazy(() => import('./pages/homePage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shopPage.component'));
const SignInAndSignUpPage = lazy(() => import('./pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));

const App = ({ checkUserSesssion, currentUser }) => {

    useEffect(() => {
        checkUserSesssion();
    }, [checkUserSesssion]);

    return (
        <div>
            <GlobalStyle />
            <Header />
            <Switch>
                <Suspense fallback={<Spinner/>}>
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
                </Suspense>
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