import React, { Component } from 'react';
import CartContainer from '../containers/CartContainer';
import { Provider } from 'mobx-react';
import CartStore from '../stores/CartStore';

class CartPage extends Component {
    render() {
        return (
            <Provider cartStore={CartStore}>
                <CartContainer />
            </Provider>
        );
    }
}

export default CartPage;