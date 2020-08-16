import React, { Component } from 'react';
import CartItem from './CartItem';

class CartList extends Component {
    render() {
        const { items } = this.props;
        
        const cartItem = items.item.map(item => {
            return (
                <CartItem item={item} />
            );
        });

        return (
            <div className='CartList'>
                <div>
                    <label>
                        <input type='checkbox' />
                        {items.listName}
                    </label> 
                    <hr/>
                </div>
                {cartItem}
                <div>
                    주문금액 ??원
                <hr/>
                </div>
            </div>
        );
    }
}

export default CartList;