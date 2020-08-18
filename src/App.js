import React, { Component } from 'react';

import { Switch, Route } from "react-router-dom";

import { observer, inject } from "mobx-react";

import Homepage from "./pages/Hompage";
import CartPage from "./pages/CartPage";
import DetailPage from "./pages/DetailPage";
import LoginPage from './pages/LoginPage'
import HeaderContainer from "./containers/HeaderContainer";
import FooterContainer from "./containers/FooterContainer";
import ListPage from "./pages/ListPage";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

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
      <div className="App">
          <HeaderContainer/>
          <div className="routes">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/cart" component={CartPage} />
          <Route path="/detail" component={DetailPage} />
        </Switch>
      </div>
          <FooterContainer />
    </div>
  );
  }
}

const LayoutStyle = {
    overflow: 'hidden',
};
  
const HeaderStyle = {
    width: '100%',
    position: 'fixed'
};


export default App;
