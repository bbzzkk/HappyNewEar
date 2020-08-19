import React, { Component } from 'react';

import CartItem from './CartItem';

import { Button, Segment, Grid } from 'semantic-ui-react';

class CartList extends Component {
	render() {
		const {
			items,
			allChecked,
			onHandleAllCheck,
			onHandleCheck,
			onDeleteSelected,
			onDeleteItem,
			onAddClick,
			onSubClick 
		} = this.props; 
		
		const cartLists = items.map(item => {
				return (
					<CartItem
						id={item.id}
						item={item}
						onHandleCheck={onHandleCheck}
						onDeleteItem={onDeleteItem}
						onAddClick={onAddClick}
						onSubClick={onSubClick}
					/>
				);
		});

		return (
			<div className='CartList'> 
					<Segment size='large'>
						<Grid columns={8} >
							<Grid.Row>
								<Grid.Column width={1}>
									<input 
										type='checkbox'
										checked={allChecked}
										onClick={(e) => onHandleAllCheck(e)}
										style={{width:'20px', height:'20px'}}
									/>
								</Grid.Column>
								<Grid.Column>
									<label>전체선택</label>
								</Grid.Column>
								<Grid.Column>
									<label>종류</label>
								</Grid.Column>
								<Grid.Column>
									<label>사진</label>
								</Grid.Column>
								<Grid.Column>
									<label>상품명</label>
								</Grid.Column>
								<Grid.Column>
									<label>수량</label>
								</Grid.Column>
								<Grid.Column>
									<label>가격</label>
								</Grid.Column>
								<Grid.Column>
									<Button 
										basic color='grey' 
										size='tiny' 
										onClick={onDeleteSelected}
										style={{
												float: 'right',
												lineHeight: '5px'
										}}
									>
										선택삭제
									</Button>
								</Grid.Column>
							</Grid.Row>
						</Grid>
					</Segment>
					{cartLists}
			</div>
		);
	}
}

export default CartList;