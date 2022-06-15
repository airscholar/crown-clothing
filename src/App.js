import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/homepage/homepage.component';
import { ShopPage } from './pages/shop/shop.component';
import { Header } from './components/header/header.component';
import { SignInAndSignUpPage } from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import './App.css';
import { auth } from './firebase/firebase.utils';
import { createUserProfileDocument } from './firebase/user.firebase';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      createUserProfileDocument(user);
      // console.log({ displayName: user.displayName });
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
        <Header user={this.state.currentUser} />
        <Routes>
          <Route exact path='/' element={<HomePage />}></Route>
          <Route exact path='/shop' element={<ShopPage />}></Route>
          <Route exact path='/signin' element={<SignInAndSignUpPage />}></Route>
        </Routes>
      </div>
    );
  }
}

export default App;
