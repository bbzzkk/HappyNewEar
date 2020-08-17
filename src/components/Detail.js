import React, { Component } from 'react';
import PreViewList from '../components/PreViewList';
import Product from '../Product';
import Item from './Item';
//import ItemJason from '../ItemJason';

class Detail extends Component {

    render() {
        
        const temp = Product[0].items[0].items[4];   
        console.log(temp);

        return(
            <div>
                <Item name={temp.imageUrl}></Item>
                <p>상품명:{temp.name}</p>
                <p>가격:{temp.price}원</p>
            </div>
        )
    }
}

export default Detail;