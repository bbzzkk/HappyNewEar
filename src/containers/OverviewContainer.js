import React, { Component } from 'react';

import { observer, inject } from "mobx-react";

import OverviewList from "../components/OverviewList";
import NewArrivalList from "../components/BestItemList";

@inject((stores) => ({
  itemStore: stores.itemStore,
}))
@observer
class OverviewContainer extends Component {
  OnClickItem = (ItemId, CategoryId) => {
    this.props.itemStore.selectItem(ItemId, CategoryId);
  };
  render() {
    const { categoryId } = this.props.categoryId;
    this.props.itemStore.selectCategory(categoryId);
    return (
      <>
        <NewArrivalList
          categoryName={categoryId}
          items={this.props.itemStore.selectedCategory.items}
          OnClickItem={this.OnClickItem}
        />
        <OverviewList
          categoryName={categoryId}
          items={this.props.itemStore.selectedCategory.items}
          OnClickItem={this.OnClickItem}
        />
      </>
    );
  }
}

export default OverviewContainer;