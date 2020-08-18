import React, {Component} from 'react';

import { Link } from "react-router-dom"

export default class Header extends Component{
  render(){
    const { currentUser, handleSignOut } = this.props;
    return (
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
            {currentUser && <div onClick={handleSignOut}>로그아웃</div>}
            {!currentUser && <Link to="/signin">로그인</Link>}
            <Link to="/cart">관심상품</Link>
          </div>
        </div>
      </div>
    );
  }
}
