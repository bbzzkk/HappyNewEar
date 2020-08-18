import React, { Component } from 'react';
import ListItem from './ListItem';

class List extends Component {
    render() {
        const { items, itemClick, ItemJson, onCategoryClick} = this.props;
        
       

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
        console.log(items);
        const viewItems = items.map((preitems) =>{
            return (
               
               <div>
                   <ListItem img = {preitems.imageUrl}
                         price = {preitems.price}
                         id = {preitems.id}
                         >
                         </ListItem>
               </div>
            );
        })
        return (
           // result

            viewItems

        );
    }
}

export default List;