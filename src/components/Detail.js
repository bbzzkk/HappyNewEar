import React, { Component } from 'react';
import PreViewList from '../components/PreViewList';
import Product from '../Product';
import PreViewListItem from './PreViewListItem';
//import ItemJason from '../ItemJason';

class Detail extends Component {

    render() {
        
        const temp = Product[0].items[0].items[4];   
        console.log(temp);

        return(
            <div>
                <PreViewListItem name={temp.imageUrl}></PreViewListItem>
                <p>상품명:{temp.name}</p>
                <p>가격:{temp.price}원</p>
            </div>
        )
    }
}

export default Detail;