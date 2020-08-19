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
    console.log(this.props.params);

    this.props.itemStore.selectItemDetail(categoryId, parseInt(productId));

    const { itemDetail, itemQuantity, _totalAmount } = this.props.itemStore;
    
    console.log(`${itemDetail.imageUrl}`)
    return (
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