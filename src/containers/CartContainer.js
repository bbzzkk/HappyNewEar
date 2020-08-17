import React, { Component } from 'react';
import Cart from '../components/Cart';
import EmptyCart from '../components/EmptyCart';
import { inject, observer } from 'mobx-react';

@inject('cartStore')
@observer
class CartContainer extends Component {

    render() {

        const { cartStore } = this.props;

        return (
            <div className='CartContainer'>
                <h1>장바구니</h1>
                <hr/>
                {
                    cartStore._item.length !== 0
                        ? <Cart item={cartStore._item} />
                    : <EmptyCart />
                }
            </div>
        );
    }
}

export default CartContainer;