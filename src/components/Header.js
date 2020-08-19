import React, { Component } from 'react';

import { Link } from "react-router-dom"

import HeaderLayout from '../styles/HeaderLayout'
import {Icon } from 'semantic-ui-react';

export default class Header extends Component{
    render() {
        const { currentUser, handleSignOut } = this.props;
      
        return (
            <HeaderLayout>
                <Link className="logoContainer" to="/">
                <img className="logo" src="images/header/logo.png" alt="logo" />
                </Link>
                <div className="options">
                <div className="option">
                    {currentUser && <div onClick={handleSignOut}>SIGN OUT</div>}
                    {!currentUser && <Link to="/signin">SIGN IN</Link>}
                </div>
                <div className="option">
                    <Link to="/cart"><Icon name = "shopping cart" size="big"/></Link>
                </div>
                </div>
            </HeaderLayout>
        );
  }
}
