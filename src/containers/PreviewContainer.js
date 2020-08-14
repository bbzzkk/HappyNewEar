import React, { Component } from 'react';
import PreViewList from '../components/PreviewList'
import ItemJson from '../ItemJson';

class PreviewContainer extends Component {
    render() {
        const item = ItemJson;

        const previewList = item.map(list => {
            return (
                <div>
                    <h1>{list.category}</h1>
                    <PreViewList items={list.items}></PreViewList>
                </div>
            );
        });

        return (
            previewList
        );
    }
}

export default PreviewContainer;