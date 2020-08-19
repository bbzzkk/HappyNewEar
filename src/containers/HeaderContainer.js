import React, { Component } from 'react'

import {inject, observer} from 'mobx-react'

import Header from '../components/Header'

@inject((stores) => ({
  authStore: stores.authStore,
}))
@observer
class HeaderContainer extends Component {
	handleSignOut = async () => {
		await this.props.authStore.signOut();
		alert('로그아웃되셨습니다!')
	};
	render() {
		const { currentUser } = this.props.authStore;
		return (
      <Header currentUser={currentUser} handleSignOut={this.handleSignOut} />
    );
	}
}

export default HeaderContainer;