import React, { Component } from 'react';
import CartList from '../components/CartList';
import EmptyCart from '../components/EmptyCart';
import { inject, observer } from 'mobx-react';
import TotalCount from '../components/TotalCount';
import { Grid, Header } from 'semantic-ui-react';    

@inject((stores) => ({ 
    cartStore: stores.cart
 }))
@observer
class CartContainer extends Component {

    onHandleAllCheck = (e) => {
        const { cartStore } = this.props;
        cartStore.handleAllCheck(e);
    }

    onHandleCheck = (e) => {
        const { cartStore } = this.props;
        cartStore.handleCheck(e);
    }

    onDeleteSelected = () => {
        const { cartStore } = this.props;
        cartStore.deleteSelected();
    }

    onDeleteItem = (itemName) => {
        const { cartStore } = this.props;
        cartStore.deleteItem(itemName);
    }

    onAddClick = (itemName) => {
        const { cartStore } = this.props;
        cartStore.addClick(itemName);
    }

    onSubClick = (itemName) => {
        const { cartStore } = this.props;
        cartStore.subClick(itemName);
    }

    render() {
        const { cartStore } = this.props;
        return (
            <div className='CartContainer' style={
                {
                    marginLeft: 50,
                    marginRight: 50,
                }}>
                <h2 style={{
                    marginTop: 10,
                }}>장바구니</h2>
                {
                    cartStore._items.length !== 0
                        ? <>
                            <CartList
                                items={cartStore._items}
                                allChecked={cartStore._allChecked}
                                onHandleAllCheck={this.onHandleAllCheck}
                                onHandleCheck={this.onHandleCheck}
                                onDeleteSelected={this.onDeleteSelected}
                                onDeleteItem={this.onDeleteItem}
                                onAddClick={this.onAddClick}
                                onSubClick={this.onSubClick} />
                            <TotalCount
                                itemCount={cartStore._itemCount}
                                totalPrice={cartStore._totalPrice}/>
                        </>
                        : <EmptyCart />
                }
            </div>
            // <div>
            //     <Grid style={{ marginLeft: 50 }}>
            //         <Grid.Row>
            //             <h2>장바구니</h2>
            //         </Grid.Row>
            //         {
            //             cartStore._items.length !== 0
            //             ? <>
            //                 <Grid.Row>
            //                     <CartList
            //                         items={cartStore._items}
            //                         allChecked={cartStore._allChecked}
            //                         onHandleAllCheck={this.onHandleAllCheck}
            //                         onHandleCheck={this.onHandleCheck}
            //                         onDeleteSelected={this.onDeleteSelected}
            //                         onDeleteItem={this.onDeleteItem}
            //                         onAddClick={this.onAddClick}
            //                         onSubClick={this.onSubClick} />
            //                 </Grid.Row>
            //                 <Grid.Row>
            //                     <TotalCount
            //                         itemCount={cartStore._itemCount}
            //                         totalPrice={cartStore._totalPrice}/>
            //                 </Grid.Row>
            //             </>
            //             : <Grid.Row>
            //                 <EmptyCart />
            //             </Grid.Row>
            //         }
            //     </Grid>
            // </div>
        );
    }
}

export default CartContainer;