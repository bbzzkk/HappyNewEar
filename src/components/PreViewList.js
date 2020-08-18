import React, { Component } from 'react';
import PreViewListItem from './PreViewListItem';

class PreViewList extends Component {
    render() {
        const { items, itemClick, ItemJson, onCategoryClick} = this.props;
        
        const prevItems = items.filter(tmp => tmp.id < 5);

        const previewItems = prevItems.map((preitems) =>{
            return (
               <div>
                   <PreViewListItem img = {preitems.imageUrl}
                         price = {preitems.price}
                         id = {preitems.id}
                         >
                         </PreViewListItem>
               </div>
            );
        })
        return (
            previewItems
        );
    }
}

export default PreViewList;