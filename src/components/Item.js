import React, { Component } from 'react';

import { Link } from "react-router-dom";

import { observer, inject } from 'mobx-react';

import { Card, Icon, Image, Grid } from "semantic-ui-react";
import ItemLayout from '../styles/ItemLayout'


@inject((stores) => ({
  itemStore: stores.itemStore,
}))
@observer
class Item extends Component {
    handleAddItem() {
        this.props.cartStore.addItem();
    }

    numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

	render() {
        const { item, categoryId, categoryName,OnClickItem } = this.props;
        const { id, imageUrl, name, price } = item;

        console.log(categoryName)
        return (
            <ItemLayout>
            <Card>
            <Link to={`/${categoryName}/${id}`}>
                    <img
                        className="item-image"
                        alt="test"
                        onClick={() => OnClickItem(id, categoryId)}
                        src={imageUrl}
                    />
                </Link>
                <Card.Content>
                    <Card.Header>{name}</Card.Header>
                </Card.Content>
                <Card.Content extra textAlign='center'>
                    <Grid columns={2} divided centered>
                        <Grid.Column textAlign='center'>
                            <p style={{ color: 'black', fontSize: '15px'}}>{this.numberWithCommas(price)}원</p>
                        </Grid.Column>
                            {/* <Grid.Column className='button' textAlign='center' onClick={() => OnClickCartBtn()}> */}
                            <Grid.Column className='button' textAlign='center'>
                                {
                                    // cartBtnClicked === false
                                    //     ?
                                        <>
                                            <Icon className='icon' name='shopping basket' color='grey' size='large' />
                                            <label className="put">담기</label>
                                        </>
                                        // :
                                        // <>
                                        //     <Icon className='icon' name='shopping basket' color='blue' size='large' />
                                        //     <label className="takeout">빼기</label>
                                        // </>
                                }
                        </Grid.Column>
                    </Grid>
                </Card.Content>
            </Card>
            </ItemLayout>
        );
	}
}

export default Item;