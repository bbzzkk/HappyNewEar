import React, { Component } from 'react';
import CartContainer from '../containers/CartContainer';

class CartPage extends Component {
    render() {
        return (
            <CartContainer/>
        );
    }
}

export default React.memo(CartPage);