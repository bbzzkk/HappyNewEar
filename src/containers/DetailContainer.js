import React, { Component } from "react";

import { observer, inject } from "mobx-react";

import Detail from "../components/Detail";

@inject((stores) => ({
  itemStore: stores.itemStore,
  cartStore: stores.cartStore
}))
@observer
class DetailContainer extends Component {
  OnChange = (e) => {
    const number = parseInt(e.target.innerText.replace(/[^0-9]/g, ""));
    this.props.itemStore.setQuantity(number)
  }

  onAddCart = () => {
    console.log('2222222222222')
    const {itemStore, cartStore} = this.props
    const item = {
      ...itemStore.itemDetail,
      category: itemStore.selectedCategoryId,
      count: itemStore.itemQuantity,
      checked: true,
    };
    cartStore.addItem(item)
    itemStore.resetAmountOfItem()
  }
  
  render() {
    const { categoryId, productId } = this.props.params;
    this.props.itemStore.selectItemDetail(categoryId, parseInt(productId));
    const { itemDetail, itemQuantity, _totalPrice, options } = this.props.itemStore;
    return (
      <Detail
        itemDetail={itemDetail}
        itemQuantity={itemQuantity}
        totalPrice={_totalPrice}
        options={options}
        OnChange={this.OnChange}
        onAddCart={this.onAddCart}
        description={this.description}
      />
    );
  }
}

export default DetailContainer;