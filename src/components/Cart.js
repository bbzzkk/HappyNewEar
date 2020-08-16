import React, { Component } from 'react';
import TotalCount from './TotalCount';
import CartList from './CartList';

class Cart extends Component {
    render() {
        const { cartList } = this.props;
        const cartLists = cartList.map(items => {
            return (
                <CartList items={items} />
            );
        });

        return (
            <div className='Cart'> 
                <label>
                    <input type='checkbox'/>
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