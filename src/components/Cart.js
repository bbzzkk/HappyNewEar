import React from 'react'
import { Item,  Grid, Segment } from 'semantic-ui-react'
import { CartLayout } from '../styles/CartLayout'

const Cart = () => (
  <CartLayout>
    <Item.Group divided>
      <Item>
        <Item.Image size='tiny' src='/images/wireframe/image.png' />
        <Item.Content verticalAlign='middle'>Content A</Item.Content>
      </Item>

      <Item>
        <Item.Image size='tiny' src='/images/wireframe/image.png' />
        <Item.Content verticalAlign='middle'>Content B</Item.Content>
      </Item>

      <Item>
        <Item.Image size='tiny' src='/images/wireframe/image.png' />
        <Item.Content content='Content C' verticalAlign='middle' />
      </Item>
    </Item.Group>

    <Grid columns='equal'>
      <Grid.Column>
        <label>체크</label>
      </Grid.Column>

      <Grid.Column width={4}>
        <Segment>상품정보</Segment>
      </Grid.Column>

      <Grid.Column>
        <Segment>판매가</Segment>
      </Grid.Column>

      <Grid.Column>
        <Segment>수량</Segment>
      </Grid.Column>

      <Grid.Column>
        <Segment>배송비</Segment>
      </Grid.Column>

      <Grid.Column>
        <Segment>합계</Segment>
      </Grid.Column>

      <Grid.Column>
        <Segment>선택</Segment>
      </Grid.Column>

    </Grid>
  </CartLayout>
)

export default Cart