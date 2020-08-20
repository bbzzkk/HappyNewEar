import React, { Component } from 'react'
import {inject, observer} from 'mobx-react'
import Header from '../components/Header'

@inject((stores) => ({
	authStore: stores.authStore,
	cartStore: stores.cartStore
}))
@observer
class HeaderContainer extends Component {
	handleSignOut = async () => {
		await this.props.authStore.signOut();
		// this.props.itemStore.item
		this.props.cartStore.clearItem();
		alert('로그아웃되셨습니다!')
	};
	render() {
		const { authStore, cartStore } = this.props;
		const cartSize = cartStore._items.length
		return (
      <Header
        cartSize={cartSize}
        currentUser={authStore.currentUser}
        handleSignOut={this.handleSignOut}
      />
    );
	}
}

export default HeaderContainer;