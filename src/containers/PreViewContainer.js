import React, { Component } from 'react';

import { observer, inject } from "mobx-react";

import { Link } from "react-router-dom";

import PreViewList from '../components/PreViewList'

import { PreViewWrapper } from '../styles/PreViewLayout';

@inject((stores) => ({
    previewStore: stores.previewStore,
  }))

@observer
class PreViewContainer extends Component {
    OnCategoryClick = (id) => {
        console.log("categoryClick");
        this.props.previewStore.CategoryClick(id);
    }
    itemClick = () => {
        console.log("itemClick");
    }
    render() {
        const { itemjson } = this.props.previewStore;
        console.log(itemjson);
        const previewList = itemjson.map(list => {
            return (
                <PreViewWrapper>
                   <Link to="/list">
                   <h1 onClick={() => this.OnCategoryClick(list.id)}>{list.category}</h1>
                   </Link> 
                    <PreViewList
                        items={list.items}
                        >
                    </PreViewList>
                </PreViewWrapper>
            )
        })
        return (
            previewList
        );
    }
}

export default PreViewContainer;