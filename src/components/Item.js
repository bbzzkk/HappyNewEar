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
    
    console.log(name)

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
          <Card.Content extra textAlign="center">
            <Card.Header>{name}</Card.Header>
          </Card.Content>
          <Card.Content extra textAlign="center">
            <Grid columns={1} divided centered>
              <Grid.Column textAlign="center">
                <p style={{ color: "black", fontSize: "15px" }}>{price}원</p>
              </Grid.Column>
            </Grid>
            <CustomButton>관심상품 담기</CustomButton>
          </Card.Content>
        </Card>
      </ItemLayout>
    );
	}
}

export default Item;