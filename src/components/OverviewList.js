import React, { Component } from 'react';

import Item from './Item';

class OverviewList extends Component {
	render() {
		const { items, OnClickItem } = this.props;
		return items.map((item) => (
      <Item key={item.id} item={item} OnClickItem={OnClickItem} />
    ));
	}
}

export default OverviewList;