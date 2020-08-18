import React, { Component } from 'react';

import { Link } from "react-router-dom";

import Item from "./Item";

class PreviewList extends Component {
	render() {
		const { categoryItems: {id, category, items}, OnCategoryClick, OnitemClick} = this.props;
		return (
			<>
				<Link to="/list">
					<h3 onClick={() => OnCategoryClick(id)}>
						{category}
					</h3>
				</Link>
				{
					items.filter(item => item.id < 5).map(item => ( 
						<Item
							id={item.id}
							item={item}
							OnitemClick={OnitemClick}
							items={items}
						/>
					))
				}
			</>
		)
	}
}

export default PreviewList;