import React, { Component } from 'react';

import { observer, inject } from "mobx-react";

import OverviewList from "../components/OverviewList";

@inject((stores) => ({
  itemStore: stores.itemStore,
}))
@observer
class OverviewContainer extends Component {
  OnClickItem = (ItemId, CategoryId) => {
    this.props.itemStore.clickItem(ItemId, CategoryId);
  };
  render() {
    const { selectedCategory } = this.props.itemStore;
    const items = selectedCategory.items;
    return <OverviewList items={items} OnClickItem={this.OnClickItem} />;
  }
}

export default OverviewContainer;