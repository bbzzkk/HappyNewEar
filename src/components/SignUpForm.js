import React, { Component } from "react";

class SignUpForm extends Component {
  render() {
    const {
      displayName,
      signUpEmail,
      signUpPassword,
      confirmedPassword,
      handleChange,
      handleSignUp,
    } = this.props;
    return (
      <div className="sign-up">
        <h2>아직 가입하지 않으셨나요?</h2>
        <form onSubmit={handleSignUp}>
          <input
            name="displayName"
            type="text"
            onChange={handleChange}
            value={displayName}
            required
          />
          <input
            name="signUpEmail"
            type="email"
            onChange={handleChange}
            value={signUpEmail}
            required
          />
          <input
            name="signUpPassword"
            type="password"
            onChange={handleChange}
            value={signUpPassword}
            required
          />
          <input
            name="confirmedPassword"
            type="password"
            onChange={handleChange}
            value={confirmedPassword}
            required
          />
          <button
            type='submit'>
                새로 시작하기
            </button>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
