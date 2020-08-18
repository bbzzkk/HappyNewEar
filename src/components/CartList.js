import React, { Component } from 'react';
import CartItem from './CartItem';
import { Checkbox, Button, Segment } from 'semantic-ui-react';

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
                 <Segment size='large'>
                    <label>
                        <input type='checkbox' checked={allChecked} onClick={(e) => onHandleAllCheck(e)}/>
                    </label>&nbsp;
                    <label>종류</label>&nbsp;
                    <label>상품명 </label>&nbsp;
                    <label>수량</label>&nbsp;
                    <label>가격</label>&nbsp;
                    <Button basic color='grey' size='tiny' onClick={onDeleteSelected}
                        style={{
                            float: 'right',
                            lineHeight: '5px'
                        }}>
                        선택삭제
                    </Button>
                </Segment>
                {cartLists}
            </div>
        );
    }
}

export default CartList;