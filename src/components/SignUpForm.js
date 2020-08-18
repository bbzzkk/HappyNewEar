import React, { Component } from "react";

import SignInAndUpFormLayout from "../styles/SignInAndUpFormLayout";
import CustomButton from "../styles/CustomButton";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";

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
    const formWidth = {
      width: "80%",
      height: "100%",
      padding: "30px",
    };
    const inputWidth = {
      width: "100%",
      padding: "1em",
    };
    return (
      <SignInAndUpFormLayout>
        <Card style={formWidth}>
          <CardHeader
            style={{ textAlign: "center" }}
            title="아직 가입하지 않으셨나요?"
            subheader="몇 가지 정보만 기입하시면 됩니다"
          />
          <form onSubmit={handleSignUp}>
            <TextField
              name="displayName"
              type="text"
              label="Display Name"
              onChange={handleChange}
              value={displayName}
              required
              style={inputWidth}
            />
            <TextField
              name="signUpEmail"
              type="email"
              label="Email"
              onChange={handleChange}
              value={signUpEmail}
              required
              style={inputWidth}
            />
            <TextField
              name="signUpPassword"
              type="password"
              label="Password"
              onChange={handleChange}
              value={signUpPassword}
              required
              style={inputWidth}
            />
            <TextField
              name="confirmedPassword"
              type="password"
              label="Confirmed Password"
              onChange={handleChange}
              value={confirmedPassword}
              required
              style={inputWidth}
            />
            <CustomButton variant="outlined" color="primary" type="submit">
              새로 시작하기
            </CustomButton>
          </form>
        </Card>
      </SignInAndUpFormLayout>
    );
  }
}

export default SignUpForm;
