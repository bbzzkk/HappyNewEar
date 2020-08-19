import React, { Component } from 'react';

import { Link } from "react-router-dom";

import { PreViewItemWrapper, CartIconHover } from "../styles/PreviewLayout";
import { Card, Icon, Image, Grid } from "semantic-ui-react";
import ItemLayout from '../styles/ItemLayout'
import CustomButton from '../styles/CustomButton'

class Item extends Component {
	render() {
		const { 
			item:{id, imageUrl, name, price},
			categoryId, 
			OnClickItem
		} = this.props;

		return (
      <ItemLayout>
        <Card>
          <Link to="/detail">
            <Image
              onClick={() => OnClickItem(id, categoryId)}
              src={imageUrl}
              wrapped
              ui={true}
            />
          </Link>
          <Card.Content>
            <Card.Header>{name}</Card.Header>
          </Card.Content>
          <Card.Content extra textAlign="center">
            <Grid columns={2} divided centered>
              <Grid.Column textAlign="center">
                <p style={{ color: "black", fontSize: "15px" }}>{price}원</p>
              </Grid.Column>
              <Grid.Column textAlign="center">
                <CustomButton>
                  관심상품 담기
                  {/* <Icon name="shopping basket" color="grey" size="large" />
                  <label>담기</label> */}
                </CustomButton>
              </Grid.Column>
            </Grid>
          </Card.Content>
        </Card>
      </ItemLayout>
    );
	}
}

export default Item;