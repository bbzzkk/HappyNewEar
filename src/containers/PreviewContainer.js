import React, { Component } from 'react';

import { observer, inject } from "mobx-react";

import PreviewList from '../components/PreviewList'

import { PreviewWrapper } from "../styles/PreviewLayout";

@inject((stores) => ({
  itemStore: stores.itemStore,
}))
@observer
class PreviewContainer extends Component {
	OnClickCategory = (id) => {
		this.props.itemStore.clickCategory(id);
	};
	OnClickItem = (ItemId, CategoryId) => {
		this.props.itemStore.clickItem(ItemId, CategoryId);
	};
	render() {
		const { itemData } = this.props.itemStore;	
    return (
      <PreviewWrapper>
        {itemData.map((categoryItems) => (
          <PreviewList
            key={categoryItems.id}
            categoryItems={categoryItems}
            OnClickItem={this.OnClickItem}
          />
        ))}
      </PreviewWrapper>
    );
}}

export default PreviewContainer;