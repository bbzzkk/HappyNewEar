import React from 'react';

import { Switch, Route } from "react-router-dom";

import Homepage from "./pages/Hompage";
import LoginPage from './pages/LoginPage'
import CartPage from "./pages/CartPage";
import DetailPage from "./pages/DetailPage";

import HeaderContainer from "./containers/HeaderContainer";
import FooterContainer from "./containers/FooterContainer";


function App() {
  return (
    <div className="App">
      <HeaderContainer />
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

export default App;
