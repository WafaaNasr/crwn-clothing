import React from 'react';
import { Route } from 'react-router-dom';

import { auth, createuserProfileDocument } from './firebase/firebase.utilities';
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
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createuserProfileDocument(userAuth);
        // Get realtime updates when the user-info changes, but receives the inital state if the user was registered before
        userRef.onSnapshot(snapshot => {
          this.setState({ currentUser: { id: snapshot.id, ...snapshot.data() } }, () => console.log(this.state));
        });
      } else {
        this.setState({ currentUser: userAuth });
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
        <Header currentUser={this.state.currentUser} />
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={SignInAndSignUpPage} />
      </div>
    );
  }
}

export default App;


