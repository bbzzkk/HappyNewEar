import React, {Component} from 'react';
import { Link } from "react-router-dom"

// import { resetGlobalState } from 'mobx/lib/internal';

// import {HeaderBlock, Wrapper } from '../styles/HeaderStyle'

//import Responsive from './Responsive';
//import Button from './Button';

class Header extends Component{
    render(){
        return (
          <div>
            <div>
              <Link className="logoContainer" to="/">
                <img
                  style={{ width: "10em" }}
                  src="images/header/HNElogo.png"
                  alt="logo"
                />
              </Link>
              <div className="right">
                <div className="options">
                  <Link to="/login">로그인</Link>
                  <Link to="/cart">관심상품</Link>
                </div>
              </div>
            </div>
          </div>
        );}
}




export default Header
