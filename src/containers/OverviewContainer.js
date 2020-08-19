import React, { Component } from 'react';

import { observer, inject } from "mobx-react";

import OverviewList from "../components/OverviewList";

@inject((stores) => ({
  itemStore: stores.itemStore,
}))
@observer
class OverviewContainer extends Component {
  OnClickItem = (ItemId, CategoryId) => {
    this.props.itemStore.selectItem(ItemId, CategoryId);
  };
  componentWillUnmount(){
    
  }
  render() {
    const { categoryId } = this.props.categoryId;
    this.props.itemStore.selectCategory(categoryId);
    return (
      <OverviewList
        categoryName={categoryId}
        items={this.props.itemStore.selectedCategory.items}
        OnClickItem={this.OnClickItem}
      />
    );
  }
}

export default OverviewContainer;