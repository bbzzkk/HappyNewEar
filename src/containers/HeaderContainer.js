import React, { Component } from 'react'

import {inject, observer} from 'mobx-react'

import Header from '../components/Header'

@inject((stores) => ({
  authStore: stores.authStore,
}))
@observer
class HeaderContainer extends Component {
  handleLogout = () => {
    this.props.authStore.logout();
  };
  render() {
    const { currentUser } = this.props.authStore;
    return (
      <Header currentUser={currentUser} handleLogout={this.handleLogout} />
    );
  }
}

export default HeaderContainer