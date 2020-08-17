import React from 'react';

import { Switch, Route } from "react-router-dom";

import Homepage from "./pages/Hompage";
import HeaderContainer from "./containers/HeaderContainer";
import FooterContainer from "./containers/FooterContainer";
import LoginPage from './pages/LoginPage'

function App() {
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

export default App;
