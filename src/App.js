import React from 'react';
import { Switch, Route } from "react-router-dom";
import HeaderContainer from './containers/HeaderContainer'
import Homepage from "./pages/Hompage";
import FooterContainer from "./containers/FooterContainer";
import PreViewContainer from './containers/PreViewContainer';
import ListPage from "./pages/ListPage";

function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <div className="routes">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/list" component={ListPage} />
      </Switch>
      </div>
      <FooterContainer/>
    </div>
  );
}

export default App;
