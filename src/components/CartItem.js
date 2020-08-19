import React, { Component } from 'react';
import { Button, Item, Grid, Segment } from 'semantic-ui-react'
import { CartLayout } from '../styles/CartLayout';

class CartItem extends Component {
    render() {
        const {
            item,
            onHandleCheck,
            onDeleteItem,
            onAddClick,
            onSubClick 
        } = this.props;

        return (

          <CartLayout>
            <div className="CartItem"></div>

           
            <Grid columns='equal' >
              <Grid.Row>
								<Grid.Column width={1}>
                    <input
                        type="checkbox"
                        name={item.name}
                        checked={item.checked}
                        onClick={(e) => onHandleCheck(e)}
                        style={{width:'20px', height:'20px'}}
                    />
                    <br></br>
								</Grid.Column>

                <Grid.Column >
                   <label>{item.category}</label>
								</Grid.Column>

                <Grid.Column >
                  <img width="100px" height="100px" src={item.imageUrl} alt="test" />
								</Grid.Column>

                <Grid.Column >
                {item.name}
								</Grid.Column>

								<Grid.Column>
                  <button onClick={() => onAddClick(item.name)}>+</button>
                  {item.count}
                  <button onClick={() => onSubClick(item.name)}>-</button>
								</Grid.Column>

								<Grid.Column>
                {item.price * item.count}원
								</Grid.Column>
								<Grid.Column>
                

                <Button basic color='grey' size='tiny' 
										onClick={() => onDeleteItem(item.name)}
										style={{	float: 'right', lineHeight: '5px'}}>삭제</Button>
								</Grid.Column>
								
							</Grid.Row>
						</Grid>

          
             
          </CartLayout>
        );
    }
}

export default CartItem;