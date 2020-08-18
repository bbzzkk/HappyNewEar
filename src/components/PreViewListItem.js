import React, { Component } from 'react';
import { PreViewItemWrapper } from '../styles/PreViewLayout';
import { Card, Icon, Image, Button, Grid, Label } from 'semantic-ui-react'

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
                                <Icon name='shopping basket' color='grey' size='large'/>
                                <label>담기</label>
                            </Grid.Column>
                        </Grid>
                    </Card.Content>
                </Card>
            </PreViewItemWrapper>
        );
    }
}

export default PreViewListItem;
