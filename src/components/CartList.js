import React, { Component } from 'react';
import CartItem from './CartItem';
import { Checkbox, Button } from 'semantic-ui-react';

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
            <div className='CartList'> 
                <label>
                    <input type='checkbox' checked={allChecked} onClick={(e) => onHandleAllCheck(e)}/>
                    전체선택
                </label>&nbsp;
                <label>종류</label>&nbsp;
                <label>상품명 </label>&nbsp;
                <label>수량</label>&nbsp;
                <label>가격</label>&nbsp;
                <Button basic color='grey' size='tiny' onClick={onDeleteSelected}>
                    선택삭제
                </Button>
                <hr style={{ border: 0, height: '3px', background: '#000' }} />
                {cartLists}
            </div>
        );
    }
}

export default CartList;