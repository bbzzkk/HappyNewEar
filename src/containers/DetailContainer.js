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
    const itemStore = this.props.itemStore
    const item = {
      ...itemStore.itemDetail,
      category: itemStore.selectedCategoryId,
      count: itemStore.itemQuantity,
      checked: true,
    };
    this.props.cartStore.addItem(item)
  }
  
  render() {
    const { categoryId, productId } = this.props.params;
    this.props.itemStore.selectItemDetail(categoryId, parseInt(productId));
    const { itemDetail, itemQuantity, _totalAmount, options } = this.props.itemStore;
    return (
      <Detail
        itemDetail={itemDetail}
        itemQuantity={itemQuantity}
        totalAmount={_totalAmount}
        options={options}
        OnChange={this.OnChange}
        onAddCart={this.onAddCart}
      />
    );
  }
}

export default DetailContainer;