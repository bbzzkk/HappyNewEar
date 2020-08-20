import React, { Component } from 'react';

import { inject, observer } from "mobx-react";

import CartList from '../components/CartList';
import EmptyCart from '../components/EmptyCart';
import TotalCount from '../components/TotalCount';

import { CartLayout } from '../styles/CartLayout';

@inject((stores) => ({ 
    cartStore: stores.cartStore,
    itemStore: stores.itemStore
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
        const { itemStore } = this.props;
        cartStore.deleteSelected(itemStore.itemData);
	}

	onDeleteItem = (itemName) => {
        const { cartStore } = this.props;
        const { itemStore } = this.props;

        itemStore.itemData.map(itemData => {
            itemData = itemData.items.map(item => {
                if (item.name === itemName) {
                    item.cartBtnClicked = false;
                }
                return item;
            })
            return itemData;
        })

        cartStore.deleteItem(itemName);
	}

	onAddClick = (itemName) => {
        const { cartStore } = this.props;
        cartStore.addClick(itemName);
	}

	onSubClick = (itemName) => {
			const { cartStore } = this.props;
			cartStore.subClick(itemName);
	}

	render() {
        const { cartStore } = this.props;
        
		return (
      <CartLayout>
          <h2 className="title">장바구니</h2>
          {cartStore._items.length !== 0 ? (
            <div className="cart-inside-layout">
              <CartList
                items={cartStore._items}
                allChecked={cartStore._allChecked}
                onHandleAllCheck={this.onHandleAllCheck}
                onHandleCheck={this.onHandleCheck}
                onDeleteSelected={this.onDeleteSelected}
                onDeleteItem={this.onDeleteItem}
                onAddClick={this.onAddClick}
                onSubClick={this.onSubClick}
              />
              <TotalCount
                itemCount={cartStore._itemCount}
                totalPrice={cartStore._totalPrice}
              />
            </div>
          ) : (
            <EmptyCart />
          )}
      </CartLayout>
    );
    }
}

export default CartContainer;