import React from 'react';
import { Switch, Route } from "react-router-dom";
import HeaderContainer from './containers/HeaderContainer'
import Homepage from "./pages/Hompage";
import CartPage from "./pages/CartPage";
import DetailPage from "./pages/DetailPage";
import FooterContainer from "./containers/FooterContainer";


function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/detail" component={DetailPage} />
      </Switch>
      <FooterContainer/>
    </div>
  );
}

export default App;
