import React, { Component } from 'react';

import { observer, inject } from "mobx-react";

import List from "../components/OverviewList"

@inject((stores) => ({
  itemStore: stores.itemStore,
}))
@observer
class ListContainer extends Component {
  OnItemClick = (ItemId, CategoryId) => {
    this.props.previewStore.ItemClickDetail(ItemId, CategoryId);
  };
  render() {
    const { SelectCategory } = this.props.itemStore;
    const items = SelectCategory.items;
    return <List items={items} OnItemClick={this.OnItemClick}/>;
  }
}

export default ListContainer;