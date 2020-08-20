import React, { Component } from 'react';

import { Link, Redirect } from "react-router-dom";

import { observer, inject } from 'mobx-react';

import { Card, Icon, Grid } from "semantic-ui-react";
import ItemLayout from '../styles/ItemLayout'


@inject((stores) => ({
  itemStore: stores.itemStore,
  cartStore: stores.cartStore,
  authStore: stores.authStore
}))
@observer
class Item extends Component {
    numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    OnClickCartBtn = () => {
        if (!this.props.authStore.currentUser) {
            alert('로그인을 해주세요!')
            return
        }
        if (this.props.item.cartBtnClicked === true) {
        this.props.item.cartBtnClicked = false;
        this.props.cartStore.deleteItem(this.props.item.name);
        } else {
        const addItem = {
            ...this.props.item,
            category: this.props.categoryName,
            checked: true,
            count: 1,
        };
        delete addItem["cartBtnClicked"];
        this.props.cartStore.addItem(addItem);
        this.props.item.cartBtnClicked = true;
        }
    }

	render() {
        const { item, categoryName } = this.props;
        const { id, imageUrl, name, price } = item;

        return (
          <ItemLayout>
              <div className="card-wrapper">
                <Card>
                <Link to={`/${categoryName}/${id}`}>
                    <img
                    className="item-image"
                    alt="test"
                    src={imageUrl}
                    />
                </Link>
                <Card.Content>
                    <Card.Header>{name}</Card.Header>
                </Card.Content>
                <Card.Content extra textAlign="center">
                    <Grid columns={2} divided centered>
                    <Grid.Column textAlign="center">
                        <p style={{ color: "black", fontSize: "15px" }}>
                        {this.numberWithCommas(price)}원
                        </p>
                    </Grid.Column>
                    <Grid.Column className='button' textAlign='center' onClick={() => this.OnClickCartBtn()}>
                        {
                        item.cartBtnClicked === false
                            ?
                        <>
                            <Icon
                            className="icon"
                            name="shopping basket"
                            color="grey"
                            size="large"
                            />
                            <label className="put">담기</label>
                        </>
                        :
                        <>
                            <Icon className='icon' name='shopping basket' color='blue' size='large' />
                            <label className="takeout">빼기</label>
                        </>
                        }
                    </Grid.Column>
                    </Grid>
                </Card.Content>
                </Card>
            </div>
          </ItemLayout>
        );
	}
}

export default Item;