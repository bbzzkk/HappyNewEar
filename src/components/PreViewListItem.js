import React, { Component } from 'react';
import { PreViewItemWrapper } from '../styles/PreviewLayout';
import { Card, Icon, Image, Grid  } from 'semantic-ui-react'
import { CartIconHover } from '../styles/PreviewLayout';
import { Link } from "react-router-dom";

class PreViewListItem extends Component {
    render() {
        const { img ,name, price , id, OnitemClick, itemjson} = this.props;
        
        const categoryID = itemjson.id;

        return (
            <PreViewItemWrapper>
                <Card>
                    <Link to="/detail">
                    <Image onClick={() => OnitemClick(id, categoryID)} src= {img} wrapped ui={true}/>
                    </Link>
                    <Card.Content>
                    <Card.Header>{name}</Card.Header>
                    </Card.Content>
                    <Card.Content extra textAlign='center'>
                        <Grid columns={2} divided centered>
                            <Grid.Column textAlign='center'>
                                <p style={{ color: 'black', fontSize: '15px'}}>{price}원</p>
                            </Grid.Column>
                            <Grid.Column textAlign='center'>
                                <CartIconHover>
                                    <Icon name='shopping basket' color='grey' size='large'/>
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

export default PreViewListItem;