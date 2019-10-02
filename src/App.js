import React from 'react';
import { Route } from 'react-router-dom';

import { auth } from './firebase/firebase.utilities';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shopPage';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page';
import Header from "./components/header/header.component";

import './App.css';

class App extends React.Component {
  unsubscribeFromAuth = null;

  constructor() {
    super();
    this.state = { currentUser: null };
  }

  componentDidMount() {
    // auth.onAuthStateChanged gives us back a function to unsubscribe
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => this.setState({ currentUser: user }, () => console.log(user)));
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div >
        <Header currentUser={this.state.currentUser} />
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={SignInAndSignUpPage} />
      </div>
    );
  }
}

export default App;


