import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import SignInForm from "../components/SignInForm";

@inject((stores) => ({ authStore: stores.authStore }))
@observer
class SignInFormContainer extends Component {
  handleChange = (event) => {
    const { name, value } = event.target;
    this.props.authStore.changeSignInForm(name, value);
  };

  handleSignIn = () => {
    const {email, password} = this.props.authStore;
    this.props.authStore.signIn(email, password);
  };

  handleSignInWithGoogle = () => {
    this.props.authStore.signInWithGoogle();
  };

  render() {
    const { email, password } = this.props.authStore;
    return (
      <SignInForm
        email={email}
        password={password}
        handleChange={this.handleChange}
        handleSignIn={this.handleSignIn}
        handleSignInWithGoogle={this.handleSignInWithGoogle}
      />
    );
  }
}

export default SignInFormContainer;

