import React, {Component} from 'react';
import { Link } from "react-router-dom"
import HeaderLayout from '../styles/HeaderLayout'

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
                    {currentUser && <div onClick={handleSignOut}>로그아웃</div>}
                    {!currentUser && <Link to="/signin">로그인</Link>}
                </div>
                <div className="option">
                    <Link to="/cart">관심상품</Link>
                </div>
                </div>
            </HeaderLayout>
        );
  }
}
