import React, { Component } from 'react';
import CartItem from './CartItem';

class CartList extends Component {
    render() {
        const { items, onCartListSelect, caseListCheckBox, onItemSelect } = this.props;
        
        const cartItem = items.item.map(item => {
            return (
                <CartItem item={item} onItemSelect={onItemSelect}/>
            );
        });

        return (
            <div className='CartList'>
                <div>
                    <label>
                        <input type='checkbox' name={items.listName} checked={items.checked} onClick={(e) => onCartListSelect(e)}/>
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