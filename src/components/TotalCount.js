import React, { Component } from 'react';
import { Button, Segment, Grid } from 'semantic-ui-react';

class TotalCount extends Component {
    render() {
        const { itemCount, totalPrice } = this.props;

        return (
            <div className='TotalCount'>
                <Segment >
						<Grid columns='equal' >
							<Grid.Row>
								<Grid.Column>
									<label></label>
								</Grid.Column>
								<Grid.Column>
									<label><span>상품수 </span></label>
								</Grid.Column>
								<Grid.Column>
									<label><span>전체주문금액 </span></label>
								</Grid.Column>
								
								<Grid.Column>
									<Button basic color='grey' size='tiny'style={{float: 'right', lineHeight: '5px'}}>
										주문하기
									</Button>
								</Grid.Column>
							</Grid.Row>
						</Grid>

                        <Grid columns='equal' >
							<Grid.Row>
								<Grid.Column>
									<label>전체합계</label>
								</Grid.Column>
								<Grid.Column>
									<label><span>{itemCount} 개</span></label>
								</Grid.Column>
								<Grid.Column>
									<label><span>{totalPrice} 원</span></label>
								</Grid.Column>
								
								<Grid.Column>
									<Button basic color='grey' size='tiny'style={{float: 'right', lineHeight: '5px'}}>
										주문하기
									</Button>
								</Grid.Column>
							</Grid.Row>
						</Grid>
					</Segment>
            </div>

            // -------------------------------------------------

            
        );
    }
}

export default TotalCount;