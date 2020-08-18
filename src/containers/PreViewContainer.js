import React, { Component } from 'react';

import { observer, inject } from "mobx-react";

import { Link } from "react-router-dom";

import PreViewList from '../components/PreViewList'

@inject((stores) => ({
    previewStore: stores.previewStore,
  }))

@observer
class PreViewContainer extends Component {
    OnCategoryClick = (id) => {
        console.log("categoryClick");
        this.props.previewStore.CategoryClick(id);
    }
    OnitemClick = (ItemId, CategoryId) => {
        console.log("itemClick");
        // console.log(ItemId);
        // console.log(CategoryId);
        this.props.previewStore.ItemClickDetail(ItemId, CategoryId);
    }
    render() {
        const { itemjson } = this.props.previewStore;
        const previewList = itemjson.map(list => {
            return (
                <div>
                   <Link to="/list">
                   <h1 onClick={() => this.OnCategoryClick(list.id)}>{list.category}</h1>
                   </Link> 
                    
                    <PreViewList
                        OnitemClick={this.OnitemClick}
                        items={list.items}
                        itemjson = {list}
                        >
                    </PreViewList>
                </div>
            )
        })
        return (
            previewList
        );
    }
}

export default PreViewContainer;