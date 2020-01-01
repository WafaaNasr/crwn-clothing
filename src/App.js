import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';

import { auth, createuserProfileDocument } from './firebase/firebase.utilities';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shopPage';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page';
import Header from "./components/header/header.component";
import { setCurrentUser } from './redux/user/user.action';

import './App.css';

class App extends React.Component {
  unsubscribeFromAuth = null;


  componentDidMount() {
    const { setCurrentUser } = this.props;
    // auth.onAuthStateChanged gives us back a function to unsubscribe
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createuserProfileDocument(userAuth);
        // Get realtime updates when the user-info changes, but receives the inital state if the user was registered before
        userRef.onSnapshot(snapshot => {
          setCurrentUser({ id: snapshot.id, ...snapshot.data() });
        });
      } else {
        setCurrentUser(userAuth);
      }
    }
    );

  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div >
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={() =>  this.props.currentUser ? (<Redirect to='/' />) : (< SignInAndSignUpPage />) } />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = ({ user }) => ({ currentUser: user.currentUser });
const mapDispatchToProps = dispatch => ({ setCurrentUser: user => dispatch(setCurrentUser(user)) })
export default connect(mapStateToProps, mapDispatchToProps)(App);


