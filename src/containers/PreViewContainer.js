import React, { Component } from 'react';

import PreViewList from '../components/PreViewList'

import ItemJson from '../data/ItemJson';

class PreViewContainer extends Component {
    categoryClick = () => {
        console.log("categoryClick");
    }

    itemClick = () => {
        console.log("itemClick");
    }

    render() {
        const item = ItemJson;

        const previewList = item.map(list => {
            return (
                <div>
                    <h1 onClick={this.categoryClick}>{list.category}</h1>
                    <PreViewList items={list.items} itemClick={this.itemClick}></PreViewList>
                </div>
            );
        });

        return (
            previewList
        );
    }
}

export default PreViewContainer;