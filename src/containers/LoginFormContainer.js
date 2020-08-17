import React, { Component } from "react";

import LoginForm from "../components/LoginForm";

class LoginFormContainer extends Component {
  handleChange = () => {
    //
  };

  handleSubmit = () => {
    //
  };
  render() {
    // const { email, password } = this.props.UserStore;
    const email= ""
    const password = ""
    return (
        // <div>하이</div>
      <LoginForm
        email={email}
        password={password}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default LoginFormContainer;

