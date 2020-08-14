import React from 'react';

import { Switch, Route } from "react-router-dom";

import HeaderContainer from './containers/HeaderContainer'
import Homepage from "./pages/Hompage";
import FooterContainer from "./containers/FootContainer";

function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
      <FooterContainer/>
    </div>
  );
}

export default App;
