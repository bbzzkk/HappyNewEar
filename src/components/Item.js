import React, { Component } from 'react';

import { Link } from "react-router-dom";

import { PreViewItemWrapper, CartIconHover } from "../styles/PreViewLayout";
import { Card, Icon, Image, Grid } from "semantic-ui-react";

class Item extends Component {
	render() {
		const { item:{id, imgUrl, name, price}, OnitemClick} = this.props;
		const categoryID = itemjson.id;

		return (
			<PreViewItemWrapper>
				<Card>
					<Link to="/detail">
						<Image
							onClick={() => OnitemClick(id, categoryID)}
							src={imgUrl}
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
								<p style={{ color: "black", fontSize: "15px" }}>
									{price}원
								</p>
							</Grid.Column>
							<Grid.Column textAlign="center">
								<CartIconHover>
									<Icon name="shopping basket" color="grey" size="large" />
									<label>담기</label>
								</CartIconHover>
							</Grid.Column>
						</Grid>
					</Card.Content>
				</Card>
			</PreViewItemWrapper>
		);
	}
}

export default Item;