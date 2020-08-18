import React, { Component } from "react";
import SignInAndUpFormLayout from "../styles/SignInAndUpFormLayout";
import CustomButton from "../styles/CustomButton";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";

class LoginForm extends Component{
    render(){
        const {
          signInEmail,
          signInPassword,
          handleChange,
          handleSignIn,
          handleSignInWithGoogle,
        } = this.props;
        const formWidth = {
          width: "80%",
          height: "100%",
          padding: "30px",
        };
        const inputWidth = {
          width: "100%",
          padding:'1em'
        };
        return (
          <SignInAndUpFormLayout>
            <Card style={formWidth}>
              <CardHeader style={{ textAlign: "center" }} title="로그인" />
              <form onSubmit={handleSignIn}>
                <TextField
                  name="signInEmail"
                  type="email"
                  label="Email"
                  onChange={handleChange}
                  value={signInEmail}
                  required
                  style={inputWidth}
                />
                <TextField
                  name="signInPassword"
                  type="password"
                  label="Password"
                  onChange={handleChange}
                  value={signInPassword}
                  required
                  style={inputWidth}
                />
                <div className="buttons">
                  <CustomButton type="submit">로그인</CustomButton>
                  <CustomButton type="button" onClick={handleSignInWithGoogle}>
                    구글 계정으로 로그인
                  </CustomButton>
                </div>
              </form>
            </Card>
          </SignInAndUpFormLayout>
        );
    }
}

export default LoginForm