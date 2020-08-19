import React, { Component } from 'react';
import { observer, inject } from "mobx-react";

import PreViewList from '../components/PreViewList'

import { PreviewWrapper } from "../styles/PreViewLayout";

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
          <PreViewList
            key={categoryItems.id}
            categoryItems={categoryItems}
            OnClickCategory={this.OnClickCategory}
            OnClickItem={this.OnClickItem}
          />
        ))}
      </PreviewWrapper>
    );
}}

export default PreviewContainer;
