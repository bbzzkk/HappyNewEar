import React, { Component } from 'react';

import { observer, inject } from "mobx-react";

import Detail from '../components/Detail';

@inject((stores) => ({
  itemStore: stores.itemStore,
}))
@observer
class DetailContainer extends Component {
  render() {
    const {params:{categoryId, productId}} = this.props
    this.props.itemStore.selectItemDetail(categoryId, productId);
    return <Detail itemDetail={this.props.itemStore.itemDetail} />;
  }
}

export default DetailContainer;