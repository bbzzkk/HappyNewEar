import React, { Component } from 'react';

import { Switch, Route, Redirect } from "react-router-dom";

import { observer, inject } from "mobx-react";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import Homepage from "./pages/Hompage";
import CartPage from "./pages/CartPage";
import DetailPage from "./pages/DetailPage";
import CategoryPage from "./pages/CategoryPage";
import SignInAndSignUpPage from "./pages/SignInAndSignUpPage";
import HeaderContainer from "./containers/HeaderContainer";
import FooterContainer from "./containers/FooterContainer";

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
    const {currentUser} = this.props.authStore
    return (
      <AppLayout>
        <HeaderContainer />
        <div className="routes">
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route
              exact
              path="/signin"
              render={() =>
                currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
              }
            />
                    
            <Route exact path="/cart" component={CartPage} />
            <Route exact path="/:categoryId" component={CategoryPage} />
            <Route
              exact
              path="/:categoryId/:productId"
              component={DetailPage}
            />
          </Switch>
        </div>
        <FooterContainer />
      </AppLayout>
    );
  }
}

export default App;
