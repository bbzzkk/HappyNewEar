import React, { Component } from 'react';

import { Link } from "react-router-dom";

import { inject, observer } from "mobx-react";

import { Card, Icon, Image, Grid } from "semantic-ui-react";
import ItemLayout from '../styles/ItemLayout'
import CustomButton from '../styles/CustomButton'


@inject((stores) => ({
  itemStore: stores.itemStore,
}))
@observer
class Item extends Component {
  handleAddItem() {
    this.props.cartStore.addItem();
  }

  render() {
    const { item, categoryId, categoryName,OnClickItem } = this.props;
    const { id, imageUrl, name, price } = item;
    return (
      <ItemLayout>
        <Card>
          <Link to={`/${categoryName}/${id}`}>
            <Image
              // onClick={() => OnClickItem(id, categoryId)}
              src={imageUrl}
              wrapped
              ui={true}
            />
          </Link>
          <Card.Content extra textAlign="center">
            <Card.Header>{name}</Card.Header>
          </Card.Content>
          <Card.Content extra textAlign="center">
            <Grid columns={1} divided centered>
              <Grid.Column textAlign="center">
                <p style={{ color: "black", fontSize: "15px" }}>{price}원</p>
              </Grid.Column>
            </Grid>
            <CustomButton onClick={() => this.handleAddItem(item)} inverted>
              찜하기
            </CustomButton>
          </Card.Content>
        </Card>
      </ItemLayout>
    );
  }
}

export default Item;