import React, { Component } from 'react';

import Item from './Item';

class List extends Component {
	render() {
		const { items, OnClickItem } = this.props;
		return items.map((item) => (
      <Item id={item.id} item={item} OnClickItem={OnClickItem} />
    ));
	}
}

export default List;