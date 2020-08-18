import React, { Component } from 'react';
import { PreViewItemWrapper } from '../styles/PreViewLayout';
import { Card, Icon, Image, Grid  } from 'semantic-ui-react'
import { CartIconHover } from '../styles/PreViewLayout';

class PreViewListItem extends Component {
    render() {
        const { img ,name, price , id} = this.props;
        
        return (
            <PreViewItemWrapper>
                <Card>
                    <Image src={img} wrapped ui={false} />
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