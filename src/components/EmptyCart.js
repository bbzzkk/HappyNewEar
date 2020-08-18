import React, { Component } from 'react';
import { Header, Icon, Segment } from 'semantic-ui-react';

class EmptyCart extends Component {
    render() {
        return (
            <Segment placeholder size='big' padded='very'>
                <Header icon>
                    <Icon name='shopping basket' />
                    장바구니에 담긴 상품이 없습니다.
                </Header>
            </Segment>
        );
    }
}

export default EmptyCart;