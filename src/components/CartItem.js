import React, { Component } from 'react';

class CartItem extends Component {
    render() {
        const { item }  = this.props;

        return (
            <div className='CartItem'>
                <input type='checkbox' />
                <img width='100px' height='100px' src={item.imageUrl} alt="test"/>
                {item.name}
                <button>-</button>
                개수
                <button>+</button>
                {item.price}원
                <button>x</button>
                <hr/>
            </div>
        );
    }
}

export default CartItem;