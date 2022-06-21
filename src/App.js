import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from './pages/homepage/homepage.component';
import { ShopPage } from './pages/shop/shop.component';
import Header from './components/header/header.component';
import { SignInAndSignUpPage } from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import './App.css';
import { auth } from './firebase/firebase.utils';
import { createUserProfileDocument } from './firebase/user.firebase';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

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
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
