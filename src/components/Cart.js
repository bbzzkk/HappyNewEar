import React, { Component } from 'react';
import TotalCount from './TotalCount';
import CartItem from './CartItem';

class Cart extends Component {
    render() {
        const { item } = this.props; 

        const cartLists = item.map(items => {
            return (
                <CartItem item={items} />
            );
        });

        return (
            <div className='Cart'> 
                <label>
                    <input type='checkbox' />
                    전체선택
                </label>
                <button>선택삭제</button>
                <hr />
                {cartLists}
                <TotalCount />
            </div>
        );
    }
}

export default Cart;