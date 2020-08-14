import React, { Component } from 'react';
import Item from './Item';

class PreViewList extends Component {
    render() {
        const { items, itemClick } = this.props;
        const result = items.map(tmp => {
            return (
                <div onClick={itemClick}>
                    <Item name={tmp.imageUrl}></Item>
                </div>
            );
        });

        return (
            result
        );
    }
}

export default PreViewList;