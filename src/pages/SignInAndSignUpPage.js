import React, { Component} from 'react';
import SignInFormContainer from "../containers/SignInFormContainer";
import SignUpFormContainer from '../containers/SignUpFormContainer';
import SignInAndSignUpLayout from '../styles/SignInAndSignUpLayout'

class SignInAndSignUpPage extends Component {
    render() {
        return (
            <SignInAndSignUpLayout>
                <SignInFormContainer />
                <SignUpFormContainer />
            </SignInAndSignUpLayout>
        );
    }
}
export default React.memo(SignInAndSignUpPage);