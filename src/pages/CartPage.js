import React, { Component } from 'react';
import CartContainer from '../containers/CartContainer';

import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';

const slideImages = [
    'images/123123.jpg',
    'images/123123.jpg',
    'images/123123.jpg'
]

class CartPage extends Component {
    render() {
        return (
             <CartContainer/>
           
        );
    }
}

export default CartPage;