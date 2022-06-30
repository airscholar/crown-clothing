import React from 'react';
import { createStructuredSelector } from 'reselect';
import { createUserProfileDocument } from './firebase/user.firebase';

import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import { SignInAndSignUpPage } from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

import Header from './components/header/header.component';

import './App.css';

import { auth } from './firebase/firebase.utils';

import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { setToggleCartHidden } from './redux/cart/cart.actions';
import { selectCartHidden } from './redux/cart/cart.selectors';
import { selectCurrentUser } from './redux/user/user.selectors';

class App extends React.Component {
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          // console.log(snapShot.data());
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
          setToggleCartHidden(true);
        });
      } else {
        setCurrentUser(userAuth);
      }

      createUserProfileDocument(userAuth);
    });
  }

  unSubscribe() {
    this.unSubscribeFromAuth = null;
    // this.unSubscribeFromAuth();
  }

  unSubscribeFromAuth = null;

  componentWillUnmount() {
    // this.unSubscribeFromAuth();
    this.unSubscribe();
  }

  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route exact path='/' element={<HomePage />}></Route>
          <Route exact path='/shop' element={<ShopPage />}></Route>
          <Route
            exact
            path='/signin'
            element={
              this.props.currentUser ? <Navigate replace to='/' /> : <SignInAndSignUpPage />
            }></Route>
          <Route exact path='/checkout' element={<CheckoutPage />}></Route>
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  toggleCartHidden: selectCartHidden,
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  setToggleCartHidden: cart => dispatch(setToggleCartHidden(cart)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
