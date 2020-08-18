import React, { Component } from 'react';
import PreViewListItem from './PreViewListItem';

class PreViewList extends Component {
    render() {
        const { items, itemClick, ItemJson, onCategoryClick} = this.props;
        
        const prevItems = items.filter(tmp => tmp.id < 5); //초기 4개만 출력하게끔 해줌 하 이거 몇시간 걸렸는지 모르겠네 썅 

        // const result = items.map(tmp => {
        //     return (
        //         <div onClick={itemClick}>
        //             <Item name={tmp.imageUrl}
        //                     price ={tmp.price}
        //                     id = {tmp.id}
        //                     items = {tmp}></Item>
        //         </div>
        //     );
        // });

        const previewItems = prevItems.map((preitems) =>{
            return (
               // <Item list={list} onCategoryClick={this.props.onCategoryClick}/>
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
           // result

            previewItems

        );
    }
}

export default PreViewList;