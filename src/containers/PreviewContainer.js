import React, { Component } from 'react';

import { observer, inject } from "mobx-react";

import PreviewList from '../components/PreviewList'

import { PreviewLayout } from "../styles/PreviewLayout";

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
    OnClickCartBtn = () => {
        this.props.itemStore.clickCartBtn();
    }
	render() {
		const { itemData } = this.props.itemStore;	
		return (
      <PreviewLayout>
        <div className="today-item">
            <img alt='NoImage' src="images/header/todayitem.jpg" />
        </div>
        {itemData.map((categoryItems) => (
          <PreviewList
            key={categoryItems.id}
            categoryItems={categoryItems}
            OnClickItem={this.OnClickItem}
            cartBtnClicked={this.props.itemStore._cartBtnClicked}
            OnClickCartBtn={this.OnClickCartBtn}
          />
        ))}
      </PreviewLayout>
    );
}}

export default PreviewContainer;
