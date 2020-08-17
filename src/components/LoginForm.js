import React, { Component } from "react";

import {signInWithGoogle} from '../firebase/firebase.utils'

class LoginForm extends Component{
    render(){
        const { email, password, handleChange, handleLogin } = this.props;
        return (
          <>
            <h2 className="title">로그인</h2>
            <form onSubmit={handleLogin}>
              <input
                name="email"
                type="email"
                onChange={handleChange}
                value={email}
                required
              />
              <input
                name="password"
                type="password"
                onChange={handleChange}
                value={password}
                required
              />
              <div className="login-buttons">
                <button type="submit">로그인</button>
                <button type="button"onClick={signInWithGoogle}>
                  구글 계정으로 로그인
                </button>
              </div>
            </form>
          </>
        );
    }
}

export default LoginForm