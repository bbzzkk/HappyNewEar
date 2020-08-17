import React, { Component } from "react";

import { inject, observer } from "mobx-react";

import SignUpForm from '../components/SignUpForm'

@inject((stores) => ({ authStore: stores.authStore }))
@observer
class SignUpFormContainer extends Component {
  handleSignUp = () => {
    this.props.authStore.signUp();
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.props.authStore.changeSignInForm(name, value);
  };
  render() {
    return <SignUpForm
    handleChange={this.handleChange} 
    handleSignUp={this.handleSignUp}
     />;
  }
}

export default SignUpFormContainer;
