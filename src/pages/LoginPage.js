import React, { Component} from 'react';

import SignInFormContainer from "../containers/SignInFormContainer";
import SignUpFormContainer from '../containers/SignUpFormContainer';

class LoginPage extends Component{
    render(){
        return (
          <>
            <SignInFormContainer />
            <SignUpFormContainer />
          </>
        );
    }
}

export default LoginPage;