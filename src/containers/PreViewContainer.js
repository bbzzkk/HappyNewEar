import React, { Component } from 'react';

import { observer, inject } from "mobx-react";

import PreViewList from '../components/PreviewList'

import { PreViewWrapper } from '../styles/PreViewLayout';

@inject((stores) => ({
  itemStore: stores.itemStore,
}))
@observer
class PreviewContainer extends Component {
	OnCategoryClick = (id) => {
		this.props.previewStore.CategoryClick(id);
	};
	OnItemClick = (ItemId, CategoryId) => {
		this.props.previewStore.ItemClickDetail(ItemId, CategoryId);
	};
	render() {
	const { itemData } = this.props.previewStore;	
	return (
		<PreViewWrapper>
		{itemData.map((categoryItems) => (
      <PreViewList
        id={categoryItems.id}
        categoryItems={categoryItems}
        OnCategoryClick={this.OnCategoryClick}
        OnitemClick={this.OnItemClick}
			/>
		))}
    </PreViewWrapper>
	)
}}

export default PreviewContainer;