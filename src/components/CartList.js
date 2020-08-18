import React, { Component } from 'react';
import CartItem from './CartItem';

class CartList extends Component {
    render() {
        const {
            items,
            allChecked,
            onHandleAllCheck,
            onHandleCheck,
            onDeleteSelected,
            onDeleteItem,
            onAddClick,
            onSubClick } = this.props; 

        const cartLists = items.map(item => {
            return (
                <CartItem
                    item={item}
                    onHandleCheck={onHandleCheck}
                    onDeleteItem={onDeleteItem}
                    onAddClick={onAddClick}
                    onSubClick={onSubClick}/>
            );
        });

        return (
            <div className='Cart'> 
                <label>
                    <input type='checkbox' checked={allChecked} onClick={(e) => onHandleAllCheck(e)}/>
                    전체선택
                </label>
                <button onClick={onDeleteSelected}>선택삭제</button>
                <hr />
                {cartLists}
            </div>
        );
    }
}

export default CartList;