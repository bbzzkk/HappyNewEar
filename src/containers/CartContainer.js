import React, { Component } from 'react';

import { inject, observer } from "mobx-react";

import CartList from '../components/CartList';
import EmptyCart from '../components/EmptyCart';
import TotalCount from '../components/TotalCount';

@inject((stores) => ({ 
    cartStore: stores.cartStore
 }))
@observer
class CartContainer extends Component {
	onHandleAllCheck = (e) => {
			const { cartStore } = this.props;
			cartStore.handleAllCheck(e);
	}

	onHandleCheck = (e) => {
			const { cartStore } = this.props;
			cartStore.handleCheck(e);
	}

	onDeleteSelected = () => {
			const { cartStore } = this.props;
			cartStore.deleteSelected();
	}

	onDeleteItem = (itemName) => {
			const { cartStore } = this.props;
			cartStore.deleteItem(itemName);
	}

	onAddItem = (itemName) => {
			const { cartStore } = this.props;
			cartStore.addClick(itemName);
	}

	onSubmitItem = (itemName) => {
			const { cartStore } = this.props;
			cartStore.submitItem(itemName);
	}

	render() {
		const { cartStore } = this.props;
		return (
      <div
        className="CartContainer"
        style={{ marginLeft: 50, marginRight: 50 }}
      >
			<h2 style={{ marginTop: 10 }}>장바구니</h2>
			{cartStore._items.length !== 0 ? 
				<>
					<CartList
						items={cartStore._items}
						allChecked={cartStore._allChecked}
						onHandleAllCheck={this.onHandleAllCheck}
						onHandleCheck={this.onHandleCheck}
						onDeleteSelected={this.onDeleteSelected}
						onDeleteItem={this.onDeleteItem}
						onAddItem={this.onAddItem}
						onSubClick={this.onSubmitItem}
					/>
					<TotalCount
						itemCount={cartStore._itemCount}
						totalPrice={cartStore._totalPrice}
					/>
				</>
				: 
				<EmptyCart />
			}
    </div>
  )}
}

export default CartContainer;