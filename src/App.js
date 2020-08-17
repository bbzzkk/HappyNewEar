import React, { Component } from 'react';

import { Switch, Route } from "react-router-dom";

import { observer, inject } from "mobx-react";

import Homepage from "./pages/Hompage";
import LoginPage from './pages/LoginPage'
import HeaderContainer from "./containers/HeaderContainer";
import FooterContainer from "./containers/FooterContainer";

import {auth} from './firebase/firebase.utils'

@inject((stores) => ({ user: stores.user }))
@observer
class App extends Component {
  
  // open subscription to whole App
  componentDidMount() {
    const unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.props.user.setCurrentUser(user);
    });
    this.props.user.setUnsubscribeFromAuth(unsubscribeFromAuth)
  }

  componentWillUnmount() {
    // this.unsubscribeFromAut;
  }

  render() {
    return (
      <div className="App">
        <HeaderContainer />
        <div className="routes">
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/login" component={LoginPage} />
          </Switch>
        </div>
        <FooterContainer />
      </div>
    );
  }
}

export default App;
