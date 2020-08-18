import React, { Component } from 'react';

import { observer, inject } from "mobx-react";

import Detail from '../components/Detail';

@inject((stores) => ({
  itemStore: stores.itemStore,
}))
@observer
class DetailContainer extends Component {
  render() {
    const { itemDetail } = this.props.itemStore;
    return <Detail itemDetail={itemDetail} />;
  }
}

export default DetailContainer;