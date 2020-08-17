import React, { Component } from 'react';

class CartItem extends Component {
    render() {
        const {
            item,
            onHandleCheck,
            onDeleteItem,
            onAddClick,
            onSubClick } = this.props;

        return (
            <div className='CartItem'>
                <input type='checkbox' name={item.name} checked={item.checked} onClick={(e) => onHandleCheck(e)} />
                {item.category}
                <img width='100px' height='100px' src={item.imageUrl} alt="test"/>
                {item.name}
                <button onClick={() => onAddClick(item.name)}>+</button>
                {item.count}
                <button onClick={() => onSubClick(item.name)}>-</button>
                {item.price * item.count}원
                <button onClick={() => onDeleteItem(item.name)}>x</button>
                <hr/>
            </div>
        );
    }
}

export default CartItem;