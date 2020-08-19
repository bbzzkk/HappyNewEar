import React, { Component } from 'react';

import { Link } from "react-router-dom";

import { Card, Icon, Image, Grid } from "semantic-ui-react";
import ItemLayout from '../styles/ItemLayout'

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
                            <p style={{ color: 'black', fontSize: '15px'}}>{price}원</p>
                        </Grid.Column>
                            <Grid.Column className='button' textAlign='center'>
                                <Icon className='icon' name='shopping basket' color='grey' size='large'/>
                                <label>담기</label>
                        </Grid.Column>
                    </Grid>
                </Card.Content>
            </Card>
            </ItemLayout>
        );
	}
}

export default Item;