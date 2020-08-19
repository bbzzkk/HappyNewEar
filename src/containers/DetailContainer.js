import React, { Component } from "react";

import { observer, inject } from "mobx-react";

import Detail from "../components/Detail";

@inject((stores) => ({
  itemStore: stores.itemStore,
}))
@observer
class DetailContainer extends Component {
  OnChange = (e) => {
    const number = parseInt(e.target.innerText.replace(/[^0-9]/g, ""));
    this.props.itemStore.setQuantity(number)
  }
  
  render() {
    const { categoryId, productId } = this.props.params;
    this.props.itemStore.selectItemDetail(categoryId, parseInt(productId));
    const { itemDetail, itemQuantity, _totalAmount } = this.props.itemStore;
    console.log(typeof(itemDetail.imageUrl))
    return (
      // <Test imageUrl={itemDetail.imageUrl}/>
      <Detail
        itemDetail={itemDetail}
        itemQuantity={itemQuantity}
        totalAmount={_totalAmount}
        OnChange={this.OnChange}
      />
    );
  }
}

export default DetailContainer;