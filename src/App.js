import React, { Component } from 'react';

import { Switch, Route } from "react-router-dom";

import { observer, inject } from "mobx-react";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import Homepage from "./pages/Hompage";
import CartPage from "./pages/CartPage";
import DetailPage from "./pages/DetailPage";
import SignInAndSignUpPage from "./pages/SignInAndSignUpPage";
import HeaderContainer from "./containers/HeaderContainer";
import FooterContainer from "./containers/FooterContainer";
import ListPage from "./pages/ListPage";

import AppLayout from './styles/AppLayout'

@inject((stores) => ({ authStore: stores.authStore }))
@observer
class App extends Component {
  componentDidMount() {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfileDocument(user);
        userRef.onSnapshot((snapShot) => {
          this.props.authStore.setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
        return;
      }

      this.props.authStore.setCurrentUser(user);
    });
    this.props.authStore.setUnsubscribeFromAuth(unsubscribeFromAuth);
  }

  componentWillUnmount() {
    this.props.authStore.unsubscribeFromAuth();
  }

  render() {
    return (
      <AppLayout>
        <HeaderContainer />
        <div className="routes">
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/list" component={ListPage} />
            <Route path="/signin" component={SignInAndSignUpPage} />
            <Route path="/cart" component={CartPage} />
            <Route path="/detail" component={DetailPage} />
          </Switch>
        </div>
        <FooterContainer />
      </AppLayout>
    );
  }
}

export default App;
