import React, { Component } from "react";

class LoginForm extends Component{
    render(){
        const {
          signInEmail,
          signInPassword,
          handleChange,
          handleSignIn,
          handleSignInWithGoogle,
        } = this.props;
        return (
          <>
            <h2 className="title">로그인</h2>
            <form onSubmit={handleSignIn}>
              <input
                name="signInEmail"
                type="email"
                onChange={handleChange}
                value={signInEmail}
                required
              />
              <input
                name="signInPassword"
                type="password"
                onChange={handleChange}
                value={signInPassword}
                required
              />
              <div className="sigin-buttons">
                <button type="submit">로그인</button>
                <button type="button" onClick={handleSignInWithGoogle}>
                  구글 계정으로 로그인
                </button>
              </div>
            </form>
          </>
        );
    }
}

export default LoginForm