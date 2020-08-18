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
      <div className="App" style={LayoutStyle}>
          <HeaderContainer style={HeaderStyle}/>
          <div className="routes" style={ContentStyle}>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/cart" component={CartPage} />
          <Route path="/detail" component={DetailPage} />
        </Switch>
      </div>
          <FooterContainer style={FooterStyle}/>
    </div>
  );
}

const LayoutStyle = {
    overflow: 'hidden',
};
  
const HeaderStyle = {
    width: '100%',
    position: 'fixed'
};
  
const ContentStyle = {
    padding: '1rem',
    maxWidth: '1366px', // NOTE: Full Wide XGA / 1366x768 => 16:9
    width: '100%',
    margin: '0 auto',
    minHeight: '84vh',
    overflow: 'auto',
    backgroundColor: '#F5F6FF'
};
  
const FooterStyle = {
    backgroundColor: '#1b1c1d',
    color: '#fff',
    float: 'right',
};

export default App;
