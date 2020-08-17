import React, { Component } from 'react'

import {inject, observer} from 'mobx-react'

import Header from '../components/Header'

@inject((stores) => ({ 
    user: stores.user,
    login: stores.login
 }))
@observer
class HeaderContainer extends Component {
  handleLogout = () => {
    this.props.login.logout()
  };
  render() {
    const { currentUser } = this.props.user;
    return (
      <Header 
        currentUser={currentUser}
        handleLogout={this.handleLogout} 
      />
    );
  }
}

export default HeaderContainer