import React from 'react';

import { Switch, Route } from "react-router-dom";

import HeaderContainer from './containers/HeaderContainer'
import Homepage from "./pages/Hompage";
import FooterContainer from "./containers/FooterContainer";
import PreViewContainer from './containers/PreViewContainer';

function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <PreViewContainer />
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
      <FooterContainer/>
    </div>
  );
}

export default App;
