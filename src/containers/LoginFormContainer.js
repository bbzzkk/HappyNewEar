import React, { Component } from "react";

import LoginForm from "../components/LoginForm";
import { observer, inject } from "mobx-react";

@inject(stores => ({login: stores.login}))
@observer
class LoginFormContainer extends Component {
  handleChange = (event) => {
    const {name, value} = event.target
    console.log(name, value)
    this.props.login.changeLoginForm(name, value)
  };

  handleLogin = () => {
    this.props.login.login()
  };

  render() {
    const { email, password } = this.props.login;
    return (
      // <div>하이</div>
      <LoginForm
        email={email}
        password={password}
        handleChange={this.handleChange}
        handleLogin={this.handleLogin}
      />
    );
  }
}

export default LoginFormContainer;

