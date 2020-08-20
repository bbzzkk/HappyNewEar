import React, { Component } from 'react';

import { Link } from "react-router-dom"

import CartDropDown from './CartDropdown'

import HeaderLayout from '../styles/HeaderLayout'
import {Icon } from 'semantic-ui-react';
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

export default class Header extends Component{
    render() {
        const { cartSize, currentUser, handleSignOut } = this.props;
      
        return (
          <HeaderLayout>
            <Link className="logoContainer" to="/">
              <img className="logo" src="/images/header/logo.png" alt="logo" />
            </Link>
            <div className="categories">
              <div className="category">
                <Link to="/case">CASE</Link>
              </div>
              <div className="category">
                <Link to="/keyring">KEYRING</Link>
              </div>
              <div className="category">
                <Link to="/sticker">STICKER</Link>
              </div>
            </div>
            <div className="options">
              <div className="option">
                {currentUser && <div onClick={handleSignOut}>SIGN OUT</div>}
                {!currentUser && <Link to="/signin">SIGN IN</Link>}
              </div>
              <div className="option">
                <Link to="/cart">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={cartSize} color="secondary">
                      <Icon name="shopping cart" size="middle" />
                    </StyledBadge>
                  </IconButton>
                </Link>
              </div>
            </div>
            {/* <CartDropDown/> */}
          </HeaderLayout>
        );
  }
}
