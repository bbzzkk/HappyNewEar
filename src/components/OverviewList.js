import React, { Component } from 'react';

import Item from './Item';

class List extends Component {
	render() {
		const { items, OnItemClick } = this.props;
		return items.map((item) => (
      <Item id={item.id} item={item} OnItemClick={OnItemClick} />
    ));
	}
}

export default List;